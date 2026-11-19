import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/Header';
import { StartScreen } from './components/StartScreen';
import { GameCard } from './components/GameCard';
import { FeedbackModal } from './components/FeedbackModal';
import { ScreenImpulse } from './components/ScreenImpulse';
import { VictoryScreen } from './components/VictoryScreen';
import { GameOverScreen } from './components/GameOverScreen';
import { TerminalHUD } from './components/TerminalHUD';
import { GAME_CARDS } from './data/gameData';
import { GameState, Decision, UserHistoryItem, CardItem } from './types/game';
import { soundManager } from './utils/sound';

export const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [securityHealth, setSecurityHealth] = useState<number>(100);
  const [score, setScore] = useState<number>(0);
  const [scoreDelta, setScoreDelta] = useState<number | null>(null);
  const [impulseType, setImpulseType] = useState<'correct' | 'wrong' | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [history, setHistory] = useState<UserHistoryItem[]>([]);
  
  // Feedback state
  const [feedbackData, setFeedbackData] = useState<{
    card: CardItem;
    userDecision: Decision;
    isCorrect: boolean;
    scoreGain: number;
    securityImpact: number;
  } | null>(null);

  const currentCard = GAME_CARDS[currentIndex];

  // Start or Restart game
  const handleStartGame = () => {
    setCurrentIndex(0);
    setSecurityHealth(100);
    setScore(0);
    setScoreDelta(null);
    setImpulseType(null);
    setHistory([]);
    setFeedbackData(null);
    setGameState('playing');
  };

  // Process user decision
  const handleDecision = useCallback((decision: Decision) => {
    if (gameState !== 'playing' || !currentCard) return;

    const isCorrect = decision === currentCard.correctAction;
    let newScore = score;
    let newHealth = securityHealth;

    if (isCorrect) {
      soundManager.playSuccess();
      setImpulseType('correct');
      newScore = score + currentCard.scoreGain;
      setScore(newScore);
      setScoreDelta(currentCard.scoreGain);
    } else {
      soundManager.playError();
      setImpulseType('wrong');
      newHealth = Math.max(0, securityHealth - currentCard.securityImpact);
      setSecurityHealth(newHealth);
      setScoreDelta(null);
    }

    // Save to history audit
    const historyItem: UserHistoryItem = {
      card: currentCard,
      userDecision: decision,
      isCorrect,
      scoreDelta: isCorrect ? currentCard.scoreGain : 0,
      securityDelta: isCorrect ? 0 : -currentCard.securityImpact,
    };
    setHistory((prev) => [...prev, historyItem]);

    // Setup feedback modal
    setFeedbackData({
      card: currentCard,
      userDecision: decision,
      isCorrect,
      scoreGain: currentCard.scoreGain,
      securityImpact: currentCard.securityImpact,
    });
    setGameState('feedback');

    // Reset impulse flash after brief delay
    setTimeout(() => {
      setImpulseType(null);
    }, 450);
  }, [gameState, currentCard, score, securityHealth]);

  // Advance to next card or trigger endgame
  const handleNextCard = () => {
    if (securityHealth <= 0) {
      setGameState('gameover');
      return;
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex >= GAME_CARDS.length) {
      setGameState('victory');
    } else {
      setCurrentIndex(nextIndex);
      setFeedbackData(null);
      setGameState('playing');
    }
  };

  // Keyboard controls listener (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState === 'playing') {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handleDecision('block');
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          handleDecision('allow');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, handleDecision]);

  return (
    <div className="relative min-h-screen bg-cyber-dark text-slate-100 flex flex-col justify-between selection:bg-cyber-gold/20 selection:text-cyber-gold">
      {/* Background HUD & Ambient Grid */}
      <TerminalHUD />
      <ScreenImpulse impulseType={impulseType} />

      {/* Persistent Navigation Header */}
      <Header
        securityHealth={securityHealth}
        score={score}
        scoreDelta={scoreDelta}
        currentStage={currentCard ? currentCard.stage : 1}
        cardIndex={currentIndex}
        totalCards={GAME_CARDS.length}
        isMuted={isMuted}
        onToggleMute={() => setIsMuted(soundManager.toggleMute())}
        onResetToHome={() => setGameState('start')}
      />

      {/* Main Content Arena */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 max-w-5xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {/* 1. START SCREEN */}
          {gameState === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <StartScreen onStart={handleStartGame} />
            </motion.div>
          )}

          {/* 2. PLAYING SCREEN (Interactive Card Deck) */}
          {(gameState === 'playing' || gameState === 'feedback') && currentCard && (
            <motion.div
              key={currentCard.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full py-4"
            >
              <GameCard
                card={currentCard}
                onDecision={handleDecision}
                disabled={gameState === 'feedback'}
              />
            </motion.div>
          )}

          {/* 3. VICTORY SCREEN */}
          {gameState === 'victory' && (
            <motion.div
              key="victory"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <VictoryScreen
                score={score}
                securityHealth={securityHealth}
                history={history}
                onRestart={handleStartGame}
              />
            </motion.div>
          )}

          {/* 4. GAME OVER SCREEN */}
          {gameState === 'gameover' && (
            <motion.div
              key="gameover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <GameOverScreen score={score} onRestart={handleStartGame} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* FEEDBACK MODAL OVERLAY */}
        {gameState === 'feedback' && feedbackData && (
          <FeedbackModal
            card={feedbackData.card}
            userDecision={feedbackData.userDecision}
            isCorrect={feedbackData.isCorrect}
            scoreGain={feedbackData.scoreGain}
            securityImpact={feedbackData.securityImpact}
            onNext={handleNextCard}
          />
        )}
      </main>

      {/* Cyber Footer */}
      <footer className="relative z-10 w-full py-3 px-4 border-t border-slate-900 bg-cyber-dark/80 backdrop-blur-md text-center text-xs font-mono text-slate-500">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Akademik Litsey O'quvchilari uchun Maxsus Kiber-Ta'lim Platformasi</span>
          <span className="text-slate-600">Cyber-Detective: Raqamli Qalqon © 2026</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
