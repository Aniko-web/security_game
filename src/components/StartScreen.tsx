import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  KeyRound,
  Fish,
  Lock,
  ArrowRight,
  SlidersHorizontal
} from 'lucide-react';
import { ShieldVisual } from './ShieldVisual';
import { soundManager } from '../utils/sound';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-4xl mx-auto py-6 sm:py-10 px-4">
      {/* Hero Header with Digital Shield */}
      <div className="flex flex-col items-center text-center space-y-5">
        {/* Animated Digital Shield */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <ShieldVisual size={170} status="normal" />
        </motion.div>

        {/* Title & Tagline */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-cyber-gold animate-ping" />
            <span>KIBER-XAVFSIZLIK TAHLIL MARKAZI</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Cyber-Detective:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
              Raqamli Qalqon
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Shaxsiy ma'lumotlarni himoya qilish va kiber-tahdidlarni bartaraf etish bo'yicha interaktiv simulyator.
            Tizimga kelayotgan har bir so'rovni tahlil qiling va to'g'ri qaror qabul qiling!
          </p>
        </div>

        {/* Call to Action Button */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="pt-2"
        >
          <button
            onClick={() => {
              soundManager.playSuccess();
              onStart();
            }}
            className="group relative px-8 py-4 rounded-xl font-mono text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-cyber-gold to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-[0_0_35px_rgba(212,175,55,0.35)] flex items-center gap-3 transition-all cursor-pointer"
          >
            <Shield className="w-5 h-5 text-slate-950 transition-transform group-hover:rotate-12" />
            <span>Missiyani Boshlash</span>
            <ArrowRight className="w-5 h-5 text-slate-950 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* 3 Mission Stages Cards Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Stage 1 */}
        <div className="glass-panel rounded-2xl p-5 border border-slate-800 hover:border-amber-500/30 transition-colors space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-cyber-gold">
            <KeyRound className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-cyber-gold font-semibold uppercase">1-Bosqich</div>
            <h3 className="text-base font-bold text-slate-100">Parollar Filtratsiyasi</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Shaxsiy ism, tug'ilgan yil va sodda ketma-ketliklardan iborat zaif parollarni bloklang. Murakkab va xavfsiz kombinatsiyalarga ruxsat bering.
          </p>
        </div>

        {/* Stage 2 */}
        <div className="glass-panel rounded-2xl p-5 border border-slate-800 hover:border-emerald-500/30 transition-colors space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Fish className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-emerald-400 font-semibold uppercase">2-Bosqich</div>
            <h3 className="text-base font-bold text-slate-100">Fishing va Ma'lumotlar Ovi</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Soxta bonus xabarlari, shubhali domenlar (.xyz), Telegram botlar va ochiq kafe Wi-Fi tuzoqlarini aniqlab, fosh qiling.
          </p>
        </div>

        {/* Stage 3 */}
        <div className="glass-panel rounded-2xl p-5 border border-slate-800 hover:border-cyan-500/30 transition-colors space-y-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyber-cyan">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-cyber-cyan font-semibold uppercase">3-Bosqich</div>
            <h3 className="text-base font-bold text-slate-100">2FA va Kirish Nazorati</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Anonim TOR tugunlari, tunda begona davlatdan urinishlar va 2FA siz kirishlarni to'xtatib, ishonchli xodimlarni o'tkazing.
          </p>
        </div>
      </div>

      {/* Gameplay Rules & Controls */}
      <div className="mt-8 rounded-2xl glass-panel p-5 sm:p-6 border border-slate-800/80">
        <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-cyber-gold" />
          Qanday O'ynaladi? (Mexanika)
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <span className="p-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold font-mono">
              ←
            </span>
            <div>
              <strong className="text-rose-300 block font-semibold mb-0.5">Chapga Surish / Bloklash:</strong>
              <span className="text-slate-400">Tahdidli yoki shubhali so'rovlarni bloklash uchun kartochkani chapga torting yoki qizil tugmani bosing.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold font-mono">
              →
            </span>
            <div>
              <strong className="text-emerald-300 block font-semibold mb-0.5">O'ngga Surish / Ruxsat Berish:</strong>
              <span className="text-slate-400">Xavfsiz va qonuniy so'rovlarni tasdiqlash uchun kartochkani o'ngga torting yoki yashil tugmani bosing.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <span className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold font-mono">
              ⚡
            </span>
            <div>
              <strong className="text-amber-300 block font-semibold mb-0.5">Tizim Himoyasi:</strong>
              <span className="text-slate-400">Boshida sizda 100% himoya bor. Har bir xato uni kamaytiradi. Foiz 0% bo'lsa xakerlar g'alaba qozonadi!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
