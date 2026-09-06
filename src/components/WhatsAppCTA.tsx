import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";

export function WhatsAppCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Auto-show speech bubble after 2.5 seconds if user hasn't dismissed it
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setIsOpen(true);
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsOpen(false);
    setHasInteracted(true);
  };

  const whatsappNumber = "91258789457";
  const defaultMessage = encodeURIComponent(
    "Hello Vishvas Solar Team! I am interested in solar solutions and would like to get a quote."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="whatsapp-cta-widget fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Animated Pop-up Callout Tooltip */}
      {isOpen && (
        <div className="relative animate-in fade-in slide-in-from-bottom-3 duration-300 max-w-xs sm:max-w-sm rounded-lg bg-white p-4 shadow-2xl ring-1 ring-black/10 dark:bg-slate-900 dark:ring-white/10 dark:text-slate-100">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-2.5 right-2.5 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
            aria-label="Close message"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-start gap-3 pr-4">
            <div className="relative flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md">
                <MessageCircle className="h-5 w-5 fill-current text-white" />
              </div>
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900" />
            </div>

            <div className="text-xs">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-slate-100">
                <span>Vishvas Solar Support</span>
                <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  Online
                </span>
              </div>
              <p className="mt-1 text-slate-600 dark:text-slate-300 leading-relaxed">
                Have questions about rooftop solar or energy savings? Chat with our experts!
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setHasInteracted(true)}
                className="mt-2.5 inline-flex items-center gap-1.5 font-semibold text-[#128C7E] hover:text-[#075E54] dark:text-[#25D366] dark:hover:text-emerald-400 transition-colors"
              >
                Start Chatting &rarr;
              </a>
            </div>
          </div>
          {/* Arrow pointing down to floating button */}
          <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 bg-white dark:bg-slate-900 ring-b ring-r ring-black/5 dark:ring-white/10" />
        </div>
      )}

      {/* Floating Animated WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onClick={() => setHasInteracted(true)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] hover:shadow-emerald-500/30 active:scale-95 animate-whatsapp-float animate-whatsapp-pulse"
      >
        {/* Pulsing Outer Aura */}
        <span className="absolute -inset-1 -z-10 rounded-full bg-[#25D366]/40 opacity-75 animate-ping duration-1000" />

        {/* WhatsApp Icon */}
        <svg
          className="h-7 w-7 fill-current transition-transform duration-300 group-hover:rotate-12"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        {/* Hover Tooltip Label for Desktop */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-md opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
