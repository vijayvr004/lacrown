import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ { q: string; a: string }

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-ivory-300">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full flex items-start justify-between gap-4 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-serif text-charcoal text-base font-medium pr-2">{faq.q}</span>
            <ChevronDown
              size={18}
              className={`flex-shrink-0 text-burgundy transition-transform duration-200 mt-0.5 ${
                open === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          {open === i && (
            <div className="pb-5">
              <p className="font-sans text-taupe text-sm leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
