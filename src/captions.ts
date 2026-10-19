export interface Caption {
  id: string;
  title: string;
  text: string;
  est: string;
}

export interface Platform {
  id: string;
  name: string;
  tagline: string;
  /** Deep link / web URL to open the platform's post composer. */
  postUrl: string;
}

export const PLATFORMS: Platform[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    tagline: 'Feed & Reels',
    postUrl: 'https://www.instagram.com/',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    tagline: 'Video pendek',
    postUrl: 'https://www.tiktok.com/upload',
  },
  {
    id: 'threads',
    name: 'Threads',
    tagline: 'Obrolan teks',
    postUrl: 'https://www.threads.net/',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    tagline: 'Tweet ringkas',
    postUrl: 'https://x.com/compose/post',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    tagline: 'Posting publik',
    postUrl: 'https://www.facebook.com/',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    tagline: 'Status & chat',
    postUrl: 'https://wa.me/',
  },
];

export function getPlatform(id: string): Platform {
  return PLATFORMS.find((p) => p.id === id) ?? PLATFORMS[0];
}
