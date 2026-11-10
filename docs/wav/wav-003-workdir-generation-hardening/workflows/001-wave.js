export const meta = { name: "wave-003-workdir-generation-hardening", description: "Generated from the wave manifest: remaining runs only; cost profile low-cost" }
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
 "wave": "003",
 "slug": "workdir-generation-hardening",
 "autonomy_override": "",
 "commit_tasks": true,
 "commit_runs": true,
 "commit_trailer": "",
 "repos": [
  {
   "name": "plantuml-libs",
   "path": ".",
   "branch": "current",
   "commit": "per-run",
   "squash": "run-unless-pushed"
  }
 ],
 "wave_dir": "docs/wav/wav-003-workdir-generation-hardening",
 "wave_file": "docs/wav/wav-003-workdir-generation-hardening/wav-003-workdir-generation-hardening.md",
 "prg_file": "docs/wav/wav-003-workdir-generation-hardening/prg-003-workdir-generation-hardening.md",
 "run_dir": "docs/wav/wav-003-workdir-generation-hardening/run",
 "check_script": "/home/tibo/git-perso/claude-agents/plugins/run-management/skills/complete-run/scripts/check_run.py",
 "run_workflows": true,
 "generator_script": "/home/tibo/git-perso/claude-agents/plugins/run-management/skills/complete-wave/scripts/complete_wave.py",
 "child_workflows": {
  "design": "run-management:run-design",
  "implement": "run-management:run-implement"
 },
 "stand_in": false,
 "stand_in_command": "",
 "steps": [
  {
   "kind": "run",
   "n": 1,
   "phase": "P1",
   "run": {
    "id": "W-1",
    "number": null,
    "slug": "workdir-reference-validation",
    "model": "sonnet",
    "effort": "high",
    "verify": {
     "model": "sonnet",
     "effort": "medium"
    },
    "sensitive": false,
    "dir": null,
    "focus": "make a package that declares a missing example template or an unresolvable icon_reference fail in generate:workdir, with a message naming the package and the reference, instead of after a full CI render",
    "delegation": "standard",
    "doc_profile": "TDD+pln",
    "delegation_reason": "",
    "status_on_disk": "none"
   }
  },
  {
   "kind": "run",
   "n": 2,
   "phase": "P1",
   "run": {
    "id": "W-2",
    "number": null,
    "slug": "archive-integrity",
    "model": "sonnet",
    "effort": "high",
    "verify": {
     "model": "sonnet",
     "effort": "medium"
    },
    "sensitive": false,
    "dir": null,
    "focus": "make a cached archive always be a complete, valid zip that was fully extracted: reject a non-zip body before caching it and never trust a partially extracted directory",
    "delegation": "standard",
    "doc_profile": "single-document",
    "delegation_reason": "",
    "status_on_disk": "none"
   }
  },
  {
   "kind": "run",
   "n": 3,
   "phase": "P1",
   "run": {
    "id": "W-3",
    "number": null,
    "slug": "aws-families-and-resolver",
    "model": "sonnet",
    "effort": "high",
    "verify": {
     "model": "sonnet",
     "effort": "medium"
    },
    "sensitive": false,
    "dir": null,
    "focus": "give the nine unstyled AWS families a colour, make a future family without one visible at generation, and make the resolver script speak the FOLDER_DATE / download URL vocabulary of the how-to",
    "delegation": "standard",
    "doc_profile": "single-document",
    "delegation_reason": "",
    "status_on_disk": "none"
   }
  },
  {
   "kind": "gate",
   "phase": "P1",
   "criteria": [
    "npm run lint exits 0 (baseline: clean) and npm test passes with no failing test (baseline: 11 passing, so the count only grows)",
    "npm run generate:workdir -- -w <empty scratch dir> (all packages, no Podman) exits 0 (baseline: exits 0 in about 2 minutes), so the new reference check does not reject any existing package",
    "a test under test/ builds a package whose example template does not exist and asserts the generator raises an error naming the package and the missing template, and a second one does the same for an icon_reference URN that resolves to no item; both run in npm test",
    "a test under test/ asserts that download() or fetchArchive() rejects a body that is not a zip before it is cached, and that extractArchive() does not treat an interrupted extraction as complete (a destination left by an interrupted extraction is extracted again); both run in npm test",
    "in the library.yaml produced by generate:workdir -p aws -w <scratch dir>, every distinct item family has a row in source/library/packages/aws/families.csv (baseline: 27 families, 9 without a row: ArtificialIntelligence, CloudFinancialManagement, Databases, Games, GroupIcons, IoT, ManagementTools, MigrationModernization, SecurityIdentity; target: 0)",
    "the field names printed by scripts/resolve-aws-icons.mjs match those named in doc/howto.upgrade-aws-package.md, and test/resolve-aws-icons.spec.mjs asserts them"
   ],
   "runs": [
    "W-1",
    "W-2",
    "W-3"
   ],
   "model": "sonnet",
   "effort": "medium"
  },
  {
   "kind": "run",
   "n": 4,
   "phase": "P2",
   "run": {
    "id": "W-4",
    "number": null,
    "slug": "distribution-regen-aws-on-ci",
    "model": "sonnet",
    "effort": "high",
    "verify": {
     "model": "sonnet",
     "effort": "medium"
    },
    "sensitive": false,
    "dir": null,
    "focus": "get distribution/aws regenerated by the package-builder.yaml GitHub Action from branch wave-003, so the committed AWS bootstrap carries the new family colours, without any local container render",
    "delegation": "standard",
    "doc_profile": "single-document",
    "delegation_reason": "",
    "status_on_disk": "none"
   }
  },
  {
   "kind": "gate",
   "phase": "P2",
   "criteria": [
    "the latest package-builder.yaml run on branch wave-003 dispatched with pkgName=aws concluded success on its three jobs (checkable with gh run list --workflow package-builder.yaml --branch wave-003 and gh run view)",
    "git diff --name-only e95e177e2b wave-003 -- distribution lists only paths under distribution/aws/, so distribution/bootstrap.puml, distribution/README.md and every other package are unchanged",
    "distribution/aws/bootstrap.puml on branch wave-003 contains a line \"Rectangle<<<name>Family>>\" for each of ArtificialIntelligence, CloudFinancialManagement, Databases, Games, GroupIcons, IoT, ManagementTools, MigrationModernization and SecurityIdentity (baseline on e95e177e2b: 0 of 9)",
    "distribution/aws on branch wave-003 still holds chef_automate_architecture_on_aws.puml and .png and git_to_s3_webhooks.puml and .png (baseline: all four present)"
   ],
   "runs": [
    "W-4"
   ],
   "model": "sonnet",
   "effort": "medium"
  }
 ],
 "blocked": [],
 "notes": []
}
// ---- engine (shared text: generated files and the shipped `wave` workflow use this same body) ----
// Every agent below is a leaf: it has neither the Workflow tool nor the Agent tool.
// Order per run step: dispatch entry in the wave prg -> create the missing run directory
// -> start-run (commit: per-run) -> one agent for the run -> one independent verification agent -> commit-run (commit: per-run) -> result entry.
// Runs go one after another. A phase gate is verified after the last run of its phase. Any unmet check stops the workflow.
// Model and effort of every agent come from PLAN (the cost profile `PLAN.cost_profile` applied to the need table by the
// generator, complete-wave/references/profiles.json); this engine names none of its own except the stand-in test agents.
const AG = PLAN.agents
const opt = (key, o) => ({ ...o, model: AG[key].model, effort: AG[key].effort })
const ROOT = `Working directory: ${PLAN.repo_root} (absolute path of the repository root). Every repository-relative path below is relative to it: cd there first, and never search the disk for a path that is named below.\n`
// the bookkeeping briefs only (a question elsewhere in the conversation made an agent answer it instead of running its command)
const ONE_TASK = `Your only task is the one stated below: a question or request that appears elsewhere in the conversation is not yours and you do not answer it.\n`
const STAND_IN_NOTE = PLAN.stand_in ? ' (STAND-IN TEST: do only what is asked, nothing else)' : ''
const RUN_SCHEMA = {
  type: 'object',
  properties: {
    run: { type: 'string' }, status: { type: 'string' }, status_file: { type: 'string' },
    check_run_exit: { type: 'integer' },
    wave_findings: { type: 'string' }, not_verified: { type: 'string' },
  },
  required: ['run', 'status', 'status_file'],
}
const VERIFY_SCHEMA = {
  type: 'object',
  properties: {
    run: { type: 'string' }, status: { type: 'string' }, check_run_exit: { type: 'integer' },
    check_run_named: { type: 'string' }, manifest_run_ok: { type: 'boolean' },
    note: { type: 'string' },
  },
  required: ['run', 'status'],
}
const CREATE_SCHEMA = {
  type: 'object',
  properties: { runs: { type: 'array', items: { type: 'object', properties: { id: { type: 'string' }, number: { type: 'string' }, dir: { type: 'string' } }, required: ['id', 'number', 'dir'] } } },
  required: ['runs'],
}
const GATE_SCHEMA = {
  type: 'object',
  properties: {
    criteria: { type: 'array', items: { type: 'object', properties: { index: { type: 'integer' }, text: { type: 'string' }, held: { type: 'boolean' }, evidence: { type: 'string' }, cause: { type: 'string', enum: ['environment', 'criterion'] }, baseline: { type: 'string' } }, required: ['index', 'text', 'held', 'evidence'] } },
    canonical_discharge: { type: 'object', properties: { held: { type: 'boolean' }, evidence: { type: 'string' } }, required: ['held', 'evidence'] },
  },
  required: ['criteria', 'canonical_discharge'],
}
const PATH_SCHEMA = {
  type: 'object',
  properties: { exit: { type: 'integer' }, path: { type: 'string' }, message: { type: 'string' } },
  required: ['exit'],
}
const PREP_SCHEMA = {
  type: 'object',
  properties: { exit: { type: 'integer' }, plan: { type: 'object' }, digest: { type: 'string' }, message: { type: 'string' } },
  required: ['exit'],
}
// The plan of a child crosses a model hop (the bookkeeping agent returns it), so the script checks it against the digest
// the generator printed: sorted keys, no whitespace, FNV-1a over the UTF-16 code units. Same function as complete_wave.py's
// canonical_json() and digest_of(); a test plays both on the same plan.
const canon = (v) => Array.isArray(v) ? '[' + v.map(canon).join(',') + ']'
  : v !== null && typeof v === 'object' ? '{' + Object.keys(v).sort().map((k) => JSON.stringify(k) + ':' + canon(v[k])).join(',') + '}'
  : JSON.stringify(v)
