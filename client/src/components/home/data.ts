export type Coating = {
  name: string;
  badge: string;
  color: string;
  image: string;
  copy: string;
  tags: string[];
  specs: { durability: number; gloss: number; slipResistance: number; scratchResistance: number; costRating: number };
  glossLabel: string;
  priceLabel: string;
  recommendedFor: string;
  lifespan: string;
  priceRange: string;
  basePrice20jo: number;
  pricePerSqm: number;
};

export const coatings: Coating[] = [
  {
    name: "ガラスコーティング",
    badge: "人気No.1",
    color: "green",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=85",
    copy: "耐久性に優れ、自然な仕上がりで長期間床を保護します。",
    tags: ["高耐久", "自然な艶"],
    specs: { durability: 5, gloss: 4, slipResistance: 3, scratchResistance: 5, costRating: 3 },
    glossLabel: "控えめ",
    priceLabel: "中",
    recommendedFor: "新築におすすめ",
    lifespan: "20〜30年",
    priceRange: "¥4,000〜/畳",
    basePrice20jo: 80000,
    pricePerSqm: 2424,
  },
  {
    name: "UVコーティング",
    badge: "高い耐久性",
    color: "blue",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=700&q=85",
    copy: "紫外線で硬化するコーティング。高い光沢と耐久性が特徴です。",
    tags: ["高光沢", "即日硬化"],
    specs: { durability: 5, gloss: 5, slipResistance: 3, scratchResistance: 4, costRating: 2 },
    glossLabel: "強い",
    priceLabel: "高",
    recommendedFor: "光沢重視の方に",
    lifespan: "10〜20年",
    priceRange: "¥6,000〜/畳",
    basePrice20jo: 120000,
    pricePerSqm: 3636,
  },
  {
    name: "シリコンコーティング",
    badge: "コスパ◎",
    color: "orange",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=85",
    copy: "コストを抑えながら床を保護。日常使いに最適です。",
    tags: ["滑りに配慮", "価格重視"],
    specs: { durability: 3, gloss: 3, slipResistance: 4, scratchResistance: 3, costRating: 5 },
    glossLabel: "やや強い",
    priceLabel: "安",
    recommendedFor: "コスパ重視の方に",
    lifespan: "3〜5年",
    priceRange: "¥3,000〜/畳",
    basePrice20jo: 60000,
    pricePerSqm: 1818,
  },
  {
    name: "ペット対応コーティング",
    badge: "滑りにくく安心",
    color: "pink",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=85",
    copy: "ペットの足腰に優しく、滑りにくい特殊なコーティングです。",
    tags: ["ペット向け", "防汚"],
    specs: { durability: 4, gloss: 2, slipResistance: 5, scratchResistance: 4, costRating: 3 },
    glossLabel: "控えめ",
    priceLabel: "中〜高",
    recommendedFor: "ペットのいるご家庭に",
    lifespan: "5〜10年",
    priceRange: "¥5,000〜/畳",
    basePrice20jo: 100000,
    pricePerSqm: 3030,
  },
];

export type Company = {
  name: string;
  prefecture: string;
  area: string;
  serviceArea: string;
  rating: string;
  reviews: string;
  price: string;
  priceValue: number;
  warrantyYears: number;
  trackRecord: number;
  image: string;
  tag: string;
  coatingTypes: string[];
  features: string[];
};

export const prefectures = ["福岡県", "東京都", "大阪府", "愛知県"];
export const coatingTypeFilters = ["ガラス", "UV", "シリコン", "ペット対応"];
export const featureFilters = ["長期保証", "自社施工", "土日対応", "新築対応", "ペット対応"];

export const companies: Company[] = [
  { name: "REALIFE（リアライフ）", prefecture: "福岡県", area: "福岡県福岡市", serviceArea: "福岡・佐賀・熊本", rating: "4.9", reviews: "126", price: "¥25,300〜 / 20畳", priceValue: 25300, warrantyYears: 10, trackRecord: 1240, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=85", tag: "厳選施工店", coatingTypes: ["ガラス", "UV", "ペット対応"], features: ["長期保証", "自社施工", "ペット対応"] },
  { name: "株式会社 フロアエージェント", prefecture: "東京都", area: "東京都世田谷区", serviceArea: "東京・神奈川・埼玉・千葉", rating: "4.8", reviews: "96", price: "¥23,100〜 / 20畳", priceValue: 23100, warrantyYears: 8, trackRecord: 860, image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85", tag: "首都圏対応", coatingTypes: ["ガラス", "UV"], features: ["土日対応", "新築対応"] },
  { name: "株式会社 コーティングLab", prefecture: "大阪府", area: "大阪府大阪市", serviceArea: "大阪・京都・兵庫", rating: "4.7", reviews: "88", price: "¥20,900〜 / 20畳", priceValue: 20900, warrantyYears: 5, trackRecord: 640, image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=700&q=85", tag: "自社施工", coatingTypes: ["ガラス", "UV", "シリコン"], features: ["自社施工", "新築対応"] },
  { name: "ペットライフコート", prefecture: "愛知県", area: "愛知県名古屋市", serviceArea: "愛知・岐阜・三重", rating: "4.9", reviews: "72", price: "¥24,200〜 / 20畳", priceValue: 24200, warrantyYears: 10, trackRecord: 510, image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=85", tag: "ペット専門", coatingTypes: ["ガラス", "ペット対応"], features: ["長期保証", "ペット対応"] },
];

export const questions = ["ご入居のタイミングは？", "床を守りたい理由は？", "理想の仕上がりは？", "気になる床材は？", "お住まいの地域は？"];

export const diagnosisOptions: string[][] = [
  ["入居前・新築", "すでに入居中", "リフォーム予定"],
  ["傷・へこみを防ぎたい", "ペットの滑り対策をしたい", "お掃除を楽にしたい"],
  ["自然な艶（ナチュラル）", "しっかり艶（高光沢）", "艶を抑えたい（マット）"],
  ["シート／複合フローリング", "無垢フローリング", "大理石・タイルなど"],
  ["関東・中部", "関西・中国・四国", "北海道・東北／九州・沖縄"],
];

export const floorMaterials = ["シートフローリング（複合フローリング）", "突板フローリング", "挽板フローリング", "無垢フローリング", "大理石・タイル・その他"];
