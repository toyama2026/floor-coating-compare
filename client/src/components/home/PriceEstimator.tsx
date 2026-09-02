import { useMemo, useState } from "react";
import type { Coating } from "./data";

type PriceEstimatorProps = {
  coatings: Coating[];
};

const DEFAULT_AREA = 33; // ≈ 20畳

export default function PriceEstimator({ coatings }: PriceEstimatorProps) {
  const [area, setArea] = useState(DEFAULT_AREA);

  const { low, high } = useMemo(() => {
    const rates = coatings.map((c) => c.pricePerSqm);
    const a = Number.isFinite(area) && area > 0 ? area : 0;
    return { low: Math.round((Math.min(...rates) * a) / 1000) * 1000, high: Math.round((Math.max(...rates) * a) / 1000) * 1000 };
  }, [coatings, area]);

  return (
    <section className="price-section jp-container" id="price">
      <div className="section-heading">
        <h2>フロアコーティングの料金相場</h2>
        <span className="price-note">20畳（約33㎡）の場合の目安</span>
      </div>
      <div className="price-table-wrap">
        <table className="price-table">
          <tbody>
            {coatings.map((c) => (
              <tr key={c.name}>
                <th scope="row">{c.name.replace("コーティング", "")}</th>
                <td>¥{c.basePrice20jo.toLocaleString()}〜</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="price-calc">
        <label>
          施工面積を入力
          <div className="price-calc-input">
            <input
              type="number"
              min={1}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
            />
            <span>㎡</span>
          </div>
        </label>
        <div className="price-calc-result">
          <span>概算費用</span>
          <b>{low > 0 && high > 0 ? `¥${low.toLocaleString()}〜¥${high.toLocaleString()}` : "面積を入力してください"}</b>
        </div>
      </div>
      <p className="spec-note">※コーティングの種類ごとの単価に基づく概算です。実際の費用は建物条件や施工会社により変動します。</p>
    </section>
  );
}
