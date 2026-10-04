import { Title } from "@solidjs/meta";
import { A, createAsync, useAction } from "@solidjs/router";
import { For, Show, Suspense, createSignal, createMemo } from "solid-js";
import CreateDialog from "~/components/CreateDialog";
import Layout from "~/components/Layout";
import {
	createProjectAction,
	getProjectsQuery,
	getUserQuery,
} from "~/lib/queries";
import { getCompaniesForSelectQuery } from "~/lib/admin-queries";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@madcactus/ui";

const statusBadge: Record<string, string> = {
	active: "badge-active",
	paused: "badge-paused",
	completed: "badge-completed",
};

export default function Projects() {
	const user = createAsync(() => getUserQuery(), { deferStream: true });
	const projects = createAsync(() => getProjectsQuery(), { deferStream: true });
	const companies = createAsync(() => getCompaniesForSelectQuery(), {
		deferStream: true,
	});
	const createProject = useAction(createProjectAction);
	const [engagementType, setEngagementType] = createSignal("hourly");

	const isHourly = createMemo(() => engagementType() !== "project");

	return (
		<Layout user={user()}>
			<Title>Projects — Mad Cactus</Title>
			<div style={{ display: "flex", "justify-content": "space-between", "align-items": "center", "margin-bottom": "32px" }}>
				<div>
					<h1 class="page-title">Projects</h1>
					<p class="page-subtitle" style={{ "margin-bottom": "0" }}>All engagements</p>
				</div>
				<CreateDialog
					label="New Project"
					title="New Project"
					submitLabel="Create Project"
					successMessage="Project created."
					onSubmit={(fd) => createProject(fd) as Promise<{ error?: string } | undefined>}
				>
						<div class="form-row">
							<div class="form-group">
								<label for="name">Project Name</label>
								<input type="text" id="name" name="name" required placeholder="IU Data Agent" />
							</div>
						<div class="form-group">
							<label for="company_id">Company</label>
							<select id="company_id" name="company_id" required>
								<option value="" disabled selected>Select a company…</option>
								<Show when={companies()}>
									<For each={companies()}>
										{(c) => <option value={c.id}>{c.name}</option>}
									</For>
								</Show>
							</select>
						</div>
					</div>
					<div class="form-row">
						<div class="form-group">
							<label for="engagement_type">Engagement Type</label>
							<select
								id="engagement_type"
								name="engagement_type"
								onChange={(e) => setEngagementType(e.currentTarget.value)}
							>
								<option value="hourly">Hourly</option>
								<option value="retainer">Retainer (monthly cap)</option>
								<option value="project">Project (fixed price)</option>
							</select>
						</div>
						<Show when={isHourly()}>
							<div class="form-group">
								<label for="hourly_rate">Hourly Rate ($)</label>
								<input type="number" id="hourly_rate" name="hourly_rate" step="1" min="0" value="200" />
							</div>
						</Show>
						<Show when={!isHourly()}>
							<div class="form-group">
								<label for="fixed_price">Fixed Price ($)</label>
								<input type="number" id="fixed_price" name="fixed_price" step="100" min="0" required placeholder="15000" />
							</div>
						</Show>
					</div>
					<Show when={engagementType() === "retainer"}>
						<div class="form-group">
							<label for="monthly_cap_hours">Monthly Cap (hours)</label>
							<input type="number" id="monthly_cap_hours" name="monthly_cap_hours" step="1" min="0" placeholder="Leave blank if uncapped" />
						</div>
					</Show>
					<div class="form-group">
						<label for="notes">Scope / Notes</label>
						<textarea id="notes" name="notes" rows={3} placeholder="What's planned, scope boundaries, deliverables…" />
					</div>
				</CreateDialog>
			</div>

			<Suspense fallback={<p class="muted">Loading…</p>}>
				<Show when={projects()} fallback={<p class="muted">Loading…</p>}>
					{(list) => (
						<Show when={list().length > 0} fallback={
							<div class="card empty">No projects yet. Create your first one above.</div>
						}>
							<Table class="table">
								<TableHeader>
									<TableRow>
										<TableHead>Project</TableHead>
										<TableHead>Company</TableHead>
										<TableHead>Type</TableHead>
										<TableHead>Rate / Price</TableHead>
										<TableHead>Cap</TableHead>
										<TableHead>Status</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<For each={list()}>
										{(p) => (
											<TableRow>
												<TableCell>
													<A href={`/admin/projects/${p.id}`} class="gold">{p.name}</A>
												</TableCell>
												<TableCell class="muted">{p.companyName}</TableCell>
												<TableCell style={{ "text-transform": "capitalize" }}>{p.engagementType}</TableCell>
												<TableCell class="mono">
													{p.engagementType === "project"
														? `$${(p.fixedPrice ?? 0).toLocaleString()} fixed`
														: `$${p.hourlyRate}/hr`}
												</TableCell>
												<TableCell class="muted">{p.monthlyCapHours ? `${p.monthlyCapHours}h` : "—"}</TableCell>
												<TableCell><span class={`badge ${statusBadge[p.status]}`}>{p.status}</span></TableCell>
											</TableRow>
										)}
									</For>
								</TableBody>
							</Table>
						</Show>
					)}
				</Show>
			</Suspense>
		</Layout>
	);
}
