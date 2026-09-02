import { ArrowRight, Check, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { diagnosisOptions, questions } from "./data";

type DiagnosisModalProps = {
  open: boolean;
  onClose: () => void;
};

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function DiagnosisModal({ open, onClose }: DiagnosisModalProps) {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [answers, setAnswers] = useState<string[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    setStep(0);
    setSent(false);
    setAnswers([]);
    setDirection("forward");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    modalRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !modalRef.current) return;
      const focusable = Array.from(modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  const chooseAnswer = (answer: string) => {
    setAnswers((current) => {
      const next = [...current];
      next[step] = answer;
      return next;
    });
    setDirection("forward");
    setStep((current) => current + 1);
  };
  const goBack = () => { setDirection("back"); setStep((current) => Math.max(0, current - 1)); };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setSent(true); toast("診断内容を受け付けました"); };

  return (
    <div className="diag-layer" onMouseDown={onClose}>
      <div
        className="diag-modal"
        role="dialog"
        aria-modal="true"
        aria-label="フロアコーティング診断"
        tabIndex={-1}
        ref={modalRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="modal-close" aria-label="閉じる" onClick={onClose}><X /></button>
        <div key={`${sent}-${step}`} className={`diag-step-view ${direction}`}>
          {sent ? (
            <div className="diag-complete">
              <Check size={34} />
              <h2>診断内容を<br /><em>受け付けました</em></h2>
              <p>このモックアップでは完了画面を表示しています。実運用時は診断結果と見積もり候補をお送りします。</p>
              <button className="green-btn" onClick={onClose}>閉じる</button>
            </div>
          ) : step < questions.length ? (
            <>
              <p className="eyebrow">AI COATING DIAGNOSIS　{String(step + 1).padStart(2, "0")} / 05</p>
              <h2>{questions[step]}</h2>
              <div className="diag-options">
                {diagnosisOptions[step].map((x) => (
                  <button key={x} className={answers[step] === x ? "selected" : ""} onClick={() => chooseAnswer(x)}>
                    {x}<ChevronRight />
                  </button>
                ))}
              </div>
              <div className="diag-controls">
                {step > 0 ? <button type="button" className="diag-back" onClick={goBack}>← 前の質問へ</button> : <span />}
                <span>回答済み {step} / 5</span>
              </div>
              <div className="diag-progress"><i style={{ width: `${((step + 1) / 5) * 100}%` }} /></div>
            </>
          ) : (
            <form onSubmit={onSubmit}>
              <p className="eyebrow">RESULT CONTACT</p>
              <h2>診断結果を<br /><em>受け取る</em></h2>
              <label>
                メールアドレス
                <input required type="email" placeholder="example@example.jp" />
              </label>
              <button className="green-btn" type="submit">結果を見る <ArrowRight size={17} /></button>
              <small>入力内容は診断結果のご連絡のみに使用します。</small>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
