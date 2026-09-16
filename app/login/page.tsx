import type { Metadata } from 'next'
import { AuthShell } from '@/components/auth/auth-shell'
import { LoginForm } from '@/components/auth/login-form'

export const metadata: Metadata = {
  title: 'Entrar | PataVida Clínica Veterinária',
  description: 'Acesse sua conta PataVida para agendar consultas e acompanhar seus pets.',
}

export default function LoginPage() {
  return (
    <AuthShell title="Bem-vindo de volta" subtitle="Entre para agendar consultas e cuidar do seu pet.">
      <LoginForm />
    </AuthShell>
  )
}
