import { Menu, X } from "lucide-react";

type HeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onScrollToCompanies: () => void;
  onOpenDiagnosis: () => void;
};

export default function Header({ menuOpen, onToggleMenu, onScrollToCompanies, onOpenDiagnosis }: HeaderProps) {
  return (
    <header className="jp-header">
      <div className="jp-container header-row">
        <a href="#top" className="jp-logo">
          <span className="logo-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="20" height="20" fill="none">
              <rect x="3" y="8.8" width="26" height="2.4" rx="1.2" fill="currentColor" />
              <rect x="3" y="14.8" width="18.5" height="2.4" rx="1.2" fill="currentColor" />
              <rect x="3" y="20.8" width="26" height="2.4" rx="1.2" fill="currentColor" />
              <circle cx="26" cy="16" r="2.4" fill="var(--green)" />
            </svg>
          </span>
          <span>
            <strong className="wordmark"><span>floor</span><span>compare</span></strong>
            <small>フロアコーティング比較</small>
          </span>
        </a>
        <nav className={menuOpen ? "jp-nav show" : "jp-nav"}>
          <a href="#types">コーティングを比較</a>
          <a href="#purpose">目的から探す</a>
          <a href="#floor">床材から探す</a>
          <a href="#price">料金相場</a>
          <a href="#companies">施工事例</a>
          <a href="#column">コラム</a>
          <button className="outline-btn" onClick={onScrollToCompanies}>施工会社を探す</button>
          <button className="green-btn" onClick={onOpenDiagnosis}>無料診断・見積もり</button>
        </nav>
        <button className="mobile-menu" onClick={onToggleMenu} aria-label="メニュー">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
