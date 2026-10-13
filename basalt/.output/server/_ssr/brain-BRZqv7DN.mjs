import { B as createSignal, E as Show, M as createComponent, h as ssr, l as escape, v as ssrHydrationKey } from "../_libs/solid-js.mjs";
import { B as SelectValue, F as Select, I as SelectContent, L as SelectHiddenSelect, R as SelectItem, m as Button, z as SelectTrigger } from "./src-CEr7MizD.mjs";
import { t as Page } from "./site-BN-DxPGT.mjs";
import { t as Input } from "./input-DcyE3u5y.mjs";
import { t as Label } from "./label-BULDmeCR.mjs";
import { t as Textarea } from "./textarea-4BFrY__8.mjs";
//#region node_modules/.nitro/vite/services/ssr/_build/assets/brain-BRZqv7DN.js
var _tmpl$ = [
	"<div",
	" class=\"space-y-1.5\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div>"
];
var _tmpl$2 = [
	"<form",
	" class=\"mt-10 space-y-6\"><div class=\"absolute -left-[9999px]\" aria-hidden=\"true\"><label for=\"website\">Website</label><!--$-->",
	"<!--/--></div><div class=\"grid gap-6 sm:grid-cols-2\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><p class=\"min-h-5 font-sans text-sm text-destructive\" role=\"alert\">",
	"</p><!--$-->",
	"<!--/--></form>"
];
var _tmpl$3 = [
	"<section",
	" class=\"mx-auto max-w-2xl px-6 pb-24 pt-10\"><h1 class=\"font-serif text-4xl leading-tight md:text-5xl\">We'll build your company a <em>brain</em>. Free.</h1><p class=\"mt-4 font-sans text-base leading-relaxed text-muted-foreground\">Answer a few questions about your company below. We build you a custom company brain: your data, docs, and institutional knowledge, unified so agents can actually reason over it.</p><p class=\"mt-3 font-serif text-base italic text-muted-foreground\">I build one company brain every week, in the order requests arrive. You see what it does before you pay for anything.</p><!--$-->",
	"<!--/--></section>"
];
var _tmpl$4 = ["<p", " class=\"mt-10 font-serif text-lg leading-relaxed\">You're in. I'll read your answers, research your company, and reply within a couple of days with your brain. — Collin</p>"];
var id$$ = "src/routes/brain.tsx?pick=default&pick=$css";
function Field(props) {
	return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Label, {
		get ["for"]() {
			return props.id;
		},
		get children() {
			return [props.label, props.required ? " *" : ""];
		}
	})), escape(props.children));
}
function SelectField(props) {
	return createComponent(Field, {
		get id() {
			return props.id;
		},
		get label() {
			return props.label;
		},
		get children() {
			return createComponent(Select, {
				get options() {
					return props.options;
				},
				get value() {
					return props.value() || null;
				},
				onChange: (v) => props.onChange(v ?? ""),
				placeholder: "Select…",
				itemComponent: (p) => createComponent(SelectItem, {
					get item() {
						return p.item;
					},
					get children() {
						return p.item.rawValue;
					}
				}),
				"class": "w-full",
				get children() {
					return [
						createComponent(SelectHiddenSelect, {
							get name() {
								return props.name;
							},
							get id() {
								return props.id;
							}
						}),
						createComponent(SelectTrigger, {
							get id() {
								return props.id;
							},
							get children() {
								return createComponent(SelectValue, {});
							}
						}),
						createComponent(SelectContent, {})
					];
				}
			});
		}
	});
}
function BrainLanding() {
	const [headcount, setHeadcount] = createSignal("");
	const [techTeam, setTechTeam] = createSignal("");
	const [heardAbout, setHeardAbout] = createSignal("");
	const [sending, setSending] = createSignal(false);
	const [done, setDone] = createSignal(false);
	const [error, setError] = createSignal("");
	return createComponent(Page, {
		title: "Get a Free Custom Company Brain | Basalt & Company",
		description: "Answer a few questions about your company. We build you a custom company brain, free, so you can see what AI actually does for your business.",
		get children() {
			return ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(Show, {
				get when() {
					return !done();
				},
				get fallback() {
					return ssr(_tmpl$4, ssrHydrationKey());
				},
				get children() {
					return ssr(_tmpl$2, ssrHydrationKey(), escape(createComponent(Input, {
						id: "website",
						name: "website",
						type: "text",
						tabindex: -1,
						autocomplete: "off"
					})), escape(createComponent(Field, {
						id: "brain-name",
						label: "Full name",
						required: true,
						get children() {
							return createComponent(Input, {
								id: "brain-name",
								name: "name",
								type: "text",
								required: true,
								autocomplete: "name"
							});
						}
					})), escape(createComponent(Field, {
						id: "brain-email",
						label: "Work email",
						required: true,
						get children() {
							return createComponent(Input, {
								id: "brain-email",
								name: "email",
								type: "email",
								required: true,
								autocomplete: "email",
								spellcheck: false
							});
						}
					})), escape(createComponent(Field, {
						id: "brain-title",
						label: "Job title",
						get children() {
							return createComponent(Input, {
								id: "brain-title",
								name: "jobTitle",
								type: "text",
								autocomplete: "organization-title"
							});
						}
					})), escape(createComponent(Field, {
						id: "brain-company",
						label: "Company name",
						required: true,
						get children() {
							return createComponent(Input, {
								id: "brain-company",
								name: "company",
								type: "text",
								required: true,
								autocomplete: "organization"
							});
						}
					})), escape(createComponent(Field, {
						id: "brain-industry",
						label: "Industry",
						get children() {
							return createComponent(Input, {
								id: "brain-industry",
								name: "industry",
								type: "text"
							});
						}
					})), escape(createComponent(SelectField, {
						id: "brain-headcount",
						label: "Company size",
						name: "headcount",
						options: [
							"Just me",
							"2–5",
							"6–10",
							"11–25",
							"26–50",
							"50+"
						],
						value: headcount,
						onChange: setHeadcount
					})), escape(createComponent(Field, {
						id: "brain-what",
						label: "What does your company do?",
						get children() {
							return createComponent(Textarea, {
								id: "brain-what",
								name: "whatTheyDo",
								rows: 2
							});
						}
					})), escape(createComponent(SelectField, {
						id: "brain-tech",
						label: "How big is your technical team?",
						name: "techTeam",
						options: [
							"None",
							"1–3",
							"4–10",
							"10+"
						],
						value: techTeam,
						onChange: setTechTeam
					})), escape(createComponent(Field, {
						id: "brain-stack",
						label: "What does your company run on day to day — and does it use AI for anything today?",
						get children() {
							return createComponent(Textarea, {
								id: "brain-stack",
								name: "stackAndAi",
								rows: 3
							});
						}
					})), escape(createComponent(Field, {
						id: "brain-bottleneck",
						label: "What's the biggest bottleneck in the business right now?",
						get children() {
							return createComponent(Textarea, {
								id: "brain-bottleneck",
								name: "bottleneck",
								rows: 3
							});
						}
					})), escape(createComponent(SelectField, {
						id: "brain-heard",
						label: "How did you hear about us?",
						name: "heardAbout",
						options: [
							"LinkedIn post",
							"The Cactus Dispatch newsletter",
							"Referral",
							"Other"
						],
						value: heardAbout,
						onChange: setHeardAbout
					})), escape(error()), escape(createComponent(Button, {
						type: "submit",
						size: "lg",
						get disabled() {
							return sending();
						},
						get children() {
							return sending() ? "{ SENDING }" : "{ BUILD MY BRAIN }";
						}
					})));
				}
			})));
		}
	});
}
//#endregion
export { BrainLanding as default, id$$ };
