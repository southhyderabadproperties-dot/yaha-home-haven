export function AnimatedPropertyHero() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:block w-full h-full object-cover"
      >
        <source src="/YAHA%20LP%20DESTP.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="block md:hidden w-full h-full object-cover"
      >
        <source src="/YAHA%20LP%20MBL.mp4" type="video/mp4" />
      </video>
    </div>
  );
}