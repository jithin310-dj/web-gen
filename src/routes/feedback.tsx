import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Star, MessageSquare, Send } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/feedback")({
  component: FeedbackPage,
});

const EMAILJS_SERVICE =
  (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID ?? "service_hn6td4w";

const EMAILJS_TEMPLATE =
  (import.meta as any).env?.VITE_EMAILJS_FEEDBACK_TEMPLATE_ID ??
  "template_g6hw76l";

const EMAILJS_PUBLIC =
  (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY ?? "xOrn17TuO3LliuJ9E";

function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  useEffect(() => {
    if (!submitted) return;

    const timer = setInterval(() => {
        setCountdown((prev) => {
        if (prev <= 1) {
            clearInterval(timer);
            navigate({ to: "/" });
            return 0;
        }
        return prev - 1;
        });
    }, 1000);

    return () => clearInterval(timer);
    }, [submitted, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
            from_name: form.name,
            from_email: form.email,
            rating: rating,
            message: form.feedback,
            to_email: "nexgencretions@gmail.com",
        },
        {
            publicKey: EMAILJS_PUBLIC,
        }
        );

        setSubmitted(true);

        setForm({
        name: "",
        email: "",
        feedback: "",
        });

        setRating(0);
    } catch (err: any) {
        console.error("EmailJS Error:", err);

        alert(
            err?.text ||
            err?.message ||
            JSON.stringify(err)
        );
    }
    };

  if (submitted) {
    return (
        <section className="container mx-auto max-w-3xl px-4 py-24 text-center">
        <div className="glass-card rounded-3xl border border-gold/20 p-10">
            <h1 className="text-4xl font-bold">🎉 Thank You!</h1>

            <p className="mt-4 text-lg text-muted-foreground">
            Your feedback has been received successfully.
            </p>

            <p className="mt-2 text-muted-foreground">
            Thank you for helping us improve NEXGEN CREATIONS.
            </p>

            <div className="mt-8 space-y-4">
            <p className="text-muted-foreground">
                Redirecting to Home in
                <span className="font-bold text-gold"> {countdown} </span>
                seconds...
            </p>

            <button
                onClick={() => navigate({ to: "/" })}
                className="btn-gold rounded-xl px-8 py-3"
            >
                Back to Home
            </button>
            </div>
        </div>
        </section>
    );
    }

  return (
    <section className="container mx-auto max-w-3xl px-4 py-20">
      <div className="glass-card rounded-3xl p-8 md:p-10">
        <div className="mb-8 text-center">
          <MessageSquare className="mx-auto mb-4 h-12 w-12 text-gold" />

          <h1 className="text-4xl font-bold">
            Share Your Feedback
          </h1>

          <p className="mt-3 text-muted-foreground">
            We'd love to hear your thoughts and suggestions.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="mb-2 block font-medium">
              Your Name
            </label>

            <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none"
                placeholder="Enter your name"
                required
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Email
            </label>

           <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none"
                placeholder="Enter your email"
                required
            />
            </div>

          <div>
            <label className="mb-3 block font-medium">
              Rate Your Experience
            </label>

            <div className="flex gap-2">
              {[1,2,3,4,5].map((star)=>(
                <Star
                  key={star}
                  onClick={()=>setRating(star)}
                  className={`cursor-pointer transition ${
                    star <= rating
                      ? "fill-gold text-gold"
                      : "text-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
          <input type="hidden" name="rating" value={rating} />

          <div>
            <label className="mb-2 block font-medium">
              Feedback
            </label>

           <textarea
                rows={6}
                value={form.feedback}
                onChange={(e) => setForm({ ...form, feedback: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 outline-none"
                placeholder="Write your feedback..."
                required
            />
          </div>

          <button
            type="submit"
            className="btn-gold flex w-full items-center justify-center gap-2 rounded-xl py-3"
          >
            <Send className="h-5 w-5" />
            Submit Feedback
          </button>

        </form>
      </div>
    </section>
  );
}