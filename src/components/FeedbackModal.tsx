import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lightbulb,
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import { CardItem, Decision } from '../types/game';
import { soundManager } from '../utils/sound';

interface FeedbackModalProps {
  card: CardItem;
  userDecision: Decision;
  isCorrect: boolean;
  scoreGain: number;
  securityImpact: number;
  onNext: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  card,
  userDecision,
  isCorrect,
  scoreGain,
  securityImpact,
  onNext,
}) => {
  // Listen for Enter or Space to quickly advance
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        soundManager.playTick();
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-dark/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className={`w-full max-w-lg rounded-2xl p-6 sm:p-7 glass-panel shadow-2xl border ${
            isCorrect
              ? 'border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.2)]'
              : 'border-rose-500/40 shadow-[0_0_50px_rgba(239,68,68,0.2)]'
          }`}
        >
          {/* Status Header Badge */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div
                className={`p-2.5 rounded-xl border ${
                  isCorrect
                    ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-400'
                    : 'bg-rose-950/60 border-rose-500/50 text-rose-400'
                }`}
              >
                {isCorrect ? <ShieldCheck className="w-6 h-6" /> : <ShieldAlert className="w-6 h-6" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded ${
                      isCorrect
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-rose-500/20 text-rose-300'
                    }`}
                  >
                    {isCorrect ? 'Muvaffaqiyatli Qaror!' : 'Kiber-Xavfsizlik Xatosi!'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mt-0.5">
                  {isCorrect ? 'Tahdid Bartaraf Etildi' : 'Tizim Zaifligi Yuzaga Keldi'}
                </h3>
              </div>
            </div>

            {/* Impact Metric */}
            <div className="text-right font-mono">
              {isCorrect ? (
                <div className="flex items-center gap-1 text-emerald-400 text-sm font-bold">
                  <TrendingUp className="w-4 h-4" />
                  <span>+{scoreGain} Ball</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-rose-400 text-sm font-bold">
                  <TrendingDown className="w-4 h-4" />
                  <span>-{securityImpact}% Himoya</span>
                </div>
              )}
            </div>
          </div>

          {/* Explanation Body */}
          <div className="my-5 space-y-4">
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Kiber-Tahlilchi Xulosasi:</span>
                <span className="text-[11px] text-slate-400">
                  Sizning harakatingiz:{' '}
                  <strong className={userDecision === 'allow' ? 'text-emerald-400' : 'text-rose-400'}>
                    {userDecision === 'allow' ? 'Ruxsat Berish' : 'Bloklash'}
                  </strong>
                </span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-sans">
                {isCorrect ? card.whyCorrect : card.whyWrong}
              </p>
            </div>

            {/* Educational Golden Tip */}
            <div className="rounded-xl bg-amber-950/20 border border-amber-500/30 p-3.5 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-cyber-gold shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono font-bold text-cyber-gold uppercase tracking-wider">
                  Kiber-Qoida / Tavsiya:
                </div>
                <p className="text-xs sm:text-sm text-amber-200/90 mt-0.5 leading-normal">
                  {card.educationalTip}
                </p>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              soundManager.playTick();
              onNext();
            }}
            className={`w-full py-3.5 px-6 rounded-xl font-mono text-sm font-bold text-slate-950 flex items-center justify-center gap-2 shadow-lg transition-all ${
              isCorrect
                ? 'bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-emerald-500/25'
                : 'bg-gradient-to-r from-amber-400 to-cyber-gold hover:from-amber-300 hover:to-yellow-500 shadow-amber-500/25'
            }`}
          >
            <span>Keyingi Vaziyatga O'tish</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-[10px] opacity-75 font-normal ml-2 hidden sm:inline">(Enter yoki Bo'sh joy)</span>
          </motion.button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
