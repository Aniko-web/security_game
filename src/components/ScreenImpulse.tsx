import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScreenImpulseProps {
  impulseType: 'correct' | 'wrong' | null;
}

export const ScreenImpulse: React.FC<ScreenImpulseProps> = ({ impulseType }) => {
  return (
    <AnimatePresence>
      {impulseType && (
        <motion.div
          key={impulseType + Date.now()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
        >
          {/* Edge glow borders */}
          <div
            className={`absolute inset-0 border-[6px] md:border-[10px] transition-colors duration-300 ${
              impulseType === 'correct'
                ? 'border-emerald-500/60 shadow-[inset_0_0_80px_rgba(16,185,129,0.35)]'
                : 'border-rose-600/70 shadow-[inset_0_0_90px_rgba(239,68,68,0.4)]'
            }`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
