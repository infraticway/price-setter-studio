import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent } from "react";
import { PdfMenuPage } from "@/components/PdfMenuPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import p1 from "@/assets/pdf/page-1.jpg";
import p2 from "@/assets/pdf/page-2.jpg";
import p3 from "@/assets/pdf/page-3.jpg";
import p4 from "@/assets/pdf/page-4.jpg";
import p5 from "@/assets/pdf/page-5.jpg";
import p6 from "@/assets/pdf/page-6.jpg";
import p7 from "@/assets/pdf/page-7.jpg";

const ADMIN_PASSWORD = "havanna2026";
const AUTH_KEY = "havanna-admin-auth";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Havanna" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
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

function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(AUTH_KEY) === "1") setAuthed(true);
  }, []);

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "1");
      setAuthed(true);
      toast.success("Bem-vindo!");
    } else {
      toast.error("Senha incorreta");
    }
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
    <div className="min-h-screen bg-background">
      <Toaster />
      <header className="sticky top-0 z-20 bg-primary text-primary-foreground py-3 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-base font-black tracking-wider">
              HAVANNA · Admin
            </h1>
            <p className="text-xs opacity-80">
              Digite os preços direto sobre o cardápio. Salva automaticamente.
            </p>
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

      <main className="max-w-6xl mx-auto px-2 sm:px-4 py-4 space-y-4">
        {PAGES.map((p) => (
          <div
            key={p.num}
            className="shadow-md rounded-md overflow-hidden bg-white"
            style={{ containerType: "inline-size" }}
          >
            <PdfMenuPage
              pageNum={p.num}
              imgSrc={p.src}
              aspect={p.aspect}
              editable
            />
          </div>
        ))}
      </main>
    </div>
  );
}
