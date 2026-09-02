import { ChevronRight, Home as HouseIcon, PawPrint, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import { toast } from "sonner";
import { floorMaterials } from "./data";

const purposeLinks: [LucideIcon, string][] = [
  [HouseIcon, "新築時に施工したい"],
  [PawPrint, "ペットの滑り対策をしたい"],
  [ShieldCheck, "傷・へこみを防ぎたい"],
  [Sparkles, "艶を抑えたい（艶なし）"],
  [HouseIcon, "お掃除を楽にしたい"],
  [ShieldCheck, "子ども・高齢者がいる"],
];

const regions = ["北海道・東北", "関東", "中部", "関西", "中国・四国", "九州・沖縄"];

type BrowseSectionProps = {
  onOpenDiagnosis: () => void;
};

export default function BrowseSection({ onOpenDiagnosis }: BrowseSectionProps) {
  return (
    <section className="browse-section jp-container">
      <div className="browse-card" id="purpose">
        <h3>目的から探す</h3>
        {purposeLinks.map(([Icon, text]) => (
          <button key={text} onClick={onOpenDiagnosis}>
            <Icon size={15} /> {text} <ChevronRight size={14} />
          </button>
        ))}
        <a href="#types">すべての目的を見る <ChevronRight size={15} /></a>
      </div>
      <div className="browse-card regional" id="region">
        <h3>お住まいの地域から探す</h3>
        <div className="map-placeholder">
          {regions.map((r) => <span key={r}>{r}</span>)}
        </div>
        <button className="region-btn" onClick={() => toast("都道府県選択はモックアップです")}>都道府県から施工会社を探す <ChevronRight size={15} /></button>
      </div>
      <div className="browse-card" id="floor">
        <h3>床材から探す</h3>
        {floorMaterials.map((t) => (
          <button key={t} onClick={() => toast(`${t}の比較はモックアップです`)}>
            <span className="floor-dot" />{t}<ChevronRight size={14} />
          </button>
        ))}
        <a href="#types">すべての床材を見る <ChevronRight size={15} /></a>
      </div>
    </section>
  );
}
