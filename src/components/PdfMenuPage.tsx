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
        if (editable) {
          const inputStyle: React.CSSProperties = {
            position: "absolute",
            left: `${p.xPct}%`,
            top: `${p.yPct}%`,
            width: `${p.wPct + 4}%`,
            height: `${p.hPct}%`,
          };
          return (
            <input
              key={p.id}
              type="text"
              inputMode="decimal"
              value={value}
              onChange={(e) => handleChange(p.id, e.target.value)}
              placeholder="00,00"
              className="text-[clamp(8px,1.1cqw,18px)] font-bold text-primary bg-background/95 border border-primary/40 rounded-sm px-[2%] outline-none focus:ring-2 focus:ring-accent leading-none"
              style={inputStyle}
            />
          );
        }
        // Display: badge anchored at the box but with auto-width so it
        // never extends past the price column into description text.
        const centerX = p.xPct + p.wPct / 2;
        const centerY = p.yPct + p.hPct / 2;
        return (
          <span
            key={p.id}
            className="absolute inline-flex items-center justify-center font-extrabold leading-none rounded-sm whitespace-nowrap"
            style={{
              left: `${centerX}%`,
              top: `${centerY}%`,
              transform: "translate(-50%, -50%)",
              height: `${p.hPct}%`,
              maxWidth: `${p.wPct + 2}%`,
              fontSize: "clamp(9px, 1.2cqw, 18px)",
              fontFamily:
                "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif",
              letterSpacing: "-0.01em",
              color: "#fff8e7",
              background:
                "linear-gradient(180deg, rgba(20,10,5,0.92), rgba(40,20,10,0.85))",
              border: "1px solid rgba(255,200,120,0.35)",
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
              padding: "0 0.6em",
              textShadow: "0 1px 2px rgba(0,0,0,0.6)",
            }}
          >
            {value ? `R$ ${value}` : "—"}
          </span>
        );
      })}
    </div>
  );
}
