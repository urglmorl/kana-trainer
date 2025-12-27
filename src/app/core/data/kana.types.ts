export type Script = 'hiragana' | 'katakana';

export type Category =
  | 'basic'
  | 'dakuten'
  | 'handakuten'
  | 'yoon'
  | 'small-vowels'
  | 'extended-katakana';

/**
 * Ряд каны — группировка по начальному согласному звуку.
 */
export type Row =
  // basic (gojūon)
  | 'vowel' | 'k' | 's' | 't' | 'n' | 'h' | 'm' | 'y' | 'r' | 'w'
  // dakuten
  | 'g' | 'z' | 'd' | 'b'
  // handakuten
  | 'p'
  // yoon
  | 'ky' | 'sh' | 'ch' | 'ny' | 'hy' | 'my' | 'ry' | 'gy' | 'j' | 'by' | 'py'
  // small vowels
  | 'small-vowel'
  // extended katakana
  | 'f' | 'ti-di' | 'che-she-je' | 'ts' | 'wi-we-wo' | 'kw' | 'gw' | 'v' | 'si-zi' | 'tyu-dyu';

export interface KanaItem {
  id: string;
  script: Script;
  kana: string;
  romaji: string; // Hepburn
  row: Row;
  categories: Category[];
}
