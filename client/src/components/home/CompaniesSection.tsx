import { ChevronRight, Star } from "lucide-react";
import { toast } from "sonner";
import type { Company } from "./data";

type CompaniesSectionProps = {
  companies: Company[];
};

export default function CompaniesSection({ companies }: CompaniesSectionProps) {
  return (
    <section className="companies-section" id="companies">
      <div className="jp-container">
        <div className="section-heading">
          <h2>おすすめの施工会社</h2>
          <a href="#companies">すべての施工会社を見る <ChevronRight size={16} /></a>
        </div>
        <div className="company-grid">
          {companies.map((c, i) => (
            <article className="company-card" key={c.name}>
              <div className="company-photo">
                <img src={c.image} alt={`${c.name}の施工事例`} />
                {i === 0 && <span>厳選施工店</span>}
              </div>
              <div className="company-body">
                <h3>{c.name}</h3>
                <small>{c.area}</small>
                <div className="company-rating">
                  <Star size={14} fill="currentColor" /> <b>{c.rating}</b> <span>({c.reviews}件)</span>
                </div>
                <div className="tag-row">
                  <span>ガラス</span>
                  <span>UV</span>
                  {i % 2 === 0 && <span>ペット対応</span>}
                </div>
                <p>参考価格　<b>{c.price}</b></p>
                <button onClick={() => toast(`${c.name}の詳細ページはモックアップです`)}>詳細を見る <ChevronRight size={15} /></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
