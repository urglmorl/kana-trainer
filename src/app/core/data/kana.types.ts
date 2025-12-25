export type Script = 'hiragana' | 'katakana';

export type Category =
  | 'basic'
  | 'dakuten'
  | 'handakuten'
  | 'yoon'
  | 'small-vowels'
  | 'extended-katakana';

export interface KanaItem {
  id: string;
  script: Script;
  kana: string;
  romaji: string; // Hepburn
  categories: Category[];
}
