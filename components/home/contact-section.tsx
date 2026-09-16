import Link from 'next/link'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    title: 'Endereço',
    lines: ['Av. dos Pets, 245', 'Jardim Animal, São Paulo - SP'],
  },
  {
    icon: Phone,
    title: 'Telefone',
    lines: ['(11) 4002-8922', 'WhatsApp: (11) 98888-1234'],
  },
  {
    icon: Mail,
    title: 'E-mail',
    lines: ['contato@patavida.com.br'],
  },
  {
    icon: Clock,
    title: 'Horário',
    lines: ['Seg a sáb, 8h às 20h', 'Emergência 24h todos os dias'],
  },
]

export function ContactSection() {
  return (
    <section id="contato" className="bg-primary py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-semibold text-primary-foreground sm:text-4xl">
            Vamos agendar o cuidado do seu pet
          </h2>
          <p className="mt-3 text-pretty text-primary-foreground/80">
            Fale com a nossa equipe ou crie uma conta para agendar consultas com poucos cliques.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex flex-col items-center gap-3 rounded-2xl bg-primary-foreground/10 p-6 text-center"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-base font-semibold text-primary-foreground">{item.title}</h3>
                <div className="text-sm text-primary-foreground/80">
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            variant="secondary"
            nativeButton={false}
            render={<Link href="/cadastro">Criar conta e agendar</Link>}
          />
        </div>
      </div>
    </section>
  )
}
