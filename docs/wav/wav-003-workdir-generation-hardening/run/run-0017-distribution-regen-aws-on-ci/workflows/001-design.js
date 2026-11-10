export const meta = { name: "run-0017-design", description: "Generated from the run directory: stages of complete-run not yet logged; cost profile low-cost" }
// engine-shape: 2
// cost profile: low-cost
// overrides of declared tiers and profile ceilings (1):
//   - settings from .claude/run-management.yaml: repos=plantuml-libs:per-run
// autonomy override: none
// commit trailer: none
// repos: plantuml-libs . current per-run run-unless-pushed
const PLAN = {
 "cost_profile": "low-cost",
 "ceiling": {
  "models": [
   "haiku",
   "sonnet"
  ],
  "efforts": [
   "low",
   "medium",
   "high"
  ]
 },
 "repo_root": "/home/tibo/git-perso/plantuml-libs",
 "agents": {
  "bookkeeping": {
   "model": "haiku",
   "effort": "high",
   "class": "K0"
  },
  "create": {
   "model": "sonnet",
   "effort": "low",
   "class": "K1"
  },
  "run-agent": {
   "model": "sonnet",
   "effort": "high",
   "class": "K5"
  },
  "verify-task": {
   "model": "sonnet",
   "effort": "medium",
   "class": "K2"
  },
  "verify-run": {
   "model": "sonnet",
   "effort": "medium",
   "class": "K2"
  },
  "gate": {
   "model": "sonnet",
   "effort": "medium",
   "class": "K2"
  }
 },
 "overrides": [
  "settings from .claude/run-management.yaml: repos=plantuml-libs:per-run"
 ],
 "kind": "design",
 "hard": false,
 "run": "0017",
 "slug": "distribution-regen-aws-on-ci",
 "wave": "003",
 "profile": "single-document",
 "run_dir": "docs/wav/wav-003-workdir-generation-hardening/run/run-0017-distribution-regen-aws-on-ci",
 "status_file": "docs/wav/wav-003-workdir-generation-hardening/run/run-0017-distribution-regen-aws-on-ci/run-0017-distribution-regen-aws-on-ci.md",
 "prg_file": "docs/wav/wav-003-workdir-generation-hardening/run/run-0017-distribution-regen-aws-on-ci/prg-0017-distribution-regen-aws-on-ci.md",
 "skill_file": "/home/tibo/git-perso/claude-agents/plugins/run-management/skills/complete-run/SKILL.md",
 "check_script": "/home/tibo/git-perso/claude-agents/plugins/run-management/skills/complete-run/scripts/check_run.py",
 "documents": [],
 "stand_in": false,
 "stand_in_command": "",
 "logged": [],
 "steps": [
  {
   "stage": 2,
   "heading": "Stage 2 \u2014 KDMLLC review of the PRD",
   "mode": "delegated",
   "main_agent": "Applying the returned rewrite plan; the S0/S1 judgment call. Under single-document the reviewed text is the run document.",
   "class": "K3",
   "model": "sonnet",
   "effort": "high",
   "edits_pln": false
  },
  {
   "stage": 3,
   "heading": "Stage 3 \u2014 Resolve the PRD's open questions",
   "mode": "mixed",
   "main_agent": "Every open question that is a real product or business tradeoff (hard_judgment), and the decision to leave a question open as a blocker.",
   "class": "K1",
   "model": "sonnet",
   "effort": "medium",
   "edits_pln": false
  },
  {
   "stage": 6,
   "heading": "Stage 6 \u2014 Resolve the TDD's open questions",
   "mode": "mixed",
   "main_agent": "Every open question that is a real design tradeoff (hard_judgment), and the decision to leave a question open as a blocker.",
   "class": "K1",
   "model": "sonnet",
   "effort": "medium",
   "edits_pln": false
  },
  {
   "stage": 7,
   "heading": "Stage 7 \u2014 PRD/TDD consistency check",
   "mode": "inline",
   "main_agent": "The C scan and the choice of which side to fix; a fix that needs a product decision is logged as a blocker.",
   "class": "K5",
   "model": "sonnet",
   "effort": "high",
   "edits_pln": false
  },
  {
   "stage": 10,
   "heading": "Stage 10 \u2014 Implement",
   "mode": "mixed",
   "main_agent": "Every hard_judgment task, running each task's verification itself, the second failure after one escalation, and the status writes.",
   "class": "K5",
   "model": "sonnet",
   "effort": "high",
   "edits_pln": false
  },
  {
   "stage": 11,
   "heading": "Stage 11 \u2014 Verification",
   "mode": "inline",
   "main_agent": "Everything: checks, acceptance re-check, check_run.py before completed, canonical obligations, the final report.",
   "class": "K5",
   "model": "sonnet",
   "effort": "high",
   "edits_pln": false
  }
 ],
 "pln_check_command": "",
 "autonomy_override": "",
 "repos": [
  {
   "name": "plantuml-libs",
   "path": ".",
   "branch": "current",
   "commit": "per-run",
   "squash": "run-unless-pushed"
  }
 ]
}
// ---- run design engine (shared text: generated design files and the shipped `run-design` workflow) ----
// Every agent below is a leaf: it has neither the Workflow tool nor the Agent tool.
// One agent per stage of complete-run that applies to the run's profile and is not yet logged
// in the run's prg, in order. A stage agent appends the line "- <date>: Stage N ..." to the prg,
// which is what a later generation reads to drop the stage. A last fresh agent checks the documents.
// Model and effort of every agent come from PLAN (the cost profile `PLAN.cost_profile` applied to the need table by the
// generator, complete-wave/references/profiles.json); this engine names none of its own except the stand-in test agents.
const AG = PLAN.agents
const opt = (key, o) => ({ ...o, model: AG[key].model, effort: AG[key].effort })
const ROOT = `Working directory: ${PLAN.repo_root} (absolute path of the repository root). Every repository-relative path below is relative to it: cd there first, and never search the disk for a path that is named below.\n`
const STAND_IN_NOTE = PLAN.stand_in ? ' (STAND-IN TEST: do only what is asked, nothing else)' : ''
const STAGE_SCHEMA = {
  type: 'object',
  properties: {
    stage: { type: 'integer' }, done: { type: 'boolean' }, summary: { type: 'string' },
    files_written: { type: 'array', items: { type: 'string' } },
    blocker: { type: 'string' }, not_verified: { type: 'string' },
  },
  required: ['stage', 'done', 'summary'],
}
const CHECK_SCHEMA = {
  type: 'object',
  properties: {
    documents_present: { type: 'array', items: { type: 'string' } },
    documents_missing: { type: 'array', items: { type: 'string' } },
    stages_logged: { type: 'array', items: { type: 'integer' } },
    stages_missing: { type: 'array', items: { type: 'integer' } },
    wave_field_ok: { type: 'boolean' }, note: { type: 'string' }, check_run_exit: { type: 'integer' }, status_read: { type: 'string' },
    pln_parse_exit: { type: 'integer' }, pln_parse_message: { type: 'string' },
  },
  required: ['documents_missing', 'stages_missing'],
}
const PRG = PLAN.prg_file
// numbered progress groups (2.22.0): every agent is created under a phase whose title starts with a zero-padded number, so a UI that sorts groups
// alphabetically shows them in execution order. `PH` is the default group; a call that runs in parallel with others passes its own.
const pad = (n, w = 2) => String(n).padStart(w, '0')
let PH = null
const ag = (prompt, o, ph) => { const p = ph === undefined ? PH : ph; return agent(prompt, p ? { ...o, phase: p } : o) }
const results = []
const findings = []

