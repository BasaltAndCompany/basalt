import { useEffect, useState } from "react"

type Clip = {
  title: string
  url: string
  poster?: string
  mb: number
  mime: string
}

const TOPICS = [
  "lava flow",
  "volcano eruption",
  "ocean waves",
  "stormy sea",
  "clouds timelapse",
  "foggy forest",
  "geyser eruption",
  "glacier ice",
]

const KEY = "basalt.heroVideo"

/**
 * Footage picker: scrolls Wikimedia Commons' free (CC) video library.
 * Pick a clip, preview it looping full-bleed, set it as the hero background.
 * ponytail: Commons = zero keys and stable URLs; swap in Pexels/Coverr later
 * if the quality bar demands it.
 */
export function VideoPicker({
  heroVideo,
  onSetHero,
  onBack,
}: {
  heroVideo: string | null
  onSetHero: (url: string | null) => void
  onBack: () => void
}) {
  const [query, setQuery] = useState("lava flow")
  const [clips, setClips] = useState<Clip[]>([])
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState<Clip | null>(null)

  useEffect(() => {
    const ctrl = new AbortController()
    setLoading(true)
    const params = new URLSearchParams({
      action: "query",
      format: "json",
      origin: "*",
      generator: "search",
      gsrsearch: `filetype:video ${query}`,
      gsrnamespace: "6",
      gsrlimit: "24",
      prop: "imageinfo",
      iiprop: "url|mime|size",
      iiurlwidth: "480",
    })
    fetch(`https://commons.wikimedia.org/w/api.php?${params}`, { signal: ctrl.signal })
      .then((r) => r.json())
      .then((data) => {
        const pages: object = data.query?.pages ?? {}
        const found: Clip[] = Object.values(pages)
          .map((p): Clip | null => {
            const info = (p as { imageinfo?: Array<Record<string, unknown>> }).imageinfo?.[0]
            if (!info) return null
            const mime = String(info.mime ?? "")
            if (mime !== "video/webm" && mime !== "video/mp4") return null
            return {
              title: String((p as { title: string }).title).replace(/^File:/, ""),
              url: String(info.url),
              poster: (info.thumburl as string) ?? undefined,
              mb: Math.round(Number(info.size ?? 0) / 1e6),
              mime,
            }
          })
          .filter((c): c is Clip => c !== null)
        setClips(found)
        setLoading(false)
      })
      .catch(() => setLoading(false))
    return () => ctrl.abort()
  }, [query])

  const setHero = (url: string | null) => {
    if (url) localStorage.setItem(KEY, url)
    else localStorage.removeItem(KEY)
    onSetHero(url)
    setPreview(null)
  }

  return (
    <div className="min-h-svh">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <p className="font-serif text-xl">Footage library</p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              onBack()
            }}
            className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to site
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-10">
        <p className="max-w-xl font-sans text-sm leading-relaxed text-muted-foreground">
          Free, licensed stock video from Wikimedia Commons. Click any clip to preview it
          looping full-bleed, then set it as the hero background. Files under ~15 MB loop
          best on first load.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <button
              key={t}
              onClick={() => setQuery(t)}
              className={`border border-border px-3 py-1.5 font-sans text-xs transition-colors ${
                query === t
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {heroVideo && (
          <p className="mt-6 font-sans text-xs text-muted-foreground">
            Current hero video is set.{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setHero(null)
              }}
              className="text-signal hover:underline"
            >
              Remove it
            </a>
            .
          </p>
        )}

        {loading ? (
          <p className="mt-10 font-sans text-sm text-muted-foreground">Searching…</p>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {clips.map((c) => (
              <button
                key={c.title}
                onClick={() => setPreview(c)}
                className="group text-left"
              >
                <div className="aspect-video w-full overflow-hidden bg-card">
                  {c.poster ? (
                    <img
                      src={c.poster}
                      alt=""
                      className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                    />
                  ) : null}
                </div>
                <p className="mt-2 truncate font-sans text-xs text-muted-foreground">
                  {c.title}
                </p>
                <p className="font-sans text-[10px] text-muted-foreground/60">{c.mb} MB</p>
              </button>
            ))}
            {clips.length === 0 && (
              <p className="col-span-full font-sans text-sm text-muted-foreground">
                Nothing found for “{query}”. Try another topic.
              </p>
            )}
          </div>
        )}
      </div>

      {preview && (
        <div className="fixed inset-0 z-50 bg-background/95">
          <video
            key={preview.url}
            src={preview.url}
            poster={preview.poster}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background to-transparent p-8">
            <div className="min-w-0 pr-4">
              <p className="truncate font-sans text-sm">{preview.title}</p>
              <p className="font-sans text-xs text-muted-foreground">
                {preview.mb} MB · {preview.mime}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-6">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setHero(preview.url)
                }}
                className="font-sans text-sm text-signal hover:underline"
              >
                Use in hero
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setPreview(null)
                }}
                className="font-sans text-sm text-muted-foreground hover:text-foreground"
              >
                Close
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
