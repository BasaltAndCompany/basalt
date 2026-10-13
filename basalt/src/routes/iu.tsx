// IU case study — ported from the dashboard's marketing route onto the ink
// theme + library primitives. Copy verbatim; FMR vellum css replaced by
// layout utilities.
import type { JSX } from "solid-js"
import { Page } from "@/components/site"
import { Button } from "@basalt/ui"
import { Separator } from "@basalt/ui"

function CaseSection(props: { label: string; children: JSX.Element }) {
  return (
    <section class="mx-auto max-w-6xl px-6 py-16">
      <div class="grid gap-10 md:grid-cols-12">
        <h2 class="font-serif text-4xl leading-tight md:col-span-4">
          The
          <br />
          <em>{props.label}</em>
        </h2>
        <div class="space-y-4 font-sans text-base leading-relaxed text-muted-foreground md:col-span-8">
          {props.children}
        </div>
      </div>
    </section>
  )
}

function Stat(props: { value: string; label: string }) {
  return (
    <div>
      <strong class="font-serif text-3xl">{props.value}</strong>
      <p class="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {props.label}
      </p>
    </div>
  )
}

export default function IuCaseStudy() {
  return (
    <Page
      title="Basalt & Company — IU Case Study"
      description="How we built an autonomous data engineering agent for Indiana University that increased productivity by 45%."
    >
      {/* hero */}
      <section class="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <div class="grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p class="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Case Study — Data Engineering
            </p>
            <h1 class="mt-4 font-serif text-5xl leading-[1.05] tracking-[-0.01em] md:text-6xl">
              Indiana
              <br />
              <em>University</em>
            </h1>
          </div>
          <p class="max-w-md font-sans text-base leading-relaxed text-muted-foreground md:justify-self-end">
            IU's data engineering team was drowning in tickets. Senior engineers spent more time
            triaging than building. We deployed an autonomous AI agent that performs intelligent
            first-pass analysis — transforming their resolution pipeline and freeing the team to
            focus on architecture, not triage.
          </p>
        </div>
      </section>

      {/* stats */}
      <section class="border-y border-border">
        <div class="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          <Stat value="45%" label="Productivity Increase" />
          <Stat value="MTTR" label="Reduced Significantly" />
          <Stat value="Q2—Q3" label="Measured Impact Period" />
          <Stat value="24/7" label="Agent Uptime" />
        </div>
      </section>

      <CaseSection label="Problem">
        <p>
          IU's data engineering team managed a high-throughput ticket queue serving researchers,
          faculty, and staff across the university. As data infrastructure grew, so did the volume
          and complexity of incoming issues.
        </p>
        <p>
          Senior engineers were spending a disproportionate amount of time on initial triage —
          reading tickets, categorizing issues, identifying root causes, and routing them to the
          right person. This created a bottleneck that slowed resolution times and pulled
          experienced engineers away from higher-value work.
        </p>
        <h4 class="pt-2 font-serif text-lg text-foreground">Key Challenges</h4>
        <ul class="list-disc space-y-1 pl-5">
          <li>High ticket volume with inconsistent categorization</li>
          <li>Senior engineers spending hours on triage instead of engineering</li>
          <li>Long mean time to resolution (MTTR) on common issues</li>
          <li>Knowledge silos — only senior staff could accurately route tickets</li>
          <li>No automated first-pass analysis or prioritization</li>
        </ul>
      </CaseSection>

      <CaseSection label="Solution">
        <p>
          We designed and deployed a custom AI agent purpose-built for IU's data engineering
          workflow. The agent integrates directly with their ticketing system and performs an
          intelligent first-pass analysis on every incoming issue.
        </p>
        <p>
          Using their institutional knowledge base and historical ticket data, the agent
          categorizes issues, identifies likely root causes, suggests resolution paths, and routes
          tickets to the appropriate engineer with full context attached.
        </p>
        <h4 class="pt-2 font-serif text-lg text-foreground">Agent Capabilities</h4>
        <ul class="list-disc space-y-1 pl-5">
          <li>Automatic ticket categorization and priority scoring</li>
          <li>Root cause analysis based on historical patterns</li>
          <li>Context-rich routing with suggested resolution steps</li>
          <li>Continuous learning from resolution outcomes</li>
          <li>Integration with existing tooling and documentation</li>
        </ul>
      </CaseSection>

      {/* process */}
      <section class="mx-auto max-w-6xl px-6 py-16">
        <h2 class="font-serif text-3xl">How We Built It</h2>
        <Separator class="my-6" />
        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Discovery", "Deep-dive into IU's ticketing data, workflows, team structure, and pain points."],
            ["02", "Intelligence Layer", "Built the knowledge base from historical tickets, runbooks, and institutional docs."],
            ["03", "Agent Development", "Designed and trained the autonomous agent with custom workflows for triage and routing."],
            ["04", "Deployment", "Rolled out incrementally, measured impact across Q2—Q3, iterated on feedback."],
          ].map(([num, title, body]) => (
            <div>
              <div class="font-serif text-2xl text-signal">{num}</div>
              <h4 class="mt-2 font-serif text-lg">{title}</h4>
              <p class="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* quote */}
      <section class="mx-auto max-w-3xl px-6 py-20 text-center">
        <blockquote class="font-serif text-2xl leading-snug md:text-3xl">
          "The agent handles the first pass on every ticket. My team now <em>focuses on
          engineering</em>, not inbox management."
        </blockquote>
        <cite class="mt-6 block font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground not-italic">
          Data Engineering Lead, Indiana University
        </cite>
      </section>

      <CaseSection label="Results">
        <p>
          Measured over Q2 and Q3, the agent's impact was immediate and substantial. Overall team
          productivity increased by 45%, driven primarily by the elimination of manual triage and
          faster routing accuracy.
        </p>
        <p>
          Mean time to resolution dropped significantly as engineers received tickets that were
          already categorized, prioritized, and enriched with likely root causes and suggested
          fixes.
        </p>
        <h4 class="pt-2 font-serif text-lg text-foreground">Impact Summary</h4>
        <ul class="list-disc space-y-1 pl-5">
          <li>45% increase in team productivity across Q2—Q3</li>
          <li>Significant reduction in mean time to resolution (MTTR)</li>
          <li>Senior engineers reclaimed architecture and systems time</li>
          <li>Ticket routing accuracy improved with context-rich handoffs</li>
          <li>Agent accuracy continued to improve through continuous learning</li>
        </ul>
      </CaseSection>

      {/* CTA */}
      <section class="mx-auto max-w-2xl px-6 py-24 text-center">
        <h2 class="font-serif text-4xl leading-tight">
          Want this for
          <br />
          <em>your team?</em>
        </h2>
        <p class="mx-auto mt-4 max-w-md font-sans text-base text-muted-foreground">
          Get a free audit of your business operations. We'll show you exactly where an AI agent
          can make the biggest impact.
        </p>
        <Button as="a" href="/brain" class="mt-8" size="lg">
          {"{ GET YOUR COMPANY BRAIN }"}
        </Button>
      </section>
    </Page>
  )
}
