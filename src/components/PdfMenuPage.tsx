import positionsData from "@/lib/menu-positions.json";
import { usePrices, savePrices, loadPrices } from "@/lib/use-prices";

type PricePos = {
  id: string;
  xPct: number;
  yPct: number;
  wPct: number;
  hPct: number;
};

const POSITIONS = positionsData as Record<string, PricePos[]>;

interface Props {
  pageNum: number;
  imgSrc: string;
  /** PDF page aspect ratio (width / height) */
  aspect: number;
  editable?: boolean;
}

export function PdfMenuPage({ pageNum, imgSrc, aspect, editable = false }: Props) {
  const { getPrice } = usePrices();
  const positions = POSITIONS[String(pageNum)] ?? [];

  const handleChange = (id: string, value: string) => {
    const all = loadPrices();
    all[id] = value;
    savePrices(all);
  };

  return (
    <div
      className="relative w-full bg-background"
      style={{ aspectRatio: aspect }}
    >
      <img
        src={imgSrc}
        alt={`Cardápio Havanna - página ${pageNum}`}
        className="absolute inset-0 w-full h-full object-contain select-none"
        draggable={false}
      />
      {positions.map((p) => {
        const value = getPrice(p.id);
        const style: React.CSSProperties = {
          position: "absolute",
          left: `${p.xPct}%`,
          top: `${p.yPct}%`,
          width: `${p.wPct + 4}%`,
          height: `${p.hPct}%`,
        };
        if (editable) {
          return (
            <input
              key={p.id}
              type="text"
              inputMode="decimal"
              value={value}
              onChange={(e) => handleChange(p.id, e.target.value)}
              placeholder="00,00"
              className="text-[clamp(8px,1.1cqw,18px)] font-bold text-primary bg-background/95 border border-primary/40 rounded-sm px-[2%] outline-none focus:ring-2 focus:ring-accent leading-none"
              style={style}
            />
          );
        }
        return (
          <span
            key={p.id}
            className="flex items-center font-bold text-primary leading-none"
            style={{
              ...style,
              fontSize: "clamp(7px, 1.05cqw, 16px)",
              fontFamily:
                "'DSEG7 Classic', 'Share Tech Mono', ui-monospace, monospace",
              letterSpacing: "0.02em",
            }}
          >
            {value || "—,—"}
          </span>
        );
      })}
    </div>
  );
}
