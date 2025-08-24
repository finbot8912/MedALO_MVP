
export type Language = 'en' | 'ko';

export interface FaqItem {
  q: Record<Language, string>;
  a: Record<Language, string>;
}
