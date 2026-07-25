import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WA_NUMBER = "254142160076";

const STEPS = [
  { key: "name", label: "What's your name?", placeholder: "Your name", type: "text", min: 2 },
  { key: "challenge", label: "What challenge are you facing?", placeholder: "Tell us what's on your mind...", type: "textarea", min: 20 },
];

export default function Concierge() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const current = STEPS[step];
  const value = answers[current.key] || "";
  const isLast = step === STEPS.length - 1;

  function handleNext() {
    if (value.trim().length < current.min) return;
    if (isLast) {
      submit();
    } else {
      setStep((s) => s + 1);
    }
  }

  function submit() {
    const name = answers["name"] || "";
    const challenge = answers["challenge"] || value;

    const msg = `Hi Bellavione 👋\n\nMy name is ${name}.\n\nChallenge: ${challenge}\n\nCould you help me find the right piece?`;

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setDone(true);
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-8 py-16">
        <div className="w-full max-w-lg">
          {done ? (
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
                <Check className="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-[24px] font-black text-[#111]">We'll be in touch!</h2>
                <p className="text-[14px] text-[#666] mt-2">Your message has been sent to WhatsApp. We'll get back to you shortly.</p>
              </div>
              <a href="/" className="text-[12px] font-black uppercase tracking-widest text-[#111] underline">Back to Home</a>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {/* Progress */}
              <div className="flex gap-1.5">
                {STEPS.map((_, i) => (
                  <div key={i} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i <= step ? "bg-[#111]" : "bg-gray-200"}`} />
                ))}
              </div>

              {/* Greeting on first step */}
              {step === 0 && (
                <p className="text-[14px] text-[#666] leading-relaxed">
                  We're really sorry you're facing a challenge. We're here to help you find the perfect piece, let's start with a few quick questions.
                </p>
              )}

              {/* Question */}
              <div className="flex flex-col gap-4">
                <label className="text-[22px] sm:text-[28px] font-black text-[#111] leading-tight">
                  {current.label}
                </label>

                {current.type === "textarea" ? (
                  <textarea
                    rows={4}
                    value={value}
                    onChange={(e) => setAnswers((a) => ({ ...a, [current.key]: e.target.value }))}
                    placeholder={current.placeholder}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] text-[#111] placeholder-[#bbb] focus:outline-none focus:border-[#111] transition-colors resize-none"
                    onKeyDown={(e) => { if (e.key === "Enter" && e.metaKey) handleNext(); }}
                  />
                ) : (
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setAnswers((a) => ({ ...a, [current.key]: e.target.value }))}
                    placeholder={current.placeholder}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] text-[#111] placeholder-[#bbb] focus:outline-none focus:border-[#111] transition-colors"
                    onKeyDown={(e) => { if (e.key === "Enter") handleNext(); }}
                    autoFocus
                  />
                )}
                {value.trim().length > 0 && value.trim().length < current.min && (
                  <p className="text-[12px] text-[#999]">{current.min - value.trim().length} more character{current.min - value.trim().length !== 1 ? "s" : ""} needed</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                {step > 0 ? (
                  <button onClick={() => setStep((s) => s - 1)} className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-[#999] hover:text-[#111] transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                ) : <div />}

                <button
                  onClick={handleNext}
                  disabled={value.trim().length < current.min}
                  className="flex items-center gap-2 bg-[#111] text-white text-[12px] font-black uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-[#333] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {isLast ? "Send via WhatsApp" : "Next"}
                  {!isLast && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
