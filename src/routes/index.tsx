import { createFileRoute, Link } from "@tanstack/react-router";
import { PdfMenuPage } from "@/components/PdfMenuPage";

import p1 from "@/assets/pdf/page-1.jpg";
import p2 from "@/assets/pdf/page-2.jpg";
import p3 from "@/assets/pdf/page-3.jpg";
import p4 from "@/assets/pdf/page-4.jpg";
import p5 from "@/assets/pdf/page-5.jpg";
import p6 from "@/assets/pdf/page-6.jpg";
import p7 from "@/assets/pdf/page-7.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Havanna - Cafeteria Argentina" },
      {
        name: "description",
        content:
          "Cardápio Havanna Cafeteria Argentina: cafés, vannaccinos, alfajores, doces e salgados.",
      },
    ],
  }),
});

const PAGES = [
  { num: 1, src: p1, aspect: 595.276 / 841.89 },
  { num: 2, src: p2, aspect: 1190.55 / 841.89 },
  { num: 3, src: p3, aspect: 1190.55 / 841.89 },
  { num: 4, src: p4, aspect: 1190.55 / 841.89 },
  { num: 5, src: p5, aspect: 1190.55 / 841.89 },
  { num: 6, src: p6, aspect: 1190.55 / 841.89 },
  { num: 7, src: p7, aspect: 595.276 / 841.89 },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-background/90 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-bold text-primary tracking-wider">
            HAVANNA · Cafeteria Argentina
          </h1>
          <Link
            to="/admin"
            className="text-xs text-muted-foreground hover:text-primary"
          >
            admin
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-2 sm:px-4 py-4 space-y-4">
        {PAGES.map((p) => (
          <div
            key={p.num}
            className="container-query shadow-md rounded-md overflow-hidden bg-white"
            style={{ containerType: "inline-size" }}
          >
            <PdfMenuPage
              pageNum={p.num}
              imgSrc={p.src}
              aspect={p.aspect}
            />
          </div>
        ))}
      </main>

      <footer className="text-center text-xs text-muted-foreground py-6">
        O melhor dulce de leche argentino há 20 anos no Brasil · havanna.com.br
      </footer>
    </div>
  );
}
