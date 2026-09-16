import type { Metadata } from 'next'
import { AuthShell } from '@/components/auth/auth-shell'
import { RegisterForm } from '@/components/auth/register-form'

export const metadata: Metadata = {
  title: 'Criar conta | PataVida Clínica Veterinária',
  description: 'Crie sua conta na PataVida para agendar consultas, vacinas e exames do seu pet.',
}

export default function CadastroPage() {
  return (
    <AuthShell title="Crie sua conta" subtitle="Cadastre-se para agendar consultas e acompanhar seus pets.">
      <RegisterForm />
    </AuthShell>
  )
}