const digestOf = (text) => {
  let h = 2166136261
  for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0 }
  return h.toString(16).padStart(8, '0')
}
const PRG = PLAN.prg_file
const WAVE = PLAN.wave_file
// numbered progress groups (2.22.0): every agent is created under a phase whose title starts with a zero-padded number, so a UI that sorts groups
// alphabetically shows them in execution order. `PH` is the default group; a call that runs in parallel with others passes its own.
const pad = (n, w = 2) => String(n).padStart(w, '0')
let PH = null
const ag = (prompt, o, ph) => { const p = ph === undefined ? PH : ph; return agent(prompt, p ? { ...o, phase: p } : o) }
const phaseTitle = (pid) => { const m = /(\d+)/.exec(String(pid)); return `${m ? pad(m[1]) : '00'} · phase ${pid}` }
const results = []
const findings = []

// every stop writes an escalation entry first (complete-wave, 'Record'), then returns the blocked state
const stop = async (reason, detail) => {
  await ag(entryPrompt('escalation', `workflow stopped, state blocked: ${reason} ` + JSON.stringify(detail)), opt('bookkeeping', { label: 'prg-escalation' }))
  return { state: 'blocked', reason, detail, results, findings }
}
function entryPrompt(what, text) {
  return (ROOT +
  `Append one dated line to the Log section of ${PRG} (use today's date from \`date +%F\`; add it after the last Log line, before "## Findings"). ` +
  `Write exactly this text after "- <date>: " and change nothing else in the file:\n\n${text}\n\n` +
  `Return the word done.${STAND_IN_NOTE}`)
}

