export type Coating = { name: string; badge: string; color: string; image: string; copy: string; tags: string[] };

export const coatings: Coating[] = [
  { name: "ガラスコーティング", badge: "人気No.1", color: "green", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=85", copy: "耐久性に優れ、自然な仕上がりで長期間床を保護します。", tags: ["高耐久", "自然な艶"] },
  { name: "UVコーティング", badge: "高い耐久性", color: "blue", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=700&q=85", copy: "紫外線で硬化するコーティング。高い光沢と耐久性が特徴です。", tags: ["高光沢", "即日硬化"] },
  { name: "シリコンコーティング", badge: "コスパ◎", color: "orange", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=85", copy: "コストを抑えながら床を保護。日常使いに最適です。", tags: ["滑りに配慮", "価格重視"] },
  { name: "ペット対応コーティング", badge: "滑りにくく安心", color: "pink", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=85", copy: "ペットの足腰に優しく、滑りにくい特殊なコーティングです。", tags: ["ペット向け", "防汚"] },
];

export type Company = { name: string; area: string; rating: string; reviews: string; price: string; image: string; tag: string };

export const companies: Company[] = [
  { name: "REALIFE（リアライフ）", area: "福岡県福岡市", rating: "4.9", reviews: "126", price: "¥25,300〜 / 20畳", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=85", tag: "厳選施工店" },
  { name: "株式会社 フロアエージェント", area: "東京都世田谷区", rating: "4.8", reviews: "96", price: "¥23,100〜 / 20畳", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85", tag: "首都圏対応" },
  { name: "株式会社 コーティングLab", area: "大阪府大阪市", rating: "4.7", reviews: "88", price: "¥20,900〜 / 20畳", image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=700&q=85", tag: "自社施工" },
  { name: "ペットライフコート", area: "愛知県名古屋市", rating: "4.9", reviews: "72", price: "¥24,200〜 / 20畳", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=85", tag: "ペット専門" },
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
