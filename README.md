# Kana Trainer

A modern web application for practicing Japanese kana (hiragana and katakana) recognition. Train your ability to read and recall Japanese characters with customizable training sessions.

**Live Demo:** [https://kana.urglmorl.dev/](https://kana.urglmorl.dev/)

## ✨ Features

- **Two Training Modes**
  - Romaji → Kana: See romaji, recall the kana character
  - Kana → Romaji: See kana, recall the romaji reading

- **Comprehensive Character Sets**
  - Hiragana (native Japanese words)
  - Katakana (foreign words & sounds)

- **Character Categories**
  - Basic (gojūon) - Core 46 characters
  - Dakuten - Voiced consonants (が, ざ, だ, etc.)
  - Handakuten - P-sound marks (ぱ, ぴ, ぷ, etc.)
  - Yōon - Combination sounds (きゃ, しゅ, ちょ, etc.)
  - Small vowels - Glottal stops (ぁ, ぃ, ぅ, etc.)
  - Extended katakana - Foreign sounds (ティ, ファ, ヴァ, etc.)

- **Smart Randomization**
  - Shuffle-bag algorithm prevents immediate repeats
  - Even distribution of all selected characters

- **Keyboard Shortcuts**
  - `Space` - Reveal answer / Next item
  - `Esc` - Back to settings

- **Internationalization**
  - English, Russian, Norwegian language support
  - Automatic browser language detection

- **Theme Support**
  - Light / Dark mode
  - System preference detection
  - Manual override with persistence

- **Responsive Design**
  - Mobile-first approach
  - Touch-friendly controls
  - Fixed bottom action bar for easy thumb access

## 🛠 Tech Stack

- **Framework:** Angular 19 (standalone components, signals)
- **Styling:** Tailwind CSS v4
- **i18n:** Transloco
- **Fonts:** Self-hosted Inter & Noto Sans JP (via Fontsource)
- **Build:** Angular CLI, PostCSS
- **Deployment:** Docker + Nginx

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/urglmorl/kana-trainer.git
cd kana-trainer

# Install dependencies
npm install
```

### Development Server

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload on file changes.

### Build

```bash
npm run build
```

Build artifacts are stored in `dist/kana-trainer-app/browser/`.

## 🐳 Docker

### Local Development

```bash
# Build and run locally
docker-compose up --build

# Access at http://localhost:8080
```

### Production Deployment

```bash
# Build for linux/amd64
npm run docker:build

# Push to registry
npm run docker:push

# Or both in one command
npm run docker:deploy
```

On your production server:

```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Docker Scripts

| Script | Description |
|--------|-------------|
| `npm run docker:build` | Build image for linux/amd64 |
| `npm run docker:push` | Push to your registry |
| `npm run docker:deploy` | Build + push in one command |

## 📁 Project Structure

```
src/
├── app/
│   ├── application/           # Application layer
│   │   └── services/          # SettingsService, TrainerSessionService
│   ├── core/
│   │   └── data/              # Kana dataset (hiragana, katakana, extended)
│   ├── domain/                # Domain layer
│   │   ├── models/            # TrainerSettings, types
│   │   ├── ports/             # Interfaces (ISettingsRepository, etc.)
│   │   └── tokens.ts          # DI tokens
│   ├── infrastructure/        # Infrastructure layer
│   │   ├── di/                # Dependency injection providers
│   │   ├── mappers/           # PromptAnswer mapper
│   │   ├── pool/              # Kana pool builder
│   │   ├── random/            # Bag-based random generator
│   │   └── repositories/      # LocalStorage settings repository
│   ├── pages/
│   │   ├── settings/          # Settings page component
│   │   └── trainer/           # Trainer page component
│   └── shared/
│       ├── components/        # Header, LanguageSwitcher, ThemeToggle
│       ├── services/          # ThemeService
│       └── ui/                # UI primitives (Button, Card, etc.)
├── assets/
│   └── i18n/                  # Translation files (en.json, ru.json, no.json)
└── styles.css                 # Global styles + Tailwind imports
```

## 🌍 Internationalization

The app supports three languages:
- English (en) - default
- Russian (ru)
- Norwegian (no)

Translation files are located in `src/assets/i18n/`.

To add a new language:
1. Create `src/assets/i18n/{lang}.json`
2. Add the language code to `availableLangs` in `app.config.ts`
3. Add the flag/label in `language-switcher.component.ts`

## ⚙️ Configuration

### Settings Persistence

User settings are stored in `localStorage`:
- `kana-trainer-settings` - Training mode, scripts, categories
- `kana-trainer-theme` - Theme preference (light/dark/system)
- `kana-trainer-lang` - Language preference

### Nginx Configuration

The production Nginx config (`nginx.conf`) includes:
- Gzip compression
- Static asset caching (1 year)
- SPA fallback routing
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)

## 🎯 Training Logic

1. **Pool Building:** Characters are filtered based on selected scripts and categories
2. **Shuffling:** Fisher-Yates shuffle creates a randomized bag
3. **Drawing:** Characters are drawn from the bag without replacement
4. **Refill:** When the bag is empty, it's reshuffled and refilled
5. **Anti-repeat:** The last shown character won't appear first after a refill

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server |
| `npm run build` | Production build |
| `npm run watch` | Development build with watch mode |
| `npm test` | Run unit tests |
| `npm run docker:build` | Build Docker image |
| `npm run docker:push` | Push to registry |
| `npm run docker:deploy` | Build and push |

## 📄 License

MIT

## 🙏 Acknowledgments

- Japanese character data based on standard gojūon ordering
- Fonts: [Inter](https://rsms.me/inter/) and [Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP)