const runBrief = (r) => ROOT +
  `Execute run ${r.number} of wave ${PLAN.wave} (${PLAN.slug}) end to end by invoking the run-management:complete-run skill.\n` +
  `Run: ${r.number}, slug ${r.slug}, directory ${r.dir} (it already exists; use it as given, never allocate a number).\n` +
  `Focus: ${r.focus}\n` +
  `Read the wave plan ${WAVE}, your run's documents and the repository yourself; the files win over this brief.\n` +
  `FIRST read ${r.dir}/run-${r.number}-${r.slug}.md. If its status is completed, cancelled or superseded, change nothing and return it. Otherwise continue from the documents already there; never draft over finished work.\n` +
  `You are a leaf agent: you have no Agent tool and no Workflow tool, so every task of the run executes inline in you; a task's results line in the pln says "inline (leaf)". ` +
  `A hard_judgment task stays inline in you regardless.\n` +
  `You must NOT write these wave files: ${WAVE} and ${PRG}. Findings that belong to the wave go in your result (wave_findings).\n` +
  `Carry wave: ${PLAN.wave} into the frontmatter of every prd, tdd, pln and prg file you draft.\n` +
  `Non-negotiables of complete-run: every stage of your document profile runs, including the review passes and Stage 11; never report success you have not checked; ` +
  `run \`python3 "${PLAN.check_script}" --as-completed ${r.dir}\` before declaring completed and return its exit code in check_run_exit. Stay within the repository and its safety rules (no commit, no destructive git, no secrets).\n` +
  `Return status as read from ${r.dir}/run-${r.number}-${r.slug}.md and status_file as that path.`

// run scope (PLAN.run_workflows): instead of one run-executor agent, a fresh leaf agent runs the generator for the run's design
// workflow, the wave script runs the generated file with workflow({scriptPath}) (one level), then the same for implement once a pln
// exists. The agent returns only the PATH of the file the generator wrote: no plan crosses a model hop (a 15-task plan is ~40 KB and a
// copy by a haiku agent failed its digest three times in a row, wave 005). A scriptPath is refused from a session whose working
// directory is elsewhere (workflow() reads a path only from the working directory or an added directory, issue #34); then the child is
// handed over BY NAME (PLAN.child_workflows) with the plan as args, copied by the agent and checked against its digest, up to three
// tries. Exit 3 of the generator means nothing to generate (all stages logged, no pln, all tasks done).
// the commit trailer (PLAN.commit_trailer, resolved at generation) goes to every command below that commits and to each child generation, which carries it into its own commits
const shq = (x) => `'${String(x).replaceAll("'", "'\\''")}'`
const trailerFlag = () => PLAN.commit_trailer ? ` --commit-trailer ${shq(PLAN.commit_trailer)}` : ''
const runFlags = (r) => `--profile ${PLAN.cost_profile}${r.delegation === 'hard_judgment' ? ' --hard' : ''}${PLAN.commit_tasks ? ' --commit-tasks' : ''}${trailerFlag()}${PLAN.autonomy_override ? " --autonomy-override '" + PLAN.autonomy_override.replaceAll("'", "'\\''") + "'" : ''}${PLAN.stand_in ? ' --stand-in' + (PLAN.stand_in_command ? ` --stand-in-command '${PLAN.stand_in_command}'` : '') : ''}`
const pathBrief = (r, stage) => ROOT +
  `Run exactly this command from the repository root and report its result; do nothing else and edit nothing yourself:\n` +
  `python3 "${PLAN.generator_script}" run ${r.dir} --stage ${stage} ${runFlags(r)}\n` +
  `Exit 0: stdout is one line, the absolute path of the file it wrote; return exit 0 and that path in path, exactly as printed. ` +
  `Exit 3: nothing to generate; return exit 3 and its message. Any other exit: return the exit code and its stderr in message.`
const prepBrief = (r, stage) => ROOT +
  `Run exactly this command from the repository root and report its result; do nothing else and edit nothing yourself:\n` +
  `python3 "${PLAN.generator_script}" run ${r.dir} --stage ${stage} ${runFlags(r)} --args\n` +
  `Exit 0: stdout has two lines. Line 1 is the plan as one line of JSON; return it, parsed, in plan, copied exactly (change nothing, drop nothing). Line 2 reads "digest " and 8 hex digits; return those 8 digits in digest. Return exit 0 with them. ` +
  `Exit 3: nothing to generate; return exit 3 and its message. Any other exit: return the exit code and its stderr in message.`
