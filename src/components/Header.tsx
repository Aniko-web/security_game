import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ShieldAlert, Award, Volume2, VolumeX, Terminal } from 'lucide-react';
import { soundManager } from '../utils/sound';

interface HeaderProps {
  securityHealth: number;
  score: number;
  scoreDelta: number | null;
  currentStage: 1 | 2 | 3;
  cardIndex: number;
  totalCards: number;
  isMuted: boolean;
  onToggleMute: () => void;
  onResetToHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  securityHealth,
  score,
  scoreDelta,
  currentStage,
  cardIndex,
  totalCards,
  isMuted,
  onToggleMute,
  onResetToHome,
}) => {
  // Determine health color
  const getHealthColor = () => {
    if (securityHealth > 65) return 'text-emerald-400 bg-emerald-500';
    if (securityHealth > 30) return 'text-amber-400 bg-amber-500';
    return 'text-rose-400 bg-rose-500';
  };

  const getHealthBorder = () => {
    if (securityHealth > 65) return 'border-emerald-500/30';
    if (securityHealth > 30) return 'border-amber-500/30';
    return 'border-rose-500/40 animate-pulse';
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-cyber-dark/85 border-b border-slate-800/80 px-4 py-3 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand & Mission Status */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            onClick={onResetToHome}
            className="flex items-center gap-3 group text-left transition-transform hover:scale-[1.02]"
            title="Bosh ekranga qaytish"
          >
            <div className="relative p-2 rounded-xl bg-slate-900 border border-amber-500/30 shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:border-amber-400/60 transition-colors">
              <Shield className="w-5 h-5 text-cyber-gold transition-transform group-hover:rotate-6" />
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold tracking-wider text-cyber-gold uppercase">
                  Cyber-Detective
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono">
                  v1.0
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-slate-100 tracking-tight flex items-center gap-1.5">
                Raqamli Qalqon
                <span className="hidden sm:inline-block text-xs font-normal text-slate-400 font-mono">
                  // Markaziy Boshqaruv
                </span>
              </h1>
            </div>
          </button>

          {/* Sound Toggle for Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => {
                soundManager.playTick();
                onToggleMute();
              }}
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-white transition-colors"
              aria-label={isMuted ? 'Ovozni yoqish' : 'Ovozni o\'chirish'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>
          </div>
        </div>

        {/* Real-time System Metrics */}
        <div className="flex items-center gap-3 sm:gap-6 w-full md:w-auto justify-between md:justify-end">
          {/* Stage tracker */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5 text-cyber-cyan" />
            <span className="text-slate-400">Bosqich:</span>
            <span className="text-cyber-cyan font-bold">{currentStage}/3</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Holat:</span>
            <span className="text-slate-200">{cardIndex + 1}/{totalCards}</span>
          </div>

          {/* System Health / Integrity Bar */}
          <div className={`flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border ${getHealthBorder()} transition-colors`}>
            {securityHealth > 30 ? (
              <Shield className={`w-4 h-4 ${getHealthColor().split(' ')[0]}`} />
            ) : (
              <ShieldAlert className="w-4 h-4 text-rose-500 animate-bounce" />
            )}
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono gap-3">
                <span className="text-slate-400 uppercase tracking-wider text-[10px]">Tizim Himoyasi</span>
                <span className={`font-bold ${getHealthColor().split(' ')[0]}`}>{securityHealth}%</span>
              </div>
              <div className="w-24 sm:w-28 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1 relative">
                <motion.div
                  className={`h-full ${getHealthColor().split(' ')[1]}`}
                  initial={{ width: '100%' }}
                  animate={{ width: `${Math.max(0, securityHealth)}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>

          {/* Scores Meter */}
          <div className="relative flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-amber-500/30">
            <Award className="w-4 h-4 text-cyber-gold" />
            <div className="font-mono">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Ball</div>
              <div className="text-sm font-bold text-cyber-gold">{score}</div>
            </div>

            {/* Score Delta Floater */}
            <AnimatePresence>
              {scoreDelta !== null && (
                <motion.span
                  key={scoreDelta + Date.now()}
                  initial={{ opacity: 0, y: 0, scale: 0.8 }}
                  animate={{ opacity: 1, y: -22, scale: 1.1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className={`absolute right-1 top-0 text-xs font-mono font-extrabold ${
                    scoreDelta > 0 ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {scoreDelta > 0 ? `+${scoreDelta}` : scoreDelta}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Sound Toggle */}
          <button
            onClick={() => {
              soundManager.playTick();
              onToggleMute();
            }}
            className="hidden md:flex p-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-500 transition-all"
            title={isMuted ? 'Ovozni yoqish' : 'Ovozni o\'chirish'}
            aria-label={isMuted ? 'Ovozni yoqish' : 'Ovozni o\'chirish'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>
      </div>
    </header>
  );
};
