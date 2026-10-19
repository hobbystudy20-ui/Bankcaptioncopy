import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import type { Theme } from '@/themes';

interface AddCaptionFormProps {
  theme: Theme;
  onAdd: (data: { title: string; text: string; est: string }) => void;
}

export function AddCaptionForm({ theme, onAdd }: AddCaptionFormProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [est, setEst] = useState('');
  const c = theme.colors;

  const reset = () => {
    setTitle('');
    setText('');
    setEst('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const t = title.trim();
    const x = text.trim();
    if (!t || !x) return;
    onAdd({ title: t, text: x, est: est.trim() || 'Tidak ditentukan' });
    reset();
    setOpen(false);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className={`w-full ${c.surface} ${c.border} border-2 border-dashed rounded-2xl py-4 px-4 flex items-center justify-center gap-2 ${c.textSoft} text-sm font-medium transition-colors ${c.hoverSurface}`}
      >
        <Plus size={18} /> Tambah caption baru
      </button>
    );
  }

  const inputClass = `w-full rounded-xl ${c.bgSoft} ${c.border} border px-3 py-2.5 text-sm ${c.text} ${c.placeholderText} focus:outline-none focus:ring-2 ${c.focusRing}`;
  const canSubmit = title.trim().length > 0 && text.trim().length > 0;

  return (
    <form
      onSubmit={handleSubmit}
      className={`${c.surface} ${c.border} border rounded-2xl p-4 shadow-sm space-y-3`}
    >
      <div className="flex items-center justify-between">
        <h3 className={`font-semibold ${c.text}`}>Caption baru</h3>
        <button
          type="button"
          onClick={() => {
            reset();
            setOpen(false);
          }}
          aria-label="Tutup form"
          className={`w-8 h-8 rounded-lg ${c.accent} ${c.accentText} flex items-center justify-center`}
        >
          <X size={16} />
        </button>
      </div>

      <div>
        <label className={`block text-xs font-medium ${c.textMuted} mb-1`}>
          Judul
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="cth: Ootd kasual"
          className={inputClass}
        />
      </div>

      <div>
        <label className={`block text-xs font-medium ${c.textMuted} mb-1`}>
          Caption
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tulis caption di sini..."
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <label className={`block text-xs font-medium ${c.textMuted} mb-1`}>
          Perkiraan dipakai
        </label>
        <input
          type="text"
          value={est}
          onChange={(e) => setEst(e.target.value)}
          placeholder="cth: Foto outfit harian"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className={`w-full ${c.primary} ${c.primaryText} ${c.primaryHover} py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed`}
      >
        Simpan caption
      </button>
    </form>
  );
}
