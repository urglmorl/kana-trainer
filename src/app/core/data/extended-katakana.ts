import type {KanaItem} from './kana.types';

export const EXTENDED_KATAKANA: KanaItem[] = [
  // f row - f + small vowels / y
  { id: 'x-fa', script: 'katakana', kana: 'ファ', romaji: 'fa', row: 'f', categories: ['extended-katakana'] },
  { id: 'x-fi', script: 'katakana', kana: 'フィ', romaji: 'fi', row: 'f', categories: ['extended-katakana'] },
  { id: 'x-fe', script: 'katakana', kana: 'フェ', romaji: 'fe', row: 'f', categories: ['extended-katakana'] },
  { id: 'x-fo', script: 'katakana', kana: 'フォ', romaji: 'fo', row: 'f', categories: ['extended-katakana'] },
  { id: 'x-fyu', script: 'katakana', kana: 'フュ', romaji: 'fyu', row: 'f', categories: ['extended-katakana'] },
  { id: 'x-fyo', script: 'katakana', kana: 'フョ', romaji: 'fyo', row: 'f', categories: ['extended-katakana'] },
  { id: 'x-fya', script: 'katakana', kana: 'フャ', romaji: 'fya', row: 'f', categories: ['extended-katakana'] },

  // ti-di row - ti/di, tu/du
  { id: 'x-ti', script: 'katakana', kana: 'ティ', romaji: 'ti', row: 'ti-di', categories: ['extended-katakana'] },
  { id: 'x-di', script: 'katakana', kana: 'ディ', romaji: 'di', row: 'ti-di', categories: ['extended-katakana'] },
  { id: 'x-tu', script: 'katakana', kana: 'トゥ', romaji: 'tu', row: 'ti-di', categories: ['extended-katakana'] },
  { id: 'x-du', script: 'katakana', kana: 'ドゥ', romaji: 'du', row: 'ti-di', categories: ['extended-katakana'] },

  // che-she-je row
  { id: 'x-che', script: 'katakana', kana: 'チェ', romaji: 'che', row: 'che-she-je', categories: ['extended-katakana'] },
  { id: 'x-she', script: 'katakana', kana: 'シェ', romaji: 'she', row: 'che-she-je', categories: ['extended-katakana'] },
  { id: 'x-je', script: 'katakana', kana: 'ジェ', romaji: 'je', row: 'che-she-je', categories: ['extended-katakana'] },

  // ts row - ts + small vowels
  { id: 'x-tsa', script: 'katakana', kana: 'ツァ', romaji: 'tsa', row: 'ts', categories: ['extended-katakana'] },
  { id: 'x-tsi', script: 'katakana', kana: 'ツィ', romaji: 'tsi', row: 'ts', categories: ['extended-katakana'] },
  { id: 'x-tse', script: 'katakana', kana: 'ツェ', romaji: 'tse', row: 'ts', categories: ['extended-katakana'] },
  { id: 'x-tso', script: 'katakana', kana: 'ツォ', romaji: 'tso', row: 'ts', categories: ['extended-katakana'] },

  // wi-we-wo row - w-like
  { id: 'x-wi', script: 'katakana', kana: 'ウィ', romaji: 'wi', row: 'wi-we-wo', categories: ['extended-katakana'] },
  { id: 'x-we', script: 'katakana', kana: 'ウェ', romaji: 'we', row: 'wi-we-wo', categories: ['extended-katakana'] },
  { id: 'x-wo', script: 'katakana', kana: 'ウォ', romaji: 'wo', row: 'wi-we-wo', categories: ['extended-katakana'] }, // note: differs from ヲ

  // kw row
  { id: 'x-kwa', script: 'katakana', kana: 'クァ', romaji: 'kwa', row: 'kw', categories: ['extended-katakana'] },
  { id: 'x-kwi', script: 'katakana', kana: 'クィ', romaji: 'kwi', row: 'kw', categories: ['extended-katakana'] },
  { id: 'x-kwe', script: 'katakana', kana: 'クェ', romaji: 'kwe', row: 'kw', categories: ['extended-katakana'] },
  { id: 'x-kwo', script: 'katakana', kana: 'クォ', romaji: 'kwo', row: 'kw', categories: ['extended-katakana'] },

  // gw row
  { id: 'x-gwa', script: 'katakana', kana: 'グァ', romaji: 'gwa', row: 'gw', categories: ['extended-katakana'] },
  { id: 'x-gwi', script: 'katakana', kana: 'グィ', romaji: 'gwi', row: 'gw', categories: ['extended-katakana'] },
  { id: 'x-gwe', script: 'katakana', kana: 'グェ', romaji: 'gwe', row: 'gw', categories: ['extended-katakana'] },
  { id: 'x-gwo', script: 'katakana', kana: 'グォ', romaji: 'gwo', row: 'gw', categories: ['extended-katakana'] },

  // v row
  { id: 'x-va', script: 'katakana', kana: 'ヴァ', romaji: 'va', row: 'v', categories: ['extended-katakana'] },
  { id: 'x-vi', script: 'katakana', kana: 'ヴィ', romaji: 'vi', row: 'v', categories: ['extended-katakana'] },
  { id: 'x-vu', script: 'katakana', kana: 'ヴ', romaji: 'vu', row: 'v', categories: ['extended-katakana'] },
  { id: 'x-ve', script: 'katakana', kana: 'ヴェ', romaji: 've', row: 'v', categories: ['extended-katakana'] },
  { id: 'x-vo', script: 'katakana', kana: 'ヴォ', romaji: 'vo', row: 'v', categories: ['extended-katakana'] },
  { id: 'x-vyu', script: 'katakana', kana: 'ヴュ', romaji: 'vyu', row: 'v', categories: ['extended-katakana'] },

  // si-zi row - less common but useful
  { id: 'x-si', script: 'katakana', kana: 'スィ', romaji: 'si', row: 'si-zi', categories: ['extended-katakana'] },
  { id: 'x-zi', script: 'katakana', kana: 'ズィ', romaji: 'zi', row: 'si-zi', categories: ['extended-katakana'] },

  // tyu-dyu row
  { id: 'x-tyu', script: 'katakana', kana: 'テュ', romaji: 'tyu', row: 'tyu-dyu', categories: ['extended-katakana'] },
  { id: 'x-dyu', script: 'katakana', kana: 'デュ', romaji: 'dyu', row: 'tyu-dyu', categories: ['extended-katakana'] },
];
