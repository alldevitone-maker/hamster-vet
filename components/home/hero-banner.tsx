import Image from 'next/image'
import Link from 'next/link'
import { CalendarHeart, PhoneCall, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-background px-4 py-1.5 text-sm font-medium text-primary">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Atendimento humanizado desde 2011
          </span>

          <h1 className="text-balance font-heading text-4xl font-semibold leading-tight text-secondary-foreground sm:text-5xl">
            Cuidado veterinário completo para quem é da família
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Na PataVida, cães, gatos e outros pets recebem consultas, vacinas, cirurgias e emergências com uma
            equipe que trata cada patinha com a atenção que ela merece.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              nativeButton={false}
              render={
                <Link href="/cadastro">
                  <CalendarHeart className="h-4 w-4" aria-hidden="true" />
                  Agendar consulta
                </Link>
              }
            />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={
                <Link href="/#contato">
                  <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  Emergência 24h
                </Link>
              }
            />
          </div>

          <dl className="flex flex-wrap gap-8 pt-4">
            <div className="flex flex-col">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Horário</dt>
              <dd className="font-heading text-sm font-semibold text-secondary-foreground">Seg a sáb, 8h–20h</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Emergência</dt>
              <dd className="font-heading text-sm font-semibold text-secondary-foreground">24 horas por dia</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl shadow-xl lg:mx-0">
          <Image
            src="/images/hero-vet.png"
            alt="Veterinária examinando com carinho um golden retriever em uma mesa de exame"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 512px, 100vw"
          />
        </div>
      </div>
    </section>
  )
}
