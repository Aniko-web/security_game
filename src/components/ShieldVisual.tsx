import React from 'react';
import { motion } from 'framer-motion';

interface ShieldVisualProps {
  size?: number;
  status?: 'normal' | 'secure' | 'danger';
}

export const ShieldVisual: React.FC<ShieldVisualProps> = ({ size = 160, status = 'normal' }) => {
  const getGlowColor = () => {
    switch (status) {
      case 'secure':
        return '#10B981';
      case 'danger':
        return '#EF4444';
      default:
        return '#D4AF37';
    }
  };

  const glow = getGlowColor();

  return (
    <div className="relative flex items-center justify-center select-none" style={{ width: size, height: size }}>
      {/* Outer Rotating Cyber Tech Ring */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke={glow}
          strokeWidth="1.5"
          strokeDasharray="6 8 20 8"
        />
        <circle
          cx="100"
          cy="100"
          r="82"
          fill="none"
          stroke="#475569"
          strokeWidth="1"
          strokeDasharray="2 12"
        />
      </motion.svg>

      {/* Inner Counter-Rotating Ring */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx="100"
          cy="100"
          r="72"
          fill="none"
          stroke={glow}
          strokeWidth="1"
          strokeDasharray="16 24"
        />
      </motion.svg>

      {/* Ambient Pulsing Glow Backdrop */}
      <motion.div
        className="absolute w-3/4 h-3/4 rounded-full blur-2xl opacity-25 pointer-events-none"
        style={{ backgroundColor: glow }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Central Shield Graphic */}
      <motion.svg
        width={size * 0.72}
        height={size * 0.72}
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Shield Outer Shell */}
        <path
          d="M50 4L88 18V56C88 84 50 114 50 114C50 114 12 84 12 56V18L50 4Z"
          fill="url(#shield_base_grad)"
          stroke={glow}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Shield Inner Inset */}
        <path
          d="M50 14L80 25V54C80 77 50 102 50 102C50 102 20 77 20 54V25L50 14Z"
          fill="url(#shield_inner_grad)"
          stroke="#334155"
          strokeWidth="1.2"
          opacity="0.9"
        />

        {/* Core Cyber Lock / Core Emblem */}
        <motion.path
          d="M50 34C43.37 34 38 39.37 38 46V52H35C33.34 52 32 53.34 32 55V73C32 74.66 33.34 76 35 76H65C66.66 76 68 74.66 68 73V55C68 53.34 66.66 52 65 52H62V46C62 39.37 56.63 34 50 34ZM50 39C53.86 39 57 42.14 57 46V52H43V46C43 42.14 46.14 39 50 39ZM50 60C51.66 60 53 61.34 53 63C53 64.66 51.66 66 50 66C48.34 66 47 64.66 47 63C47 61.34 48.34 60 50 60Z"
          fill={glow}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Circuit Tracks on Shield */}
        <path d="M50 76V92" stroke={glow} strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="94" r="2.5" fill={glow} />
        <path d="M28 38L38 44" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M72 38L62 44" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />

        <defs>
          <linearGradient id="shield_base_grad" x1="12" y1="4" x2="88" y2="114" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B132B" />
            <stop offset="0.6" stopColor="#070B14" />
            <stop offset="1" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="shield_inner_grad" x1="20" y1="14" x2="80" y2="102" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E293B" stopOpacity="0.4" />
            <stop offset="1" stopColor="#0A0F1D" stopOpacity="0.95" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};
