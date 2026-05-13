import { useEffect, useState, useCallback } from "react";

const KEY = "havanna-prices-v2";

export function loadPrices(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function savePrices(prices: Record<string, string>) {
  localStorage.setItem(KEY, JSON.stringify(prices));
  window.dispatchEvent(new Event("havanna-prices-changed"));
}

export function usePrices() {
  const [prices, setPrices] = useState<Record<string, string>>({});

  useEffect(() => {
    setPrices(loadPrices());
    const handler = () => setPrices(loadPrices());
    window.addEventListener("havanna-prices-changed", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("havanna-prices-changed", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const getPrice = useCallback((id: string) => prices[id] ?? "", [prices]);

  return { prices, getPrice };
}
