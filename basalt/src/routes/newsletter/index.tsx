// /newsletter — hero + signup + archive. The archive SSRs from the
// dashboard's public issues API so newly published issues appear without a
// rebuild (same DB, one render pipeline).
import { createAsync } from "@solidjs/router"
import { For, Show } from "solid-js"
import { Page } from "@/components/site"
import { Button } from "@madcactus/ui"
import { Input } from "@madcactus/ui"

type Issue = { id: string; issueNumber: number; title: string; publishedAt: string | null }

const DASHBOARD = "https://madcactus.org"

export default function Newsletter() {
  const issues = createAsync(async () => {
    const res = await fetch(`${DASHBOARD}/api/newsletter-issues`)
    if (!res.ok) return []
    const data = (await res.json()) as { issues: Issue[] }
    return data.issues
  })

  return (
    <Page
      title="The Cactus Dispatch | Basalt & Company"
      description="Weekly AI teardowns for business owners. Real deployments, real numbers, and the blueprint your team needs to build the same thing."
    >
      {/* hero */}
      <section class="mx-auto max-w-3xl px-6 pb-20 pt-14 text-center">
        <h1 class="font-serif text-5xl leading-[1.05] tracking-[-0.01em] md:text-6xl">
          AI teardowns
          <br />
          <em>from our real clients.</em>
        </h1>
        <p class="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-muted-foreground">
          Weekly breakdowns of real AI deployments. What we built, what it cost, and the blueprint
          to do the same thing. Higher margins, more revenue, no new headcount.
        </p>
        <form
          class="mx-auto mt-8 flex max-w-md items-center gap-2"
          onSubmit={async (e) => {
            e.preventDefault()
            const form = e.currentTarget as HTMLFormElement
            const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim()
            const btn = form.querySelector<HTMLButtonElement>("button[type=submit]")!
            btn.textContent = "{ SUBSCRIBING }"
            btn.disabled = true
            const res = await fetch(`${DASHBOARD}/api/newsletter`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email }),
            })
            if (res.ok) {
              form.innerHTML = '<p class="font-serif text-base">You\'re in. Check your inbox.</p>'
            } else {
              btn.textContent = "{ SUBSCRIBE }"
              btn.disabled = false
            }
          }}
        >
          <Input type="email" name="email" placeholder="your@email.com" required autocomplete="email" spellcheck={false} />
          <Button type="submit" class="shrink-0">{"{ SUBSCRIBE }"}</Button>
        </form>
      </section>

      {/* what you get */}
      <section class="mx-auto max-w-6xl px-6 pb-20">
        <div class="grid gap-10 md:grid-cols-3">
          {[
            ["01", "The story", "The company, the problem, why it mattered. What we deployed and where it moved the needle."],
            ["02", "The blueprint", "The full agent lifecycle. The tools, the prompts, the evals. Forward it to your team each week for a quick AI win."],
            ["03", "The numbers", "Real cost, real hours saved, real revenue. No hypotheticals — what actually happened when it shipped."],
          ].map(([num, title, body]) => (
            <div>
              <div class="font-serif text-2xl text-signal">{num}</div>
              <h3 class="mt-2 font-serif text-xl">{title}</h3>
              <p class="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* past issues */}
      <section class="mx-auto max-w-3xl px-6 pb-24">
        <h2 class="font-serif text-3xl">Past issues</h2>
        <div class="mt-8 divide-y divide-border">
          <Show when={issues()} fallback={<p class="font-sans text-sm text-muted-foreground">Loading…</p>} keyed>
            {(list) => (
              <For each={list}>
                {(i) => (
                  <a href={`/newsletter/${i.id}`} class="group block py-6">
                    <div class="flex items-baseline justify-between gap-4">
                      <span class="font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground">
                        Issue {String(i.issueNumber).padStart(2, "0")}
                        {i.publishedAt
                          ? ` · ${new Date(i.publishedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })}`
                          : ""}
                      </span>
                      <span class="font-serif text-sm text-foreground/60 transition-colors group-hover:text-foreground">
                        {"{ READ THE TEARDOWN }"}
                      </span>
                    </div>
                    <h3 class="mt-2 font-serif text-2xl">{i.title}</h3>
                  </a>
                )}
              </For>
            )}
          </Show>
        </div>
      </section>
    </Page>
  )
}
