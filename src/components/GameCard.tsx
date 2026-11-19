import React, { useState } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  PanInfo,
} from 'framer-motion';
import {
  ShieldAlert,
  ShieldCheck,
  KeyRound,
  Eye,
  EyeOff,
  Mail,
  MessageSquare,
  Wifi,
  Globe,
  AlertTriangle,
  Fingerprint,
  Clock,
  MapPin,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { CardItem, Decision } from '../types/game';
import { soundManager } from '../utils/sound';

interface GameCardProps {
  card: CardItem;
  onDecision: (decision: Decision) => void;
  disabled?: boolean;
}

export const GameCard: React.FC<GameCardProps> = ({ card, onDecision, disabled = false }) => {
  const [showPassword, setShowPassword] = useState(true);

  // Motion values for swipe gestures
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-250, 250], [-18, 18]);
  
  // Stamp Opacities
  const allowOpacity = useTransform(x, [40, 160], [0, 1]);
  const blockOpacity = useTransform(x, [-40, -160], [0, 1]);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (disabled) return;

    const threshold = 110;
    if (info.offset.x > threshold) {
      soundManager.playSwipe();
      onDecision('allow');
    } else if (info.offset.x < -threshold) {
      soundManager.playSwipe();
      onDecision('block');
    }
  };

  const handleDragStart = () => {
    soundManager.playTick();
  };

  return (
    <div className="relative w-full max-w-md mx-auto select-none touch-none">
      {/* Dynamic Background aura based on drag */}
      <motion.div
        className="absolute -inset-2 rounded-3xl blur-xl opacity-30 pointer-events-none transition-colors duration-300"
        style={{
          background: useTransform(
            x,
            [-150, 0, 150],
            [
              'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)'
            ]
          )
        }}
      />

      {/* Swipeable Main Card */}
      <motion.div
        style={{ x, rotate }}
        drag={disabled ? false : 'x'}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.8}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        animate={disabled ? { scale: 0.96, opacity: 0.85 } : { scale: 1, opacity: 1 }}
        whileHover={disabled ? {} : { scale: 1.01 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="relative z-20 w-full rounded-2xl glass-card p-5 sm:p-6 cursor-grab active:cursor-grabbing border border-slate-700/60 shadow-card-depth overflow-hidden"
      >
        {/* Subtle Tech Watermark Lines */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-2 right-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          ID: #{card.id}
        </div>

        {/* ================= STAMPS ================= */}
        {/* Allow Stamp (Swipe Right Indicator) */}
        <motion.div
          style={{ opacity: allowOpacity }}
          className="absolute top-8 left-8 z-30 pointer-events-none transform -rotate-12 border-2 border-emerald-400 bg-emerald-950/90 text-emerald-300 px-4 py-1.5 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.5)] flex items-center gap-2 font-mono font-bold text-sm tracking-wider uppercase"
        >
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          RUXSAT BERISH
        </motion.div>

        {/* Block Stamp (Swipe Left Indicator) */}
        <motion.div
          style={{ opacity: blockOpacity }}
          className="absolute top-8 right-8 z-30 pointer-events-none transform rotate-12 border-2 border-rose-500 bg-rose-950/90 text-rose-300 px-4 py-1.5 rounded-lg shadow-[0_0_20px_rgba(239,68,68,0.5)] flex items-center gap-2 font-mono font-bold text-sm tracking-wider uppercase"
        >
          <ShieldAlert className="w-5 h-5 text-rose-400" />
          BLOKLASH
        </motion.div>

        {/* Header Tag */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyber-gold animate-pulse" />
            <span className="text-xs font-mono font-medium text-cyber-gold uppercase tracking-wider">
              {card.categoryLabel}
            </span>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            {card.stageTitle.split(':')[0]}
          </span>
        </div>

        {/* Card Subject Title */}
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
            {card.title}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5 font-sans">
            {card.subtitle}
          </p>
        </div>

        {/* Dynamic Card Content depending on Category */}
        <div className="space-y-3.5 text-sm">
          {/* 1. PASSWORD STAGE */}
          {card.category === 'password' && card.profileData && (
            <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-4 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
                  <div className="text-slate-500 text-[10px]">LAVOZIM:</div>
                  <div className="text-slate-200 font-semibold truncate">{card.profileData.role}</div>
                </div>
                <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
                  <div className="text-slate-500 text-[10px]">TUG'ILGAN YIL:</div>
                  <div className="text-slate-200 font-semibold">{card.profileData.birthYear}</div>
                </div>
              </div>

              {/* Password Display Box */}
              <div className="p-3 rounded-lg bg-cyber-dark border border-amber-500/25 relative">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <KeyRound className="w-3.5 h-3.5 text-cyber-gold" />
                    Kiritilgan Parol:
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowPassword(!showPassword);
                      soundManager.playTick();
                    }}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="font-mono text-base font-bold tracking-wider text-amber-200 break-all select-text">
                  {showPassword ? card.profileData.submittedPassword : '••••••••••••••••'}
                </div>
              </div>

              {/* Password Metrics */}
              <div className="flex items-center justify-between text-xs font-mono pt-1 text-slate-400 border-t border-slate-800">
                <span>Uzunligi: <strong className="text-slate-200">{card.profileData.length} belgi</strong></span>
                <span>
                  Murakkablik:{' '}
                  <span
                    className={`font-semibold ${
                      card.profileData.passwordEntropy === 'Yuqori daraja'
                        ? 'text-emerald-400'
                        : card.profileData.passwordEntropy === 'O\'rtacha'
                        ? 'text-amber-400'
                        : 'text-rose-400'
                    }`}
                  >
                    {card.profileData.passwordEntropy}
                  </span>
                </span>
              </div>
            </div>
          )}

          {/* 2. PHISHING STAGE */}
          {card.category === 'phishing' && card.messageData && (
            <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800/80">
                <span className="flex items-center gap-1.5 text-slate-300">
                  {card.messageData.channel === 'SMS' && <MessageSquare className="w-3.5 h-3.5 text-cyber-cyan" />}
                  {card.messageData.channel === 'Telegram' && <MessageSquare className="w-3.5 h-3.5 text-blue-400" />}
                  {card.messageData.channel === 'E-mail' && <Mail className="w-3.5 h-3.5 text-amber-400" />}
                  {card.messageData.channel === 'Wi-Fi Portal' && <Wifi className="w-3.5 h-3.5 text-rose-400" />}
                  {card.messageData.channel === 'Bildirishnoma' && <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />}
                  {card.messageData.channel}
                </span>
                <span className="text-slate-500 text-[11px] flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {card.messageData.time}
                </span>
              </div>

              {/* Message text */}
              <div className="p-3 rounded-lg bg-cyber-dark/80 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                "{card.messageData.content}"
              </div>

              {/* URL inspection if present */}
              {card.messageData.url && (
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs font-mono">
                  <Globe className="w-4 h-4 text-cyber-gold shrink-0" />
                  <div className="truncate text-slate-300 font-medium">
                    {card.messageData.url}
                  </div>
                </div>
              )}

              {/* Warning or Status Flag */}
              {card.messageData.warningFlag && (
                <div className="flex items-start gap-2 text-xs p-2.5 rounded-lg bg-amber-950/20 border border-amber-500/20 text-amber-300/90 font-mono">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-amber-400 mt-0.5" />
                  <span>{card.messageData.warningFlag}</span>
                </div>
              )}
            </div>
          )}

          {/* 3. ACCESS & 2FA STAGE */}
          {card.category === 'access' && card.accessData && (
            <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-4 space-y-2.5">
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-slate-500 text-[10px] flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> JOYLAShUV:
                  </div>
                  <div className="text-slate-200 font-semibold truncate mt-0.5">
                    {card.accessData.location}
                  </div>
                </div>
                <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-slate-500 text-[10px] flex items-center gap-1">
                    <Clock className="w-3 h-3" /> KIRISh VAQTI:
                  </div>
                  <div className="text-slate-200 font-semibold truncate mt-0.5">
                    {card.accessData.time}
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-xs font-mono space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">IP Manzili:</span>
                  <span className="text-slate-200 font-bold">{card.accessData.ip}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Qurilma / Brauzer:</span>
                  <span className="text-slate-300 truncate max-w-[180px]">{card.accessData.device}</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Fingerprint className="w-3.5 h-3.5 text-cyber-cyan" />
                    2FA Holati:
                  </span>
                  <span
                    className={`font-bold px-1.5 py-0.5 rounded text-[11px] ${
                      card.accessData.twoFactorStatus === 'Tasdiqlangan'
                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'
                        : 'bg-rose-950/80 text-rose-300 border border-rose-500/30'
                    }`}
                  >
                    {card.accessData.twoFactorStatus}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-1">
                <span className="text-slate-400">Xavf Darajasi:</span>
                <span
                  className={`font-bold ${
                    card.accessData.threatLevel === 'Kritik'
                      ? 'text-rose-400 animate-pulse'
                      : card.accessData.threatLevel === 'O\'rtacha'
                      ? 'text-amber-400'
                      : 'text-emerald-400'
                  }`}
                >
                  {card.accessData.threatLevel}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Drag Hint Footer */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1 text-rose-400/90">
            <span>←</span> Chapga: Bloklash
          </span>
          <span className="text-slate-600 hidden sm:inline">yoki tugmalardan foydalaning</span>
          <span className="flex items-center gap-1 text-emerald-400/90">
            O'ngga: Ruxsat berish <span>→</span>
          </span>
        </div>
      </motion.div>

      {/* Manual Action Buttons (For accessible click/tap controls) */}
      <div className="flex items-center justify-center gap-4 mt-5">
        {/* Block Button */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (disabled) return;
            soundManager.playSwipe();
            onDecision('block');
          }}
          disabled={disabled}
          className="flex-1 max-w-[190px] py-3 px-4 rounded-xl font-mono text-xs sm:text-sm font-bold bg-slate-900/90 hover:bg-rose-950/50 text-rose-400 border border-rose-500/40 hover:border-rose-500 shadow-[0_0_15px_rgba(239,68,68,0.15)] flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <XCircle className="w-4 h-4 text-rose-400" />
          <span>Bloklash</span>
          <kbd className="hidden sm:inline-block px-1 py-0.5 text-[9px] bg-slate-800 text-slate-400 rounded border border-slate-700">←</kbd>
        </motion.button>

        {/* Allow Button */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (disabled) return;
            soundManager.playSwipe();
            onDecision('allow');
          }}
          disabled={disabled}
          className="flex-1 max-w-[190px] py-3 px-4 rounded-xl font-mono text-xs sm:text-sm font-bold bg-slate-900/90 hover:bg-emerald-950/50 text-emerald-400 border border-emerald-500/40 hover:border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.15)] flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Ruxsat Berish</span>
          <kbd className="hidden sm:inline-block px-1 py-0.5 text-[9px] bg-slate-800 text-slate-400 rounded border border-slate-700">→</kbd>
        </motion.button>
      </div>
    </div>
  );
};
