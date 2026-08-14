/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useRef } from 'react'
import { Game } from '../types/game'

interface GameRunnerProps {
  game: Game
}

declare global {
  interface Window {
    EJS_player?: string
    EJS_core?: string
    EJS_pathtodata?: string
    EJS_gameUrl?: string
    EJS_gameName?: string
  }
}

export default function GameRunner({ game }: GameRunnerProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current

    if (!root) return

    const gameUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/game/${game.id}/play`

    window.EJS_player = '#game'
    window.EJS_core = game.platform
    window.EJS_pathtodata = 'https://cdn.emulatorjs.org/stable/data/'
    window.EJS_gameUrl = gameUrl
    window.EJS_gameName = game.title

    const script = document.createElement('script')

    script.src = 'https://cdn.emulatorjs.org/stable/data/loader.js'

    script.async = true

    document.body.appendChild(script)

    return () => {
      const ejs = (window as any).EJS_emulator

      if (ejs) {
        try {
          ejs.pause?.()
        } catch {}

        try {
          ejs.stop?.()
        } catch {}

        try {
          ejs.exit?.()
        } catch {}

        try {
          ejs.destroy?.()
        } catch {}
      }

      const workers = (window as any).__EJS_WORKERS__

      if (workers instanceof Set) {
        workers.forEach((worker: Worker) => {
          try {
            worker.terminate()
          } catch {}
        })

        workers.clear()
      }

      root.innerHTML = ''

      document.querySelectorAll('script').forEach((element) => {
        const src = element.getAttribute('src')

        if (
          src?.includes('emulatorjs') ||
          src?.includes('emulator') ||
          src?.includes('/data/')
        ) {
          element.remove()
        }
      })

      document.querySelectorAll('iframe').forEach((iframe) => {
        if (!iframe.isConnected) return

        try {
          iframe.src = 'about:blank'
          iframe.remove()
        } catch {}
      })

      document
        .querySelectorAll(
          '[class*="ejs"], [id*="ejs"], [class*="EJS"], [id*="EJS"]',
        )
        .forEach((element) => {
          element.remove()
        })

      script.remove()

      delete (window as any).EJS_player
      delete (window as any).EJS_core
      delete (window as any).EJS_pathtodata
      delete (window as any).EJS_gameUrl
      delete (window as any).EJS_gameName
      delete (window as any).EJS_emulator
    }
  }, [game.id, game.platform, game.title])

  return <div ref={rootRef} id="game" className="aspect-video w-full" />
}
