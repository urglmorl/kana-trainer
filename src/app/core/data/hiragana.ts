import type {KanaItem} from './kana.types';

export const HIRAGANA: KanaItem[] = [
  // basic - vowel row
  { id: 'h-a', script: 'hiragana', kana: 'あ', romaji: 'a', row: 'vowel', categories: ['basic'] },
  { id: 'h-i', script: 'hiragana', kana: 'い', romaji: 'i', row: 'vowel', categories: ['basic'] },
  { id: 'h-u', script: 'hiragana', kana: 'う', romaji: 'u', row: 'vowel', categories: ['basic'] },
  { id: 'h-e', script: 'hiragana', kana: 'え', romaji: 'e', row: 'vowel', categories: ['basic'] },
  { id: 'h-o', script: 'hiragana', kana: 'お', romaji: 'o', row: 'vowel', categories: ['basic'] },

  // basic - k row
  { id: 'h-ka', script: 'hiragana', kana: 'か', romaji: 'ka', row: 'k', categories: ['basic'] },
  { id: 'h-ki', script: 'hiragana', kana: 'き', romaji: 'ki', row: 'k', categories: ['basic'] },
  { id: 'h-ku', script: 'hiragana', kana: 'く', romaji: 'ku', row: 'k', categories: ['basic'] },
  { id: 'h-ke', script: 'hiragana', kana: 'け', romaji: 'ke', row: 'k', categories: ['basic'] },
  { id: 'h-ko', script: 'hiragana', kana: 'こ', romaji: 'ko', row: 'k', categories: ['basic'] },

  // basic - s row
  { id: 'h-sa', script: 'hiragana', kana: 'さ', romaji: 'sa', row: 's', categories: ['basic'] },
  { id: 'h-shi', script: 'hiragana', kana: 'し', romaji: 'shi', row: 's', categories: ['basic'] },
  { id: 'h-su', script: 'hiragana', kana: 'す', romaji: 'su', row: 's', categories: ['basic'] },
  { id: 'h-se', script: 'hiragana', kana: 'せ', romaji: 'se', row: 's', categories: ['basic'] },
  { id: 'h-so', script: 'hiragana', kana: 'そ', romaji: 'so', row: 's', categories: ['basic'] },

  // basic - t row
  { id: 'h-ta', script: 'hiragana', kana: 'た', romaji: 'ta', row: 't', categories: ['basic'] },
  { id: 'h-chi', script: 'hiragana', kana: 'ち', romaji: 'chi', row: 't', categories: ['basic'] },
  { id: 'h-tsu', script: 'hiragana', kana: 'つ', romaji: 'tsu', row: 't', categories: ['basic'] },
  { id: 'h-te', script: 'hiragana', kana: 'て', romaji: 'te', row: 't', categories: ['basic'] },
  { id: 'h-to', script: 'hiragana', kana: 'と', romaji: 'to', row: 't', categories: ['basic'] },

  // basic - n row
  { id: 'h-na', script: 'hiragana', kana: 'な', romaji: 'na', row: 'n', categories: ['basic'] },
  { id: 'h-ni', script: 'hiragana', kana: 'に', romaji: 'ni', row: 'n', categories: ['basic'] },
  { id: 'h-nu', script: 'hiragana', kana: 'ぬ', romaji: 'nu', row: 'n', categories: ['basic'] },
  { id: 'h-ne', script: 'hiragana', kana: 'ね', romaji: 'ne', row: 'n', categories: ['basic'] },
  { id: 'h-no', script: 'hiragana', kana: 'の', romaji: 'no', row: 'n', categories: ['basic'] },

  // basic - h row
  { id: 'h-ha', script: 'hiragana', kana: 'は', romaji: 'ha', row: 'h', categories: ['basic'] },
  { id: 'h-hi', script: 'hiragana', kana: 'ひ', romaji: 'hi', row: 'h', categories: ['basic'] },
  { id: 'h-fu', script: 'hiragana', kana: 'ふ', romaji: 'fu', row: 'h', categories: ['basic'] },
  { id: 'h-he', script: 'hiragana', kana: 'へ', romaji: 'he', row: 'h', categories: ['basic'] },
  { id: 'h-ho', script: 'hiragana', kana: 'ほ', romaji: 'ho', row: 'h', categories: ['basic'] },

  // basic - m row
  { id: 'h-ma', script: 'hiragana', kana: 'ま', romaji: 'ma', row: 'm', categories: ['basic'] },
  { id: 'h-mi', script: 'hiragana', kana: 'み', romaji: 'mi', row: 'm', categories: ['basic'] },
  { id: 'h-mu', script: 'hiragana', kana: 'む', romaji: 'mu', row: 'm', categories: ['basic'] },
  { id: 'h-me', script: 'hiragana', kana: 'め', romaji: 'me', row: 'm', categories: ['basic'] },
  { id: 'h-mo', script: 'hiragana', kana: 'も', romaji: 'mo', row: 'm', categories: ['basic'] },

  // basic - y row
  { id: 'h-ya', script: 'hiragana', kana: 'や', romaji: 'ya', row: 'y', categories: ['basic'] },
  { id: 'h-yu', script: 'hiragana', kana: 'ゆ', romaji: 'yu', row: 'y', categories: ['basic'] },
  { id: 'h-yo', script: 'hiragana', kana: 'よ', romaji: 'yo', row: 'y', categories: ['basic'] },

  // basic - r row
  { id: 'h-ra', script: 'hiragana', kana: 'ら', romaji: 'ra', row: 'r', categories: ['basic'] },
  { id: 'h-ri', script: 'hiragana', kana: 'り', romaji: 'ri', row: 'r', categories: ['basic'] },
  { id: 'h-ru', script: 'hiragana', kana: 'る', romaji: 'ru', row: 'r', categories: ['basic'] },
  { id: 'h-re', script: 'hiragana', kana: 'れ', romaji: 're', row: 'r', categories: ['basic'] },
  { id: 'h-ro', script: 'hiragana', kana: 'ろ', romaji: 'ro', row: 'r', categories: ['basic'] },

  // basic - w row
  { id: 'h-wa', script: 'hiragana', kana: 'わ', romaji: 'wa', row: 'w', categories: ['basic'] },
  { id: 'h-wo', script: 'hiragana', kana: 'を', romaji: 'wo', row: 'w', categories: ['basic'] },
  { id: 'h-n', script: 'hiragana', kana: 'ん', romaji: 'n', row: 'w', categories: ['basic'] },

  // dakuten - g row
  { id: 'h-ga', script: 'hiragana', kana: 'が', romaji: 'ga', row: 'g', categories: ['dakuten'] },
  { id: 'h-gi', script: 'hiragana', kana: 'ぎ', romaji: 'gi', row: 'g', categories: ['dakuten'] },
  { id: 'h-gu', script: 'hiragana', kana: 'ぐ', romaji: 'gu', row: 'g', categories: ['dakuten'] },
  { id: 'h-ge', script: 'hiragana', kana: 'げ', romaji: 'ge', row: 'g', categories: ['dakuten'] },
  { id: 'h-go', script: 'hiragana', kana: 'ご', romaji: 'go', row: 'g', categories: ['dakuten'] },

  // dakuten - z row
  { id: 'h-za', script: 'hiragana', kana: 'ざ', romaji: 'za', row: 'z', categories: ['dakuten'] },
  { id: 'h-ji', script: 'hiragana', kana: 'じ', romaji: 'ji', row: 'z', categories: ['dakuten'] },
  { id: 'h-zu', script: 'hiragana', kana: 'ず', romaji: 'zu', row: 'z', categories: ['dakuten'] },
  { id: 'h-ze', script: 'hiragana', kana: 'ぜ', romaji: 'ze', row: 'z', categories: ['dakuten'] },
  { id: 'h-zo', script: 'hiragana', kana: 'ぞ', romaji: 'zo', row: 'z', categories: ['dakuten'] },

  // dakuten - d row
  { id: 'h-da', script: 'hiragana', kana: 'だ', romaji: 'da', row: 'd', categories: ['dakuten'] },
  { id: 'h-di-ji', script: 'hiragana', kana: 'ぢ', romaji: 'ji', row: 'd', categories: ['dakuten'] }, // common Hepburn
  { id: 'h-du-zu', script: 'hiragana', kana: 'づ', romaji: 'zu', row: 'd', categories: ['dakuten'] }, // common Hepburn
  { id: 'h-de', script: 'hiragana', kana: 'で', romaji: 'de', row: 'd', categories: ['dakuten'] },
  { id: 'h-do', script: 'hiragana', kana: 'ど', romaji: 'do', row: 'd', categories: ['dakuten'] },

  // dakuten - b row
  { id: 'h-ba', script: 'hiragana', kana: 'ば', romaji: 'ba', row: 'b', categories: ['dakuten'] },
  { id: 'h-bi', script: 'hiragana', kana: 'び', romaji: 'bi', row: 'b', categories: ['dakuten'] },
  { id: 'h-bu', script: 'hiragana', kana: 'ぶ', romaji: 'bu', row: 'b', categories: ['dakuten'] },
  { id: 'h-be', script: 'hiragana', kana: 'べ', romaji: 'be', row: 'b', categories: ['dakuten'] },
  { id: 'h-bo', script: 'hiragana', kana: 'ぼ', romaji: 'bo', row: 'b', categories: ['dakuten'] },

  // handakuten - p row
  { id: 'h-pa', script: 'hiragana', kana: 'ぱ', romaji: 'pa', row: 'p', categories: ['handakuten'] },
  { id: 'h-pi', script: 'hiragana', kana: 'ぴ', romaji: 'pi', row: 'p', categories: ['handakuten'] },
  { id: 'h-pu', script: 'hiragana', kana: 'ぷ', romaji: 'pu', row: 'p', categories: ['handakuten'] },
  { id: 'h-pe', script: 'hiragana', kana: 'ぺ', romaji: 'pe', row: 'p', categories: ['handakuten'] },
  { id: 'h-po', script: 'hiragana', kana: 'ぽ', romaji: 'po', row: 'p', categories: ['handakuten'] },

  // yoon - ky row
  { id: 'h-kya', script: 'hiragana', kana: 'きゃ', romaji: 'kya', row: 'ky', categories: ['yoon'] },
  { id: 'h-kyu', script: 'hiragana', kana: 'きゅ', romaji: 'kyu', row: 'ky', categories: ['yoon'] },
  { id: 'h-kyo', script: 'hiragana', kana: 'きょ', romaji: 'kyo', row: 'ky', categories: ['yoon'] },

  // yoon - sh row
  { id: 'h-sha', script: 'hiragana', kana: 'しゃ', romaji: 'sha', row: 'sh', categories: ['yoon'] },
  { id: 'h-shu', script: 'hiragana', kana: 'しゅ', romaji: 'shu', row: 'sh', categories: ['yoon'] },
  { id: 'h-sho', script: 'hiragana', kana: 'しょ', romaji: 'sho', row: 'sh', categories: ['yoon'] },

  // yoon - ch row
  { id: 'h-cha', script: 'hiragana', kana: 'ちゃ', romaji: 'cha', row: 'ch', categories: ['yoon'] },
  { id: 'h-chu', script: 'hiragana', kana: 'ちゅ', romaji: 'chu', row: 'ch', categories: ['yoon'] },
  { id: 'h-cho', script: 'hiragana', kana: 'ちょ', romaji: 'cho', row: 'ch', categories: ['yoon'] },

  // yoon - ny row
  { id: 'h-nya', script: 'hiragana', kana: 'にゃ', romaji: 'nya', row: 'ny', categories: ['yoon'] },
  { id: 'h-nyu', script: 'hiragana', kana: 'にゅ', romaji: 'nyu', row: 'ny', categories: ['yoon'] },
  { id: 'h-nyo', script: 'hiragana', kana: 'にょ', romaji: 'nyo', row: 'ny', categories: ['yoon'] },

  // yoon - hy row
  { id: 'h-hya', script: 'hiragana', kana: 'ひゃ', romaji: 'hya', row: 'hy', categories: ['yoon'] },
  { id: 'h-hyu', script: 'hiragana', kana: 'ひゅ', romaji: 'hyu', row: 'hy', categories: ['yoon'] },
  { id: 'h-hyo', script: 'hiragana', kana: 'ひょ', romaji: 'hyo', row: 'hy', categories: ['yoon'] },

  // yoon - my row
  { id: 'h-mya', script: 'hiragana', kana: 'みゃ', romaji: 'mya', row: 'my', categories: ['yoon'] },
  { id: 'h-myu', script: 'hiragana', kana: 'みゅ', romaji: 'myu', row: 'my', categories: ['yoon'] },
  { id: 'h-myo', script: 'hiragana', kana: 'みょ', romaji: 'myo', row: 'my', categories: ['yoon'] },

  // yoon - ry row
  { id: 'h-rya', script: 'hiragana', kana: 'りゃ', romaji: 'rya', row: 'ry', categories: ['yoon'] },
  { id: 'h-ryu', script: 'hiragana', kana: 'りゅ', romaji: 'ryu', row: 'ry', categories: ['yoon'] },
  { id: 'h-ryo', script: 'hiragana', kana: 'りょ', romaji: 'ryo', row: 'ry', categories: ['yoon'] },

  // yoon - gy row
  { id: 'h-gya', script: 'hiragana', kana: 'ぎゃ', romaji: 'gya', row: 'gy', categories: ['yoon'] },
  { id: 'h-gyu', script: 'hiragana', kana: 'ぎゅ', romaji: 'gyu', row: 'gy', categories: ['yoon'] },
  { id: 'h-gyo', script: 'hiragana', kana: 'ぎょ', romaji: 'gyo', row: 'gy', categories: ['yoon'] },

  // yoon - j row
  { id: 'h-ja', script: 'hiragana', kana: 'じゃ', romaji: 'ja', row: 'j', categories: ['yoon'] },
  { id: 'h-ju', script: 'hiragana', kana: 'じゅ', romaji: 'ju', row: 'j', categories: ['yoon'] },
  { id: 'h-jo', script: 'hiragana', kana: 'じょ', romaji: 'jo', row: 'j', categories: ['yoon'] },

  // yoon - by row
  { id: 'h-bya', script: 'hiragana', kana: 'びゃ', romaji: 'bya', row: 'by', categories: ['yoon'] },
  { id: 'h-byu', script: 'hiragana', kana: 'びゅ', romaji: 'byu', row: 'by', categories: ['yoon'] },
  { id: 'h-byo', script: 'hiragana', kana: 'びょ', romaji: 'byo', row: 'by', categories: ['yoon'] },

  // yoon - py row
  { id: 'h-pya', script: 'hiragana', kana: 'ぴゃ', romaji: 'pya', row: 'py', categories: ['yoon'] },
  { id: 'h-pyu', script: 'hiragana', kana: 'ぴゅ', romaji: 'pyu', row: 'py', categories: ['yoon'] },
  { id: 'h-pyo', script: 'hiragana', kana: 'ぴょ', romaji: 'pyo', row: 'py', categories: ['yoon'] },
];
