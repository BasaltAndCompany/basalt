// Smoke check: every ui component must render real themed DOM (not nothing).
// Builds as a client bundle (smoke.config.ts) and runs under happy-dom:
//   bunx vite build -c smoke.config.ts && bun .smoke/smoke.js
import { GlobalRegistrator } from "@happy-dom/global-registrator"

// Register the DOM before any solid module evaluates — App's compiled code
// touches window at import time (delegateEvents).
GlobalRegistrator.register()

const [{ render }, { default: App }, ui] = await Promise.all([
  import("solid-js/web"),
  import("@/App"),
  Promise.all([
    import("@/components/ui/button"),
    import("@/components/ui/badge"),
    import("@/components/ui/card"),
    import("@/components/ui/input"),
    import("@/components/ui/label"),
    import("@/components/ui/separator"),
    import("@/components/ui/textarea"),
  ]),
])
const [{ Button }, { Badge }, { Card, CardContent }, { Input }, { Label }, { Separator }, { Textarea }] = ui

const host = document.createElement("div")
document.body.append(host)

render(() => (
    <>
      <Button variant="link" size="link" as="a" href="#">
        Contact
      </Button>
      <Button variant="outline">chip</Button>
      <Badge variant="outline">hero set</Badge>
      <Card>
        <CardContent>x</CardContent>
      </Card>
      <Input id="footage-search" placeholder="e.g. lava flow" />
      <Label for="footage-search">Search</Label>
      <Textarea />
      <Separator class="my-8" />
    </>
  ),
  host,
)

const checks: Array<[string, boolean, string?]> = [
  ["Button link renders <a> with the text-link variant",
    (el) => el.querySelector("a")?.classList.contains("text-foreground/60") === true,
    "a.text-foreground/60 missing"],
  ["Button outline renders themed border",
    (el) => [...el.querySelectorAll("button")].some((b) => b.classList.contains("border-input")),
    "button.border-input missing"],
  ["Badge renders span with outline variant",
    (el) => el.querySelector("span")?.classList.contains("text-foreground") === true,
    "badge span missing"],
  ["Card renders with bg-card and merged p-0-free content",
    (el) => el.querySelector("div.bg-card") !== null && el.querySelector(".p-6.pt-0") !== null,
    "card/content missing"],
  ["Input renders <input> themed",
    (el) => el.querySelector("input")?.classList.contains("border-input") === true,
    "input themed class missing"],
  ["Label associates with input",
    (el) => el.querySelector("label")?.getAttribute("for") === "footage-search",
    "label for= missing"],
  ["Textarea renders <textarea>",
    (el) => el.querySelector("textarea") !== null,
    "textarea missing"],
  ["Separator renders themed",
    (el) => [...el.querySelectorAll("*")].some((n) => n.classList.contains("bg-border") && n.classList.contains("my-8")),
    "separator missing"],
]

let failed = 0

// Full app mount: signals, keyed narrative swap, and Button-as-link integration.
const appHost = document.createElement("div")
document.body.append(appHost)
render(() => <App />, appHost)
checks.push([
  "App mounts: hero video + h1 narrative + nav links render",
  () =>
    appHost.querySelector("video[autoplay]") !== null &&
    appHost.querySelector("h1")?.textContent === "The rock under everything." &&
    appHost.querySelectorAll("nav a").length === 3,
  "video/h1/nav missing",
])

for (const [name, check, hint] of checks) {
  const ok = check(host)
  console.log(`${ok ? "✓" : "✗"} ${name}${ok || !hint ? "" : ` (${hint})`}`)
  if (!ok) failed++
}
console.log(`\n${checks.length - failed}/${checks.length} smoke checks passed`)
process.exit(failed ? 1 : 0)
