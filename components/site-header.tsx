'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, PawPrint, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NAV_LINKS = [
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#equipe', label: 'Equipe' },
  { href: '/#contato', label: 'Contato' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PawPrint className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-heading text-lg font-semibold text-foreground">PataVida</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" nativeButton={false} render={<Link href="/login">Entrar</Link>} />
          <Button nativeButton={false} render={<Link href="/cadastro">Criar conta</Link>} />
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Navegação móvel">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button
                variant="outline"
                nativeButton={false}
                render={
                  <Link href="/login" onClick={() => setOpen(false)}>
                    Entrar
                  </Link>
                }
              />
              <Button
                nativeButton={false}
                render={
                  <Link href="/cadastro" onClick={() => setOpen(false)}>
                    Criar conta
                  </Link>
                }
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
