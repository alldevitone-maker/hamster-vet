import Link from 'next/link'
import { AtSign, Globe, MapPin, PawPrint, Phone } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <PawPrint className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-lg font-semibold text-secondary-foreground">PataVida</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Cuidado veterinário completo, com carinho de verdade pelo seu melhor amigo.
            </p>
          </div>

          <nav aria-label="Links rápidos" className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold text-secondary-foreground">Navegação</h3>
            <Link href="/#servicos" className="text-sm text-muted-foreground hover:text-foreground">
              Serviços
            </Link>
            <Link href="/#sobre" className="text-sm text-muted-foreground hover:text-foreground">
              Sobre nós
            </Link>
            <Link href="/#equipe" className="text-sm text-muted-foreground hover:text-foreground">
              Nossa equipe
            </Link>
            <Link href="/#contato" className="text-sm text-muted-foreground hover:text-foreground">
              Contato
            </Link>
          </nav>

          <nav aria-label="Conta" className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold text-secondary-foreground">Conta</h3>
            <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground">
              Entrar
            </Link>
            <Link href="/cadastro" className="text-sm text-muted-foreground hover:text-foreground">
              Criar conta
            </Link>
          </nav>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold text-secondary-foreground">Contato</h3>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Av. dos Pets, 245 — Jardim Animal, São Paulo</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>(11) 4002-8922</span>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PataVida no Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-muted-foreground transition-colors hover:text-primary"
              >
                <AtSign className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PataVida na web"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-muted-foreground transition-colors hover:text-primary"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/70 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} PataVida Clínica Veterinária. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
