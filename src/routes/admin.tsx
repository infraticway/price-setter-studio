import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent } from "react";
import { MENU } from "@/lib/menu-data";
import { loadPrices, savePrices } from "@/lib/use-prices";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const ADMIN_PASSWORD = "havanna2026";
const AUTH_KEY = "havanna-admin-auth";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Havanna" }, { name: "robots", content: "noindex" }] }),
  component: AdminPage,
});

function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [draft, setDraft] = useState<Record<string, string>>({});

  useEffect(() => {
    if (sessionStorage.getItem(AUTH_KEY) === "1") setAuthed(true);
  }, []);

  useEffect(() => {
    if (authed) {
      const stored = loadPrices();
      const initial: Record<string, string> = {};
      MENU.forEach((p) =>
        p.sections.forEach((s) =>
          s.items.forEach((i) => {
            initial[i.id] = stored[i.id] ?? i.defaultPrice;
          }),
        ),
      );
      setDraft(initial);
    }
  }, [authed]);

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "1");
      setAuthed(true);
    } else {
      toast.error("Senha incorreta");
    }
  }

  function handleSave() {
    savePrices(draft);
    toast.success("Preços salvos!");
  }

  function handleLogout() {
    sessionStorage.removeItem(AUTH_KEY);
    setAuthed(false);
    setPassword("");
  }

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <Toaster />
        <form
          onSubmit={handleLogin}
          className="bg-card border border-border rounded-lg p-8 max-w-sm w-full shadow-lg"
        >
          <h1 className="text-2xl font-black text-primary mb-2 tracking-wider">
            HAVANNA · Admin
          </h1>
          <p className="text-sm text-muted-foreground mb-6">
            Digite a senha para gerenciar os preços do cardápio.
          </p>
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <Button type="submit" className="w-full mt-4">
            Entrar
          </Button>
          <Link
            to="/"
            className="block text-center text-xs text-muted-foreground mt-4 hover:underline"
          >
            ← Voltar ao cardápio
          </Link>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      <Toaster />
      <header className="bg-primary text-primary-foreground py-6 px-4 sticky top-0 z-10 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-xl font-black tracking-wider">HAVANNA · Admin</h1>
            <p className="text-xs opacity-80">Edite os preços abaixo e clique em Salvar.</p>
          </div>
          <div className="flex gap-2">
            <Link
              to="/"
              className="text-sm underline opacity-80 hover:opacity-100 self-center"
            >
              Ver cardápio
            </Link>
            <Button variant="secondary" size="sm" onClick={handleLogout}>
              Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        {MENU.map((page) => (
          <section key={page.id}>
            <h2 className="text-2xl font-black text-primary border-b-2 border-accent pb-2 mb-4">
              {page.title}
            </h2>
            {page.sections.map((section) => (
              <div key={section.id} className="mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-2">
                  {section.title}
                </h3>
                <div className="bg-card rounded-md border border-border divide-y divide-border">
                  {section.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 px-4 py-3"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-primary truncate">
                          {item.name}
                        </div>
                        {item.size && (
                          <div className="text-xs text-muted-foreground">
                            {item.size}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <span className="text-sm font-semibold text-muted-foreground">
                          R$
                        </span>
                        <Input
                          value={draft[item.id] ?? ""}
                          onChange={(e) =>
                            setDraft((d) => ({ ...d, [item.id]: e.target.value }))
                          }
                          className="w-24 text-right font-bold"
                          placeholder="00,00"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-end">
          <Button size="lg" onClick={handleSave}>
            Salvar preços
          </Button>
        </div>
      </div>
    </div>
  );
}
