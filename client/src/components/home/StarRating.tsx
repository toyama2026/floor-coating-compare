import { Star } from "lucide-react";

type StarRatingProps = {
  label: string;
  value: number;
  max?: number;
};

export default function StarRating({ label, value, max = 5 }: StarRatingProps) {
  return (
    <div className="spec-row">
      <span className="spec-label">{label}</span>
      <span className="spec-stars" aria-label={`${label} ${value} / ${max}`}>
        {Array.from({ length: max }, (_, i) => (
          <Star key={i} size={11} fill={i < value ? "currentColor" : "none"} className={i < value ? "filled" : ""} />
        ))}
      </span>
    </div>
  );
}