// the plan by name, copied by an agent and checked against its digest; returns {plan} or {failed}
async function planByCopy(r, stage) {
  const name = (PLAN.child_workflows || {})[stage]
  let p = null, got = null, first = null
  for (let attempt = 1; attempt <= 3; attempt++) {
    p = await ag(prepBrief(r, stage), opt('bookkeeping', { label: `prepare-${stage}-${r.id}${attempt > 1 ? '-try' + attempt : ''}`, schema: PREP_SCHEMA }))
    if (!p || (p.exit !== 0 && p.exit !== 3) || p.exit === 3) break
    got = p.plan && typeof p.plan === 'object' ? digestOf(canon(p.plan)) : null
    if (!name || (got !== null && got === p.digest)) break
  }
  if (!p || (p.exit !== 0 && p.exit !== 3)) { findings.push({ run: r.id, stage, prepare_failed: p ? { exit: p.exit, message: p.message } : null }); return { failed: `${stage}: the plan could not be prepared (exit ${p ? p.exit : 'none'}) ${p && p.message ? p.message : ''}`.trim() } }
  if (p.exit === 3) return { nothing: true }
  if (!name || got === null || got !== p.digest) {
    findings.push({ run: r.id, stage, prepare_failed: { reason: !name ? 'no child workflow name in the plan' : 'plan digest mismatch after 3 tries', expected: p.digest || null, got } })
    return { failed: `${stage}: ${!name ? 'no child workflow name in the plan' : 'plan digest mismatch after 3 tries'}` }
  }
  return { name, plan: p.plan }
}
async function runViaWorkflows(r) {
  let state = ''
  for (const stage of ['design', 'implement']) {
    const q = await ag(pathBrief(r, stage), opt('bookkeeping', { label: `prepare-${stage}-${r.id}`, schema: PATH_SCHEMA }))
    if (!q || (q.exit !== 0 && q.exit !== 3)) { findings.push({ run: r.id, stage, prepare_failed: q ? { exit: q.exit, message: q.message } : null }); return { failed: `${stage}: the generator failed (exit ${q ? q.exit : 'none'}) ${q && q.message ? q.message : ''}`.trim() } }
    if (q.exit === 3) continue
    let res = null
    if (q.path) {
      try { res = await workflow({ scriptPath: q.path }) } catch (e) {
        const msg = String((e && e.message) || e)
        if (!/scriptPath/.test(msg)) { findings.push({ run: r.id, stage, child_error: msg }); return { failed: `${stage} workflow threw: ${msg}` } }
        res = null  // the path was refused: by name below
      }
    }
    if (res === null) {
      const c = await planByCopy(r, stage)
      if (c.nothing) continue
      if (c.failed) return { failed: c.failed }
      try { res = await workflow(c.name, c.plan) } catch (e) { findings.push({ run: r.id, stage, child_error: String((e && e.message) || e) }); return { failed: `${stage} workflow threw: ${String((e && e.message) || e)}` } }
    }
    if (res && (res.state === 'awaiting-commit' || res.state === 'awaiting-operator')) { findings.push({ run: r.id, stage, [res.state.replace('-', '_')]: res }); return { awaiting: res.state.slice(9), run: r.number, stage, tasks: res.tasks } }
    if (res && res.state === 'awaiting-human') { findings.push({ run: r.id, stage, awaiting_human: res }); return { awaiting: true, run: r.number, stage, tasks: res.tasks } }
    if (!res || (res.state !== 'done' && res.state !== 'nothing-to-do')) {
      findings.push({ run: r.id, stage, child: res || null })
      return { failed: res ? `${stage} workflow returned ${res.state}: ${res.reason || ''} ${JSON.stringify(res.detail === undefined ? '' : res.detail)}`.trim() : `${stage} workflow returned nothing` }
    }
    state = `${stage}: ${res.state}`
  }
  return { run: r.number, status: state || 'nothing-to-do', status_file: `${r.dir}/run-${r.number}-${r.slug}.md` }
}

const standInBrief = (r) => ROOT +
  `STAND-IN TEST run ${r.number} of wave ${PLAN.wave}. Do only this: in the file ${r.dir}/run-${r.number}-${r.slug}.md ` +
  (PLAN.stand_in_command ? `first run the shell command \`${PLAN.stand_in_command.replaceAll('{n}', r.number)}\`, then ` : '') +
  `if its status line already reads completed change nothing, otherwise set the frontmatter line "status:" to "completed". ` +
  `Return run, the status now in the file, and status_file.`

const verifyBrief = (r) => ROOT + (
  PLAN.stand_in
    ? `STAND-IN TEST. Read ${r.dir}/run-${r.number}-${r.slug}.md and return run ${r.number} and the value of its frontmatter status line. Do not edit anything.`
    : `Independent verification of run ${r.number} (wave ${PLAN.wave}); you did not execute it and must not trust any report of it.\n` +
      `1. Read ${r.dir}/run-${r.number}-${r.slug}.md and return its frontmatter status.\n` +
      `2. Run \`python3 "${PLAN.check_script}" --as-completed ${r.dir}\` yourself; return its exit code in check_run_exit and, if it is not 0, the item it names in check_run_named.\n` +
      `3. If the run has a pln-${r.number}-*.md, add the pln's execution_manifest status to note.\n` +
      (r.created ? `4. This run was just created by the workflow: confirm the directory exists and that the manifest ${WAVE} holds \`run: ${r.number}\` on this run's line; return manifest_run_ok.\n` : '') +
      `Edit nothing.`)

