export function Logo({
  className = "",
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <img
          src="/nexgen-logo.png"
          alt="NEXGEN CRETIONS logo"
          className="h-16 w-16 rounded-lg object-cover ring-1 ring-gold/30"
          loading="eager"
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-gold/0 via-gold/10 to-gold/0" />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-wide text-gradient-gold">
            NEXGEN
          </span>

          <span className="text-sm font-semibold tracking-[0.30em] text-muted-foreground">
            CRETIONS
          </span>
        </div>
      )}
    </div>
  );
}