const stop = async (reason, detail) => {
  await ag(entryPrompt(`design workflow stopped, state blocked: ${reason} ` + JSON.stringify(detail)), opt('bookkeeping', { label: 'prg-escalation' }))
  return { state: 'blocked', reason, detail, results, findings }
}
function entryPrompt(text) {
  return (ROOT +
  `Append one dated line to the Log section of ${PRG} (use today's date from \`date +%F\`; add it after the last Log line, before "## Findings"; if the file does not exist create it with the frontmatter type: prg, run: ${PLAN.run}, status: active${PLAN.wave ? ', wave: ' + PLAN.wave : ''} and the headings "# Progress Log", "## Log", "## Findings", "## Lessons Learnt"). ` +
  `Write exactly this text after "- <date>: " and change nothing else in the file:\n\n${text}\n\nReturn the word done.${STAND_IN_NOTE}`)
}

const PLN_RULE = (cmd) => `The pln is read by the implement generator's restricted YAML reader, which refuses flow maps. Write every YAML block of the pln in block style: a mapping is indented "key: value" lines, also as a list item ("- from: task-001" newline "  to: task-002", never "- {from: task-001, to: task-002}"); no ">" or "|" scalars; no anchors or aliases; a flow list of scalars ("depends_on: [task-001, task-002]") is allowed. After writing or editing the pln run \`${cmd}\` from the repository root and fix the pln until it exits 0 (its stderr names the line).\n`

