export type Lang = "en" | "zh";

// Brand voice lives in English; ZH is warm, editorial Traditional Chinese.
// Slogans & wordmark stay English across both languages by design.
export const dict = {
  nav: {
    starmonster: { en: "Starmonster", zh: "星星怪獸" },
    product: { en: "Product", zh: "產品" },
    shop: { en: "Shop", zh: "選購" },
    collections: { en: "Collections", zh: "系列" },
    journal: { en: "Journal", zh: "日誌" },
    about: { en: "About", zh: "關於" },
    dreamList: { en: "Dream List", zh: "夢想清單" },
  },
  home: {
    eyebrow: { en: "The eye mask of 11yo CxY's imagination", zh: "11 歲 CxY 的想像力眼罩" },
    heroLine1: { en: "Dream", zh: "Dream" },
    heroLine2: { en: "More.", zh: "More." },
    heroSub: {
      en: "An eye mask brand built on comfort, healing and imagination — shaped, for now, like a pair of sunglasses.",
      zh: "一個建立在舒適、療癒與想像力之上的眼罩品牌 — 現在，它長得像一副太陽眼鏡。",
    },
    heroCta: { en: "Join the Dream List", zh: "加入夢想清單" },
    heroCta2: { en: "See the first piece", zh: "看看第一件作品" },

    conceptKicker: { en: "01 — The Concept", zh: "01 — 概念" },
    conceptTitle: { en: "Borrowed from sunglasses.", zh: "靈感，借自太陽眼鏡。" },
    conceptBody: {
      en: "The first collection takes the silhouette of sunglasses and turns it soft. A two-tone mask you wear to step out of the day — not a medical accessory, but a small object of escape.",
      zh: "第一個系列借用太陽眼鏡的輪廓，把它變柔軟。一只雙色眼罩，戴上它，從白日抽身 — 它不是醫療配件，而是一個小小的逃逸之物。",
    },

    valuesKicker: { en: "02 — The Core", zh: "02 — 核心" },
    valuesTitle: { en: "Three things we hold.", zh: "我們守著三件事。" },
    comfort: { en: "Comfort", zh: "舒適" },
    comfortBody: {
      en: "Soft on the skin, soft on the day. Rest that feels like a held breath.",
      zh: "對肌膚溫柔，也對日子溫柔。像一次被托住的呼吸。",
    },
    healing: { en: "Healing", zh: "療癒" },
    healingBody: {
      en: "A pause you can put on. Quiet, not clinical.",
      zh: "一個可以戴上的暫停。安靜，而非臨床。",
    },
    imagination: { en: "Imagination", zh: "想像力" },
    imaginationBody: {
      en: "An 11-year-old's idea of what a mask could be. Creative, never cute.",
      zh: "一個 11 歲孩子對眼罩的想像。有創意，而非可愛。",
    },

    bipKicker: { en: "03 — Building in Public", zh: "03 — 公開打造" },
    bipTitle: { en: "Made in the open, by an 11-year-old.", zh: "由一位 11 歲的孩子，公開打造。" },
    bipBody: {
      en: "imasque is being built by CxY in public — every colour choice, every wrong turn, every small win, written down as it happens.",
      zh: "imasque 由 CxY 以 Building in Public 的方式打造 — 每一個配色、每一次走錯路、每一個小小的進展，都在發生的當下被記下來。",
    },
    bipCta: { en: "Read the Dream Journal", zh: "閱讀夢想日誌" },

    dreamKicker: { en: "04 — The Dream List", zh: "04 — 夢想清單" },
    dreamTitle: { en: "Dream with us.", zh: "和我們一起作夢。" },
    dreamBody: {
      en: "Leave your email. You'll hear first when the first mask is real — and you'll help shape what comes next.",
      zh: "留下你的 email。第一只眼罩成真時，你會最先知道 — 也會幫忙形塑接下來的樣子。",
    },
    emailPlaceholder: { en: "your@email.com", zh: "你的@email.com" },
    emailButton: { en: "Dream More", zh: "加入名單" },
    emailNote: {
      en: "No spam. Just dreams, occasionally.",
      zh: "沒有垃圾信。只有偶爾寄來的夢。",
    },
    emailThanks: {
      en: "You're on the list. Dream more.",
      zh: "你已加入名單。Dream More.",
    },
  },
  shop: {
    title: { en: "Shop", zh: "選購" },
    intro: {
      en: "One piece, for now. Built slowly, in public.",
      zh: "目前，只有一件。緩慢地、公開地打造。",
    },
    productName: { en: "The Sunglasses Mask", zh: "太陽眼鏡眼罩" },
    productTag: { en: "Two-tone · MVP 01", zh: "雙色 · MVP 01" },
    productDesc: {
      en: "A sleep mask in the silhouette of sunglasses, in two soft tones. The first object from CxY's imagination.",
      zh: "一只以太陽眼鏡為輪廓的睡眠眼罩，兩種柔和的色調。CxY 想像力中的第一件作品。",
    },
    status: { en: "In the making", zh: "製作中" },
    notify: { en: "Notify me", zh: "通知我" },
    soon: {
      en: "Not for sale yet. We're building it in the open — join the Dream List to follow along.",
      zh: "尚未開賣。我們正公開打造它 — 加入夢想清單一起見證。",
    },
  },
  collections: {
    title: { en: "Collections", zh: "系列" },
    intro: {
      en: "We start with one shape. The rest are still dreams.",
      zh: "我們從一個形狀開始。其餘的，都還是夢。",
    },
    current: { en: "Now", zh: "現在" },
    future: { en: "Future Dreams", zh: "未來的夢" },
    sunglasses: { en: "Sunglasses", zh: "太陽眼鏡" },
    sunglassesDesc: {
      en: "The first silhouette. Soft, two-tone, editorial.",
      zh: "第一個輪廓。柔和、雙色、editorial。",
    },
    soonLabel: { en: "Dreaming", zh: "夢想中" },
    flower: { en: "Flower", zh: "花" },
    animal: { en: "Animal", zh: "動物" },
    cloud: { en: "Cloud", zh: "雲" },
    fruit: { en: "Fruit", zh: "水果" },
    moon: { en: "Moon", zh: "月亮" },
  },
  journal: {
    title: { en: "Dream Journal", zh: "夢想日誌" },
    intro: {
      en: "The public record of building imasque.",
      zh: "公開記錄 imasque 的打造過程。",
    },
    building: { en: "Building imasque", zh: "Building imasque" },
    buildingDesc: {
      en: "Notes from the workshop — decisions, mistakes, small steps forward.",
      zh: "來自工作室的筆記 — 決定、失誤、向前的小步伐。",
    },
    behind: { en: "Behind the Mask", zh: "Behind the Mask" },
    behindDesc: {
      en: "Who CxY is, and why an 11-year-old is making eye masks.",
      zh: "CxY 是誰，以及為什麼一個 11 歲的孩子在做眼罩。",
    },
    color: { en: "Color Stories", zh: "Color Stories" },
    colorDesc: {
      en: "Where each two-tone pairing comes from.",
      zh: "每一組雙色配對的由來。",
    },
    notes: { en: "Dream Notes", zh: "Dream Notes" },
    notesDesc: {
      en: "Loose thoughts, dreams, things half-imagined.",
      zh: "鬆散的念頭、夢、半成形的想像。",
    },
    empty: {
      en: "First entries coming soon. The dream is still being written.",
      zh: "第一篇即將到來。夢，還在書寫中。",
    },
  },
  about: {
    title: { en: "About", zh: "關於" },
    formula: { en: "eye mask × 11yo CxY's imagination", zh: "eye mask × 11 歲 CxY 的想像力" },
    body1: {
      en: "imasque began with a simple question from an 11-year-old: what if an eye mask didn't have to look like an eye mask?",
      zh: "imasque 始於一個 11 歲孩子的簡單疑問：如果眼罩，不一定要長得像眼罩呢？",
    },
    body2: {
      en: "The answer, for now, looks like a pair of sunglasses — soft, two-tone, made to rest in. It isn't medical. It isn't a toy. It's a small object built on comfort, healing and imagination.",
      zh: "目前的答案，看起來像一副太陽眼鏡 — 柔和、雙色、為了休息而生。它不是醫療用品，也不是玩具。它是一個建立在舒適、療癒與想像力之上的小小物件。",
    },
    body3: {
      en: "CxY is building imasque in public, one dream at a time. This is the beginning.",
      zh: "CxY 正以 Building in Public 的方式打造 imasque，一次一個夢。這，是開始。",
    },
    signature: { en: "Dream More.", zh: "Dream More." },
  },
  footer: {
    tagline: { en: "The eye mask of 11yo CxY's imagination.", zh: "11 歲 CxY 想像力的眼罩。" },
    rights: { en: "DREAM MORE", zh: "DREAM MORE" },
  },
} as const;

export function t(node: { en: string; zh: string }, lang: Lang): string {
  return node[lang];
}
