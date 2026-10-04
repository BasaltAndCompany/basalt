import { M as createComponent, h as ssr, l as escape, v as ssrHydrationKey } from "../_libs/solid-js.mjs";
import { m as Button } from "./src-CEr7MizD.mjs";
import { t as Page } from "./site-n8E3Se2v.mjs";
import { t as Separator } from "./separator-DzFt32A7.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/iu-DrC24vjj.js
var _tmpl$ = [
	"<section",
	" class=\"mx-auto max-w-6xl px-6 py-16\"><div class=\"grid gap-10 md:grid-cols-12\"><h2 class=\"font-serif text-4xl leading-tight md:col-span-4\">The<br><em>",
	"</em></h2><div class=\"space-y-4 font-sans text-base leading-relaxed text-muted-foreground md:col-span-8\">",
	"</div></div></section>"
];
var _tmpl$2 = [
	"<div",
	"><strong class=\"font-serif text-3xl\">",
	"</strong><p class=\"mt-1 font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground\">",
	"</p></div>"
];
var _tmpl$3 = ["<section", " class=\"mx-auto max-w-6xl px-6 pb-16 pt-10\"><div class=\"grid gap-10 md:grid-cols-2 md:items-end\"><div><p class=\"font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground\">Case Study — Data Engineering</p><h1 class=\"mt-4 font-serif text-5xl leading-[1.05] tracking-[-0.01em] md:text-6xl\">Indiana<br><em>University</em></h1></div><p class=\"max-w-md font-sans text-base leading-relaxed text-muted-foreground md:justify-self-end\">IU's data engineering team was drowning in tickets. Senior engineers spent more time triaging than building. We deployed an autonomous AI agent that performs intelligent first-pass analysis — transforming their resolution pipeline and freeing the team to focus on architecture, not triage.</p></div></section>"];
var _tmpl$4 = [
	"<section",
	" class=\"border-y border-border\"><div class=\"mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div></section>"
];
var _tmpl$5 = ["<p", ">IU's data engineering team managed a high-throughput ticket queue serving researchers, faculty, and staff across the university. As data infrastructure grew, so did the volume and complexity of incoming issues.</p>"];
var _tmpl$6 = ["<p", ">Senior engineers were spending a disproportionate amount of time on initial triage — reading tickets, categorizing issues, identifying root causes, and routing them to the right person. This created a bottleneck that slowed resolution times and pulled experienced engineers away from higher-value work.</p>"];
var _tmpl$7 = ["<h4", " class=\"pt-2 font-serif text-lg text-foreground\">Key Challenges</h4>"];
var _tmpl$8 = ["<ul", " class=\"list-disc space-y-1 pl-5\"><li>High ticket volume with inconsistent categorization</li><li>Senior engineers spending hours on triage instead of engineering</li><li>Long mean time to resolution (MTTR) on common issues</li><li>Knowledge silos — only senior staff could accurately route tickets</li><li>No automated first-pass analysis or prioritization</li></ul>"];
var _tmpl$9 = ["<p", ">We designed and deployed a custom AI agent purpose-built for IU's data engineering workflow. The agent integrates directly with their ticketing system and performs an intelligent first-pass analysis on every incoming issue.</p>"];
var _tmpl$0 = ["<p", ">Using their institutional knowledge base and historical ticket data, the agent categorizes issues, identifies likely root causes, suggests resolution paths, and routes tickets to the appropriate engineer with full context attached.</p>"];
var _tmpl$1 = ["<h4", " class=\"pt-2 font-serif text-lg text-foreground\">Agent Capabilities</h4>"];
var _tmpl$10 = ["<ul", " class=\"list-disc space-y-1 pl-5\"><li>Automatic ticket categorization and priority scoring</li><li>Root cause analysis based on historical patterns</li><li>Context-rich routing with suggested resolution steps</li><li>Continuous learning from resolution outcomes</li><li>Integration with existing tooling and documentation</li></ul>"];
var _tmpl$11 = [
	"<section",
	" class=\"mx-auto max-w-6xl px-6 py-16\"><h2 class=\"font-serif text-3xl\">How We Built It</h2><!--$-->",
	"<!--/--><div class=\"grid gap-10 sm:grid-cols-2 lg:grid-cols-4\">",
	"</div></section>"
];
var _tmpl$12 = ["<section", " class=\"mx-auto max-w-3xl px-6 py-20 text-center\"><blockquote class=\"font-serif text-2xl leading-snug md:text-3xl\">\"The agent handles the first pass on every ticket. My team now <em>focuses on engineering</em>, not inbox management.\"</blockquote><cite class=\"mt-6 block font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground not-italic\">Data Engineering Lead, Indiana University</cite></section>"];
var _tmpl$13 = ["<p", ">Measured over Q2 and Q3, the agent's impact was immediate and substantial. Overall team productivity increased by 45%, driven primarily by the elimination of manual triage and faster routing accuracy.</p>"];
var _tmpl$14 = ["<p", ">Mean time to resolution dropped significantly as engineers received tickets that were already categorized, prioritized, and enriched with likely root causes and suggested fixes.</p>"];
var _tmpl$15 = ["<h4", " class=\"pt-2 font-serif text-lg text-foreground\">Impact Summary</h4>"];
var _tmpl$16 = ["<ul", " class=\"list-disc space-y-1 pl-5\"><li>45% increase in team productivity across Q2—Q3</li><li>Significant reduction in mean time to resolution (MTTR)</li><li>Senior engineers reclaimed architecture and systems time</li><li>Ticket routing accuracy improved with context-rich handoffs</li><li>Agent accuracy continued to improve through continuous learning</li></ul>"];
var _tmpl$17 = [
	"<section",
	" class=\"mx-auto max-w-2xl px-6 py-24 text-center\"><h2 class=\"font-serif text-4xl leading-tight\">Want this for<br><em>your team?</em></h2><p class=\"mx-auto mt-4 max-w-md font-sans text-base text-muted-foreground\">Get a free audit of your business operations. We'll show you exactly where an AI agent can make the biggest impact.</p><!--$-->",
	"<!--/--></section>"
];
var _tmpl$18 = [
	"<div",
	"><div class=\"font-serif text-2xl text-signal\">",
	"</div><h4 class=\"mt-2 font-serif text-lg\">",
	"</h4><p class=\"mt-2 font-sans text-sm leading-relaxed text-muted-foreground\">",
	"</p></div>"
];
var id$$ = "src/routes/iu.tsx?pick=default&pick=$css";
function CaseSection(props) {
	return ssr(_tmpl$, ssrHydrationKey(), escape(props.label), escape(props.children));
}
function Stat(props) {
	return ssr(_tmpl$2, ssrHydrationKey(), escape(props.value), escape(props.label));
}
function IuCaseStudy() {
	return createComponent(Page, {
		title: "Basalt & Company — IU Case Study",
		description: "How we built an autonomous data engineering agent for Indiana University that increased productivity by 45%.",
		get children() {
			return [
				ssr(_tmpl$3, ssrHydrationKey()),
				ssr(_tmpl$4, ssrHydrationKey(), escape(createComponent(Stat, {
					value: "45%",
					label: "Productivity Increase"
				})), escape(createComponent(Stat, {
					value: "MTTR",
					label: "Reduced Significantly"
				})), escape(createComponent(Stat, {
					value: "Q2—Q3",
					label: "Measured Impact Period"
				})), escape(createComponent(Stat, {
					value: "24/7",
					label: "Agent Uptime"
				}))),
				createComponent(CaseSection, {
					label: "Problem",
					get children() {
						return [
							ssr(_tmpl$5, ssrHydrationKey()),
							ssr(_tmpl$6, ssrHydrationKey()),
							ssr(_tmpl$7, ssrHydrationKey()),
							ssr(_tmpl$8, ssrHydrationKey())
						];
					}
				}),
				createComponent(CaseSection, {
					label: "Solution",
					get children() {
						return [
							ssr(_tmpl$9, ssrHydrationKey()),
							ssr(_tmpl$0, ssrHydrationKey()),
							ssr(_tmpl$1, ssrHydrationKey()),
							ssr(_tmpl$10, ssrHydrationKey())
						];
					}
				}),
				ssr(_tmpl$11, ssrHydrationKey(), escape(createComponent(Separator, { "class": "my-6" })), escape([
					[
						"01",
						"Discovery",
						"Deep-dive into IU's ticketing data, workflows, team structure, and pain points."
					],
					[
						"02",
						"Intelligence Layer",
						"Built the knowledge base from historical tickets, runbooks, and institutional docs."
					],
					[
						"03",
						"Agent Development",
						"Designed and trained the autonomous agent with custom workflows for triage and routing."
					],
					[
						"04",
						"Deployment",
						"Rolled out incrementally, measured impact across Q2—Q3, iterated on feedback."
					]
				].map(([num, title, body]) => ssr(_tmpl$18, ssrHydrationKey(), escape(num), escape(title), escape(body))))),
				ssr(_tmpl$12, ssrHydrationKey()),
				createComponent(CaseSection, {
					label: "Results",
					get children() {
						return [
							ssr(_tmpl$13, ssrHydrationKey()),
							ssr(_tmpl$14, ssrHydrationKey()),
							ssr(_tmpl$15, ssrHydrationKey()),
							ssr(_tmpl$16, ssrHydrationKey())
						];
					}
				}),
				ssr(_tmpl$17, ssrHydrationKey(), escape(createComponent(Button, {
					as: "a",
					href: "/brain",
					"class": "mt-8",
					size: "lg",
					children: "{ GET YOUR COMPANY BRAIN }"
				})))
			];
		}
	});
}
//#endregion
export { IuCaseStudy as default, id$$ };
