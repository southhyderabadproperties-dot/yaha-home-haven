import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // If already triggered in this session, don't show again
    if (sessionStorage.getItem("exitIntentTriggered")) {
      setHasTriggered(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // If mouse moves up out of the viewport (desktop exit intent)
      if (e.clientY <= 0) {
        if (!hasTriggered) {
          triggerPopup();
        }
      }
    };

    // Mobile fallback: Fast scroll up
    let lastScrollTop = 0;
    let lastScrollTime = Date.now();

    const handleScroll = () => {
      const st = window.scrollY;
      const now = Date.now();
      const timeDiff = now - lastScrollTime;
      const scrollDiff = lastScrollTop - st;
      
      // If scrolling UP fast (mobile exit intent approximation)
      // And they are at least somewhat scrolled down
      if (st > 500 && scrollDiff > 80 && timeDiff < 150 && !hasTriggered) {
        triggerPopup();
      }
      
      lastScrollTop = st;
      lastScrollTime = now;
    };

    const triggerPopup = () => {
      setIsOpen(true);
      setHasTriggered(true);
      sessionStorage.setItem("exitIntentTriggered", "true");
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasTriggered]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const message = formData.get("message");
    
    const whatsappMessage = `Hi, I am ${name}.\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/919646952999?text=${encodedMessage}`, "_blank");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-500 shadow-md hover:text-gray-900 border border-gray-100"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="font-display text-2xl font-bold text-brand-navy">Don't leave just yet!</h3>
          <p className="mt-2 text-sm text-gray-500">Drop your details and we will get back to you with the best offers.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input required type="text" name="name" placeholder="Full Name" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange" />
          <input required type="tel" name="phone" placeholder="Phone Number" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange" />
          <input required type="email" name="email" placeholder="Email" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange" />
          <textarea required name="message" placeholder="Message" rows={3} className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange" />
          <Button type="submit" variant="brand" className="mt-2 w-full py-6 text-base bg-[#7A3E92] hover:bg-[#603173] text-white">Submit</Button>
        </form>
      </div>
    </div>
  );
}
