import { useState } from "react";
import {
  Instagram,
  Mail,
  X,
  MessageCircle,
} from "lucide-react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Contact Options */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Instagram */}
        <a
          href="https://instagram.com/nexgen_cretions"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 px-4 py-3 text-white shadow-lg hover:scale-105 transition"
        >
          <Instagram size={20} />
          <span className="text-sm font-medium">Instagram DM</span>
        </a>
        {/* WhatsApp */}
        <a
          href="https://wa.me/917993363138?text=Hi%20NEXGEN%20CREATIONS,%20I'm%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:scale-105 transition"
        >
          <MessageCircle size={20} />
          <span className="text-sm font-medium">WhatsApp</span>
        </a>

        {/* Email */}
        <a
          href="mailto:nexgencretions@gmail.com"
          className="flex items-center gap-3 rounded-full bg-red-500 px-4 py-3 text-white shadow-lg hover:scale-105 transition"
        >
          <Mail size={20} />
          <span className="text-sm font-medium">Email</span>
        </a>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-black shadow-2xl transition hover:scale-110"
      >
        {open ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}