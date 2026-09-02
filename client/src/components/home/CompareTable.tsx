import { Star } from "lucide-react";
import type { Coating } from "./data";

function Stars({ value }: { value: number }) {
  return (
    <span className="compare-stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={11} fill={i < value ? "currentColor" : "none"} className={i < value ? "filled" : ""} />
      ))}
    </span>
  );
}

type CompareTableProps = {
  coatings: Coating[];
};

export default function CompareTable({ coatings }: CompareTableProps) {
  return (
    <div className="compare-table-wrap">
      <table className="compare-table">
        <thead>
          <tr>
            <th scope="col"></th>
            {coatings.map((c) => <th scope="col" key={c.name}>{c.name.replace("コーティング", "")}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">耐久性</th>
            {coatings.map((c) => <td key={c.name}><Stars value={c.specs.durability} /></td>)}
          </tr>
          <tr>
            <th scope="row">光沢</th>
            {coatings.map((c) => <td key={c.name}>{c.glossLabel}</td>)}
          </tr>
          <tr>
            <th scope="row">滑りにくさ</th>
            {coatings.map((c) => <td key={c.name}><Stars value={c.specs.slipResistance} /></td>)}
          </tr>
          <tr>
            <th scope="row">傷耐性</th>
            {coatings.map((c) => <td key={c.name}><Stars value={c.specs.scratchResistance} /></td>)}
          </tr>
          <tr>
            <th scope="row">価格</th>
            {coatings.map((c) => <td key={c.name}>{c.priceLabel}</td>)}
          </tr>
          <tr>
            <th scope="row">おすすめ</th>
            {coatings.map((c) => <td key={c.name} className="compare-recommend">{c.recommendedFor}</td>)}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