const stageBrief = (s) => ROOT +
  `You execute ONE stage of run ${PLAN.run} (${PLAN.slug}${PLAN.wave ? ', wave ' + PLAN.wave : ''}), document profile ${PLAN.profile}: ${s.heading}.\n` +
  `Run directory ${PLAN.run_dir} (it exists; use it as given, never allocate a number); status file ${PLAN.status_file}. Read the wave plan and the run's documents so far yourself; the files win over this brief.\n` +
  `Read the section "## ${s.heading}" of ${PLAN.skill_file} and carry out exactly that stage, nothing of any other stage. The skills it names (write-product-requirement-document, review-kdmllc-content, write-technical-design-document, write-execution-plan, manage-runs) are used inline by you.\n` +
  `You are a leaf agent: you have no Agent tool and no Workflow tool. Where the stage says to dispatch a subagent, do that work yourself in this fresh context; a review stage is independent of the drafting because it runs in a different agent from the drafter, say so in the document's review line ("Review pass: dispatched" with that reason). Open questions that are real tradeoffs (hard_judgment) are resolved or left open by you, never skipped.\n` +
  `What stays with the main agent at this stage: ${s.main_agent}\n` +
  (s.edits_pln && PLAN.pln_check_command ? PLN_RULE(PLAN.pln_check_command) : '') +
  (PLAN.wave ? `Carry wave: ${PLAN.wave} into the frontmatter of every prd, tdd, pln and prg file you draft. You must NOT write the wave's own manifest or progress log.\n` : '') +
  `When the stage is done, append to ${PRG} one Log line that starts exactly "- <date>: Stage ${s.stage}" followed by a short summary (if a question stayed open as a blocker, name it in that line; the stage is still logged, as complete-run continues past it; create the file first if it does not exist, per manage-runs' prg template); a later generation drops this stage because of that line. ` +
  `Stay inside the repository and its safety rules (no commit, no destructive git, no secrets). Never report success you have not checked. Return stage ${s.stage}, done, a summary, files_written, blocker (an unresolved item you logged, or empty).`

const standInBrief = (s) => ROOT +
  `STAND-IN TEST of stage ${s.stage} of run ${PLAN.run}. Do only this: ` +
  (PLAN.stand_in_command ? `first run the shell command \`${PLAN.stand_in_command.replaceAll('{n}', String(s.stage))}\`, then ` : '') +
  `append to ${PRG} the Log line "- <date>: Stage ${s.stage} stand-in" (create the file with a "## Log" heading if it does not exist). Return stage ${s.stage}, done true and a one-line summary.`

