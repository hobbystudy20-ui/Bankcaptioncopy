import { useMemo, useState } from 'react';
import { Palette, MessageSquarePlus } from 'lucide-react';
import { PLATFORMS } from '@/captions';
import type { Theme } from '@/themes';
import { CaptionCard } from '@/CaptionCard';
import { AddCaptionForm } from '@/AddCaptionForm';
import { useCustomCaptions } from '@/useCustomCaptions';

interface CaptionBankProps {
  theme: Theme;
  onChangeTheme: () => void;
}

export function CaptionBank({ theme, onChangeTheme }: CaptionBankProps) {
  const [activeId, setActiveId] = useState(PLATFORMS[0].id);
  const c = theme.colors;
  const active = useMemo(
    () => PLATFORMS.find((p) => p.id === activeId) ?? PLATFORMS[0],
    [activeId]
  );
  const { captions, addCaption, deleteCaption } = useCustomCaptions(active.id);

  return (
    <div className={`min-h-screen ${c.bg} flex flex-col`}>
      {/* Header */}
      <header className={`${c.headerBg} ${c.headerText} px-5 pt-12 pb-5`}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Bank Caption</h1>
            <p className="text-xs opacity-80 mt-0.5">
              Simpan & salin caption tiap platform
            </p>
          </div>
          <button
            onClick={onChangeTheme}
            aria-label="Ganti tema"
            className={`w-10 h-10 rounded-xl ${c.surface} ${c.tabText} flex items-center justify-center transition-transform active:scale-90`}
          >
            <Palette size={20} />
          </button>
        </div>
      </header>

      {/* Platform tabs - horizontal scroll */}
      <nav
        className={`${c.bgSoft} ${c.border} border-b sticky top-0 z-10 overflow-x-auto no-scrollbar`}
      >
        <div className="flex gap-2 px-3 py-3 min-w-max">
          {PLATFORMS.map((p) => {
            const isActive = p.id === activeId;
            return (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all active:scale-95 ${
                  isActive
                    ? `${c.activeTab} ${c.activeTabText} shadow-sm`
                    : `${c.tabBg} ${c.tabText} ${c.border} border`
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Active platform header */}
      <div className={`${c.bgSoft} px-5 pt-5 pb-3`}>
        <h2 className={`text-lg font-bold ${c.text}`}>{active.name}</h2>
        <p className={`text-xs ${c.textMuted}`}>{active.tagline}</p>
      </div>

      {/* Caption list */}
      <main className="flex-1 px-4 pb-8 pt-2">
        <div className="space-y-3 max-w-md mx-auto">
          <AddCaptionForm theme={theme} onAdd={addCaption} />

          {captions.length === 0 ? (
            <div
              className={`${c.surface} ${c.border} border rounded-2xl py-10 px-6 text-center`}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${c.accent} ${c.accentText} mb-3`}
              >
                <MessageSquarePlus size={24} />
              </div>
              <p className={`text-sm font-medium ${c.textSoft}`}>
                Belum ada caption {active.name}
              </p>
              <p className={`text-xs ${c.textMuted} mt-1`}>
                Pakai tombol "Tambah caption baru" di atas untuk simpan caption pertama.
              </p>
            </div>
          ) : (
            captions.map((cap) => (
              <CaptionCard
                key={cap.id}
                caption={cap}
                theme={theme}
                postUrl={active.postUrl}
                platformName={active.name}
                onDelete={deleteCaption}
              />
            ))
          )}
        </div>

        {captions.length > 0 && (
          <p className={`text-center text-xs ${c.textMuted} mt-8 px-6`}>
            {captions.length} caption tersimpan untuk {active.name}.
          </p>
        )}
      </main>
    </div>
  );
}
