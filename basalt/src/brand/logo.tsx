import { cn } from "@/lib/utils"

/**
 * Basalt brand marks. One geometry: three basalt pillars, staggered tops.
 * Ink on paper, paper on ink. The middle pillar may take the signal red —
 * that is the only color the brand gets.
 */

const SIGNAL_RED = "#C8102E"

export function BasaltMark({
  size = 28,
  redBar = false,
  className,
}: {
  size?: number
  redBar?: boolean
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="9" width="7" height="23" />
      <rect x="12.5" y="2" width="7" height="30" fill={redBar ? SIGNAL_RED : undefined} />
      <rect x="22" y="12" width="7" height="20" />
    </svg>
  )
}

export function Wordmark({
  suffix,
  redDot = false,
  className,
}: {
  suffix?: string
  redDot?: boolean
  className?: string
}) {
  return (
    <span className={cn("flex flex-col items-start leading-none", className)}>
      <span className="serif-display font-serif text-[1.6em] tracking-[-0.01em]">
        Basalt{redDot && <span className="text-signal">.</span>}
      </span>
      {suffix && (
        <span className="mt-[0.35em] font-sans text-[0.32em] font-medium uppercase tracking-[0.34em] text-muted-foreground">
          {suffix}
        </span>
      )}
    </span>
  )
}

/**
 * Full lockup scales with `size` via em units — mark, word, and suffix all move together.
 */
export function Logo({
  variant = "full",
  size = 28,
  redBar = false,
  redDot = false,
  suffix,
  className,
}: {
  variant?: "mark" | "word" | "full"
  size?: number
  redBar?: boolean
  redDot?: boolean
  suffix?: string
  className?: string
}) {
  if (variant === "mark") return <BasaltMark size={size} redBar={redBar} className={className} />

  if (variant === "word")
    return <Wordmark suffix={suffix} redDot={redDot} className={cn("text-[1em]", className)} />

  return (
    <span
      className={cn("inline-flex items-center gap-[0.55em] leading-none", className)}
      style={{ fontSize: size }}
    >
      <BasaltMark size={size} redBar={redBar} />
      <Wordmark suffix={suffix} redDot={redDot} />
    </span>
  )
}
