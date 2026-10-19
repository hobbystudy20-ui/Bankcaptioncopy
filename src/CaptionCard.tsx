import { useState } from 'react';
import { Check, Clock, Copy, ExternalLink, Trash2 } from 'lucide-react';
import type { Theme } from '@/themes';
import type { Caption } from '@/captions';

interface CaptionCardProps {
  caption: Caption;
  theme: Theme;
  postUrl: string;
  platformName: string;
  onDelete: (id: string) => void;
}

export function CaptionCard({
  caption,
  theme,
  postUrl,
  platformName,
  onDelete,
}: CaptionCardProps) {
  const [copied, setCopied] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const c = theme.colors;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(caption.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = caption.text;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      } catch {
        /* ignore */
      }
      document.body.removeChild(ta);
    }
  };

  const handleOpen = () => {
    window.open(postUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDelete = () => {
    if (confirmDelete) {
      onDelete(caption.id);
    } else {
      setConfirmDelete(true);
      setTimeout(() => setConfirmDelete(false), 2400);
    }
  };

  return (
    <div
      className={`${c.surface} ${c.border} border rounded-2xl p-4 shadow-sm transition-shadow hover:shadow-md`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className={`font-semibold ${c.text} leading-snug`}>{caption.title}</h3>
        <button
          onClick={handleDelete}
          aria-label={confirmDelete ? 'Konfirmasi hapus' : 'Hapus caption'}
          className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all active:scale-90 ${
            confirmDelete
              ? `${c.danger} ${c.dangerText}`
              : `${c.accent} ${c.accentText} ${c.hoverSurface}`
          }`}
        >
          <Trash2 size={15} />
        </button>
      </div>

      <p className={`${c.textSoft} text-sm whitespace-pre-line leading-relaxed`}>
        {caption.text}
      </p>

      <div
        className={`mt-3 pt-3 border-t ${c.border} flex items-center gap-1.5`}
      >
        <Clock size={13} className={c.textMuted} />
        <span className={`text-xs ${c.textMuted}`}>
          Perkiraan dipakai: {caption.est}
        </span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <button
          onClick={handleCopy}
          className={`inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition-all active:scale-95 ${c.primary} ${c.primaryText} ${c.primaryHover}`}
        >
          {copied ? (
            <>
              <Check size={14} /> Tersalin
            </>
          ) : (
            <>
              <Copy size={14} /> Salin
            </>
          )}
        </button>
        <button
          onClick={handleOpen}
          className={`inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition-all active:scale-95 ${c.accent} ${c.accentText} ${c.hoverSurface}`}
        >
          <ExternalLink size={14} /> Buka {platformName}
        </button>
      </div>

      {confirmDelete && (
        <p className={`mt-2 text-xs ${c.dangerText} text-center`}>
          Ketuk lagi untuk hapus
        </p>
      )}
    </div>
  );
}
