import { useEffect, useState } from "react";

const Toast = ({ open, onClose, message, variant = "success", duration = 4000, className = "" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => onClose?.(), duration);
    return () => clearTimeout(timer);
  }, [open, duration, onClose]);

  if (!open || !mounted) return null;

  const colors =
    variant === "success"
      ? "bg-green-500/10 border-green-500/20 text-green-400"
      : variant === "error"
      ? "bg-red-500/10 border-red-500/20 text-red-400"
      : "bg-gray-800/10 border-white/10 text-white";

  return (
    <div 
      className={`w-full ${className}`}
      style={{
        animation: "inlineSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
    >
      <style>{`
        @keyframes inlineSlideIn {
          from {
            transform: translateY(10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
      <div className={`px-5 py-3.5 rounded-xl border flex items-center gap-3 font-semibold text-sm backdrop-blur-md ${colors}`}>
        {variant === "success" ? (
          <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        )}
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
