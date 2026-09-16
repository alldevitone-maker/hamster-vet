import Image from 'next/image'
import { HeartHandshake, Microscope, Clock3 } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: HeartHandshake,
    title: 'Atendimento acolhedor',
    description: 'Explicamos cada diagnóstico com calma, para você entender exatamente o que seu pet precisa.',
  },
  {
    icon: Microscope,
    title: 'Estrutura completa',
    description: 'Laboratório, centro cirúrgico e internação no mesmo espaço, sem precisar correr entre clínicas.',
  },
  {
    icon: Clock3,
    title: 'Disponibilidade real',
    description: 'Plantão 24 horas com veterinários de prontidão para qualquer urgência, todos os dias do ano.',
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg lg:order-1">
          <Image
            src="/images/clinic-interior.png"
            alt="Recepção acolhedora da clínica veterinária PataVida"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 512px, 100vw"
          />
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <h2 className="text-balance font-heading text-3xl font-semibold text-secondary-foreground sm:text-4xl">
            Um consultório pensado para o conforto de tutores e pets
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Há mais de dez anos cuidando de cães, gatos e outros pets, a PataVida une tecnologia veterinária a um
            atendimento próximo, para que cada visita seja tranquila — tanto para o seu pet quanto para você.
          </p>

          <div className="flex flex-col gap-5">
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading text-base font-semibold text-secondary-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
