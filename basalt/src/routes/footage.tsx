import { VideoPicker } from "@/brand/video-picker"
import { initHeroVideo } from "@/routes/site-state"

export default function Footage() {
  return (
    <VideoPicker
      heroVideo={initHeroVideo()}
      // Across routes localStorage is the source of truth; Site re-reads on mount.
      onSetHero={() => {}}
      onBack={() => {
        window.location.href = "/"
      }}
    />
  )
}
