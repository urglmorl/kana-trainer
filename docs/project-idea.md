# Kana Trainer (Angular) — Project Spec / Requirements

## Basis of requirements

* Based on your described flow and goals (training recall of kana in hiragana/katakana + reverse mode).
* Assumptions (explicit):

  * Romaji is shown in a single standard (default: Hepburn). Optional: add a toggle later.
  * No login for MVP; settings are stored in `localStorage`.

## Concept checklist (key implementation steps)

1. Prepare the dataset: hiragana + katakana + extended katakana combinations (and tag them with categories).
2. Build a Settings screen: select scripts/categories + training mode.
3. Build a Training screen: show “question”, then “reveal answer”, then “next”.
4. Implement random generation with anti-repeat.
5. Persist settings and (optional) basic stats (at minimum: items shown).
6. UX polish: hotkeys, accessibility, mobile layout.

---

## 1) Goal and purpose

**Goal:** quickly train *recall* of the mapping between romaji ↔ kana.

**Core idea:** the app presents one item (kana or romaji). The user writes the answer on paper, then reveals the correct answer and moves on.

---

## 2) User scenarios

### 2.1 Scenario A: romaji → kana (primary)

1. User opens the site.
2. Chooses:

   * what to train: **hiragana**, **katakana**, or **both**;
   * categories (e.g., basic, dakuten, yōon, etc.);
   * mode: **show romaji, hide kana**.
3. Clicks **Start**.
4. On the training screen:

   * **romaji** is shown in the center;
   * the user writes kana on paper;
   * clicks **Reveal** → the correct **kana** is shown;
   * clicks **Next** → the next item.

### 2.2 Scenario B: kana → romaji (reverse)

Same flow, but the prompt is **kana**, and **romaji** is revealed after clicking “Reveal”.

---

## 3) Screens and UI

### 3.1 Settings screen (`/`)

**Blocks:**

* **Training mode (Prompt/Answer):**

  * `Romaji → Kana`
  * `Kana → Romaji`
* **Scripts:**

  * ✅ Hiragana
  * ✅ Katakana
* **Categories (multi-select):**

  * Basic (gojūon)
  * Dakuten / Handakuten
  * Yōon (きゃ/きゅ/きょ and analogs)
  * Small vowels (katakana: ァィゥェォ)
  * Extended katakana for foreign sounds (ティ/ファ/ヴァ, etc.)
  * Sokuon (small っ/ッ) — *only if you actually want to generate syllable patterns; otherwise exclude*
  * Long vowel mark (ー) — *katakana only, only if you generate words like コーヒー; otherwise exclude*
* **Romaji rules (optional):**

  * Standard: Hepburn
  * (extra) Kunrei-shiki / Nihon-shiki
* **Button:** `Start`

**Minimal validation:** cannot start if no script or no category is selected.

### 3.2 Training screen (`/train`)

Full-screen mode.

* Large centered **Prompt** (romaji or kana).
* Two buttons below:

  * `Reveal` (shows the Answer)
  * `Next` (generates the next item)

**Behavior:**

* While the answer is hidden, the `Next` button is disabled (to enforce the flow) — or make this configurable.
* After `Reveal`, show Answer prominently (either below Prompt or as a two-line layout).

**Hotkeys (strongly recommended):**

* Space → Reveal / Next (context-sensitive)
* Enter → Next (when answer is already revealed)
* Esc → Back to settings

---

## 4) Kana dataset: what to store

### 4.1 Item format

Recommended types:

```ts
export type Script = 'hiragana' | 'katakana';
export type Category =
  | 'basic'
  | 'dakuten'
  | 'handakuten'
  | 'yoon'
  | 'small-vowels'
  | 'extended-katakana';

export interface KanaItem {
  id: string;
  script: Script;
  kana: string;      // can be 1–3 characters, e.g. "きゃ" or "ティ"
  romaji: string;    // e.g. "kya" or "ti"
  categories: Category[];
}
```

### 4.2 Minimum sets

**Hiragana:**

* `basic`: あいうえお / かきくけこ / … / やゆよ / らりるれろ / わをん
* `dakuten`: がぎぐげご / ざじずぜぞ / だぢづでど / ばびぶべぼ
* `handakuten`: ぱぴぷぺぽ
* `yoon`: きゃきゅきょ / しゃしゅしょ / ちゃちゅちょ / にゃ… / ひゃ… / みゃ… / りゃ… / (ぎゃ…/じゃ…/びゃ…/ぴゃ…)

**Katakana:**