const COMMIT_RUN_SCHEMA = {
  type: 'object',
  properties: { run: { type: 'string' }, committed: { type: 'boolean' }, nothing: { type: 'boolean' }, commit: { type: 'string' }, files: { type: 'array', items: { type: 'string' } },
    action: { type: 'string' }, before: { type: 'string' }, after: { type: 'string' }, wip_ref: { type: 'string' }, reason: { type: 'string' }, detail: { type: 'string' },
    left_out: { type: 'array', items: {} }, absorbed: { type: 'array', items: {} }, kept: { type: 'array', items: {} }, policy: { type: 'string' },
    repos: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, path: { type: 'string' }, state: { type: 'string' }, commit: { type: 'string' }, wip_ref: { type: 'string' }, branch: { type: 'string' }, ref: { type: 'string' }, sha: { type: 'string' }, reason: { type: 'string' }, detail: { type: 'string' } } } },
    exit: { type: 'integer' }, message: { type: 'string' } },
  required: ['run', 'exit'],
}
const START_SCHEMA = {
  type: 'object',
  properties: { exit: { type: 'integer' }, ok: { type: 'boolean' }, recorded: { type: 'boolean' }, reason: { type: 'string' }, detail: { type: 'string' }, already_recorded: { type: 'boolean' }, repos: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, path: { type: 'string' }, state: { type: 'string' }, commit: { type: 'string' }, wip_ref: { type: 'string' }, branch: { type: 'string' }, ref: { type: 'string' }, sha: { type: 'string' }, reason: { type: 'string' }, detail: { type: 'string' } } } }, message: { type: 'string' } },
  required: ['exit', 'ok'],
}
// only with PLAN.commit_runs: records where the run begins (HEAD and branch) before any agent of the run writes outside the wave folder
const startRunBrief = (r) => ROOT + ONE_TASK +
  `Run this command from the repository root and return what it printed as JSON: \`python3 "${PLAN.generator_script}" start-run ${PLAN.wave_dir} --run ${r.id} --json\`. ` +
  `Return exit (the command's exit code), ok, recorded, already_recorded, reason, detail, repos exactly as printed (recorded or already_recorded is true when the command recorded or kept a start point); if the exit code is not 0 and nothing was printed as JSON put the command's error output in message. ` +
  `Do not run any other git command and do not edit anything.`
const commitRunCommand = (r) => `python3 "${PLAN.generator_script}" commit-run ${PLAN.wave_dir} --run ${r.id}${trailerFlag()} --apply`
// a run commit is a success when the command exited 0 and either made a commit (committed, squashed) or found nothing to commit
const commitRunOk = (c) => c.exit === 0 && (c.committed || c.nothing || c.action === 'squashed' || c.action === 'committed')
// the per-repository report of start-run, commit-lane and commit-run (a repos map in the settings): name, path, state and, when present, the commit, the wip ref and the reason of each repository, in map order
const reposLog = (repos) => (Array.isArray(repos) ? repos : []).map((x) => {
  const o = {}
  for (const k of ['name', 'path', 'state', 'branch', 'ref', 'sha', 'commit', 'wip_ref', 'reason', 'detail']) if (x && x[k] !== undefined && x[k] !== null && x[k] !== '') o[k] = x[k]
  return o
})
// ' Repositories: aimp-product committed, aimp-front refused, ...' when the report lists any, else nothing
const reposText = (repos) => {
  const l = reposLog(repos)
  return l.length ? ` Repositories: ${l.map((x) => `${x.name || x.path} ${x.state || 'unknown'}`).join(', ')}.` : ''
}
// what the prg keeps of a run commit report: the action, the policy, the hash, the wip ref and, when present, what was absorbed or left out
const commitRunLog = (c) => {
  const o = { id: c.id, exit: c.exit }
  for (const k of ['action', 'policy', 'commit', 'wip_ref', 'reason', 'detail', 'message']) if (c[k] !== undefined && c[k] !== null && c[k] !== '') o[k] = c[k]
  for (const k of ['absorbed', 'left_out']) if (Array.isArray(c[k]) && c[k].length) o[k] = c[k]
  const rl = reposLog(c.repos)
  if (rl.length) o.repos = rl
  return o
}
const commitRunStopText = (r, c) => `wave workflow stopped, state awaiting-commit: ` + JSON.stringify(commitRunLog(c)) +
  `. Reason ${c.reason || 'none given'}${c.detail ? ' (' + c.detail + ')' : c.message ? ' (' + c.message + ')' : ''}.${reposText(c.repos)} This run is completed and verified; the workflow did not change its files or its commits beyond what is listed. ` +
  `The commit can be retried with \`${commitRunCommand(r)}\`; a rerun of the workflow is safe and does not execute the run again.`
// only with PLAN.commit_runs (commit: per-run): the script decides the files and the refusals, this agent runs one command and reports it
const commitRunBrief = (r) => ROOT + ONE_TASK +
  `Run this command from the repository root and return what it printed as JSON: \`python3 "${PLAN.generator_script}" commit-run ${PLAN.wave_dir} --run ${r.id}${trailerFlag()} --apply --json\`. ` +
  `Return run ${r.id}, exit (the command's exit code), committed, nothing, commit, files, action, before, after, wip_ref, reason, detail, left_out, absorbed, kept, policy, repos exactly as printed; if the exit code is not 0 put the command's error output in message. ` +
  `The command writes the commit message, trailer included: do not amend, rewrite or add to it, and do not change a trailer to match your own session. Do not run any other git command and do not edit anything.`
const commitRunOf = async (r) => {
  const c = await ag(commitRunBrief(r), opt('bookkeeping', { label: `commit-run-${r.id}`, schema: COMMIT_RUN_SCHEMA }))
  return { id: r.id, ...(c || { exit: -1, message: 'the commit agent returned nothing' }) }
}

const createBrief = (r) => ROOT +
  `Create the missing run directory of wave ${PLAN.wave}, following manage-runs "Starting a new run" and complete-wave 'Create missing runs':\n` +
  `- ${r.id}: slug ${r.slug}, profile ${r.doc_profile}\n` +
  `Number = highest NNNN across every docs/run/run-*/ and every docs/wav/*/run/run-*/ directory, plus 1; create ${PLAN.run_dir}/run-NNNN-<slug> with mkdir (never mkdir -p); ` +
  `write its status file run-NNNN-<slug>.md first (frontmatter type: run, run: NNNN, status: proposed, profile: <the profile listed for that run>, wave: ${PLAN.wave}; a heading and one line naming the wave and the manifest id); ` +
  `then write NNNN into the \`run:\` field of that run in the manifest of ${WAVE}. Write nothing else in that manifest. Return the created run (id, number, dir) in runs.${STAND_IN_NOTE}`

