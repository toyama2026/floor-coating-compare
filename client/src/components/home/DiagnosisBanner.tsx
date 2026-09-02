import { ArrowRight, ListChecks } from "lucide-react";

type DiagnosisBannerProps = {
  onOpenDiagnosis: () => void;
};

export default function DiagnosisBanner({ onOpenDiagnosis }: DiagnosisBannerProps) {
  return (
    <section className="diagnosis-banner jp-container" id="diagnosis">
      <div className="diagnosis-person"><ListChecks size={40} /></div>
      <div>
        <h2>あなたに合うコーティングを<span>30秒</span>で診断</h2>
        <p>床材・家族構成・ペット・予算から、AIが条件を比較して判定します。</p>
      </div>
      <div className="diagnosis-cta">
        <button className="green-btn" onClick={onOpenDiagnosis}>無料で診断をはじめる <ArrowRight size={18} /></button>
        <small>所要時間 約30秒　 登録不要・完全無料</small>
      </div>
    </section>
  );
}
