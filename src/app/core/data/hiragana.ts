import type { KanaItem } from './kana.types';

export const HIRAGANA: KanaItem[] = [
  // basic
  { id: 'h-a', script: 'hiragana', kana: 'あ', romaji: 'a', categories: ['basic'] },
  { id: 'h-i', script: 'hiragana', kana: 'い', romaji: 'i', categories: ['basic'] },
  { id: 'h-u', script: 'hiragana', kana: 'う', romaji: 'u', categories: ['basic'] },
  { id: 'h-e', script: 'hiragana', kana: 'え', romaji: 'e', categories: ['basic'] },
  { id: 'h-o', script: 'hiragana', kana: 'お', romaji: 'o', categories: ['basic'] },

  { id: 'h-ka', script: 'hiragana', kana: 'か', romaji: 'ka', categories: ['basic'] },
  { id: 'h-ki', script: 'hiragana', kana: 'き', romaji: 'ki', categories: ['basic'] },
  { id: 'h-ku', script: 'hiragana', kana: 'く', romaji: 'ku', categories: ['basic'] },
  { id: 'h-ke', script: 'hiragana', kana: 'け', romaji: 'ke', categories: ['basic'] },
  { id: 'h-ko', script: 'hiragana', kana: 'こ', romaji: 'ko', categories: ['basic'] },

  { id: 'h-sa', script: 'hiragana', kana: 'さ', romaji: 'sa', categories: ['basic'] },
  { id: 'h-shi', script: 'hiragana', kana: 'し', romaji: 'shi', categories: ['basic'] },
  { id: 'h-su', script: 'hiragana', kana: 'す', romaji: 'su', categories: ['basic'] },
  { id: 'h-se', script: 'hiragana', kana: 'せ', romaji: 'se', categories: ['basic'] },
  { id: 'h-so', script: 'hiragana', kana: 'そ', romaji: 'so', categories: ['basic'] },

  { id: 'h-ta', script: 'hiragana', kana: 'た', romaji: 'ta', categories: ['basic'] },
  { id: 'h-chi', script: 'hiragana', kana: 'ち', romaji: 'chi', categories: ['basic'] },
  { id: 'h-tsu', script: 'hiragana', kana: 'つ', romaji: 'tsu', categories: ['basic'] },
  { id: 'h-te', script: 'hiragana', kana: 'て', romaji: 'te', categories: ['basic'] },
  { id: 'h-to', script: 'hiragana', kana: 'と', romaji: 'to', categories: ['basic'] },

  { id: 'h-na', script: 'hiragana', kana: 'な', romaji: 'na', categories: ['basic'] },
  { id: 'h-ni', script: 'hiragana', kana: 'に', romaji: 'ni', categories: ['basic'] },
  { id: 'h-nu', script: 'hiragana', kana: 'ぬ', romaji: 'nu', categories: ['basic'] },
  { id: 'h-ne', script: 'hiragana', kana: 'ね', romaji: 'ne', categories: ['basic'] },
  { id: 'h-no', script: 'hiragana', kana: 'の', romaji: 'no', categories: ['basic'] },

  { id: 'h-ha', script: 'hiragana', kana: 'は', romaji: 'ha', categories: ['basic'] },
  { id: 'h-hi', script: 'hiragana', kana: 'ひ', romaji: 'hi', categories: ['basic'] },
  { id: 'h-fu', script: 'hiragana', kana: 'ふ', romaji: 'fu', categories: ['basic'] },
  { id: 'h-he', script: 'hiragana', kana: 'へ', romaji: 'he', categories: ['basic'] },
  { id: 'h-ho', script: 'hiragana', kana: 'ほ', romaji: 'ho', categories: ['basic'] },

  { id: 'h-ma', script: 'hiragana', kana: 'ま', romaji: 'ma', categories: ['basic'] },
  { id: 'h-mi', script: 'hiragana', kana: 'み', romaji: 'mi', categories: ['basic'] },
  { id: 'h-mu', script: 'hiragana', kana: 'む', romaji: 'mu', categories: ['basic'] },
  { id: 'h-me', script: 'hiragana', kana: 'め', romaji: 'me', categories: ['basic'] },
  { id: 'h-mo', script: 'hiragana', kana: 'も', romaji: 'mo', categories: ['basic'] },

  { id: 'h-ya', script: 'hiragana', kana: 'や', romaji: 'ya', categories: ['basic'] },
  { id: 'h-yu', script: 'hiragana', kana: 'ゆ', romaji: 'yu', categories: ['basic'] },
  { id: 'h-yo', script: 'hiragana', kana: 'よ', romaji: 'yo', categories: ['basic'] },

  { id: 'h-ra', script: 'hiragana', kana: 'ら', romaji: 'ra', categories: ['basic'] },
  { id: 'h-ri', script: 'hiragana', kana: 'り', romaji: 'ri', categories: ['basic'] },
  { id: 'h-ru', script: 'hiragana', kana: 'る', romaji: 'ru', categories: ['basic'] },
  { id: 'h-re', script: 'hiragana', kana: 'れ', romaji: 're', categories: ['basic'] },
  { id: 'h-ro', script: 'hiragana', kana: 'ろ', romaji: 'ro', categories: ['basic'] },

  { id: 'h-wa', script: 'hiragana', kana: 'わ', romaji: 'wa', categories: ['basic'] },
  { id: 'h-wo', script: 'hiragana', kana: 'を', romaji: 'wo', categories: ['basic'] },
  { id: 'h-n', script: 'hiragana', kana: 'ん', romaji: 'n', categories: ['basic'] },

  // dakuten
  { id: 'h-ga', script: 'hiragana', kana: 'が', romaji: 'ga', categories: ['dakuten'] },
  { id: 'h-gi', script: 'hiragana', kana: 'ぎ', romaji: 'gi', categories: ['dakuten'] },
  { id: 'h-gu', script: 'hiragana', kana: 'ぐ', romaji: 'gu', categories: ['dakuten'] },
  { id: 'h-ge', script: 'hiragana', kana: 'げ', romaji: 'ge', categories: ['dakuten'] },
  { id: 'h-go', script: 'hiragana', kana: 'ご', romaji: 'go', categories: ['dakuten'] },

  { id: 'h-za', script: 'hiragana', kana: 'ざ', romaji: 'za', categories: ['dakuten'] },
  { id: 'h-ji', script: 'hiragana', kana: 'じ', romaji: 'ji', categories: ['dakuten'] },
  { id: 'h-zu', script: 'hiragana', kana: 'ず', romaji: 'zu', categories: ['dakuten'] },
  { id: 'h-ze', script: 'hiragana', kana: 'ぜ', romaji: 'ze', categories: ['dakuten'] },
  { id: 'h-zo', script: 'hiragana', kana: 'ぞ', romaji: 'zo', categories: ['dakuten'] },

  { id: 'h-da', script: 'hiragana', kana: 'だ', romaji: 'da', categories: ['dakuten'] },
  { id: 'h-di-ji', script: 'hiragana', kana: 'ぢ', romaji: 'ji', categories: ['dakuten'] }, // common Hepburn
  { id: 'h-du-zu', script: 'hiragana', kana: 'づ', romaji: 'zu', categories: ['dakuten'] }, // common Hepburn
  { id: 'h-de', script: 'hiragana', kana: 'で', romaji: 'de', categories: ['dakuten'] },
  { id: 'h-do', script: 'hiragana', kana: 'ど', romaji: 'do', categories: ['dakuten'] },

  { id: 'h-ba', script: 'hiragana', kana: 'ば', romaji: 'ba', categories: ['dakuten'] },
  { id: 'h-bi', script: 'hiragana', kana: 'び', romaji: 'bi', categories: ['dakuten'] },
  { id: 'h-bu', script: 'hiragana', kana: 'ぶ', romaji: 'bu', categories: ['dakuten'] },
  { id: 'h-be', script: 'hiragana', kana: 'べ', romaji: 'be', categories: ['dakuten'] },
  { id: 'h-bo', script: 'hiragana', kana: 'ぼ', romaji: 'bo', categories: ['dakuten'] },

  // handakuten
  { id: 'h-pa', script: 'hiragana', kana: 'ぱ', romaji: 'pa', categories: ['handakuten'] },
  { id: 'h-pi', script: 'hiragana', kana: 'ぴ', romaji: 'pi', categories: ['handakuten'] },
  { id: 'h-pu', script: 'hiragana', kana: 'ぷ', romaji: 'pu', categories: ['handakuten'] },
  { id: 'h-pe', script: 'hiragana', kana: 'ぺ', romaji: 'pe', categories: ['handakuten'] },
  { id: 'h-po', script: 'hiragana', kana: 'ぽ', romaji: 'po', categories: ['handakuten'] },

  // yoon
  { id: 'h-kya', script: 'hiragana', kana: 'きゃ', romaji: 'kya', categories: ['yoon'] },
  { id: 'h-kyu', script: 'hiragana', kana: 'きゅ', romaji: 'kyu', categories: ['yoon'] },
  { id: 'h-kyo', script: 'hiragana', kana: 'きょ', romaji: 'kyo', categories: ['yoon'] },

  { id: 'h-sha', script: 'hiragana', kana: 'しゃ', romaji: 'sha', categories: ['yoon'] },
  { id: 'h-shu', script: 'hiragana', kana: 'しゅ', romaji: 'shu', categories: ['yoon'] },
  { id: 'h-sho', script: 'hiragana', kana: 'しょ', romaji: 'sho', categories: ['yoon'] },

  { id: 'h-cha', script: 'hiragana', kana: 'ちゃ', romaji: 'cha', categories: ['yoon'] },
  { id: 'h-chu', script: 'hiragana', kana: 'ちゅ', romaji: 'chu', categories: ['yoon'] },
  { id: 'h-cho', script: 'hiragana', kana: 'ちょ', romaji: 'cho', categories: ['yoon'] },

  { id: 'h-nya', script: 'hiragana', kana: 'にゃ', romaji: 'nya', categories: ['yoon'] },
  { id: 'h-nyu', script: 'hiragana', kana: 'にゅ', romaji: 'nyu', categories: ['yoon'] },
  { id: 'h-nyo', script: 'hiragana', kana: 'にょ', romaji: 'nyo', categories: ['yoon'] },

  { id: 'h-hya', script: 'hiragana', kana: 'ひゃ', romaji: 'hya', categories: ['yoon'] },
  { id: 'h-hyu', script: 'hiragana', kana: 'ひゅ', romaji: 'hyu', categories: ['yoon'] },
  { id: 'h-hyo', script: 'hiragana', kana: 'ひょ', romaji: 'hyo', categories: ['yoon'] },

  { id: 'h-mya', script: 'hiragana', kana: 'みゃ', romaji: 'mya', categories: ['yoon'] },
  { id: 'h-myu', script: 'hiragana', kana: 'みゅ', romaji: 'myu', categories: ['yoon'] },
  { id: 'h-myo', script: 'hiragana', kana: 'みょ', romaji: 'myo', categories: ['yoon'] },

  { id: 'h-rya', script: 'hiragana', kana: 'りゃ', romaji: 'rya', categories: ['yoon'] },
  { id: 'h-ryu', script: 'hiragana', kana: 'りゅ', romaji: 'ryu', categories: ['yoon'] },
  { id: 'h-ryo', script: 'hiragana', kana: 'りょ', romaji: 'ryo', categories: ['yoon'] },

  { id: 'h-gya', script: 'hiragana', kana: 'ぎゃ', romaji: 'gya', categories: ['yoon', 'dakuten'] },
  { id: 'h-gyu', script: 'hiragana', kana: 'ぎゅ', romaji: 'gyu', categories: ['yoon', 'dakuten'] },
  { id: 'h-gyo', script: 'hiragana', kana: 'ぎょ', romaji: 'gyo', categories: ['yoon', 'dakuten'] },

  { id: 'h-ja', script: 'hiragana', kana: 'じゃ', romaji: 'ja', categories: ['yoon', 'dakuten'] },
  { id: 'h-ju', script: 'hiragana', kana: 'じゅ', romaji: 'ju', categories: ['yoon', 'dakuten'] },
  { id: 'h-jo', script: 'hiragana', kana: 'じょ', romaji: 'jo', categories: ['yoon', 'dakuten'] },

  { id: 'h-bya', script: 'hiragana', kana: 'びゃ', romaji: 'bya', categories: ['yoon', 'dakuten'] },
  { id: 'h-byu', script: 'hiragana', kana: 'びゅ', romaji: 'byu', categories: ['yoon', 'dakuten'] },
  { id: 'h-byo', script: 'hiragana', kana: 'びょ', romaji: 'byo', categories: ['yoon', 'dakuten'] },

  { id: 'h-pya', script: 'hiragana', kana: 'ぴゃ', romaji: 'pya', categories: ['yoon', 'handakuten'] },
  { id: 'h-pyu', script: 'hiragana', kana: 'ぴゅ', romaji: 'pyu', categories: ['yoon', 'handakuten'] },
  { id: 'h-pyo', script: 'hiragana', kana: 'ぴょ', romaji: 'pyo', categories: ['yoon', 'handakuten'] },
];
