import { usePrices } from "@/lib/use-prices";
import type { MenuItem } from "@/lib/menu-data";

export function MenuItemRow({ item }: { item: MenuItem }) {
  const { getPrice } = usePrices();
  return (
    <div className="flex items-baseline gap-3 py-3 border-b border-dashed border-border last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <h4 className="font-bold uppercase tracking-wide text-sm text-primary">
            {item.name}
          </h4>
          {item.size && (
            <span className="text-xs text-muted-foreground italic">{item.size}</span>
          )}
        </div>
        {item.description && (
          <p className="text-xs text-muted-foreground mt-1 leading-snug">
            {item.description}
          </p>
        )}
      </div>
      <div className="shrink-0 font-bold text-accent whitespace-nowrap">
        R$ {getPrice(item.id)}
      </div>
    </div>
  );
}
