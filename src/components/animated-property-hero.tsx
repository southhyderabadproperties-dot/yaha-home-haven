export function AnimatedPropertyHero() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:block w-full h-full object-contain object-top origin-top scale-90"
      >
        <source src="/remove_that_logo_show_up_the.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
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