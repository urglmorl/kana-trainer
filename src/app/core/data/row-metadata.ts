import type {Category, Row} from './kana.types';

/**
 * Метаданные ряда для отображения в UI.
 */
export interface RowMeta {
  /** Идентификатор ряда */
  id: Row;
  /** Ключ для перевода */
  labelKey: string;
  /** Отображаемая кана для каждого скрипта */
  displayKana: { hiragana?: string; katakana?: string };
}

/**
 * Определение рядов для каждой категории.
 * Используется для отображения в модальном окне настройки рядов.
 */
export const CATEGORY_ROWS: Record<Category, RowMeta[]> = {
  basic: [
    { id: 'vowel', labelKey: 'rows.vowel', displayKana: { hiragana: 'あ', katakana: 'ア' } },
    { id: 'k', labelKey: 'rows.k', displayKana: { hiragana: 'か', katakana: 'カ' } },
    { id: 's', labelKey: 'rows.s', displayKana: { hiragana: 'さ', katakana: 'サ' } },
    { id: 't', labelKey: 'rows.t', displayKana: { hiragana: 'た', katakana: 'タ' } },
    { id: 'n', labelKey: 'rows.n', displayKana: { hiragana: 'な', katakana: 'ナ' } },
    { id: 'h', labelKey: 'rows.h', displayKana: { hiragana: 'は', katakana: 'ハ' } },
    { id: 'm', labelKey: 'rows.m', displayKana: { hiragana: 'ま', katakana: 'マ' } },
    { id: 'y', labelKey: 'rows.y', displayKana: { hiragana: 'や', katakana: 'ヤ' } },
    { id: 'r', labelKey: 'rows.r', displayKana: { hiragana: 'ら', katakana: 'ラ' } },
    { id: 'w', labelKey: 'rows.w', displayKana: { hiragana: 'わ', katakana: 'ワ' } },
  ],
  dakuten: [
    { id: 'g', labelKey: 'rows.g', displayKana: { hiragana: 'が', katakana: 'ガ' } },
    { id: 'z', labelKey: 'rows.z', displayKana: { hiragana: 'ざ', katakana: 'ザ' } },
    { id: 'd', labelKey: 'rows.d', displayKana: { hiragana: 'だ', katakana: 'ダ' } },
    { id: 'b', labelKey: 'rows.b', displayKana: { hiragana: 'ば', katakana: 'バ' } },
  ],
  handakuten: [
    { id: 'p', labelKey: 'rows.p', displayKana: { hiragana: 'ぱ', katakana: 'パ' } },
  ],
  yoon: [
    { id: 'ky', labelKey: 'rows.ky', displayKana: { hiragana: 'きゃ', katakana: 'キャ' } },
    { id: 'sh', labelKey: 'rows.sh', displayKana: { hiragana: 'しゃ', katakana: 'シャ' } },
    { id: 'ch', labelKey: 'rows.ch', displayKana: { hiragana: 'ちゃ', katakana: 'チャ' } },
    { id: 'ny', labelKey: 'rows.ny', displayKana: { hiragana: 'にゃ', katakana: 'ニャ' } },
    { id: 'hy', labelKey: 'rows.hy', displayKana: { hiragana: 'ひゃ', katakana: 'ヒャ' } },
    { id: 'my', labelKey: 'rows.my', displayKana: { hiragana: 'みゃ', katakana: 'ミャ' } },
    { id: 'ry', labelKey: 'rows.ry', displayKana: { hiragana: 'りゃ', katakana: 'リャ' } },
    { id: 'gy', labelKey: 'rows.gy', displayKana: { hiragana: 'ぎゃ', katakana: 'ギャ' } },
    { id: 'j', labelKey: 'rows.j', displayKana: { hiragana: 'じゃ', katakana: 'ジャ' } },
    { id: 'by', labelKey: 'rows.by', displayKana: { hiragana: 'びゃ', katakana: 'ビャ' } },
    { id: 'py', labelKey: 'rows.py', displayKana: { hiragana: 'ぴゃ', katakana: 'ピャ' } },
  ],
  'small-vowels': [
    { id: 'small-vowel', labelKey: 'rows.smallVowel', displayKana: { katakana: 'ァ' } },
  ],
  'extended-katakana': [
    { id: 'f', labelKey: 'rows.f', displayKana: { katakana: 'ファ' } },
    { id: 'ti-di', labelKey: 'rows.tiDi', displayKana: { katakana: 'ティ' } },
    { id: 'che-she-je', labelKey: 'rows.cheSheJe', displayKana: { katakana: 'チェ' } },
    { id: 'ts', labelKey: 'rows.ts', displayKana: { katakana: 'ツァ' } },
    { id: 'wi-we-wo', labelKey: 'rows.wiWeWo', displayKana: { katakana: 'ウィ' } },
    { id: 'kw', labelKey: 'rows.kw', displayKana: { katakana: 'クァ' } },
    { id: 'gw', labelKey: 'rows.gw', displayKana: { katakana: 'グァ' } },
    { id: 'v', labelKey: 'rows.v', displayKana: { katakana: 'ヴァ' } },
    { id: 'si-zi', labelKey: 'rows.siZi', displayKana: { katakana: 'スィ' } },
    { id: 'tyu-dyu', labelKey: 'rows.tyuDyu', displayKana: { katakana: 'テュ' } },
  ],
};

/**
 * Получает все ряды для указанной категории.
 */
export function getRowsForCategory(category: Category): Row[] {
  return CATEGORY_ROWS[category].map((meta) => meta.id);
}

/**
 * Получает все ряды для указанных категорий.
 */
export function getRowsForCategories(categories: Category[]): Row[] {
  const rows = new Set<Row>();
  for (const category of categories) {
    for (const meta of CATEGORY_ROWS[category]) {
      rows.add(meta.id);
    }
  }
  return Array.from(rows);
}


