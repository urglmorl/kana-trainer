import type {KanaItem} from './kana.types';
import {HIRAGANA} from './hiragana';
import {KATAKANA} from './katakana';
import {EXTENDED_KATAKANA} from './extended-katakana';

export const ALL_KANA: KanaItem[] = [
  ...HIRAGANA,
  ...KATAKANA,
  ...EXTENDED_KATAKANA,
];

export { HIRAGANA, KATAKANA, EXTENDED_KATAKANA };
export type { KanaItem } from './kana.types';