* `basic`: アイウエオ / カキクケコ / … / ヤユヨ / ラリルレロ / ワヲン
* `dakuten`: ガギグゲゴ / ザジズゼゾ / ダヂヅデド / バビブベボ
* `handakuten`: パピプペポ
* `yoon`: キャキュキョ / シャシュショ / チャチュチョ / ニャ… / ヒャ… / ミャ… / リャ… / (ギャ…/ジャ…/ビャ…/ピャ…)
* `small-vowels`: ァィゥェォ (katakana)
* `extended-katakana`: extended combinations (see below)

---

## 5) Extended katakana for foreign sounds (your core requirement)

Below is a **recommended minimum** that is both common and useful.

### 5.1 Common combos with small vowels

* **ファ / フィ / フェ / フォ / フュ / フョ** → fa/fi/fe/fo/fyu/fyo
* **ティ / ディ** → ti/di
* **トゥ / ドゥ** → tu/du
* **チェ / シェ / ジェ** → che/she/je
* **ツァ / ツィ / ツェ / ツォ** → tsa/tsi/tse/tso
* **ウィ / ウェ / ウォ** → wi/we/wo
* **クァ / クィ / クェ / クォ** → kwa/kwi/kwe/kwo
* **グァ / グィ / グェ / グォ** → gwa/gwi/gwe/gwo

### 5.2 The V sound

* **ヴァ / ヴィ / ヴ / ヴェ / ヴォ / ヴュ** → va/vi/vu/ve/vo/vyu

### 5.3 Other useful ones

* **スィ / ズィ** → si/zi (less common, but appears)
* **テュ / デュ** → tyu/dyu
* **フャ / フュ / フョ** → fya/fyu/fyo (overlaps with 5.1)

> Note: you can expand this later, but starting with high-frequency combos keeps training practical.

---

## 6) Random item generation

### 6.1 Generator requirements

* Select a random `KanaItem` from the *filtered pool* (by script + categories).
* Anti-repeat: do not show the same item twice in a row.
* (Optional) “bag” sampling (random without replacement):

  * shuffle the array and pop items one by one; when empty, shuffle again.
  * this improves distribution.

### 6.2 Recommended algorithm

* At session start, build `pool: KanaItem[]`.
* Create `bag: KanaItem[] = shuffle(pool)`.
* On `next()`, return `bag.pop()`. If `bag` is empty → `bag = shuffle(pool)`.
* If the item equals `lastItem` and `pool.length > 1`, pull the next one.

---

## 7) Training screen logic (state machine)

States:

* `question` (answer hidden)
* `answer` (answer shown)

Transitions:

* `question` + click `Reveal` → `answer`
* `answer` + click `Next` → load next item, go to `question`

---

## 8) Technical implementation (Angular) — SOLID-oriented

This is a reference architecture for the MVP to keep responsibilities separated and ensure extensibility (e.g., adding new romaji rules, new datasets, new random algorithms without rewriting UI code).

### 8.1 SOLID principles applied

**S — Single Responsibility (SRP)**

* Components: rendering + UI events only.
* Services: business logic only (pool building, random generation, prompt/answer mapping, settings persistence).
* Data: separate from logic (constants/JSON/TS modules).

**O — Open/Closed (OCP)**

* New romaji systems / new kana sets / new random algorithms are added via *new implementations of interfaces*, without changing existing components.

**L — Liskov Substitution (LSP)**

* Any implementation of an interface (e.g., `IRandomGenerator`) must be substitutable without breaking consumers.

**I — Interface Segregation (ISP)**

* Keep interfaces small: random generator, settings repository, prompt/answer mapper, pool builder.

**D — Dependency Inversion (DIP)**

* Components and use-case services depend on abstractions (interfaces/InjectionTokens), not concrete classes.
* Concrete implementations are wired in a single DI module/file.

### 8.2 Routing

* `/` → `SettingsPageComponent`
* `/train` → `TrainerPageComponent`

### 8.3 Layers and dependencies

**UI (pages/components)** → depends on **Application layer (use-cases)** → depends on **Domain (models/ports)**.

**Infrastructure** (localStorage, concrete random generators, concrete prompt/answer mapping) is plugged via DI.

### 8.4 Suggested interfaces and tokens

**Domain models**

