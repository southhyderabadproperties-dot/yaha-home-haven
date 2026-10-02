import { useRef, useEffect } from "react";

export function AnimatedPropertyHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLVideoElement>(null);
  const mobileRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          desktopRef.current?.play().catch(() => {});
          mobileRef.current?.play().catch(() => {});
        } else {
          desktopRef.current?.pause();
          mobileRef.current?.pause();
        }
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none bg-white">
      <video
        ref={desktopRef}
        muted
        loop
        playsInline
        className="hidden md:block w-full h-full object-contain object-top origin-top scale-90"
      >
        <source src="/remove_that_logo_show_up_the.mp4" type="video/mp4" />
      </video>
      <video
        ref={mobileRef}
        muted
        loop
        playsInline
        className="block md:hidden w-full h-full object-contain object-top -mt-16"
      >
        <source src="/Upscaler-2K%20-%20UHD-just_change_only_the_text_tiru.mp4" type="video/mp4" />
      </video>
    </div>
  );
}