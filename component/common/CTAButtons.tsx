import {
  MessageCircle,
  Phone,
} from "lucide-react";

interface Props {
  whatsappMessage?: string;
}

export default function CTAButtons({
  whatsappMessage = "Hello Yash Traders",
}: Props) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">

      <a
        href={`https://wa.me/919811076503?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 rounded-xl bg-green-600 hover:bg-green-700 py-4 font-semibold text-white transition-all duration-300"
      >
        <MessageCircle size={20} />
        WhatsApp
      </a>

      <a
        href="tel:+919811076503"
        className="flex items-center justify-center gap-3 rounded-xl bg-orange-600 hover:bg-orange-700 py-4 font-semibold text-white transition-all duration-300"
      >
        <Phone size={20} />
        Call Now
      </a>

    </div>
  );
}