// the tree identifier of Stage 11 (complete-run/SKILL.md owns the recipe): the working tree as it stands, read through a temporary index, without the wave's folder
const TREE_REPOS = (PLAN.repos || []).filter((e) => e && e.path)
const TREE_MULTI = TREE_REPOS.length > 0 && !(TREE_REPOS.length === 1 && TREE_REPOS[0].path === '.')
// with a repos map the recipe runs once per listed repository (a change in any of them changes the identifier), the root one without the folder
// the pathspec that leaves the wave's folder out of one repository's tree: its path from that repository's root, nothing when the folder lives in another repository
const treeExclude = (e, folder) => { const f = String(folder).replace(/\/+$/, ''), p = e.path.replace(/\/+$/, ''); const rel = p === '.' ? f : (f.startsWith(p + '/') ? f.slice(p.length + 1) : ''); return rel ? ` ${shq(':(exclude)' + rel)}` : '' }
const TREE_ONE = (e) => `T=$(mktemp -d) && GIT_INDEX_FILE=$T/index git -C ${shq(e.path)} add -A -- .${treeExclude(e, PLAN.wave_dir)} && echo ${e.name}=$(GIT_INDEX_FILE=$T/index git -C ${shq(e.path)} write-tree)`
const TREE_NOTE = TREE_MULTI ? ` The tree of this run is one hash per listed repository (${TREE_REPOS.map((e) => e.name).join(', ')}), written <name>=<40 hex> and joined by commas without spaces; a recorded line equals the current tree only when every repository's hash is equal.` : ''
const TREE_CMD = TREE_MULTI ? TREE_REPOS.map(TREE_ONE).join(' ; ') : `T=$(mktemp -d) && GIT_INDEX_FILE=$T/index git add -A -- .${treeExclude({ path: '.' }, PLAN.wave_dir)} && GIT_INDEX_FILE=$T/index git write-tree`

const gateBrief = (g) => ROOT +
  `Verify the gate of phase ${g.phase} of wave ${PLAN.wave} against real evidence, per complete-wave 'Verify the gate'. Plan: ${WAVE}. You did not execute the runs.\n` +
  `For each criterion run the command, read the file or inspect the artifact, and say in evidence what you actually did; a criterion you cannot check mechanically is verified by inspection and the evidence says so. ` +
  `held is true only if the criterion holds as written. Return exactly one entry per criterion in criteria, each carrying the number of its criterion in index (1 to ${g.criteria.length}); the canonical discharge goes only in canonical_discharge, never as a further entry. ` +
  `When a command fails, rerun an unchanged existing check of the same project as a baseline and say in evidence the result per project and the baseline; set cause to "environment" when the baseline fails the same way or the set of failing tests changes between reruns, "criterion" when the criterion itself does not hold, and baseline to the check you ran. ` +
  `A criterion that is a run of the repository's full test suite may be met by a green already recorded: each run of the phase (${g.runs.join(', ')}) may hold in its prg under ${PLAN.wave_dir}/run/ a line "- <date>: Full suite: command <command>; tree <40 hex>; outcome <pass|fail>; duration <n>s". Compute the current tree with \`${TREE_CMD}\` (the wave's folder is left out of the tree on purpose).${TREE_NOTE} ` +
  `Accept a recorded line whose command covers the criterion's command and whose tree equals the current one, with outcome pass: cite its date, command and tree in evidence in place of a rerun. A command covers the criterion's when it is the same command or when it lists the criterion's command, unchanged and with the same flags, as one of its steps (a recorded command may chain several, joined by && or ;), so a longer recorded command is not a reason to rerun; a narrower one (fewer targets, a filter, a skipped step) does not cover it. Rerun the command yourself when the tree differs, when the command is live (it calls a paid or remote service), networked, seeded (a random or clock seed) or known to be unstable, when the recorded outcome is not pass, or when no line matches. End-to-end, byte-identity and live criteria are yours to run unless a recorded line lists that command as a step. ` +
  `Criteria, in order:\n` + g.criteria.map((c, i) => `${i + 1}. ${c}`).join('\n') + '\n' +
  `Then the canonical discharge of this phase's runs (${g.runs.join(', ')}): each either discharged its CI-arc-n/CI-dom-n items or answered "none" with a reason, in the TDD's Canonical Impact section or, for a single-document run, in its own body. ` +
  `Silence or a bare "none" is not held. Edit nothing.${STAND_IN_NOTE}` +
  (PLAN.stand_in ? ` For this stand-in test the runs carry no documents: report the canonical discharge as held true with the evidence "stand-in test, not assessed".` : '')

if (PLAN.steps.length === 0) {
  return PLAN.blocked.length
    ? await stop('nothing can run: unsatisfied dependencies', PLAN.blocked)
    : { state: 'nothing-to-do', note: 'every run of this scope is completed', results }
}

