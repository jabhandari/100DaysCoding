import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Copy, RefreshCw, Quote } from "lucide-react";

export default function App() {
  const [quote, setQuote] = useState({
    content: "Click the button to load a quote.",
    author: "Unknown",
  });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("https://dummyjson.com/quotes/random");

      if (!res.ok) {
        throw new Error("Failed to fetch quote");
      }

      const data = await res.json();

      setQuote({
        content: data.quote,
        author: data.author,
      });
    } catch (err) {
      setError("Could not load quote. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyQuote = async () => {
    const text = `"${quote.content}" — ${quote.author}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-indigo-500/20">
            <Quote className="w-6 h-6 text-indigo-300" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Random Quote Generator</h1>
            <p className="text-slate-300 text-sm">
              Built with React, Tailwind, and Framer Motion
            </p>
          </div>
        </div>

        <motion.div
          key={quote.content}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl bg-black/20 border border-white/10 p-6 mb-6"
        >
          {loading ? (
            <p className="text-lg text-slate-300 animate-pulse">
              Loading quote...
            </p>
          ) : error ? (
            <p className="text-red-300">{error}</p>
          ) : (
            <>
              <p className="text-2xl leading-relaxed font-medium text-slate-100 mb-4">
                “{quote.content}”
              </p>
              <p className="text-right text-indigo-300 font-semibold">
                — {quote.author}
              </p>
            </>
          )}
        </motion.div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={fetchQuote}
            disabled={loading}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-500 hover:bg-indigo-400 transition disabled:opacity-50"
          >
            <RefreshCw className="w-4 h-4" />
            New Quote
          </button>

          <button
            onClick={copyQuote}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition"
          >
            <Copy className="w-4 h-4" />
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}