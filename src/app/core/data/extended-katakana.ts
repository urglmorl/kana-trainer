import { KanaItem } from "./kana.types";


export const EXTENDED_KATAKANA: KanaItem[] = [
  // f + small vowels / y
  { id: 'x-fa', script: 'katakana', kana: 'ファ', romaji: 'fa', categories: ['extended-katakana'] },
  { id: 'x-fi', script: 'katakana', kana: 'フィ', romaji: 'fi', categories: ['extended-katakana'] },
  { id: 'x-fe', script: 'katakana', kana: 'フェ', romaji: 'fe', categories: ['extended-katakana'] },
  { id: 'x-fo', script: 'katakana', kana: 'フォ', romaji: 'fo', categories: ['extended-katakana'] },
  { id: 'x-fyu', script: 'katakana', kana: 'フュ', romaji: 'fyu', categories: ['extended-katakana'] },
  { id: 'x-fyo', script: 'katakana', kana: 'フョ', romaji: 'fyo', categories: ['extended-katakana'] },
  { id: 'x-fya', script: 'katakana', kana: 'フャ', romaji: 'fya', categories: ['extended-katakana'] },

  // ti/di, tu/du
  { id: 'x-ti', script: 'katakana', kana: 'ティ', romaji: 'ti', categories: ['extended-katakana'] },
  { id: 'x-di', script: 'katakana', kana: 'ディ', romaji: 'di', categories: ['extended-katakana'] },
  { id: 'x-tu', script: 'katakana', kana: 'トゥ', romaji: 'tu', categories: ['extended-katakana'] },
  { id: 'x-du', script: 'katakana', kana: 'ドゥ', romaji: 'du', categories: ['extended-katakana'] },

  // che / she / je
  { id: 'x-che', script: 'katakana', kana: 'チェ', romaji: 'che', categories: ['extended-katakana'] },
  { id: 'x-she', script: 'katakana', kana: 'シェ', romaji: 'she', categories: ['extended-katakana'] },
  { id: 'x-je', script: 'katakana', kana: 'ジェ', romaji: 'je', categories: ['extended-katakana'] },

  // ts + small vowels
  { id: 'x-tsa', script: 'katakana', kana: 'ツァ', romaji: 'tsa', categories: ['extended-katakana'] },
  { id: 'x-tsi', script: 'katakana', kana: 'ツィ', romaji: 'tsi', categories: ['extended-katakana'] },
  { id: 'x-tse', script: 'katakana', kana: 'ツェ', romaji: 'tse', categories: ['extended-katakana'] },
  { id: 'x-tso', script: 'katakana', kana: 'ツォ', romaji: 'tso', categories: ['extended-katakana'] },

  // w-like
  { id: 'x-wi', script: 'katakana', kana: 'ウィ', romaji: 'wi', categories: ['extended-katakana'] },
  { id: 'x-we', script: 'katakana', kana: 'ウェ', romaji: 'we', categories: ['extended-katakana'] },
  { id: 'x-wo', script: 'katakana', kana: 'ウォ', romaji: 'wo', categories: ['extended-katakana'] }, // note: differs from ヲ

  // kw / gw
  { id: 'x-kwa', script: 'katakana', kana: 'クァ', romaji: 'kwa', categories: ['extended-katakana'] },
  { id: 'x-kwi', script: 'katakana', kana: 'クィ', romaji: 'kwi', categories: ['extended-katakana'] },
  { id: 'x-kwe', script: 'katakana', kana: 'クェ', romaji: 'kwe', categories: ['extended-katakana'] },
  { id: 'x-kwo', script: 'katakana', kana: 'クォ', romaji: 'kwo', categories: ['extended-katakana'] },

  { id: 'x-gwa', script: 'katakana', kana: 'グァ', romaji: 'gwa', categories: ['extended-katakana'] },
  { id: 'x-gwi', script: 'katakana', kana: 'グィ', romaji: 'gwi', categories: ['extended-katakana'] },
  { id: 'x-gwe', script: 'katakana', kana: 'グェ', romaji: 'gwe', categories: ['extended-katakana'] },
  { id: 'x-gwo', script: 'katakana', kana: 'グォ', romaji: 'gwo', categories: ['extended-katakana'] },

  // v
  { id: 'x-va', script: 'katakana', kana: 'ヴァ', romaji: 'va', categories: ['extended-katakana'] },
  { id: 'x-vi', script: 'katakana', kana: 'ヴィ', romaji: 'vi', categories: ['extended-katakana'] },
  { id: 'x-vu', script: 'katakana', kana: 'ヴ', romaji: 'vu', categories: ['extended-katakana'] },
  { id: 'x-ve', script: 'katakana', kana: 'ヴェ', romaji: 've', categories: ['extended-katakana'] },
  { id: 'x-vo', script: 'katakana', kana: 'ヴォ', romaji: 'vo', categories: ['extended-katakana'] },
  { id: 'x-vyu', script: 'katakana', kana: 'ヴュ', romaji: 'vyu', categories: ['extended-katakana'] },

  // less common but useful
  { id: 'x-si', script: 'katakana', kana: 'スィ', romaji: 'si', categories: ['extended-katakana'] },
  { id: 'x-zi', script: 'katakana', kana: 'ズィ', romaji: 'zi', categories: ['extended-katakana'] },

  { id: 'x-tyu', script: 'katakana', kana: 'テュ', romaji: 'tyu', categories: ['extended-katakana'] },
  { id: 'x-dyu', script: 'katakana', kana: 'デュ', romaji: 'dyu', categories: ['extended-katakana'] },
];
