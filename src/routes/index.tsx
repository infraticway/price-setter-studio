import { createFileRoute, Link } from "@tanstack/react-router";
import { MENU } from "@/lib/menu-data";
import { MenuItemRow } from "@/components/MenuItemRow";
import heroImg from "@/assets/menu/hero.jpg";
import hotImg from "@/assets/menu/quentes.jpg";
import coldImg from "@/assets/menu/geladas.jpg";
import savoryImg from "@/assets/menu/salgados.jpg";
import sweetsImg from "@/assets/menu/doces.jpg";
import alfajoresImg from "@/assets/menu/alfajores.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Havanna Cafeteria Argentina — Cardápio" },
      { name: "description", content: "Cardápio completo Havanna Cafeteria Argentina: cafés, bebidas geladas, alfajores, doces e clássicos argentinos." },
    ],
  }),
  component: MenuPage,
});

const PAGE_IMAGES: Record<string, string> = {
  quentes: hotImg,
  geladas: coldImg,
  salgados: savoryImg,
  doces: sweetsImg,
  alfajores: alfajoresImg,
};

function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground pt-12 pb-0 px-4 text-center relative">
        <Link
          to="/admin"
          className="absolute top-3 right-3 text-[10px] uppercase tracking-widest text-primary-foreground/60 hover:text-primary-foreground"
        >
          Admin
        </Link>
        <h1 className="text-5xl md:text-7xl font-black tracking-[0.25em]">
          HAVANNA
        </h1>
        <p className="mt-2 text-xs md:text-sm tracking-[0.4em] uppercase text-primary-foreground/80">
          Cafeteria Argentina
        </p>
        <p className="mt-6 italic text-sm md:text-base text-primary-foreground/90 mb-8">
          O melhooor dulce de leche argentino há 20 anos no Brasil.
        </p>
        <img
          src={heroImg}
          alt="Variedade de produtos Havanna: alfajor, café gelado, espresso, bolo de doce de leite e empanadas"
          width={1600}
          height={1024}
          className="block w-full max-w-3xl mx-auto rounded-t-2xl shadow-2xl"
        />
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        {MENU.map((page) => (
          <section key={page.id}>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-black text-primary border-b-2 border-accent pb-2">
                {page.title}
              </h2>
            </div>

            {PAGE_IMAGES[page.id] && (
              <img
                src={PAGE_IMAGES[page.id]}
                alt={page.title}
                width={1280}
                height={896}
                loading="lazy"
                className="w-full h-56 md:h-72 object-cover rounded-xl shadow-md mb-8"
              />
            )}

            {page.sections.map((section) => (
              <div key={section.id} className="mb-10">
                <h3 className="text-lg font-bold uppercase tracking-widest text-accent mb-3">
                  {section.title}
                </h3>
                {section.subtitle && (
                  <p className="text-sm text-muted-foreground italic mb-4">
                    {section.subtitle}
                  </p>
                )}
                <div className="bg-card rounded-md px-4 shadow-sm">
                  {section.items.map((item) => (
                    <MenuItemRow key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </main>

      <footer className="bg-primary text-primary-foreground text-center py-8 px-4 mt-10">
        <p className="italic text-sm">
          O melhooor dulce de leche argentino há 20 anos no Brasil.
        </p>
        <p className="mt-2 text-xs tracking-widest opacity-80">havanna.com.br</p>
      </footer>
    </div>
  );
}
