import type {KanaItem} from './kana.types';

export const KATAKANA: KanaItem[] = [
  // basic - vowel row
  { id: 'k-a', script: 'katakana', kana: 'ア', romaji: 'a', row: 'vowel', categories: ['basic'] },
  { id: 'k-i', script: 'katakana', kana: 'イ', romaji: 'i', row: 'vowel', categories: ['basic'] },
  { id: 'k-u', script: 'katakana', kana: 'ウ', romaji: 'u', row: 'vowel', categories: ['basic'] },
  { id: 'k-e', script: 'katakana', kana: 'エ', romaji: 'e', row: 'vowel', categories: ['basic'] },
  { id: 'k-o', script: 'katakana', kana: 'オ', romaji: 'o', row: 'vowel', categories: ['basic'] },

  // basic - k row
  { id: 'k-ka', script: 'katakana', kana: 'カ', romaji: 'ka', row: 'k', categories: ['basic'] },
  { id: 'k-ki', script: 'katakana', kana: 'キ', romaji: 'ki', row: 'k', categories: ['basic'] },
  { id: 'k-ku', script: 'katakana', kana: 'ク', romaji: 'ku', row: 'k', categories: ['basic'] },
  { id: 'k-ke', script: 'katakana', kana: 'ケ', romaji: 'ke', row: 'k', categories: ['basic'] },
  { id: 'k-ko', script: 'katakana', kana: 'コ', romaji: 'ko', row: 'k', categories: ['basic'] },

  // basic - s row
  { id: 'k-sa', script: 'katakana', kana: 'サ', romaji: 'sa', row: 's', categories: ['basic'] },
  { id: 'k-shi', script: 'katakana', kana: 'シ', romaji: 'shi', row: 's', categories: ['basic'] },
  { id: 'k-su', script: 'katakana', kana: 'ス', romaji: 'su', row: 's', categories: ['basic'] },
  { id: 'k-se', script: 'katakana', kana: 'セ', romaji: 'se', row: 's', categories: ['basic'] },
  { id: 'k-so', script: 'katakana', kana: 'ソ', romaji: 'so', row: 's', categories: ['basic'] },

  // basic - t row
  { id: 'k-ta', script: 'katakana', kana: 'タ', romaji: 'ta', row: 't', categories: ['basic'] },
  { id: 'k-chi', script: 'katakana', kana: 'チ', romaji: 'chi', row: 't', categories: ['basic'] },
  { id: 'k-tsu', script: 'katakana', kana: 'ツ', romaji: 'tsu', row: 't', categories: ['basic'] },
  { id: 'k-te', script: 'katakana', kana: 'テ', romaji: 'te', row: 't', categories: ['basic'] },
  { id: 'k-to', script: 'katakana', kana: 'ト', romaji: 'to', row: 't', categories: ['basic'] },

  // basic - n row
  { id: 'k-na', script: 'katakana', kana: 'ナ', romaji: 'na', row: 'n', categories: ['basic'] },
  { id: 'k-ni', script: 'katakana', kana: 'ニ', romaji: 'ni', row: 'n', categories: ['basic'] },
  { id: 'k-nu', script: 'katakana', kana: 'ヌ', romaji: 'nu', row: 'n', categories: ['basic'] },
  { id: 'k-ne', script: 'katakana', kana: 'ネ', romaji: 'ne', row: 'n', categories: ['basic'] },
  { id: 'k-no', script: 'katakana', kana: 'ノ', romaji: 'no', row: 'n', categories: ['basic'] },

  // basic - h row
  { id: 'k-ha', script: 'katakana', kana: 'ハ', romaji: 'ha', row: 'h', categories: ['basic'] },
  { id: 'k-hi', script: 'katakana', kana: 'ヒ', romaji: 'hi', row: 'h', categories: ['basic'] },
  { id: 'k-fu', script: 'katakana', kana: 'フ', romaji: 'fu', row: 'h', categories: ['basic'] },
  { id: 'k-he', script: 'katakana', kana: 'ヘ', romaji: 'he', row: 'h', categories: ['basic'] },
  { id: 'k-ho', script: 'katakana', kana: 'ホ', romaji: 'ho', row: 'h', categories: ['basic'] },

  // basic - m row
  { id: 'k-ma', script: 'katakana', kana: 'マ', romaji: 'ma', row: 'm', categories: ['basic'] },
  { id: 'k-mi', script: 'katakana', kana: 'ミ', romaji: 'mi', row: 'm', categories: ['basic'] },
  { id: 'k-mu', script: 'katakana', kana: 'ム', romaji: 'mu', row: 'm', categories: ['basic'] },
  { id: 'k-me', script: 'katakana', kana: 'メ', romaji: 'me', row: 'm', categories: ['basic'] },
  { id: 'k-mo', script: 'katakana', kana: 'モ', romaji: 'mo', row: 'm', categories: ['basic'] },

  // basic - y row
  { id: 'k-ya', script: 'katakana', kana: 'ヤ', romaji: 'ya', row: 'y', categories: ['basic'] },
  { id: 'k-yu', script: 'katakana', kana: 'ユ', romaji: 'yu', row: 'y', categories: ['basic'] },
  { id: 'k-yo', script: 'katakana', kana: 'ヨ', romaji: 'yo', row: 'y', categories: ['basic'] },

  // basic - r row
  { id: 'k-ra', script: 'katakana', kana: 'ラ', romaji: 'ra', row: 'r', categories: ['basic'] },
  { id: 'k-ri', script: 'katakana', kana: 'リ', romaji: 'ri', row: 'r', categories: ['basic'] },
  { id: 'k-ru', script: 'katakana', kana: 'ル', romaji: 'ru', row: 'r', categories: ['basic'] },
  { id: 'k-re', script: 'katakana', kana: 'レ', romaji: 're', row: 'r', categories: ['basic'] },
  { id: 'k-ro', script: 'katakana', kana: 'ロ', romaji: 'ro', row: 'r', categories: ['basic'] },

  // basic - w row
  { id: 'k-wa', script: 'katakana', kana: 'ワ', romaji: 'wa', row: 'w', categories: ['basic'] },
  { id: 'k-wo', script: 'katakana', kana: 'ヲ', romaji: 'wo', row: 'w', categories: ['basic'] },
  { id: 'k-n', script: 'katakana', kana: 'ン', romaji: 'n', row: 'w', categories: ['basic'] },

  // dakuten - g row
  { id: 'k-ga', script: 'katakana', kana: 'ガ', romaji: 'ga', row: 'g', categories: ['dakuten'] },
  { id: 'k-gi', script: 'katakana', kana: 'ギ', romaji: 'gi', row: 'g', categories: ['dakuten'] },
  { id: 'k-gu', script: 'katakana', kana: 'グ', romaji: 'gu', row: 'g', categories: ['dakuten'] },
  { id: 'k-ge', script: 'katakana', kana: 'ゲ', romaji: 'ge', row: 'g', categories: ['dakuten'] },
  { id: 'k-go', script: 'katakana', kana: 'ゴ', romaji: 'go', row: 'g', categories: ['dakuten'] },

  // dakuten - z row
  { id: 'k-za', script: 'katakana', kana: 'ザ', romaji: 'za', row: 'z', categories: ['dakuten'] },
  { id: 'k-ji', script: 'katakana', kana: 'ジ', romaji: 'ji', row: 'z', categories: ['dakuten'] },
  { id: 'k-zu', script: 'katakana', kana: 'ズ', romaji: 'zu', row: 'z', categories: ['dakuten'] },
  { id: 'k-ze', script: 'katakana', kana: 'ゼ', romaji: 'ze', row: 'z', categories: ['dakuten'] },
  { id: 'k-zo', script: 'katakana', kana: 'ゾ', romaji: 'zo', row: 'z', categories: ['dakuten'] },

  // dakuten - d row
  { id: 'k-da', script: 'katakana', kana: 'ダ', romaji: 'da', row: 'd', categories: ['dakuten'] },
  { id: 'k-di-ji', script: 'katakana', kana: 'ヂ', romaji: 'ji', row: 'd', categories: ['dakuten'] }, // common Hepburn
  { id: 'k-du-zu', script: 'katakana', kana: 'ヅ', romaji: 'zu', row: 'd', categories: ['dakuten'] }, // common Hepburn
  { id: 'k-de', script: 'katakana', kana: 'デ', romaji: 'de', row: 'd', categories: ['dakuten'] },
  { id: 'k-do', script: 'katakana', kana: 'ド', romaji: 'do', row: 'd', categories: ['dakuten'] },

  // dakuten - b row
  { id: 'k-ba', script: 'katakana', kana: 'バ', romaji: 'ba', row: 'b', categories: ['dakuten'] },
  { id: 'k-bi', script: 'katakana', kana: 'ビ', romaji: 'bi', row: 'b', categories: ['dakuten'] },
  { id: 'k-bu', script: 'katakana', kana: 'ブ', romaji: 'bu', row: 'b', categories: ['dakuten'] },
  { id: 'k-be', script: 'katakana', kana: 'ベ', romaji: 'be', row: 'b', categories: ['dakuten'] },
  { id: 'k-bo', script: 'katakana', kana: 'ボ', romaji: 'bo', row: 'b', categories: ['dakuten'] },

  // handakuten - p row
  { id: 'k-pa', script: 'katakana', kana: 'パ', romaji: 'pa', row: 'p', categories: ['handakuten'] },
  { id: 'k-pi', script: 'katakana', kana: 'ピ', romaji: 'pi', row: 'p', categories: ['handakuten'] },
  { id: 'k-pu', script: 'katakana', kana: 'プ', romaji: 'pu', row: 'p', categories: ['handakuten'] },
  { id: 'k-pe', script: 'katakana', kana: 'ペ', romaji: 'pe', row: 'p', categories: ['handakuten'] },
  { id: 'k-po', script: 'katakana', kana: 'ポ', romaji: 'po', row: 'p', categories: ['handakuten'] },

  // yoon - ky row
  { id: 'k-kya', script: 'katakana', kana: 'キャ', romaji: 'kya', row: 'ky', categories: ['yoon'] },
  { id: 'k-kyu', script: 'katakana', kana: 'キュ', romaji: 'kyu', row: 'ky', categories: ['yoon'] },
  { id: 'k-kyo', script: 'katakana', kana: 'キョ', romaji: 'kyo', row: 'ky', categories: ['yoon'] },

  // yoon - sh row
  { id: 'k-sha', script: 'katakana', kana: 'シャ', romaji: 'sha', row: 'sh', categories: ['yoon'] },
  { id: 'k-shu', script: 'katakana', kana: 'シュ', romaji: 'shu', row: 'sh', categories: ['yoon'] },
  { id: 'k-sho', script: 'katakana', kana: 'ショ', romaji: 'sho', row: 'sh', categories: ['yoon'] },

  // yoon - ch row
  { id: 'k-cha', script: 'katakana', kana: 'チャ', romaji: 'cha', row: 'ch', categories: ['yoon'] },
  { id: 'k-chu', script: 'katakana', kana: 'チュ', romaji: 'chu', row: 'ch', categories: ['yoon'] },
  { id: 'k-cho', script: 'katakana', kana: 'チョ', romaji: 'cho', row: 'ch', categories: ['yoon'] },

  // yoon - ny row
  { id: 'k-nya', script: 'katakana', kana: 'ニャ', romaji: 'nya', row: 'ny', categories: ['yoon'] },
  { id: 'k-nyu', script: 'katakana', kana: 'ニュ', romaji: 'nyu', row: 'ny', categories: ['yoon'] },
  { id: 'k-nyo', script: 'katakana', kana: 'ニョ', romaji: 'nyo', row: 'ny', categories: ['yoon'] },

  // yoon - hy row
  { id: 'k-hya', script: 'katakana', kana: 'ヒャ', romaji: 'hya', row: 'hy', categories: ['yoon'] },
  { id: 'k-hyu', script: 'katakana', kana: 'ヒュ', romaji: 'hyu', row: 'hy', categories: ['yoon'] },
  { id: 'k-hyo', script: 'katakana', kana: 'ヒョ', romaji: 'hyo', row: 'hy', categories: ['yoon'] },

  // yoon - my row
  { id: 'k-mya', script: 'katakana', kana: 'ミャ', romaji: 'mya', row: 'my', categories: ['yoon'] },
  { id: 'k-myu', script: 'katakana', kana: 'ミュ', romaji: 'myu', row: 'my', categories: ['yoon'] },
  { id: 'k-myo', script: 'katakana', kana: 'ミョ', romaji: 'myo', row: 'my', categories: ['yoon'] },

  // yoon - ry row
  { id: 'k-rya', script: 'katakana', kana: 'リャ', romaji: 'rya', row: 'ry', categories: ['yoon'] },
  { id: 'k-ryu', script: 'katakana', kana: 'リュ', romaji: 'ryu', row: 'ry', categories: ['yoon'] },
  { id: 'k-ryo', script: 'katakana', kana: 'リョ', romaji: 'ryo', row: 'ry', categories: ['yoon'] },

  // yoon - gy row
  { id: 'k-gya', script: 'katakana', kana: 'ギャ', romaji: 'gya', row: 'gy', categories: ['yoon'] },
  { id: 'k-gyu', script: 'katakana', kana: 'ギュ', romaji: 'gyu', row: 'gy', categories: ['yoon'] },
  { id: 'k-gyo', script: 'katakana', kana: 'ギョ', romaji: 'gyo', row: 'gy', categories: ['yoon'] },

  // yoon - j row
  { id: 'k-ja', script: 'katakana', kana: 'ジャ', romaji: 'ja', row: 'j', categories: ['yoon'] },
  { id: 'k-ju', script: 'katakana', kana: 'ジュ', romaji: 'ju', row: 'j', categories: ['yoon'] },
  { id: 'k-jo', script: 'katakana', kana: 'ジョ', romaji: 'jo', row: 'j', categories: ['yoon'] },

  // yoon - by row
  { id: 'k-bya', script: 'katakana', kana: 'ビャ', romaji: 'bya', row: 'by', categories: ['yoon'] },
  { id: 'k-byu', script: 'katakana', kana: 'ビュ', romaji: 'byu', row: 'by', categories: ['yoon'] },
  { id: 'k-byo', script: 'katakana', kana: 'ビョ', romaji: 'byo', row: 'by', categories: ['yoon'] },

  // yoon - py row
  { id: 'k-pya', script: 'katakana', kana: 'ピャ', romaji: 'pya', row: 'py', categories: ['yoon'] },
  { id: 'k-pyu', script: 'katakana', kana: 'ピュ', romaji: 'pyu', row: 'py', categories: ['yoon'] },
  { id: 'k-pyo', script: 'katakana', kana: 'ピョ', romaji: 'pyo', row: 'py', categories: ['yoon'] },

  // small vowels
  { id: 'k-xa', script: 'katakana', kana: 'ァ', romaji: 'xa', row: 'small-vowel', categories: ['small-vowels'] },
  { id: 'k-xi', script: 'katakana', kana: 'ィ', romaji: 'xi', row: 'small-vowel', categories: ['small-vowels'] },
  { id: 'k-xu', script: 'katakana', kana: 'ゥ', romaji: 'xu', row: 'small-vowel', categories: ['small-vowels'] },
  { id: 'k-xe', script: 'katakana', kana: 'ェ', romaji: 'xe', row: 'small-vowel', categories: ['small-vowels'] },
  { id: 'k-xo', script: 'katakana', kana: 'ォ', romaji: 'xo', row: 'small-vowel', categories: ['small-vowels'] },
];
