import React from 'react';

export const TerminalHUD: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-70" />

      {/* Cyber Corner Decals */}
      <div className="absolute top-2 left-4 text-[9px] font-mono text-slate-700/60 hidden lg:block">
        <div>[SYS_SEC_PROTOCOL: v4.2]</div>
        <div>[SSL_TLS: ENCRYPTED]</div>
        <div>[FIREWALL_STATE: ENFORCED]</div>
      </div>

      <div className="absolute top-2 right-4 text-[9px] font-mono text-slate-700/60 text-right hidden lg:block">
        <div>[LATENCY: 12ms]</div>
        <div>[LOC: TASHKENT / UZ]</div>
        <div>[AI_DEFENSE: ACTIVE]</div>
      </div>

      <div className="absolute bottom-2 left-4 text-[9px] font-mono text-slate-700/50 hidden lg:block">
        <div>NODE_ADDR: 0x7F000001 // SECURE_SOCKET</div>
      </div>

      <div className="absolute bottom-2 right-4 text-[9px] font-mono text-slate-700/50 text-right hidden lg:block">
        <div>ENCRYPTION: AES-256-GCM</div>
      </div>
    </div>
  );
};
