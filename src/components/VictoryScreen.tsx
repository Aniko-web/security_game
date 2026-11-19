import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  FileCheck
} from 'lucide-react';
import { UserHistoryItem, PlayerRank } from '../types/game';
import { PLAYER_RANKS } from '../data/gameData';
import { soundManager } from '../utils/sound';

interface VictoryScreenProps {
  score: number;
  securityHealth: number;
  history: UserHistoryItem[];
  onRestart: () => void;
}

export const VictoryScreen: React.FC<VictoryScreenProps> = ({
  score,
  securityHealth,
  history,
  onRestart,
}) => {
  const [filter, setFilter] = useState<'all' | 'errors' | 'correct'>('all');

  // Determine rank based on score
  const rank: PlayerRank =
    PLAYER_RANKS.find((r) => score >= r.minScore) || PLAYER_RANKS[PLAYER_RANKS.length - 1];

  const correctCount = history.filter((h) => h.isCorrect).length;
  const totalCount = history.length;
  const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 100;

  useEffect(() => {
    soundManager.playVictory();

    // Trigger fireworks/confetti
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#D4AF37', '#10B981', '#06B6D4', '#F59E0B'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#D4AF37', '#10B981', '#06B6D4', '#F59E0B'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  const filteredHistory = history.filter((item) => {
    if (filter === 'errors') return !item.isCorrect;
    if (filter === 'correct') return item.isCorrect;
    return true;
  });

  return (
    <div className="w-full max-w-3xl mx-auto py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-3xl p-6 sm:p-9 border border-amber-500/30 shadow-[0_0_50px_rgba(212,175,55,0.15)] relative overflow-hidden"
      >
        {/* Glow backdrop */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Ribbon */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>OPERATSIYA MUVAFFAQIShIYATLI YAKUNLANDI</span>
          </div>

          <div className="text-5xl">{rank.badge}</div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Unvoningiz:{' '}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${rank.color}`}>
              {rank.title}
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {rank.description}
          </p>
        </div>

        {/* Performance Metrics Dashboard */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="text-[11px] text-slate-400 uppercase">To'plangan Ball</div>
            <div className="text-xl sm:text-2xl font-extrabold text-cyber-gold mt-1">{score}</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="text-[11px] text-slate-400 uppercase">Tizim Butunligi</div>
            <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 mt-1">{securityHealth}%</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="text-[11px] text-slate-400 uppercase">To'g'ri Qarorlar</div>
            <div className="text-xl sm:text-2xl font-extrabold text-cyber-cyan mt-1">
              {correctCount} / {totalCount}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="text-[11px] text-slate-400 uppercase">Aniqlik Darajasi</div>
            <div className="text-xl sm:text-2xl font-extrabold text-amber-300 mt-1">{accuracy}%</div>
          </div>
        </div>

        {/* Detailed Decision Review & Audit */}
        <div className="mt-8 pt-6 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
            <h3 className="text-sm font-mono font-bold text-slate-200 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-cyber-gold" />
              Kiber-Ekspertiza va Xatolar Tahlili
            </h3>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setFilter('all')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  filter === 'all' ? 'bg-slate-800 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Hammasi ({history.length})
              </button>
              <button
                onClick={() => setFilter('errors')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  filter === 'errors' ? 'bg-rose-950/80 text-rose-300 font-bold border border-rose-500/30' : 'text-slate-400 hover:text-white'
                }`}
              >
                Xatolar ({history.filter((h) => !h.isCorrect).length})
              </button>
              <button
                onClick={() => setFilter('correct')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  filter === 'correct' ? 'bg-emerald-950/80 text-emerald-300 font-bold border border-emerald-500/30' : 'text-slate-400 hover:text-white'
                }`}
              >
                To'g'ri ({correctCount})
              </button>
            </div>
          </div>

          {/* History Accordion List */}
          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {filteredHistory.map((item, index) => (
              <div
                key={index}
                className={`p-3.5 rounded-xl border text-xs font-sans transition-all ${
                  item.isCorrect
                    ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/30'
                    : 'bg-rose-950/20 border-rose-500/30 hover:border-rose-500/50'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    {item.isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="font-bold text-slate-200">
                        {item.card.title}{' '}
                        <span className="text-[10px] font-mono text-slate-500 ml-1">
                          ({item.card.categoryLabel})
                        </span>
                      </div>
                      <p className="text-slate-400 mt-1 text-[11px] leading-relaxed">
                        {item.isCorrect ? item.card.whyCorrect : item.card.whyWrong}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0 font-mono">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        item.userDecision === 'allow'
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                          : 'bg-rose-950 text-rose-300 border border-rose-500/30'
                      }`}
                    >
                      {item.userDecision === 'allow' ? 'Ruxsat berildi' : 'Bloklandi'}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {filteredHistory.length === 0 && (
              <div className="text-center py-8 text-slate-500 font-mono text-xs">
                Ushbu filtr bo'yicha ma'lumot topilmadi.
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              soundManager.playTick();
              onRestart();
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-mono text-sm font-bold bg-gradient-to-r from-amber-400 via-cyber-gold to-yellow-500 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Qayta O'ynash</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
