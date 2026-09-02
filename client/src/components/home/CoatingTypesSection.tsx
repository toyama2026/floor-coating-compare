import { ChevronRight } from "lucide-react";
import { toast } from "sonner";
import CompareTable from "./CompareTable";
import StarRating from "./StarRating";
import type { Coating } from "./data";

type CoatingTypesSectionProps = {
  coatings: Coating[];
};

export default function CoatingTypesSection({ coatings }: CoatingTypesSectionProps) {
  return (
    <section className="types-section" id="types">
      <div className="jp-container">
        <div className="section-heading">
          <h2>コーティングの種類を比較</h2>
        </div>
        <CompareTable coatings={coatings} />
        <div className="section-heading section-heading-sub" id="results">
          <h3>4種類を詳しく比較する</h3>
        </div>
        <div className="coating-grid">
          {coatings.map((c) => (
            <article className="coating-card" key={c.name}>
              <div className="card-title">
                <b>{c.name}</b>
                <span className={`badge ${c.color}`}>{c.badge}</span>
              </div>
              <img src={c.image} alt={`${c.name}を施工した床の仕上がりイメージ`} />
              <div className="coating-specs">
                <StarRating label="耐久性" value={c.specs.durability} />
                <StarRating label="光沢" value={c.specs.gloss} />
                <StarRating label="滑りにくさ" value={c.specs.slipResistance} />
                <StarRating label="価格の手頃さ" value={c.specs.costRating} />
                <div className="spec-row spec-row-text"><span className="spec-label">耐用年数</span><b>{c.lifespan}</b></div>
                <div className="spec-row spec-row-text"><span className="spec-label">価格目安</span><b>{c.priceRange}</b></div>
              </div>
              <p>{c.copy}</p>
              <div className="tag-row">
                {c.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <button onClick={() => toast(`${c.name}の詳細ページはモックアップです`)}>詳しく見る <ChevronRight size={15} /></button>
            </article>
          ))}
        </div>
        <p className="spec-note">※耐久性・光沢・滑りにくさ・価格の手頃さは編集部調べの目安です。詳しい算出方法は<a href="#trust">比較基準について</a>をご覧ください。</p>
      </div>
    </section>
  );
}
