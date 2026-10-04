// Smoke check: every ui component must render real themed DOM (not nothing).
// Builds as a client bundle (smoke.config.ts) and runs under happy-dom:
//   bunx vite build -c smoke.config.ts && bun .smoke/smoke.js
import { GlobalRegistrator } from "@happy-dom/global-registrator"

// Register the DOM before any solid module evaluates — App's compiled code
// touches window at import time (delegateEvents).
GlobalRegistrator.register()

const [{ render }, { default: App }, { default: UiGallery }, ui] = await Promise.all([
  import("solid-js/web"),
  import("@/App"),
  import("@/ui-gallery"),
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

let failed = 0
const checks: Array<[string, (host: Element) => boolean, string?]> = [
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

// Primitives mount (checks above target this host).
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

// ── Gallery: every library component mounted under one host ─────────────────
const g = document.createElement("div")
document.body.append(g)
render(() => <UiGallery />, g)

// Kobalte portals (dialog/menu/popover/toast) render to document.body, so
// "opened" checks look at the whole document, not just the gallery host.
function openByLabel(triggerText: string): boolean {
  const btn = [...g.querySelectorAll("button")].find(
    (b) => b.textContent?.trim() === triggerText,
  )
  if (!btn) return false
  btn.click()
  return true
}

const galleryChecks: Array<[string, boolean | (() => boolean), string?]> = [
  ["Select: hidden native select bridges the form (3 options)",
    () => {
      const form = g.querySelector<HTMLFormElement>("#gallery-select-form")
      const hidden = form?.querySelector("select")
      return hidden !== null && hidden.options.length === 4 // 3 + Kobalte's empty placeholder
    },
    "hidden select missing"],
  ["Select: value chosen lands in new FormData(form)",
    () => {
      const form = g.querySelector<HTMLFormElement>("#gallery-select-form")!
      const hidden = form.querySelector("select")!
      hidden.value = "Landing"
      return [...new FormData(form).values()].includes("Landing")
    },
    "FormData does not see the hidden select"],
  ["Checkbox renders a real checkbox input",
    () => g.querySelector("input[type=checkbox]") !== null],
  ["Switch renders role=switch control",
    () => g.querySelector("[role=switch]") !== null],
  ["Dialog opens into a portal with role=dialog",
    () => openByLabel("Open dialog") && document.querySelector("[role=dialog]") !== null,
    "no role=dialog after trigger click"],
  ["AlertDialog opens with role=alertdialog",
    () => openByLabel("Delete") && document.querySelector("[role=alertdialog]") !== null,
    "no role=alertdialog after trigger click"],
  ["DropdownMenu opens a menu (opens on pointerdown)",
    () => {
      const b = [...g.querySelectorAll("button")].find((x) => x.textContent?.trim() === "Menu")
      b?.dispatchEvent(new MouseEvent("pointerdown", { bubbles: true }))
      return document.querySelector("[role=menu]") !== null
    },
    "no role=menu after trigger click"],
  ["Table renders header + body rows",
    () => g.querySelector("thead") !== null && g.querySelectorAll("tbody tr").length === 2],
  ["Tabs render tablist with active panel",
    () =>
      g.querySelector("[role=tablist]") !== null &&
      g.textContent?.includes("First tab body.") === true],
  ["Tabs switch panel on click",
    () => {
      const two = [...g.querySelectorAll("[role=tab]")].find((t) => t.textContent === "Two")
      two?.click()
      return g.textContent?.includes("Second tab body.") === true
    },
    "tab two did not swap panel"],
  ["Checkbox toggles checked on click",
    () => {
      const box = g.querySelector("input[type=checkbox]") as HTMLInputElement
      box?.click()
      return box?.checked === true
    },
    "checkbox did not check"],
  ["Button disabled renders disabled attr",
    () => [...g.querySelectorAll("button")].some((b) => b.disabled && b.textContent === "Disabled")],
  ["Tooltip pairs trigger with content",
    () => g.querySelector("[aria-describedby]") !== null || g.querySelector("[data-expanded]") !== null,
    "no tooltip wiring found"],
  ["Alert renders role=alert",
    () => g.querySelector("[role=alert]") !== null],
  ["Skeleton renders themed block",
    () => g.querySelector('[class*="animate-pulse"]') !== null],
  ["Command renders cmdk input + items",
    () => g.querySelector("[cmdk-input]") !== null && g.querySelectorAll("[cmdk-item]").length === 3],
  ["Command filters on input",
    () => {
      const input = g.querySelector<HTMLInputElement>("[cmdk-input]")!
      input.value = "writ"
      input.dispatchEvent(new Event("input", { bubbles: true })) // Solid delegates "input"
      const items = [...g.querySelectorAll("[cmdk-item]")]
      return items.length === 1 && items[0].textContent === "Writing"
    },
    "cmdk filter did not narrow to Writing"],
]

// Toast: fires through the lib/toast store; renderer maps kind→variant.
galleryChecks.push([
  "Toast: info renders from store",
  () => openByLabel("toast info") && [...document.querySelectorAll("li")].some((li) => li.textContent === "Saved."),
  "no toast after fire",
])
galleryChecks.push([
  "Toast: error maps to destructive variant",
  () =>
    openByLabel("toast error") &&
    [...document.querySelectorAll("li")].some(
      (li) => li.textContent === "Failed to save." && li.className.includes("bg-destructive"),
    ),
  "no destructive toast",
])

for (const [name, check, hint] of galleryChecks) {
  const ok = typeof check === "boolean" ? check : check()
  console.log(`${ok ? "✓" : "✗"} ${name}${ok || !hint ? "" : ` (${hint})`}`)
  if (!ok) failed++
}

// Full app mount: signals, keyed narrative swap, and Button-as-link integration.
const appHost = document.createElement("div")
document.body.append(appHost)
render(() => <App />, appHost)
console.log(
  `${((): boolean => {
    const ok =
      appHost.querySelector("video[autoplay]") !== null &&
      appHost.querySelector("h1")?.textContent === "The rock under everything." &&
      appHost.querySelectorAll("nav a").length === 3
    if (!ok) failed++
    return ok
  })() ? "✓" : "✗"} App mounts: hero video + h1 narrative + nav links render`,
)

for (const [name, check, hint] of checks) {
  const ok = check(host)
  console.log(`${ok ? "✓" : "✗"} ${name}${ok || !hint ? "" : ` (${hint})`}`)
  if (!ok) failed++
}

console.log(`\n${checks.length + galleryChecks.length + 1 - failed}/${checks.length + galleryChecks.length + 1} smoke checks passed`)
process.exit(failed ? 1 : 0)
