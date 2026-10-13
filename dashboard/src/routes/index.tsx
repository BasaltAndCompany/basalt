// Marketing homepage — ported from marketing/src/pages/index.astro.

import { onMount } from "solid-js";
import MarketingPage from "~/components/marketing/MarketingPage";
import { Header } from "~/components/marketing/Header";
import { Footer } from "~/components/marketing/Footer";
import { subscribeToNewsletter } from "~/components/marketing/subscribe";
import "~/styles/marketing-index.css";

export default function Home() {
	onMount(() => {
		const bandForm = document.getElementById("newsletterBandForm") as HTMLFormElement | null;
		if (!bandForm) return;
		bandForm.addEventListener("submit", async (e) => {
			e.preventDefault();
			const email = bandForm.email.value.trim();
			const btn = bandForm.querySelector("button")!;
			btn.textContent = "Subscribing...";
			btn.disabled = true;
			const res = await subscribeToNewsletter(email);
			if (res.ok) {
				bandForm.innerHTML =
					'<p style="font-family: var(--font-serif); font-style: italic; font-size: var(--text-body-sm);">You\'re in. Check your inbox.</p>';
			} else {
				btn.textContent = "{ SUBSCRIBE }";
				btn.disabled = false;
			}
		});
	});
	return (
		<MarketingPage
			title="Mad Cactus — Turn Your Business AI-Native"
			description="We embed AI into your operations to drive real revenue — custom agents and workflows that let your team of five operate like a team of twenty-five."
		>
			<Header />

			{/* ════════ HERO ════════ */}
			<section class="hero">
				<div class="hero-inner">
					<div class="hero-text">
						<h1 class="hero-headline">
							Turn Your<br />
							Business<br />
							<em>AI-Native.</em>
						</h1>
						<p class="hero-body">
							We embed AI into your operations to drive real revenue — custom agents and workflows
							that let your team of five operate like a team of twenty-five.
						</p>
						{/* ponytail: plain img — Astro's responsive widths dropped; swap to <picture>/srcset if LCP suffers */}
						<a href="/brain" class="cta-bracketed cta-hero" data-ph-event="cta_brain">
							&#123; GET A FREE COMPANY BRAIN &#125;
						</a>
					</div>
					<div class="hero-plate">
						<img src="/cactus-in-bloom.jpg" alt="Cactus in bloom" />
					</div>
				</div>
			</section>

			{/* ════════ SERVICES ════════ */}
			<section id="services">
				<div class="section-header">
					<h2 class="section-title">Our Method</h2>
					<hr class="section-rule" />
				</div>
				<div class="services-grid">
					<div class="service-col">
						<div class="service-num">01</div>
						<h3>Business Audit</h3>
						<p>
							Our agent books meetings with you and every one of your employees to learn about each workflow, the
							dependencies, and how everyone does their job. This gives insights into how your business generates
							value and reveals what workflows can be augmented by AI.
						</p>
					</div>
					<div class="service-col">
						<div class="service-num">02</div>
						<h3>Intelligence Layer</h3>
						<p>
							Your company's brain. Unify your data, docs, and institutional knowledge into a single intelligence
							layer that agents can reason over in real time — across Slack, Google Drive, Box, Teams, and every
							meeting, customer interaction, and sale.
						</p>
					</div>
					<div class="service-col">
						<div class="service-num">03</div>
						<h3>Agent Development</h3>
						<p>
							We build custom agents that automate and augment your workflows, allowing your team to hand off entire
							tasks to AI and spend more time on what matters most. Allowing your business to grow faster than ever
							before.
						</p>
					</div>
				</div>
			</section>

			{/* ════════ DARK BAND — PHILOSOPHY ════════ */}
			<div class="dark-band">
				<div class="dark-band-inner">
					<h2 class="dark-band-headline">
						If you can't hand off tasks
						<br />
						to agents, <em>you don't pay.</em>
					</h2>
					<p class="dark-band-body">
						We don't sell hours or piecemeal tools. We embed with your team, audit your operations, build your AI
						intelligence layer, deploy custom agents, and train your people to run them.
					</p>
				</div>
			</div>

			{/* ════════ NEWSLETTER BAND ════════ */}
			<section id="newsletter-band">
				<div class="newsletter-band-inner">
					<div class="newsletter-band-text">
						<h3 class="newsletter-band-heading">
							AI teardowns <em>from real clients.</em>
						</h3>
						<p class="newsletter-band-body">
							Weekly breakdowns of real AI deployments. What we built, what it cost, and the blueprint to do the same.
						</p>
					</div>
					<form class="newsletter-band-form" id="newsletterBandForm">
						<input type="email" name="email" placeholder="your@email.com" required autocomplete="email" spellcheck={false} />
						<button type="submit" class="cta-bracketed" data-ph-event="newsletter_signup_home">
							&#123; SUBSCRIBE &#125;
						</button>
					</form>
				</div>
			</section>

			{/* ════════ CASE STUDY ════════ */}
			<section id="case-studies">
				<div class="section-header">
					<h2 class="section-title">Proven in Production</h2>
					<hr class="section-rule" />
				</div>
				{/* ponytail: numbers are Collin's estimates — get Customs Data Lock's sign-off before claiming them as measured */}
				<div class="case-study-card">
					<div class="case-study-visual">
						<span class="case-study-institution">
							CUSTOMS
							<br />
							<em>DATA LOCK</em>
						</span>
						<span class="case-study-sector">Customs Data Privacy</span>
					</div>
					<div class="case-study-content">
						<p class="case-study-desc">
							We taught them to use AI agents to build small software for their outbound operations grow their response rate and save 1/3 of their time. 
							We automated manual back-end and administrative work. Now they are receiving estimated 2. 75x more revenue
							per hour worked.
						</p>
						{/* ponytail: dollar values hidden on purpose — raw revenue ($2K→$5–6K/yr) reads too small; show the multiplier only */}
						<div class="case-study-stats">
							<div class="stat">
								<strong>2.75x</strong>
								<span>Revenue per work hour</span>
							</div>
							<div class="stat">
								<strong>+175%</strong>
								<span>Revenue growth</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ════════ SCORECARD CTA ════════ */}
			<section class="lead-section">
				<div class="lead-inner">
					<div class="lead-left">
						<h3 class="lead-heading">
							What could your team do
							<br />
							<em>if the busywork ran itself?</em>
						</h3>
					</div>
					<div class="lead-right">
						<p>
							We build you a custom company brain: your data, docs, and institutional knowledge unified into one intelligence layer your team actually uses. One built free every week, in the order requests arrive.
						</p>
						<a href="/brain" class="cta-bracketed" data-ph-event="cta_brain">
							&#123; GET A FREE COMPANY BRAIN &#125;
						</a>
					</div>
				</div>
			</section>

			<Footer />
		</MarketingPage>
	);
}
