const POLICIES = [
  { title: "掲載基準", body: "会社概要・許認可・保証体制・過去の施工実績を確認できた施工店を掲載しています。基準を満たさない申込みはお断りしています。" },
  { title: "評価方法", body: "★評価は、施工を依頼したユーザーへのアンケート結果（仕上がり・対応・価格納得度の平均）と口コミ件数をもとに算出しています。" },
  { title: "価格調査方法", body: "掲載価格は各社への公開ヒアリングに基づく目安です。実際の金額は施工面積・建物条件・キャンペーンにより変動します。" },
  { title: "ランキング算出方法", body: "「おすすめ順」は評価・価格・保証・実績を編集部が独自に加重して算出しています。並び替えでは各項目を単独の基準に切り替えられます。" },
];

export default function TrustSection() {
  return (
    <section className="trust-section jp-container" id="trust">
      <div className="section-heading">
        <h2>比較基準について</h2>
        <span className="trust-updated">情報更新日：2026年9月1日</span>
      </div>
      <div className="trust-grid">
        {POLICIES.map((p) => (
          <div className="trust-card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
      <p className="trust-editorial">
        <b>編集方針　</b>
        当サイトは施工会社からの掲載料で運営していますが、ランキングや評価は掲載料の金額によって変わりません。ユーザーにとっての比較しやすさを最優先に、基準を定期的に見直しています。
      </p>
    </section>
  );
}