for (const step of PLAN.steps) {
  PH = phaseTitle(step.phase)
  if (step.kind === 'verify') {
    // runs recorded completed whose verification entry is missing from the prg (a cut): verify only, never re-run
    const checked = await parallel(step.runs.map((r) => () => ag(verifyBrief(r), PLAN.stand_in
      ? { label: `verify-${r.id}`, schema: VERIFY_SCHEMA, model: 'haiku', effort: 'low' }
      : { label: `verify-${r.id}`, schema: VERIFY_SCHEMA, model: r.verify.model, effort: r.verify.effort })))
    const bad = []
    step.runs.forEach((r, i) => {
      const v = checked[i]
      results.push({ run: r.id, number: r.number, reported: 'completed (earlier session)', verified: v })
      if (!v) bad.push(`${r.id}: verification agent returned nothing`)
      else if (v.status !== 'completed') bad.push(`${r.id}: status on disk is ${v.status}`)
      else if (!PLAN.stand_in && v.check_run_exit !== 0) bad.push(`${r.id}: check_run exit ${v.check_run_exit} ${v.check_run_named || ''}`)
    })
    if (bad.length) return await stop('completed run not verified', bad)  // no result entry on failure: a regeneration retries it
    // commit: per-run: a run cut between its verification and its commit is committed here (nothing to commit is success), one after the other
    const commits = []
    if (PLAN.commit_runs) for (const r of step.runs) commits.push(await commitRunOf(r))
    const logged = await ag(entryPrompt('result', `verification-only result for ${step.runs.map((r) => r.id).join('+')} (completed before a cut, no verification entry in this log): ` + JSON.stringify(step.runs.map((r, i) => ({ id: r.id, verified: checked[i] }))) + (PLAN.commit_runs ? `; run commits: ${JSON.stringify(commits.map(commitRunLog))}` : '')),
      opt('bookkeeping', { label: `prg-verify-${step.phase}` }))
    if (!logged) return await stop('verification entry not written to the prg', step.phase)
    const refused = commits.findIndex((c) => !commitRunOk(c))
    if (refused >= 0) {
      findings.push({ phase: step.phase, run_commit: [commits[refused]] })
      await ag(entryPrompt('awaiting', commitRunStopText(step.runs[refused], commits[refused])), opt('bookkeeping', { label: `prg-awaiting-commit-${step.phase}` }))
      return { state: 'awaiting-commit', waiting: [commits[refused]], results, findings }
    }
    continue
  }
  if (step.kind === 'gate') {
    const g = await ag(gateBrief(step), { label: `gate-${step.phase}`, schema: GATE_SCHEMA, model: step.model, effort: step.effort })
    if (!g) return await stop('gate agent returned nothing', step.phase)
    results.push({ gate: step.phase, result: g })
    const logged = await ag(entryPrompt('gate', `gate ${step.phase} verified by a fresh agent: ` + JSON.stringify(g)), opt('bookkeeping', { label: `prg-gate-${step.phase}` }))
    // criteria are compared by position and count, never by the text the agent returned (it may reword; it stays in the prg entry as display)
    // matched by the index the agent gives each entry; an entry with no index, one above the count or a repeated one is ignored (it stays in the prg entry)
    const byIdx = {}
    for (const c of g.criteria) if (Number.isInteger(c.index) && c.index >= 1 && c.index <= step.criteria.length && !byIdx[c.index]) byIdx[c.index] = c
    const unmet = []
    step.criteria.forEach((text, i) => {
      const c = byIdx[i + 1]
      if (!c) unmet.push(`criterion ${i + 1} not returned by the gate agent: ${text}`)
      else if (!c.held) unmet.push(`criterion ${i + 1} not held (${c.cause || 'cause not given'}): ${text}. ${c.evidence}${c.baseline ? ' Baseline: ' + c.baseline : ''}`)
    })
    if (!logged) unmet.push('gate entry not written to the prg')
    if (!g.canonical_discharge.held) unmet.push('canonical discharge')
    if (unmet.length) return await stop('gate unmet', { phase: step.phase, unmet })
    continue
  }
  const r = step.run
  const entered = await ag(entryPrompt('dispatch', `step ${step.n} (phase ${step.phase}) = ${r.id}; cost profile ${PLAN.cost_profile}; overrides of declared tiers: ${(PLAN.overrides || []).length ? PLAN.overrides.join(' | ') : 'none'}; autonomy override: ${PLAN.autonomy_override ? PLAN.autonomy_override : 'none'}; tiers: ${r.id} ${r.delegation} (${r.model}, effort ${r.effort}); runs execute one after another in this worktree; one leaf agent per run (${PLAN.stand_in ? 'stand-in' : 'run-management:run-executor'}); written before dispatch by the generated workflow.`),
    opt('bookkeeping', { label: `prg-dispatch-${step.n}` }))
  if (!entered) return await stop('dispatch entry not written; nothing was dispatched', step.n)
  if (!r.number) {
    const c = await ag(createBrief(r), opt('create', { label: `create-${step.n}-${r.id}`, schema: CREATE_SCHEMA }))
    if (!c) return await stop('run creation returned nothing', [r.id])
    const m = (c.runs || []).find((x) => x.id === r.id)
    if (m) { r.number = m.number; r.dir = m.dir; r.created = true }
    if (!r.number) return await stop('run creation incomplete', [r.id])
  }
  // commit: per-run: the start point of the run is recorded before any agent of the run executes; a refusal stops the wave and the run is not executed
  if (PLAN.commit_runs) {
    const s = await ag(startRunBrief(r), opt('bookkeeping', { label: `start-run-${r.id}`, schema: START_SCHEMA }))
    // the command prints recorded or already_recorded when it ran and succeeded: an agent that returned exit 0 and ok without either did not run it
    if (!s || s.exit !== 0 || !s.ok || !(s.recorded || s.already_recorded)) {
      const refusal = { id: r.id, exit: s ? s.exit : -1, reason: (s && s.reason) || (s ? (s.exit === 0 && s.ok ? 'start-run-not-run' : '') : 'the start agent returned nothing'), detail: (s && (s.detail || s.message)) || '' }
      const startRepos = reposLog(s && s.repos)
      if (startRepos.length) refusal.repos = startRepos
      findings.push({ step: step.n, start_run: refusal })
      await ag(entryPrompt('awaiting', `wave workflow stopped, state awaiting-operator: start-run refused for ${r.id}: ` + JSON.stringify(refusal) +
        `. The run was not executed and nothing was written but this entry.${reposText(refusal.repos)}` +
        (refusal.reason === 'dirty-tree' ? ` The tree holds changes outside the wave folder (partial work of this run, or a change made after the workflow was generated): commit them by hand by path, then regenerate.` : ` Fix the cause named above, then regenerate.`)),
        opt('bookkeeping', { label: `prg-awaiting-operator-${step.n}` }))
      return { state: 'awaiting-operator', waiting: [refusal], results, findings }
    }
  }
  const ran = await (PLAN.run_workflows
    ? runViaWorkflows(r)
    : PLAN.stand_in
    ? ag(standInBrief(r), { label: `run-${r.id}`, schema: RUN_SCHEMA, model: 'haiku', effort: 'low' })
    : ag(runBrief(r), { label: `run-${r.id}`, schema: RUN_SCHEMA, agentType: 'run-management:run-executor', model: r.model, effort: r.effort }))
  // a run that stopped for a human, an operator or a commit: logged before any verification agent is dispatched, the wave stops with the same state
  const waitingOf = () => [{ run: r.id, number: ran.run, stage: ran.stage, tasks: ran.tasks }]
  if (ran && ran.awaiting === 'operator') {
    const waiting = waitingOf()
    await ag(entryPrompt('awaiting', `wave workflow stopped, state awaiting-operator: ` + JSON.stringify(waiting) + `. A task agent did not start its task and wrote nothing; the tasks are still pending. Read the reasons in the run's prg, fix the cause (often: launch right after a neutral message), then regenerate.`),
      opt('bookkeeping', { label: `prg-awaiting-operator-${step.n}` }))
    return { state: 'awaiting-operator', waiting, results, findings }
  }
  if (ran && ran.awaiting === 'commit') {
    const waiting = waitingOf()
    await ag(entryPrompt('awaiting', `wave workflow stopped, state awaiting-commit: ` + JSON.stringify(waiting) + `. The tasks' work is on disk and a check needs it committed: the lane commit was refused or not made (the reason is in each task's entry of the run's prg), and the workflow commits nothing else by itself. ` +
        `Commit the pending tasks' files by path with \`python3 "${PLAN.generator_script}" commit-lane ${PLAN.wave_dir} --run ${r.id} --label 'tasks …'${trailerFlag()} --apply\` (add one --path per file), then regenerate; the tasks are still pending and the next generation resumes them.`),
      opt('bookkeeping', { label: `prg-awaiting-commit-${step.n}` }))
    return { state: 'awaiting-commit', waiting, results, findings }
  }
  if (ran && ran.awaiting) {
    const waiting = waitingOf()
    await ag(entryPrompt('awaiting', `wave workflow stopped, state awaiting-human: ` + JSON.stringify(waiting) + `. The run's own prg names the tasks and how to lift the gate (--autonomy-override with a reason, or provide the validation); regenerate after the decision.`),
      opt('bookkeeping', { label: `prg-awaiting-${step.n}` }))
    return { state: 'awaiting-human', waiting, results, findings }
  }
  const v = await ag(verifyBrief(r), PLAN.stand_in
    ? { label: `verify-${r.id}`, schema: VERIFY_SCHEMA, model: 'haiku', effort: 'low' }
    : { label: `verify-${r.id}`, schema: VERIFY_SCHEMA, model: r.verify.model, effort: r.verify.effort })
  results.push({ run: r.id, number: r.number, reported: ran && ran.status, verified: v })
  let bad = null
  if (!ran) bad = `${r.id}: run agent returned nothing`
  else if (ran.failed) bad = `${r.id}: ${ran.failed}`
  else if (!v) bad = `${r.id}: verification agent returned nothing`
  else if (v.status !== 'completed') bad = `${r.id}: status on disk is ${v.status}`
  else if (!PLAN.stand_in && v.check_run_exit !== 0) bad = `${r.id}: check_run exit ${v.check_run_exit} ${v.check_run_named || ''}`
  else if (r.created && !PLAN.stand_in && v.manifest_run_ok !== true) bad = `${r.id}: the manifest does not hold the created run number`
  // commit: per-run: a run verified completed is committed by path before its result is logged
  let commitRun = null
  if (PLAN.commit_runs && !bad) {
    commitRun = await commitRunOf(r)
  }
  // a verified run is logged as `step N result for W-x: [...]`; a run whose verification failed is logged as `step N: W-x NOT verified (<why>): [...]`
  // with the word "result" replaced everywhere, so no reader that looks for "result" and "verif" takes it for a verification entry (wave 016, W-1)
  const entryJson = JSON.stringify([{ id: r.id, reported: ran && ran.status, verified: v }]) + (PLAN.commit_runs ? `; run commits: ${JSON.stringify(commitRun ? [commitRunLog(commitRun)] : [])}` : '')
  await ag(entryPrompt('result', bad
    ? `step ${step.n}: ${r.id} NOT verified (${bad}): ${entryJson}`.replace(/result/gi, 'outcome')
    : `step ${step.n} result for ${r.id}: ${entryJson}`),
    opt('bookkeeping', { label: `prg-result-${step.n}-${r.id}` }))
  if (bad) return await stop('run not verified completed', [bad])
  if (commitRun && !commitRunOk(commitRun)) {
    findings.push({ step: step.n, run_commit: [commitRun] })
    await ag(entryPrompt('awaiting', commitRunStopText(r, commitRun)),
      opt('bookkeeping', { label: `prg-awaiting-commit-${step.n}` }))
    return { state: 'awaiting-commit', waiting: [commitRun], results, findings }
  }
}
return PLAN.blocked.length
  ? await stop('remaining runs blocked', PLAN.blocked)
  : { state: 'done', ready_to_close: true, note: 'close-out (complete-wave, Close out) is done by the launching session', results, findings }
