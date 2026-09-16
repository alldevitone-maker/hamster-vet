'use client'

import { useEffect, useRef, useState } from 'react'

/** Sprite com 4 poses da corrida, animado via background-position para simular o movimento das patinhas. */
const SPRITE_FRAME_SIZE = 128
const SPRITE_SCALE = 0.72

const LOADING_DURATION_MS = 10000

/** Aguarda de forma assíncrona pelo tempo informado. */
async function wait(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

const LOADING_MESSAGES = [
  'Preparando a recepção...',
  'Esquentando o estetoscópio...',
  'Arrumando a coleira...',
  'Quase pronto para o seu pet...',
]

export function IntroLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    let active = true
    startRef.current = Date.now()

    const progressInterval = setInterval(() => {
      const start = startRef.current ?? Date.now()
      const elapsed = Date.now() - start
      setProgress(Math.min(100, Math.round((elapsed / LOADING_DURATION_MS) * 100)))
    }, 100)

    async function run() {
      await wait(LOADING_DURATION_MS)
      if (active) setLoading(false)
    }
    run()

    return () => {
      active = false
      clearInterval(progressInterval)
    }
  }, [])

  const messageIndex = Math.min(
    LOADING_MESSAGES.length - 1,
    Math.floor((progress / 100) * LOADING_MESSAGES.length),
  )

  return (
    <>
      <div
        role="status"
        aria-live="polite"
        aria-hidden={!loading}
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-secondary px-6 transition-opacity duration-700 ${
          loading ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="relative flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
          <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary/40 animate-wheel-spin" />
          <div className="relative z-10 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-background shadow-lg sm:h-36 sm:w-36">
            <div
              role="img"
              aria-label="Hamster fofo correndo em uma rodinha"
              className="animate-hamster-sprite-run"
              style={{
                width: SPRITE_FRAME_SIZE,
                height: SPRITE_FRAME_SIZE,
                backgroundImage: "url('/images/hamster-sprite.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${1024 * SPRITE_SCALE}px ${1024 * SPRITE_SCALE}px`,
                backgroundPositionY: -303,
              }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-heading text-xl font-semibold text-secondary-foreground sm:text-2xl">
            PataVida Clínica Veterinária
          </p>
          <p className="text-sm text-muted-foreground sm:text-base">{LOADING_MESSAGES[messageIndex]}</p>
        </div>

        <div className="flex w-full max-w-xs flex-col gap-2">
          <div className="h-2 w-full overflow-hidden rounded-full bg-background/70">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="sr-only">Carregando, {progress}% concluído.</span>
        </div>

        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-primary animate-loader-dot [animation-delay:0ms]" />
          <span className="h-2 w-2 rounded-full bg-primary animate-loader-dot [animation-delay:200ms]" />
          <span className="h-2 w-2 rounded-full bg-primary animate-loader-dot [animation-delay:400ms]" />
        </div>
      </div>

      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>{children}</div>
    </>
  )
}
