import { MessageCircle } from 'lucide-react';
import { BRAND } from '../data/brand';

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    'Hello, I\'d like to book an appointment at LA CROWN Luxury Aesthetic Clinic & Salon.'
  );
  const url = `https://wa.me/${BRAND.whatsapp}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1ebe58] hover:scale-110 transition-all duration-300 no-print"
    >
      <MessageCircle size={28} fill="white" strokeWidth={1.5} />
    </a>
  );
}
