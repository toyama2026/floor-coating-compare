import { ChevronRight, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { coatingTypeFilters, featureFilters, prefectures, type Company } from "./data";

type CompaniesSectionProps = {
  companies: Company[];
};

const SORTS = [
  { key: "recommended", label: "おすすめ順" },
  { key: "price", label: "価格が安い順" },
  { key: "reviews", label: "口コミ順" },
  { key: "warranty", label: "保証順" },
] as const;

type SortKey = (typeof SORTS)[number]["key"];

function toggleInSet(set: string[], value: string): string[] {
  return set.includes(value) ? set.filter((v) => v !== value) : [...set, value];
}

export default function CompaniesSection({ companies }: CompaniesSectionProps) {
  const [sort, setSort] = useState<SortKey>("recommended");
  const [prefecture, setPrefecture] = useState<string>("all");
  const [coatingFilter, setCoatingFilter] = useState<string[]>([]);
  const [featureFilter, setFeatureFilter] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return companies.filter((c) => {
      if (prefecture !== "all" && c.prefecture !== prefecture) return false;
      if (coatingFilter.length > 0 && !coatingFilter.every((f) => c.coatingTypes.includes(f))) return false;
      if (featureFilter.length > 0 && !featureFilter.every((f) => c.features.includes(f))) return false;
      return true;
    });
  }, [companies, prefecture, coatingFilter, featureFilter]);

  const sorted = useMemo(() => {
    const list = [...filtered];
    switch (sort) {
      case "price":
        return list.sort((a, b) => a.priceValue - b.priceValue);
      case "reviews":
        return list.sort((a, b) => Number(b.reviews) - Number(a.reviews));
      case "warranty":
        return list.sort((a, b) => b.warrantyYears - a.warrantyYears);
      default:
        return list.sort((a, b) => Number(b.rating) - Number(a.rating));
    }
  }, [filtered, sort]);

  return (
    <section className="companies-section" id="companies">
      <div className="jp-container">
        <div className="section-heading">
          <h2>施工会社を探す</h2>
          <a href="#companies">すべての施工会社を見る <ChevronRight size={16} /></a>
        </div>

        <div className="company-search">
          <label className="search-field">
            <span>施工エリア</span>
            <select value={prefecture} onChange={(e) => setPrefecture(e.target.value)}>
              <option value="all">すべてのエリア</option>
              {prefectures.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </label>
          <div className="search-field">
            <span>コーティング</span>
            <div className="checkbox-row">
              {coatingTypeFilters.map((c) => (
                <label key={c} className={coatingFilter.includes(c) ? "checked" : ""}>
                  <input type="checkbox" checked={coatingFilter.includes(c)} onChange={() => setCoatingFilter((s) => toggleInSet(s, c))} />
                  {c}
                </label>
              ))}
            </div>
          </div>
          <div className="search-field">
            <span>こだわり</span>
            <div className="checkbox-row">
              {featureFilters.map((f) => (
                <label key={f} className={featureFilter.includes(f) ? "checked" : ""}>
                  <input type="checkbox" checked={featureFilter.includes(f)} onChange={() => setFeatureFilter((s) => toggleInSet(s, f))} />
                  {f}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="sort-tabs" role="tablist" aria-label="施工会社の並び替え">
          <span className="result-count">{sorted.length}社</span>
          {SORTS.map((s) => (
            <button key={s.key} role="tab" aria-selected={sort === s.key} className={sort === s.key ? "active" : ""} onClick={() => setSort(s.key)}>
              {s.label}
            </button>
          ))}
        </div>

        {sorted.length === 0 ? (
          <p className="company-empty">条件に合う施工会社が見つかりませんでした。絞り込み条件を変えてお試しください。</p>
        ) : (
          <div className="company-grid">
            {sorted.map((c, i) => (
              <article className="company-card" key={c.name}>
                <div className="company-photo">
                  <img src={c.image} alt={`${c.name}の施工事例`} />
                  {i === 0 && sort === "recommended" && <span>厳選施工店</span>}
                </div>
                <div className="company-body">
                  <h3>{c.name}</h3>
                  <small>{c.area}</small>
                  <div className="company-rating">
                    <Star size={14} fill="currentColor" /> <b>{c.rating}</b> <span>({c.reviews}件)</span>
                  </div>
                  <div className="tag-row">
                    {c.coatingTypes.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <dl className="company-facts">
                    <div><dt>対応エリア</dt><dd>{c.serviceArea}</dd></div>
                    <div><dt>価格目安</dt><dd>{c.price}</dd></div>
                    <div><dt>保証</dt><dd>最長{c.warrantyYears}年</dd></div>
                    <div><dt>施工実績</dt><dd>{c.trackRecord.toLocaleString()}件</dd></div>
                  </dl>
                  <button onClick={() => toast(`${c.name}の詳細ページはモックアップです`)}>無料見積もりを依頼 <ChevronRight size={15} /></button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
