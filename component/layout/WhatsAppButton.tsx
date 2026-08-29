import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919811076503";

  const message = encodeURIComponent(
    "Hi Yash Traders! 👋 I'm interested in your products. Could you please help me?"
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300"
    >
      <MessageCircle size={30} />
    </a>
  );
}