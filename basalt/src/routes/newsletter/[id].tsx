// /newsletter/[id] — one Dispatch issue. The dashboard API returns the exact
// published render (same pipeline the email send uses); we display it.
import { useParams } from "@solidjs/router"
import { createAsync } from "@solidjs/router"
import { Show } from "solid-js"
import { Title } from "@solidjs/meta"
import { Page } from "@/components/site"
import { Button } from "@madcactus/ui"

type Issue = {
  id: string
  issueNumber: number
  subject: string
  html: string
}

export default function DispatchIssuePage() {
  const params = useParams()
  const issue = createAsync(async () => {
    const res = await fetch(`https://madcactus.org/api/newsletter-issues/${params.id}`)
    if (!res.ok) return null
    return (await res.json()) as Issue
  })

  return (
    <Show
      when={issue() !== undefined}
      fallback={
        <Page title="The Cactus Dispatch" description="">
          <div class="mx-auto max-w-2xl px-6 py-24 text-center">
            <p class="font-sans text-muted-foreground">Loading…</p>
          </div>
        </Page>
      }
    >
      <Show
        when={issue()}
        fallback={
          <Page title="Issue not found — The Cactus Dispatch" description="">
            <div class="mx-auto max-w-2xl px-6 py-24 text-center">
              <p class="font-sans text-muted-foreground">That issue doesn't exist.</p>
            </div>
          </Page>
        }
      >
        {(i) => (
          <Page title={`${i().subject} — The Cactus Dispatch`} description={i().subject}>
            <Title>{i().subject} — The Cactus Dispatch</Title>
            <article class="issue-body mx-auto max-w-2xl px-6 pb-16 pt-10">
              <p class="font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <a href="/newsletter" class="hover:text-foreground">The Cactus Dispatch</a>
                {" / "}
                Issue {String(i().issueNumber).padStart(2, "0")}
              </p>
              <h1 class="mt-4 font-serif text-4xl leading-tight md:text-5xl">{i().subject}</h1>
              {/* published issue html — the exact render the email send uses */}
              <div class="mt-8" innerHTML={i().html} />
            </article>
            <section class="mx-auto max-w-2xl px-6 pb-24 text-center">
              <h3 class="font-serif text-2xl">Want to start turning your company AI-native?</h3>
              <p class="mx-auto mt-3 max-w-md font-sans text-sm text-muted-foreground">
                I build a custom company brain for one reader every week, completely free. All you
                have to do is click below.
              </p>
              <Button as="a" href={`/brain?ref=${i().id}`} class="mt-6">
                {"{ GET YOUR COMPANY BRAIN }"}
              </Button>
            </section>
          </Page>
        )}
      </Show>
    </Show>
  )
}
