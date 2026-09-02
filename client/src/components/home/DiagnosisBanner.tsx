import { ArrowRight } from "lucide-react";

type DiagnosisBannerProps = {
  onOpenDiagnosis: () => void;
};

export default function DiagnosisBanner({ onOpenDiagnosis }: DiagnosisBannerProps) {
  return (
    <section className="diagnosis-banner jp-container" id="price">
      <div className="diagnosis-person">♧</div>
      <div>
        <h2>簡単<span>30秒</span>！AIフロアコーティング診断</h2>
        <p>5つの質問に答えるだけで、あなたに最適なコーティングと施工会社をご提案します。</p>
      </div>
      <div className="diagnosis-cta">
        <button className="green-btn" onClick={onOpenDiagnosis}>無料で診断をはじめる <ArrowRight size={18} /></button>
        <small>所要時間 約30秒　 登録不要・完全無料</small>
      </div>
    </section>
  );
}
