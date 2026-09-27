export function AnimatedPropertyHero() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-white">
      <img
        src="/just_change_only_the_text_tiru.gif"
        alt="Hero background"
        className="hidden md:block w-full h-full object-cover"
      />
      <img
        src="/just_change_only_the_text_tiru.gif"
        alt="Hero background mobile"
        className="block md:hidden w-full h-full object-contain object-top"
      />
    </div>
  );
}