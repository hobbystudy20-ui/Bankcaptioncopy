export interface Theme {
  id: string;
  name: string;
  description: string;
  swatch: string[];
  colors: {
    bg: string;
    bgSoft: string;
    surface: string;
    surfaceHover: string;
    border: string;
    text: string;
    textSoft: string;
    textMuted: string;
    primary: string;
    primaryText: string;
    primaryHover: string;
    accent: string;
    accentText: string;
    headerBg: string;
    headerText: string;
    activeTab: string;
    activeTabText: string;
    tabBg: string;
    tabText: string;
    focusRing: string;
    placeholderText: string;
    hoverSurface: string;
    danger: string;
    dangerText: string;
  };
}

export const THEMES: Theme[] = [
  {
    id: 'pink-muda',
    name: 'Pink Muda',
    description: 'Lembut & manis',
    swatch: ['#FCE7F3', '#F9A8D4', '#EC4899'],
    colors: {
      bg: 'bg-pinkmuda-50',
      bgSoft: 'bg-pinkmuda-100',
      surface: 'bg-white',
      surfaceHover: 'bg-pinkmuda-50',
      border: 'border-pinkmuda-200',
      text: 'text-rose-950',
      textSoft: 'text-rose-800',
      textMuted: 'text-rose-500',
      primary: 'bg-pinkmuda-400',
      primaryText: 'text-white',
      primaryHover: 'hover:bg-pinkmuda-500',
      accent: 'bg-pinkmuda-200',
      accentText: 'text-rose-800',
      headerBg: 'bg-gradient-to-br from-pinkmuda-400 to-pinkmuda-600',
      headerText: 'text-white',
      activeTab: 'bg-pinkmuda-500',
      activeTabText: 'text-white',
      tabBg: 'bg-white',
      tabText: 'text-rose-600',
      focusRing: 'focus:ring-pinkmuda-400',
      placeholderText: 'placeholder-rose-400',
      hoverSurface: 'hover:bg-pinkmuda-50',
      danger: 'bg-rose-100',
      dangerText: 'text-rose-700',
    },
  },
  {
    id: 'pink-fanta',
    name: 'Pink Fanta',
    description: 'Berani & cerah',
    swatch: ['#FFE4E6', '#FB7185', '#E11D48'],
    colors: {
      bg: 'bg-fanta-50',
      bgSoft: 'bg-fanta-100',
      surface: 'bg-white',
      surfaceHover: 'bg-fanta-50',
      border: 'border-fanta-200',
      text: 'text-rose-950',
      textSoft: 'text-rose-800',
      textMuted: 'text-rose-500',
      primary: 'bg-fanta-500',
      primaryText: 'text-white',
      primaryHover: 'hover:bg-fanta-600',
      accent: 'bg-fanta-200',
      accentText: 'text-rose-800',
      headerBg: 'bg-gradient-to-br from-fanta-500 to-rose-700',
      headerText: 'text-white',
      activeTab: 'bg-fanta-600',
      activeTabText: 'text-white',
      tabBg: 'bg-white',
      tabText: 'text-rose-600',
      focusRing: 'focus:ring-fanta-500',
      placeholderText: 'placeholder-rose-400',
      hoverSurface: 'hover:bg-fanta-50',
      danger: 'bg-rose-100',
      dangerText: 'text-rose-700',
    },
  },
  {
    id: 'baby-pink',
    name: 'Baby Pink',
    description: 'Polos & tenang',
    swatch: ['#FFF5F7', '#FBCFE8', '#F472B6'],
    colors: {
      bg: 'bg-babypink-50',
      bgSoft: 'bg-babypink-100',
      surface: 'bg-white',
      surfaceHover: 'bg-babypink-50',
      border: 'border-babypink-200',
      text: 'text-pink-950',
      textSoft: 'text-pink-800',
      textMuted: 'text-pink-400',
      primary: 'bg-babypink-300',
      primaryText: 'text-pink-950',
      primaryHover: 'hover:bg-babypink-400',
      accent: 'bg-babypink-200',
      accentText: 'text-pink-800',
      headerBg: 'bg-gradient-to-br from-babypink-300 to-pink-400',
      headerText: 'text-pink-950',
      activeTab: 'bg-babypink-400',
      activeTabText: 'text-pink-950',
      tabBg: 'bg-white',
      tabText: 'text-pink-500',
      focusRing: 'focus:ring-babypink-300',
      placeholderText: 'placeholder-pink-400',
      hoverSurface: 'hover:bg-babypink-50',
      danger: 'bg-pink-100',
      dangerText: 'text-pink-700',
    },
  },
  {
    id: 'ocean-blue',
    name: 'Ocean Blue',
    description: 'Segar & kalem',
    swatch: ['#E0F2FE', '#38BDF8', '#0284C7'],
    colors: {
      bg: 'bg-ocean-50',
      bgSoft: 'bg-ocean-100',
      surface: 'bg-white',
      surfaceHover: 'bg-ocean-50',
      border: 'border-ocean-200',
      text: 'text-sky-950',
      textSoft: 'text-sky-800',
      textMuted: 'text-sky-500',
      primary: 'bg-ocean-500',
      primaryText: 'text-white',
      primaryHover: 'hover:bg-ocean-600',
      accent: 'bg-ocean-200',
      accentText: 'text-sky-800',
      headerBg: 'bg-gradient-to-br from-ocean-400 to-blue-700',
      headerText: 'text-white',
      activeTab: 'bg-ocean-600',
      activeTabText: 'text-white',
      tabBg: 'bg-white',
      tabText: 'text-sky-600',
      focusRing: 'focus:ring-ocean-400',
      placeholderText: 'placeholder-sky-400',
      hoverSurface: 'hover:bg-ocean-50',
      danger: 'bg-sky-100',
      dangerText: 'text-sky-700',
    },
  },
  {
    id: 'fresh-green',
    name: 'Fresh Green',
    description: 'Alami & rileks',
    swatch: ['#DCFCE7', '#4ADE80', '#16A34A'],
    colors: {
      bg: 'bg-fresh-50',
      bgSoft: 'bg-fresh-100',
      surface: 'bg-white',
      surfaceHover: 'bg-fresh-50',
      border: 'border-fresh-200',
      text: 'text-green-950',
      textSoft: 'text-green-800',
      textMuted: 'text-green-500',
      primary: 'bg-fresh-500',
      primaryText: 'text-white',
      primaryHover: 'hover:bg-fresh-600',
      accent: 'bg-fresh-200',
      accentText: 'text-green-800',
      headerBg: 'bg-gradient-to-br from-fresh-400 to-emerald-700',
      headerText: 'text-white',
      activeTab: 'bg-fresh-600',
      activeTabText: 'text-white',
      tabBg: 'bg-white',
      tabText: 'text-green-600',
      focusRing: 'focus:ring-fresh-400',
      placeholderText: 'placeholder-green-400',
      hoverSurface: 'hover:bg-fresh-50',
      danger: 'bg-green-100',
      dangerText: 'text-green-700',
    },
  },
  {
    id: 'sunset-orange',
    name: 'Sunset Orange',
    description: 'Hangat & enerjik',
    swatch: ['#FFEDD5', '#FB923C', '#EA580C'],
    colors: {
      bg: 'bg-sunset-50',
      bgSoft: 'bg-sunset-100',
      surface: 'bg-white',
      surfaceHover: 'bg-sunset-50',
      border: 'border-sunset-200',
      text: 'text-orange-950',
      textSoft: 'text-orange-800',
      textMuted: 'text-orange-500',
      primary: 'bg-sunset-500',
      primaryText: 'text-white',
      primaryHover: 'hover:bg-sunset-600',
      accent: 'bg-sunset-200',
      accentText: 'text-orange-800',
      headerBg: 'bg-gradient-to-br from-sunset-400 to-orange-700',
      headerText: 'text-white',
      activeTab: 'bg-sunset-600',
      activeTabText: 'text-white',
      tabBg: 'bg-white',
      tabText: 'text-orange-600',
      focusRing: 'focus:ring-sunset-400',
      placeholderText: 'placeholder-orange-400',
      hoverSurface: 'hover:bg-sunset-50',
      danger: 'bg-orange-100',
      dangerText: 'text-orange-700',
    },
  },
  {
    id: 'midnight',
    name: 'Midnight',
    description: 'Gelap & elegan',
    swatch: ['#1E293B', '#475569', '#94A3B8'],
    colors: {
      bg: 'bg-slate-950',
      bgSoft: 'bg-slate-900',
      surface: 'bg-slate-900',
      surfaceHover: 'bg-slate-800',
      border: 'border-slate-800',
      text: 'text-slate-100',
      textSoft: 'text-slate-300',
      textMuted: 'text-slate-500',
      primary: 'bg-slate-700',
      primaryText: 'text-white',
      primaryHover: 'hover:bg-slate-600',
      accent: 'bg-slate-800',
      accentText: 'text-slate-300',
      headerBg: 'bg-gradient-to-br from-slate-800 to-slate-950',
      headerText: 'text-slate-100',
      activeTab: 'bg-slate-700',
      activeTabText: 'text-white',
      tabBg: 'bg-slate-900',
      tabText: 'text-slate-400',
      focusRing: 'focus:ring-slate-500',
      placeholderText: 'placeholder-slate-600',
      hoverSurface: 'hover:bg-slate-800',
      danger: 'bg-slate-800',
      dangerText: 'text-rose-400',
    },
  },
];

export const DEFAULT_THEME_ID = 'pink-muda';

export function getTheme(id: string): Theme {
  return THEMES.find((t) => t.id === id) ?? THEMES[0];
}