```ts
export type Script = 'hiragana' | 'katakana';
export type Category =
  | 'basic'
  | 'dakuten'
  | 'handakuten'
  | 'yoon'
  | 'small-vowels'
  | 'extended-katakana';

export interface KanaItem {
  id: string;
  script: Script;
  kana: string;
  romaji: string;
  categories: Category[];
}

export type TrainerMode = 'romaji-to-kana' | 'kana-to-romaji';

export interface TrainerSettings {
  mode: TrainerMode;
  scripts: Script[];          // selected
  categories: Category[];     // selected
  requireRevealBeforeNext: boolean;
  romajiSystem: 'hepburn';    // MVP (extend later)
}
```

**Ports (ISP/DIP)**

```ts
export interface ISettingsRepository {
  load(): TrainerSettings | null;
  save(settings: TrainerSettings): void;
}

export interface IKanaPoolBuilder {
  buildPool(settings: TrainerSettings): KanaItem[];
}

export interface IRandomGenerator<T> {
  init(pool: readonly T[]): void;
  next(): T;
}

export interface IPromptAnswerMapper {
  // maps KanaItem to prompt/answer given the chosen mode
  map(item: KanaItem, settings: TrainerSettings): { prompt: string; answer: string };
}
```

**InjectionTokens (DIP/OCP)**

* `SETTINGS_REPOSITORY: InjectionToken<ISettingsRepository>`
* `KANA_POOL_BUILDER: InjectionToken<IKanaPoolBuilder>`
* `RANDOM_GENERATOR: InjectionToken<IRandomGenerator<KanaItem>>`
* `PROMPT_ANSWER_MAPPER: InjectionToken<IPromptAnswerMapper>`

### 8.5 Application layer (use-cases)

**Goal:** centralize business logic and keep components “thin”.

* `SettingsService`:

  * holds current settings (signals/observable)
  * loads/saves via `ISettingsRepository`

* `TrainerSessionService`:

  * `start(settings)` → builds pool via `IKanaPoolBuilder`, initializes `IRandomGenerator`
  * `next()` → returns next `KanaItem`
  * stores `lastItemId` / counters / “is answer revealed” state

* `TrainerViewModelService` (optional):

  * maps `KanaItem` → `{prompt, answer}` via `IPromptAnswerMapper`

### 8.6 Infrastructure layer (concrete implementations)

* `LocalStorageSettingsRepository implements ISettingsRepository`
* `DefaultKanaPoolBuilder implements IKanaPoolBuilder`
* `BagRandomGenerator<T> implements IRandomGenerator<T>` (random-without-replacement)
* `DefaultPromptAnswerMapper implements IPromptAnswerMapper`

Why this is SOLID:

* SRP: each class has one reason to change.
* OCP: want a different random algorithm? Add a new `IRandomGenerator` implementation and switch the provider.
* DIP: UI/session services do not know about localStorage or concrete random logic.

### 8.7 Folder structure (example)

```
src/app/
  domain/
    models/
      kana-item.ts
      trainer-settings.ts
    ports/
      settings-repository.ts
      kana-pool-builder.ts
      random-generator.ts
      prompt-answer-mapper.ts
  infrastructure/
    repositories/
      local-storage-settings.repository.ts
    random/
      bag-random.generator.ts
    mappers/
      default-prompt-answer.mapper.ts
    pool/
      default-kana-pool.builder.ts
    di/
      app.providers.ts
  application/
    services/
      settings.service.ts
      trainer-session.service.ts
  pages/
    settings/
    trainer/
  core/
    data/
      hiragana.ts
      katakana.ts
      extended-katakana.ts
```

### 8.8 DI composition in one place

* In `app.providers.ts`, wire tokens via `useClass` providers.
* This is the single place where concrete implementations are selected.

---

## 9) Acceptance criteria

1. On the Settings screen, user can select scripts and categories; Start is disabled without a valid selection.
2. On the Training screen:

   * Prompt is shown (romaji or kana depending on mode);
   * `Reveal` shows the answer;
   * `Next` returns the next item;
   * the same item is never shown twice in a row.
3. Settings persist (after refresh, the app restores them).
4. The pool includes **extended katakana combinations** from section 5 (at minimum).

---

## 10) Ideas for expansion (not MVP)

* Statistics: per-item counts, “weak areas”, weighted repeats for mistakes.
* Timer/pacing: auto-advance after N seconds.
* Import/export custom sets (JSON).
* PWA/offline.
* Multiple romaji systems (Hepburn/Kunrei) with a toggle.

---

## 11) What to implement first (practical plan)

1. Build the `KanaItem[]` dataset for - already done into /dataset directory
2. Implement SettingsPage + persistence.
3. Implement TrainerPage + “bag” generator.
4. Add hotkeys.
