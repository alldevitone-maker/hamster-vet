import Image from 'next/image'
import Link from 'next/link'
import { PawPrint } from 'lucide-react'

export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col justify-between px-6 py-10 sm:px-12 lg:px-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PawPrint className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-heading text-lg font-semibold text-foreground">PataVida</span>
        </Link>

        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-8 py-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">{title}</h1>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
          {children}
        </div>

        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} PataVida Clínica Veterinária
        </p>
      </div>

      <div className="relative hidden bg-secondary lg:block">
        <Image
          src="/images/hero-vet.png"
          alt="Veterinária cuidando de um cão com carinho na clínica PataVida"
          fill
          priority
          className="object-cover"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
        <div className="absolute bottom-10 left-10 right-10 text-primary-foreground">
          <p className="font-heading text-2xl font-semibold text-balance">
            Cada patinha merece cuidado de perto.
          </p>
          <p className="mt-2 text-sm text-primary-foreground/85">
            Agende consultas, vacinas e exames em poucos cliques.
          </p>
        </div>
      </div>
    </div>
  )
}
