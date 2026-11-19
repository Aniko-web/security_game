import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, RotateCcw, Terminal } from 'lucide-react';
import { soundManager } from '../utils/sound';

interface GameOverScreenProps {
  score: number;
  onRestart: () => void;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = ({ score, onRestart }) => {
  useEffect(() => {
    soundManager.playError();
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto py-10 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-panel rounded-3xl p-6 sm:p-8 border border-rose-500/50 shadow-[0_0_60px_rgba(239,68,68,0.25)] text-center space-y-6 relative overflow-hidden"
      >
        {/* Glow & Red ambient */}
        <div className="absolute inset-0 bg-rose-950/20 pointer-events-none" />

        {/* Breach Alert Header */}
        <div className="space-y-3 relative z-10">
          <div className="inline-flex p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-500 animate-pulse">
            <ShieldAlert className="w-12 h-12" />
          </div>

          <div className="inline-block px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 font-mono text-xs font-bold tracking-widest uppercase">
            XAVFSIZLIK BUTUNLIGI 0% // BREACH DETECTED
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tizim Himoyasi Buzildi!
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-md mx-auto">
            Qator zaif qarorlar oqibatida xakerlar tizimga kirishga muvaffaq bo'ldi va server xavfsizlik nazorati yo'qotildi.
          </p>
        </div>

        {/* Score Card */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center font-mono relative z-10">
          <div className="text-xs text-slate-400 uppercase">To'plangan Ball</div>
          <div className="text-3xl font-extrabold text-cyber-gold mt-1">{score}</div>
        </div>

        {/* Lessons to Remember */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-rose-500/20 text-left text-xs font-mono text-slate-300 space-y-2 relative z-10">
          <div className="text-rose-400 font-bold flex items-center gap-1.5 uppercase">
            <Terminal className="w-3.5 h-3.5" />
            Asosiy saboqlar:
          </div>
          <ul className="list-disc list-inside space-y-1 text-slate-400 font-sans">
            <li>Tug'ilgan yil yoki ism qatnashgan parollarni darhol bloklang.</li>
            <li>Noma'lum .xyz domenidagi bonus havolalariga aslo kirmang.</li>
            <li>2FA kodi kiritilmagan har qanday sessiyani rad eting.</li>
          </ul>
        </div>

        {/* Retry Button */}
        <div className="relative z-10">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              soundManager.playTick();
              onRestart();
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-mono text-sm font-bold bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30 mx-auto"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Qaytadan Urinib Ko'rish</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
