// The AI scorecard lead magnet is retired — /brain is the one funnel. Old
// bookmarks 302 here, no lost traffic. (Mirrors the dashboard's route.)
import type { APIEvent } from "@solidjs/start/server"

export const GET = async (_event: APIEvent) => {
  return new Response(null, { status: 302, headers: { Location: "/brain" } })
}
