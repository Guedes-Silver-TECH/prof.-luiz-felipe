import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-deep-space px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-on-surface">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-on-surface">Página não encontrada</h2>
        <p className="mt-2 text-sm text-on-surface-variant">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="btn-primary inline-flex items-center justify-center text-sm"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-deep-space px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-on-surface">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-on-surface-variant">
          Algo deu errado. Você pode tentar recarregar ou voltar ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary inline-flex items-center justify-center text-sm"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="btn-secondary inline-flex items-center justify-center text-sm"
          >
            Voltar ao Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          title:
            "Prof. Luiz Felipe | Informática para Concursos — Cursos, Aulas e Mentorias",
        },
        {
          name: "description",
          content:
            "Aprenda informática para concursos com método comprovado. Cursos completos, aulas isoladas e mentorias individuais para PF, PRF, TCU e mais. 500+ alunos aprovados.",
        },
        { name: "author", content: "Prof. Luiz Felipe" },
        { name: "theme-color", content: "#0b001a" },
        {
          property: "og:title",
          content:
            "Prof. Luiz Felipe | Informática para Concursos",
        },
        {
          property: "og:description",
          content:
            "Aprenda informática com método, clareza e foco na aprovação. Cursos, aulas isoladas e mentorias estratégicas.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://profluizfelipe.com.br" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@profluizfelipe" },
        {
          name: "twitter:title",
          content: "Prof. Luiz Felipe | Informática para Concursos",
        },
        {
          name: "twitter:description",
          content:
            "Aprenda informática com método, clareza e foco na aprovação.",
        },
      ],
      links: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
        },
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "canonical",
          href: "https://profluizfelipe.com.br",
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Prof. Luiz Felipe",
            jobTitle: "Professor de Informática para Concursos",
            description:
              "Professor Mestre especialista em informática para concursos públicos de alto nível.",
            url: "https://profluizfelipe.com.br",
            knowsAbout: [
              "Informática para Concursos",
              "Redes de Computadores",
              "Segurança da Informação",
              "Sistemas Operacionais",
              "Pacote Office",
            ],
          }),
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-deep-space text-on-surface font-body-md overflow-x-hidden">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
