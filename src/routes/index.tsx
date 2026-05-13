import { createFileRoute, Link } from "@tanstack/react-router";
import { MENU } from "@/lib/menu-data";
import { MenuItemRow } from "@/components/MenuItemRow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Havanna Cafeteria Argentina — Cardápio" },
      { name: "description", content: "Cardápio completo Havanna Cafeteria Argentina: cafés, bebidas geladas, alfajores, doces e clássicos argentinos." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="bg-primary text-primary-foreground py-12 px-4 text-center relative">
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
        <p className="mt-6 italic text-sm md:text-base text-primary-foreground/90">
          O melhooor dulce de leche argentino há 20 anos no Brasil.
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        {MENU.map((page) => (
          <section key={page.id}>
            <h2 className="text-3xl md:text-4xl font-black text-primary border-b-2 border-accent pb-2 mb-6">
              {page.title}
            </h2>
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
