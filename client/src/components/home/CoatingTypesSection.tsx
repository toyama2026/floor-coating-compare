import { ChevronRight } from "lucide-react";
import { toast } from "sonner";
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
          <a href="#results">すべての比較を見る <ChevronRight size={16} /></a>
        </div>
        <div className="coating-grid">
          {coatings.map((c) => (
            <article className="coating-card" key={c.name}>
              <div className="card-title">
                <b>{c.name}</b>
                <span className={`badge ${c.color}`}>{c.badge}</span>
              </div>
              <img src={c.image} alt={`${c.name}を施工した床の仕上がりイメージ`} />
              <p>{c.copy}</p>
              <div className="tag-row">
                {c.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <button onClick={() => toast(`${c.name}の詳細ページはモックアップです`)}>詳しく見る <ChevronRight size={15} /></button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
