import { ArrowRight, Check, JapaneseYen } from "lucide-react";

type BottomCtaProps = {
  onOpenDiagnosis: () => void;
};

export default function BottomCta({ onOpenDiagnosis }: BottomCtaProps) {
  return (
    <section className="bottom-cta">
      <div className="jp-container bottom-row">
        <div><Check size={25} /><span>最大3社まで<br /><b>一括で見積もり依頼</b></span></div>
        <div><Check size={25} /><span>比較して納得の<br /><b>施工会社が見つかる</b></span></div>
        <div><Check size={25} /><span>しつこい営業は<br /><b>一切ありません</b></span></div>
        <div><JapaneseYen size={25} /><span>ご相談・見積もりは<br /><b>すべて無料です</b></span></div>
        <button onClick={onOpenDiagnosis}>簡単1分！無料で一括見積もり <ArrowRight size={20} /><small>最大3社からまとめて見積もりを取得できます</small></button>
      </div>
    </section>
  );
}
