import { THEMES, type Theme } from '@/themes';
import { Check, Palette } from 'lucide-react';

interface ThemePickerProps {
  onSelect: (theme: Theme) => void;
}

export function ThemePicker({ onSelect }: ThemePickerProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="px-6 pt-14 pb-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 text-white shadow-lg shadow-rose-200 mb-4">
          <Palette size={26} />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Bank Caption
        </h1>
        <p className="text-slate-500 text-sm mt-2 px-4">
          Pilih tema warna dulu. Ini jadi tampilan dasar aplikasi, bisa diganti nanti.
        </p>
      </header>

      <div className="flex-1 px-4 pb-10">
        <div className="grid grid-cols-1 gap-3 max-w-md mx-auto">
          {THEMES.map((theme) => (
            <button
              key={theme.id}
              onClick={() => onSelect(theme)}
              className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all active:scale-[0.98] text-left"
            >
              <div className="flex gap-1.5">
                {theme.swatch.map((c, i) => (
                  <span
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">{theme.name}</p>
                <p className="text-xs text-slate-500">{theme.description}</p>
              </div>
              <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-rose-50 flex items-center justify-center transition-colors">
                <Check
                  size={16}
                  className="text-slate-300 group-hover:text-rose-400 transition-colors"
                />
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
