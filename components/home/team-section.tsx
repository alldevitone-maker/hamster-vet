import Image from 'next/image'

const TEAM = [
  {
    name: 'Dra. Marina Alves',
    role: 'Clínica geral e cirurgia',
    image: '/images/vet-1.png',
  },
  {
    name: 'Dr. Rafael Souza',
    role: 'Emergência e diagnóstico por imagem',
    image: '/images/vet-2.png',
  },
]

export function TeamSection() {
  return (
    <section id="equipe" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Quem vai cuidar do seu pet
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Veterinários experientes, apaixonados por animais e comprometidos com cada detalhe do tratamento.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:justify-center lg:mx-auto lg:max-w-2xl">
          {TEAM.map((member) => (
            <div key={member.name} className="flex flex-col items-center gap-4 text-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-secondary shadow-sm">
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={`Foto de ${member.name}`}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
