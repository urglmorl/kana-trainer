import type {KanaItem} from './kana.types';

export const KATAKANA: KanaItem[] = [
  // basic
  { id: 'k-a', script: 'katakana', kana: 'ア', romaji: 'a', categories: ['basic'] },
  { id: 'k-i', script: 'katakana', kana: 'イ', romaji: 'i', categories: ['basic'] },
  { id: 'k-u', script: 'katakana', kana: 'ウ', romaji: 'u', categories: ['basic'] },
  { id: 'k-e', script: 'katakana', kana: 'エ', romaji: 'e', categories: ['basic'] },
  { id: 'k-o', script: 'katakana', kana: 'オ', romaji: 'o', categories: ['basic'] },

  { id: 'k-ka', script: 'katakana', kana: 'カ', romaji: 'ka', categories: ['basic'] },
  { id: 'k-ki', script: 'katakana', kana: 'キ', romaji: 'ki', categories: ['basic'] },
  { id: 'k-ku', script: 'katakana', kana: 'ク', romaji: 'ku', categories: ['basic'] },
  { id: 'k-ke', script: 'katakana', kana: 'ケ', romaji: 'ke', categories: ['basic'] },
  { id: 'k-ko', script: 'katakana', kana: 'コ', romaji: 'ko', categories: ['basic'] },

  { id: 'k-sa', script: 'katakana', kana: 'サ', romaji: 'sa', categories: ['basic'] },
  { id: 'k-shi', script: 'katakana', kana: 'シ', romaji: 'shi', categories: ['basic'] },
  { id: 'k-su', script: 'katakana', kana: 'ス', romaji: 'su', categories: ['basic'] },
  { id: 'k-se', script: 'katakana', kana: 'セ', romaji: 'se', categories: ['basic'] },
  { id: 'k-so', script: 'katakana', kana: 'ソ', romaji: 'so', categories: ['basic'] },

  { id: 'k-ta', script: 'katakana', kana: 'タ', romaji: 'ta', categories: ['basic'] },
  { id: 'k-chi', script: 'katakana', kana: 'チ', romaji: 'chi', categories: ['basic'] },
  { id: 'k-tsu', script: 'katakana', kana: 'ツ', romaji: 'tsu', categories: ['basic'] },
  { id: 'k-te', script: 'katakana', kana: 'テ', romaji: 'te', categories: ['basic'] },
  { id: 'k-to', script: 'katakana', kana: 'ト', romaji: 'to', categories: ['basic'] },

  { id: 'k-na', script: 'katakana', kana: 'ナ', romaji: 'na', categories: ['basic'] },
  { id: 'k-ni', script: 'katakana', kana: 'ニ', romaji: 'ni', categories: ['basic'] },
  { id: 'k-nu', script: 'katakana', kana: 'ヌ', romaji: 'nu', categories: ['basic'] },
  { id: 'k-ne', script: 'katakana', kana: 'ネ', romaji: 'ne', categories: ['basic'] },
  { id: 'k-no', script: 'katakana', kana: 'ノ', romaji: 'no', categories: ['basic'] },

  { id: 'k-ha', script: 'katakana', kana: 'ハ', romaji: 'ha', categories: ['basic'] },
  { id: 'k-hi', script: 'katakana', kana: 'ヒ', romaji: 'hi', categories: ['basic'] },
  { id: 'k-fu', script: 'katakana', kana: 'フ', romaji: 'fu', categories: ['basic'] },
  { id: 'k-he', script: 'katakana', kana: 'ヘ', romaji: 'he', categories: ['basic'] },
  { id: 'k-ho', script: 'katakana', kana: 'ホ', romaji: 'ho', categories: ['basic'] },

  { id: 'k-ma', script: 'katakana', kana: 'マ', romaji: 'ma', categories: ['basic'] },
  { id: 'k-mi', script: 'katakana', kana: 'ミ', romaji: 'mi', categories: ['basic'] },
  { id: 'k-mu', script: 'katakana', kana: 'ム', romaji: 'mu', categories: ['basic'] },
  { id: 'k-me', script: 'katakana', kana: 'メ', romaji: 'me', categories: ['basic'] },
  { id: 'k-mo', script: 'katakana', kana: 'モ', romaji: 'mo', categories: ['basic'] },

  { id: 'k-ya', script: 'katakana', kana: 'ヤ', romaji: 'ya', categories: ['basic'] },
  { id: 'k-yu', script: 'katakana', kana: 'ユ', romaji: 'yu', categories: ['basic'] },
  { id: 'k-yo', script: 'katakana', kana: 'ヨ', romaji: 'yo', categories: ['basic'] },

  { id: 'k-ra', script: 'katakana', kana: 'ラ', romaji: 'ra', categories: ['basic'] },
  { id: 'k-ri', script: 'katakana', kana: 'リ', romaji: 'ri', categories: ['basic'] },
  { id: 'k-ru', script: 'katakana', kana: 'ル', romaji: 'ru', categories: ['basic'] },
  { id: 'k-re', script: 'katakana', kana: 'レ', romaji: 're', categories: ['basic'] },
  { id: 'k-ro', script: 'katakana', kana: 'ロ', romaji: 'ro', categories: ['basic'] },

  { id: 'k-wa', script: 'katakana', kana: 'ワ', romaji: 'wa', categories: ['basic'] },
  { id: 'k-wo', script: 'katakana', kana: 'ヲ', romaji: 'wo', categories: ['basic'] },
  { id: 'k-n', script: 'katakana', kana: 'ン', romaji: 'n', categories: ['basic'] },

  // dakuten
  { id: 'k-ga', script: 'katakana', kana: 'ガ', romaji: 'ga', categories: ['dakuten'] },
  { id: 'k-gi', script: 'katakana', kana: 'ギ', romaji: 'gi', categories: ['dakuten'] },
  { id: 'k-gu', script: 'katakana', kana: 'グ', romaji: 'gu', categories: ['dakuten'] },
  { id: 'k-ge', script: 'katakana', kana: 'ゲ', romaji: 'ge', categories: ['dakuten'] },
  { id: 'k-go', script: 'katakana', kana: 'ゴ', romaji: 'go', categories: ['dakuten'] },

  { id: 'k-za', script: 'katakana', kana: 'ザ', romaji: 'za', categories: ['dakuten'] },
  { id: 'k-ji', script: 'katakana', kana: 'ジ', romaji: 'ji', categories: ['dakuten'] },
  { id: 'k-zu', script: 'katakana', kana: 'ズ', romaji: 'zu', categories: ['dakuten'] },
  { id: 'k-ze', script: 'katakana', kana: 'ゼ', romaji: 'ze', categories: ['dakuten'] },
  { id: 'k-zo', script: 'katakana', kana: 'ゾ', romaji: 'zo', categories: ['dakuten'] },

  { id: 'k-da', script: 'katakana', kana: 'ダ', romaji: 'da', categories: ['dakuten'] },
  { id: 'k-di-ji', script: 'katakana', kana: 'ヂ', romaji: 'ji', categories: ['dakuten'] }, // common Hepburn
  { id: 'k-du-zu', script: 'katakana', kana: 'ヅ', romaji: 'zu', categories: ['dakuten'] }, // common Hepburn
  { id: 'k-de', script: 'katakana', kana: 'デ', romaji: 'de', categories: ['dakuten'] },
  { id: 'k-do', script: 'katakana', kana: 'ド', romaji: 'do', categories: ['dakuten'] },

  { id: 'k-ba', script: 'katakana', kana: 'バ', romaji: 'ba', categories: ['dakuten'] },
  { id: 'k-bi', script: 'katakana', kana: 'ビ', romaji: 'bi', categories: ['dakuten'] },
  { id: 'k-bu', script: 'katakana', kana: 'ブ', romaji: 'bu', categories: ['dakuten'] },
  { id: 'k-be', script: 'katakana', kana: 'ベ', romaji: 'be', categories: ['dakuten'] },
  { id: 'k-bo', script: 'katakana', kana: 'ボ', romaji: 'bo', categories: ['dakuten'] },

  // handakuten
  { id: 'k-pa', script: 'katakana', kana: 'パ', romaji: 'pa', categories: ['handakuten'] },
  { id: 'k-pi', script: 'katakana', kana: 'ピ', romaji: 'pi', categories: ['handakuten'] },
  { id: 'k-pu', script: 'katakana', kana: 'プ', romaji: 'pu', categories: ['handakuten'] },
  { id: 'k-pe', script: 'katakana', kana: 'ペ', romaji: 'pe', categories: ['handakuten'] },
  { id: 'k-po', script: 'katakana', kana: 'ポ', romaji: 'po', categories: ['handakuten'] },

  // yoon
  { id: 'k-kya', script: 'katakana', kana: 'キャ', romaji: 'kya', categories: ['yoon'] },
  { id: 'k-kyu', script: 'katakana', kana: 'キュ', romaji: 'kyu', categories: ['yoon'] },
  { id: 'k-kyo', script: 'katakana', kana: 'キョ', romaji: 'kyo', categories: ['yoon'] },

  { id: 'k-sha', script: 'katakana', kana: 'シャ', romaji: 'sha', categories: ['yoon'] },
  { id: 'k-shu', script: 'katakana', kana: 'シュ', romaji: 'shu', categories: ['yoon'] },
  { id: 'k-sho', script: 'katakana', kana: 'ショ', romaji: 'sho', categories: ['yoon'] },

  { id: 'k-cha', script: 'katakana', kana: 'チャ', romaji: 'cha', categories: ['yoon'] },
  { id: 'k-chu', script: 'katakana', kana: 'チュ', romaji: 'chu', categories: ['yoon'] },
  { id: 'k-cho', script: 'katakana', kana: 'チョ', romaji: 'cho', categories: ['yoon'] },

  { id: 'k-nya', script: 'katakana', kana: 'ニャ', romaji: 'nya', categories: ['yoon'] },
  { id: 'k-nyu', script: 'katakana', kana: 'ニュ', romaji: 'nyu', categories: ['yoon'] },
  { id: 'k-nyo', script: 'katakana', kana: 'ニョ', romaji: 'nyo', categories: ['yoon'] },

  { id: 'k-hya', script: 'katakana', kana: 'ヒャ', romaji: 'hya', categories: ['yoon'] },
  { id: 'k-hyu', script: 'katakana', kana: 'ヒュ', romaji: 'hyu', categories: ['yoon'] },
  { id: 'k-hyo', script: 'katakana', kana: 'ヒョ', romaji: 'hyo', categories: ['yoon'] },

  { id: 'k-mya', script: 'katakana', kana: 'ミャ', romaji: 'mya', categories: ['yoon'] },
  { id: 'k-myu', script: 'katakana', kana: 'ミュ', romaji: 'myu', categories: ['yoon'] },
  { id: 'k-myo', script: 'katakana', kana: 'ミョ', romaji: 'myo', categories: ['yoon'] },

  { id: 'k-rya', script: 'katakana', kana: 'リャ', romaji: 'rya', categories: ['yoon'] },
  { id: 'k-ryu', script: 'katakana', kana: 'リュ', romaji: 'ryu', categories: ['yoon'] },
  { id: 'k-ryo', script: 'katakana', kana: 'リョ', romaji: 'ryo', categories: ['yoon'] },

  { id: 'k-gya', script: 'katakana', kana: 'ギャ', romaji: 'gya', categories: ['yoon', 'dakuten'] },
  { id: 'k-gyu', script: 'katakana', kana: 'ギュ', romaji: 'gyu', categories: ['yoon', 'dakuten'] },
  { id: 'k-gyo', script: 'katakana', kana: 'ギョ', romaji: 'gyo', categories: ['yoon', 'dakuten'] },

  { id: 'k-ja', script: 'katakana', kana: 'ジャ', romaji: 'ja', categories: ['yoon', 'dakuten'] },
  { id: 'k-ju', script: 'katakana', kana: 'ジュ', romaji: 'ju', categories: ['yoon', 'dakuten'] },
  { id: 'k-jo', script: 'katakana', kana: 'ジョ', romaji: 'jo', categories: ['yoon', 'dakuten'] },

  { id: 'k-bya', script: 'katakana', kana: 'ビャ', romaji: 'bya', categories: ['yoon', 'dakuten'] },
  { id: 'k-byu', script: 'katakana', kana: 'ビュ', romaji: 'byu', categories: ['yoon', 'dakuten'] },
  { id: 'k-byo', script: 'katakana', kana: 'ビョ', romaji: 'byo', categories: ['yoon', 'dakuten'] },

  { id: 'k-pya', script: 'katakana', kana: 'ピャ', romaji: 'pya', categories: ['yoon', 'handakuten'] },
  { id: 'k-pyu', script: 'katakana', kana: 'ピュ', romaji: 'pyu', categories: ['yoon', 'handakuten'] },
  { id: 'k-pyo', script: 'katakana', kana: 'ピョ', romaji: 'pyo', categories: ['yoon', 'handakuten'] },

  // small vowels (standalone)
  { id: 'k-xa', script: 'katakana', kana: 'ァ', romaji: 'xa', categories: ['small-vowels'] },
  { id: 'k-xi', script: 'katakana', kana: 'ィ', romaji: 'xi', categories: ['small-vowels'] },
  { id: 'k-xu', script: 'katakana', kana: 'ゥ', romaji: 'xu', categories: ['small-vowels'] },
  { id: 'k-xe', script: 'katakana', kana: 'ェ', romaji: 'xe', categories: ['small-vowels'] },
  { id: 'k-xo', script: 'katakana', kana: 'ォ', romaji: 'xo', categories: ['small-vowels'] },
];
