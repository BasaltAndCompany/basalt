// /brain — the ONE lead magnet: "answer a few questions about your company,
// we build you a custom company brain, free." Ported from the dashboard onto
// the ink theme + form primitives. Posts to the dashboard's /api/brain-request
// (same-origin today; CORS makes it survive the domain flip).
import type { JSX } from "solid-js"
import { DASHBOARD } from "@/lib/dashboard"
import { createSignal, Show } from "solid-js"
import { Page } from "@/components/site"
import { Button } from "@basalt/ui"
import { Input } from "@basalt/ui"
import { Label } from "@basalt/ui"
import { Textarea } from "@basalt/ui"
import { Select,
  SelectContent,
  SelectHiddenSelect,
  SelectItem,
  SelectTrigger,
  SelectValue, } from "@basalt/ui"

function Field(props: { id: string; label: string; required?: boolean; children: JSX.Element }) {
  return (
    <div class="space-y-1.5">
      <Label for={props.id}>
        {props.label}
        {props.required ? " *" : ""}
      </Label>
      {props.children}
    </div>
  )
}

// Kobalte Select needs its option list up front; HiddenSelect keeps
// new FormData(form) working (the form serializes it like a native select).
function SelectField(props: {
  id: string
  label: string
  name: string
  options: string[]
  value: () => string
  onChange: (v: string) => void
}) {
  return (
    <Field id={props.id} label={props.label}>
      <Select
        options={props.options}
        value={props.value() || null}
        onChange={(v) => props.onChange(v ?? "")}
        placeholder="Select…"
        itemComponent={(p) => <SelectItem item={p.item}>{p.item.rawValue}</SelectItem>}
        class="w-full"
      >
        <SelectHiddenSelect name={props.name} id={props.id} />
        <SelectTrigger id={props.id}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent />
      </Select>
    </Field>
  )
}

export default function BrainLanding() {
  const [headcount, setHeadcount] = createSignal("")
  const [techTeam, setTechTeam] = createSignal("")
  const [heardAbout, setHeardAbout] = createSignal("")
  const [sending, setSending] = createSignal(false)
  const [done, setDone] = createSignal(false)
  const [error, setError] = createSignal("")

  const submit = async (e: SubmitEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>
    // issue attribution — issue CTAs link here with ?ref=<docId>
    data.ref = new URLSearchParams(window.location.search).get("ref") ?? ""
    setSending(true)
    setError("")
    const res = await fetch(`${DASHBOARD}/api/brain-request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    setSending(false)
    if (res.ok) {
      setDone(true)
    } else {
      const body = (await res.json().catch(() => ({}))) as { error?: string }
      setError(body.error ?? "Something broke — try again.")
    }
  }

  return (
    <Page
      title="Get a Free Custom Company Brain | Basalt & Company"
      description="Answer a few questions about your company. We build you a custom company brain, free, so you can see what AI actually does for your business."
    >
      <section class="mx-auto max-w-2xl px-6 pb-24 pt-10">
        <h1 class="font-serif text-4xl leading-tight md:text-5xl">
          We'll build your company a <em>brain</em>. Free.
        </h1>
        <p class="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
          Answer a few questions about your company below. We build you a custom company brain:
          your data, docs, and institutional knowledge, unified so agents can actually reason over
          it.
        </p>
        <p class="mt-3 font-serif text-base italic text-muted-foreground">
          I build one company brain every week, in the order requests arrive. You see what it does
          before you pay for anything.
        </p>

        <Show
          when={!done()}
          fallback={
            <p class="mt-10 font-serif text-lg leading-relaxed">
              You're in. I'll read your answers, research your company, and reply within a couple
              of days with your brain. — Collin
            </p>
          }
        >
          <form onSubmit={submit} class="mt-10 space-y-6" noValidate={false}>
            {/* honeypot — hidden from humans, bots fill it and get a silent ok */}
            <div class="absolute -left-[9999px]" aria-hidden="true">
              <label for="website">Website</label>
              <Input id="website" name="website" type="text" tabindex={-1} autocomplete="off" />
            </div>

            <div class="grid gap-6 sm:grid-cols-2">
              <Field id="brain-name" label="Full name" required>
                <Input id="brain-name" name="name" type="text" required autocomplete="name" />
              </Field>
              <Field id="brain-email" label="Work email" required>
                <Input
                  id="brain-email"
                  name="email"
                  type="email"
                  required
                  autocomplete="email"
                  spellcheck={false}
                />
              </Field>
              <Field id="brain-title" label="Job title">
                <Input id="brain-title" name="jobTitle" type="text" autocomplete="organization-title" />
              </Field>
              <Field id="brain-company" label="Company name" required>
                <Input id="brain-company" name="company" type="text" required autocomplete="organization" />
              </Field>
              <Field id="brain-industry" label="Industry">
                <Input id="brain-industry" name="industry" type="text" />
              </Field>
              <SelectField
                id="brain-headcount"
                label="Company size"
                name="headcount"
                options={["Just me", "2–5", "6–10", "11–25", "26–50", "50+"]}
                value={headcount}
                onChange={setHeadcount}
              />
            </div>

            <Field id="brain-what" label="What does your company do?">
              <Textarea id="brain-what" name="whatTheyDo" rows={2} />
            </Field>

            <SelectField
              id="brain-tech"
              label="How big is your technical team?"
              name="techTeam"
              options={["None", "1–3", "4–10", "10+"]}
              value={techTeam}
              onChange={setTechTeam}
            />

            <Field
              id="brain-stack"
              label="What does your company run on day to day — and does it use AI for anything today?"
            >
              <Textarea id="brain-stack" name="stackAndAi" rows={3} />
            </Field>

            <Field id="brain-bottleneck" label="What's the biggest bottleneck in the business right now?">
              <Textarea id="brain-bottleneck" name="bottleneck" rows={3} />
            </Field>

            <SelectField
              id="brain-heard"
              label="How did you hear about us?"
              name="heardAbout"
              options={["LinkedIn post", "The Cactus Dispatch newsletter", "Referral", "Other"]}
              value={heardAbout}
              onChange={setHeardAbout}
            />

            <p class="min-h-5 font-sans text-sm text-destructive" role="alert">
              {error()}
            </p>
            <Button type="submit" size="lg" disabled={sending()}>
              {sending() ? "{ SENDING }" : "{ BUILD MY BRAIN }"}
            </Button>
          </form>
        </Show>
      </section>
    </Page>
  )
}
