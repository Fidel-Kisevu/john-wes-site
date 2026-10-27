export function Photo({
  src,
  alt,
  ratio = "wide",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  ratio?: "wide" | "portrait" | "book" | "photo";
  priority?: boolean;
  className?: string;
}) {
  if (!src) return null;
  const ratioClass =
    ratio === "portrait" ? "ratio-portrait" : ratio === "book" ? "ratio-book" : ratio === "photo" ? "ratio-photo" : "ratio-wide";
  return (
    <div className={`overflow-hidden bg-paper-2 ${ratioClass} ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        width={ratio === "portrait" || ratio === "book" ? 900 : 1600}
        height={ratio === "portrait" ? 1200 : ratio === "book" ? 1350 : 900}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  );
}
