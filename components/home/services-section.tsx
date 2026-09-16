import { Ambulance, Scissors, Stethoscope, Syringe, TestTube, Bone } from 'lucide-react'

const SERVICES = [
  {
    icon: Stethoscope,
    title: 'Consultas clínicas',
    description: 'Check-ups completos e acompanhamento de rotina para cada fase da vida do seu pet.',
  },
  {
    icon: Syringe,
    title: 'Vacinação e prevenção',
    description: 'Calendário de vacinas atualizado e antiparasitários para manter seu pet protegido.',
  },
  {
    icon: Bone,
    title: 'Cirurgias',
    description: 'Procedimentos cirúrgicos com equipamentos modernos e monitoramento anestésico seguro.',
  },
  {
    icon: Scissors,
    title: 'Banho e tosa',
    description: 'Higiene e estética com produtos hipoalergênicos, feita por profissionais atenciosos.',
  },
  {
    icon: TestTube,
    title: 'Exames laboratoriais',
    description: 'Sangue, imagem e ultrassom com resultados rápidos direto na própria clínica.',
  },
  {
    icon: Ambulance,
    title: 'Emergência 24h',
    description: 'Equipe de prontidão todos os dias do ano para os imprevistos que não podem esperar.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Serviços pensados para o bem-estar do seu pet
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Do check-up de rotina ao atendimento de emergência, cuidamos de cada etapa com atenção e transparência.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-card-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
