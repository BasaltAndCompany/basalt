import { useEffect, useState } from "react"
import { Logo } from "@/brand/logo"
import { VideoPicker } from "@/brand/video-picker"

const HERO_KEY = "basalt.heroVideo"

/**
 * The scroll narrative. One message per 100vh screen; the bottom-left corner
 * swaps between them as you scroll. Edit copy here — nowhere else.
 * Facts from the Mad Cactus marketing page, in the Basalt voice.
 */
const MESSAGES = [
  {
    title: "The rock under everything.",
    body: "We turn working businesses AI-native — the intelligence layer, the agents, the workflows that make it real.",
  },
  {
    title: "First the audit. Then the brain. Then the agents.",
    body: "Our agent learns every workflow from your people. Your data, docs, and institutional knowledge become one intelligence layer. Custom agents take entire tasks off your team.",
  },
  {
    title: "Proven in production.",
    body: "An autonomous agent transformed IU's ticket-resolution pipeline — productivity up, resolution time down. Measured impact, from real clients.",
  },
  {
    title: "Hand tasks to agents, or don't pay.",
    body: "We don't sell hours. We embed with your team, build the layer, deploy the agents, and train your people to run them. The work speaks for itself.",
  },
]

function TextLink({
  dim = false,
  className,
  children,
  onClick,
}: {
  dim?: boolean
  className?: string
  children: string
  onClick?: (e: React.MouseEvent) => void
}) {
  return (
    <a
      href="#"
      onClick={onClick}
      className={`font-sans text-sm transition-colors hover:text-foreground ${
        dim ? "text-foreground/40" : "text-foreground/60"
      } ${className ?? ""}`}
    >
      {children}
    </a>
  )
}

function Site({ heroVideo }: { heroVideo: string | null }) {
  const [index, setIndex] = useState(0)
  const last = index === MESSAGES.length - 1

  useEffect(() => {
    const onScroll = () =>
      setIndex(
        Math.max(
          0,
          Math.min(
            MESSAGES.length - 1,
            Math.round(window.scrollY / window.innerHeight),
          ),
        ),
      )
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const step = () =>
    window.scrollTo({
      top: (last ? 0 : index + 1) * window.innerHeight,
      behavior: "smooth",
    })

  const msg = MESSAGES[index]

  return (
    <div className="bg-background text-foreground">
      {/* ── Fixed stage: the surface never scrolls away ─────────── */}
      <div className="fixed inset-0" aria-hidden="true">
        {heroVideo ? (
          <>
            <video
              key={heroVideo}
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
          </>
        ) : (
          <>
            <div className="lava-glow absolute inset-x-0 bottom-0 h-72" aria-hidden="true" />
            <svg
              className="absolute bottom-0 left-0 h-40 w-full"
              viewBox="0 0 1200 160"
              preserveAspectRatio="none"
            >
              <g fill="#050505">
                <rect x="0" y="148" width="1200" height="12" />
                <rect x="170" y="66" width="170" height="94" />
                <rect x="515" y="14" width="190" height="146" />
                <rect x="880" y="92" width="165" height="68" />
              </g>
            </svg>
          </>
        )}
      </div>

      {/* ── Fixed chrome ────────────────────────────────────────── */}
      <div className="fixed inset-x-0 top-0 z-20 flex items-start justify-between px-6 py-5">
        <Logo variant="word" redDot suffix="& Company" className="text-[24px]" />
        <nav className="flex flex-col items-end gap-2 pt-2">
          <TextLink>Contact</TextLink>
          <TextLink>Writing</TextLink>
          <TextLink>Careers</TextLink>
        </nav>
      </div>
      <div className="fixed right-0 bottom-0 z-20 px-6 pb-5 text-right">
        <p className="font-sans text-xs tracking-wide text-muted-foreground">
          © 2026 Basalt &amp; Company
        </p>
      </div>

      {/* ── Scroll track: invisible distance, four screens ──────── */}
      <div aria-hidden="true">
        {MESSAGES.map((_, i) => (
          <div key={i} className="h-svh snap-start" />
        ))}
      </div>

      {/* ── Fixed corner narrative: only the words swap ────────── */}
      <div className="pointer-events-none fixed bottom-0 left-0 z-20 max-w-2xl px-6 pb-10">
        <div key={index} className="msg-in">
          {index === 0 ? (
            <h1 className="font-serif text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
              {msg.title}
            </h1>
          ) : (
            <p className="font-serif text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
              {msg.title}
            </p>
          )}
          <p className="mt-4 max-w-lg font-sans text-base leading-relaxed text-muted-foreground">
            {msg.body}
          </p>
        </div>
        <div className="pointer-events-auto mt-6 flex items-center gap-8">
          <TextLink>Start a conversation</TextLink>
          <TextLink dim>Read the thesis</TextLink>
        </div>
      </div>

      {/* ── Scroll control ──────────────────────────────────────── */}
      <button
        onClick={step}
        aria-label={last ? "Back to top" : "Scroll down"}
        className="fixed bottom-5 left-1/2 z-20 -translate-x-1/2 text-foreground/60 transition-colors hover:text-foreground"
      >
        <svg
          viewBox="0 0 24 24"
          className={`h-7 w-7 ${last ? "rotate-180" : ""} ${index === 0 ? "chev-bob" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
  )
}

export default function App() {
  const [view, setView] = useState<"site" | "footage">("site")
  const [heroVideo, setHeroVideo] = useState<string | null>(() => {
    // One-time: early picker test-picks (the 30MB Commons original) clobbered
    // the cut hero loop. Strip once; later picker choices stick.
    if (!localStorage.getItem("basalt.heroVideoMigrated")) {
      localStorage.setItem("basalt.heroVideoMigrated", "1")
      localStorage.removeItem(HERO_KEY)
    }
    return localStorage.getItem(HERO_KEY) ?? "/hero-loop.mp4"
  })

  // The footage picker lives off-stage at #footage — no link on the page.
  useEffect(() => {
    const sync = () => setView(window.location.hash === "#footage" ? "footage" : "site")
    sync()
    window.addEventListener("hashchange", sync)
    return () => window.removeEventListener("hashchange", sync)
  }, [])

  if (view === "footage") {
    return (
      <VideoPicker
        heroVideo={heroVideo}
        onSetHero={setHeroVideo}
        onBack={() => {
          window.location.hash = ""
        }}
      />
    )
  }
  return <Site heroVideo={heroVideo} />
}
