import { ArrowRight } from "lucide-react";

type SiteFooterProps = {
  onOpenDiagnosis: () => void;
};

export default function SiteFooter({ onOpenDiagnosis }: SiteFooterProps) {
  return (
    <>
      <div className="mobile-sticky-cta">
        <span>条件を入力して最適な会社を探す</span>
        <button onClick={onOpenDiagnosis}>診断・見積もり <ArrowRight size={16} /></button>
      </div>
      <footer className="jp-footer" id="column">
        <div className="jp-container">
          <strong>フロアコーティング比較</strong>
          <span>正しい比較で、納得の床選び。</span>
          <small>© 2026 Floor Coating Guide / 運営会社 / プライバシーポリシー</small>
        </div>
      </footer>
    </>
  );
}