const checkBrief = () => ROOT + (
  PLAN.stand_in
    ? `STAND-IN TEST. Read ${PRG} and return stages_logged (the numbers N of its lines starting "- <date>: Stage N") and stages_missing (of ${JSON.stringify(PLAN.steps.map((s) => s.stage))}, those not logged); documents_missing is []. Edit nothing.`
    : `Independent check of the design of run ${PLAN.run}; you did not draft it and must not trust any report of it. Edit nothing.\n` +
      `1. Documents expected: ${PLAN.documents.length ? PLAN.documents.map((d) => `${d}-${PLAN.run}-${PLAN.slug}.md`).join(', ') : 'none (single-document profile: the run document itself)'} in ${PLAN.run_dir}. List present and missing in documents_present and documents_missing; each present one must have "run: ${PLAN.run}"${PLAN.wave ? ` and "wave: ${PLAN.wave}"` : ''} in its frontmatter (wave_field_ok).\n` +
      `2. Read ${PRG}: stages_logged are the numbers N of its Log lines starting "- <date>: Stage N"; stages_missing are those of ${JSON.stringify(PLAN.steps.map((s) => s.stage))} not logged.\n` +
      (PLAN.steps.some((s) => s.stage === 11) ? `3a. This profile has no pln, so no implement workflow follows: run \`python3 "${PLAN.check_script}" --as-completed ${PLAN.run_dir}\` yourself and put its exit code and the item it names in note; read the frontmatter status of ${PLAN.status_file} too (status_read).\n` : '') +
      (PLAN.pln_check_command ? `3b. Run \`${PLAN.pln_check_command}\` from the repository root: it parses the pln the way the implement step will. Put its exit code in pln_parse_exit and its stderr text (empty when the exit is 0) in pln_parse_message. Edit nothing.\n` : '') +
      `3. Say in note anything that makes the documents unfit to implement from (an empty section, a pln without task_catalog, a status that disagrees with the files).`)

if (PLAN.steps.length === 0) {
  return { state: 'nothing-to-do', note: 'every stage of this profile is logged', results }
}

for (const s of PLAN.steps) {
  PH = `${pad(s.stage)} · stage ${s.stage}`
  const r = await ag(PLAN.stand_in ? standInBrief(s) : stageBrief(s),
    PLAN.stand_in
      ? { label: `stage-${s.stage}`, schema: STAGE_SCHEMA, model: 'haiku', effort: 'low' }
      : { label: `stage-${s.stage}`, schema: STAGE_SCHEMA, model: s.model, effort: s.effort })
  if (!r) return await stop('stage agent returned nothing', s.stage)
  results.push({ stage: s.stage, done: r.done, summary: r.summary, blocker: r.blocker || '' })
  if (!r.done) return await stop('stage not done', { stage: s.stage, summary: r.summary, blocker: r.blocker || '' })
  if (r.blocker) findings.push({ stage: s.stage, blocker: r.blocker })
}
PH = `${pad(98)} · design check`
const c = await ag(checkBrief(), PLAN.stand_in ? { label: 'design-check', schema: CHECK_SCHEMA, model: 'haiku', effort: 'low' } : opt('verify-run', { label: 'design-check', schema: CHECK_SCHEMA }))
if (!c) return await stop('design check returned nothing', PLAN.run)
const bad = []
if (c.documents_missing.length) bad.push('documents missing: ' + c.documents_missing.join(', '))
if (c.stages_missing.length) bad.push('stages not logged: ' + c.stages_missing.join(', '))
if (!PLAN.stand_in && PLAN.steps.some((s) => s.stage === 11) && (c.check_run_exit !== 0 || c.status_read !== 'completed')) bad.push(`single-document run not clean: check_run exit ${c.check_run_exit}, status ${c.status_read}`)
if (!PLAN.stand_in && PLAN.pln_check_command && c.pln_parse_exit !== 0) bad.push(`pln does not parse for the implement generator (exit ${c.pln_parse_exit}): ${c.pln_parse_message || 'no message'}. Fix the pln to block style (write-execution-plan), then re-run: ${PLAN.pln_check_command}`)
if (!PLAN.stand_in && PLAN.wave && c.wave_field_ok !== true) bad.push(`a document lacks the wave field (wave_field_ok: ${c.wave_field_ok})`)
if (bad.length) return await stop('design check failed', bad)
return { state: 'done', run: PLAN.run, stages: PLAN.steps.map((s) => s.stage), results, findings, check: c }
