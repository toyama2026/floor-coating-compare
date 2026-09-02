import { JapaneseYen, Map, ShieldCheck, Sparkles } from "lucide-react";

type HeroProps = {
  onOpenDiagnosis: () => void;
  onScrollToCompanies: () => void;
};

export default function Hero({ onOpenDiagnosis, onScrollToCompanies }: HeroProps) {
  return (
    <section className="jp-hero">
      <div className="hero-overlay" />
      <div className="jp-container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">FLOOR COATING COMPARISON</p>
          <h1>
            床を、長くきれいに。
            <br />
            あなたの家に合う
            <br />
            <em>フロアコーティング</em>が見つかる。
          </h1>
          <p>全国の施工会社を比較して、最適なプランを無料でご提案します。</p>
          <div className="hero-actions">
            <button className="hero-diagnosis" onClick={onOpenDiagnosis}>
              <span><Sparkles size={21} /></span>
              <small>あなたに合うコーティングがわかる</small>
              <b>30秒でおすすめ診断</b>
            </button>
            <button className="hero-compare" onClick={onScrollToCompanies}>
              <span><JapaneseYen size={22} /></span>
              <small>複数社から見積もりを無料で取得</small>
              <b>施工会社を比較する</b>
            </button>
          </div>
        </div>
      </div>
      <div className="hero-trust jp-container">
        <div>
          <Map size={31} />
          <span>
            <b>全国の優良施工店を掲載</b>
            <small>
              厳しい審査を通過した
              <br />
              信頼できる会社のみ
            </small>
          </span>
        </div>
        <div>
          <JapaneseYen size={31} />
          <span>
            <b>料金・保証をしっかり比較</b>
            <small>
              相場価格や保証内容を比較して
              <br />
              納得のいく会社が見つかる
            </small>
          </span>
        </div>
        <div>
          <ShieldCheck size={31} />
          <span>
            <b>見積もり・相談は完全無料</b>
            <small>
              ご利用はすべて無料。
              <br />
              しつこい営業もありません
            </small>
          </span>
        </div>
      </div>
    </section>
  );
}
