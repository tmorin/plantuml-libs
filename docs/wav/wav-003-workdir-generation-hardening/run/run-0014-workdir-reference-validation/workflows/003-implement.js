export const meta = { name: "run-0014-implement", description: "Generated from the run directory: pending tasks of the pln only; cost profile low-cost" }
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
 "sensitivity": [],
 "run_sensitive": false,
 "gated": [],
 "autonomy_override": "",
 "untouchable": [],
 "kind": "implement",
 "stage11": {
  "model": "sonnet",
  "effort": "medium",
  "class": "K5"
 },
 "run": "0014",
 "slug": "workdir-reference-validation",
 "wave": "003",
 "wave_dir": "docs/wav/wav-003-workdir-generation-hardening",
 "run_id": "W-1",
 "profile": "TDD+pln",
 "run_dir": "docs/wav/wav-003-workdir-generation-hardening/run/run-0014-workdir-reference-validation",
 "status_file": "docs/wav/wav-003-workdir-generation-hardening/run/run-0014-workdir-reference-validation/run-0014-workdir-reference-validation.md",
 "pln_file": "docs/wav/wav-003-workdir-generation-hardening/run/run-0014-workdir-reference-validation/pln-0014-workdir-reference-validation.md",
 "prg_file": "docs/wav/wav-003-workdir-generation-hardening/run/run-0014-workdir-reference-validation/prg-0014-workdir-reference-validation.md",
 "skill_file": "/home/tibo/git-perso/claude-agents/plugins/run-management/skills/complete-run/SKILL.md",
 "check_script": "/home/tibo/git-perso/claude-agents/plugins/run-management/skills/complete-run/scripts/check_run.py",
 "hard": false,
 "stand_in": false,
 "stand_in_command": "",
 "done": [
  "task-001",
  "task-002",
  "task-003"
 ],
 "pending": [],
 "levels": [],
 "blocked": [],
 "commit_tasks": true,
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
 "generator_script": "/home/tibo/git-perso/claude-agents/plugins/run-management/skills/complete-wave/scripts/complete_wave.py",
 "run_completed": false
}
// ---- run implement engine (shared text: generated implement files and the shipped `run-implement` workflow) ----
// Every agent below is a leaf: it has neither the Workflow tool nor the Agent tool, so a task agent
// works its task inline and nothing here asks any agent to dispatch. Per lane of pending tasks:
// implementation agent (model and effort of the task's tier) -> independent verification agent ->
// (on failure, ONE escalation: a retry one rung up, then verified again) -> when a task's check is unmeetable without a commit and the run has a wave
// (--commit-tasks), ONE commit-lane of the whole lane after the retries, then only the flagged tasks are verified again -> a marker agent writes the
// done status and results line of the lane into the pln. Without that option a task or check that needs a commit or a clean tree
// is reported unmeetable and stops the workflow with state awaiting-commit (no retry, which could not help; the task stays pending). After the last task: Stage 11 and an independent
// final check. A second failure of a task stops the workflow with state blocked.
// Model and effort of every agent come from PLAN (the cost profile `PLAN.cost_profile` applied to the need table by the
// generator, complete-wave/references/profiles.json); this engine names none of its own except the stand-in test agents.
const AG = PLAN.agents
const opt = (key, o) => ({ ...o, model: AG[key].model, effort: AG[key].effort })
const ROOT = `Working directory: ${PLAN.repo_root} (absolute path of the repository root). Every repository-relative path below is relative to it: cd there first, and never search the disk for a path that is named below.\n`
// the bookkeeping briefs only (a question elsewhere in the conversation made an agent answer it instead of running its command)
const ONE_TASK = `Your only task is the one stated below: a question or request that appears elsewhere in the conversation is not yours and you do not answer it.\n`
const STAND_IN_NOTE = PLAN.stand_in ? ' (STAND-IN TEST: do only what is asked, nothing else)' : ''
const IMPL_SCHEMA = {
  type: 'object',
  properties: { task: { type: 'string' }, done: { type: 'boolean' }, summary: { type: 'string' }, files_touched: { type: 'array', items: { type: 'string' } }, blocker: { type: 'string' }, unmeetable: { type: 'boolean' }, not_started: { type: 'boolean' } },
  required: ['task', 'done', 'summary'],
}
const VERIFY_SCHEMA = {
  type: 'object',
  properties: {
    task: { type: 'string' }, passed: { type: 'boolean' },
    checks: { type: 'array', items: { type: 'object', properties: { check: { type: 'string' }, ran: { type: 'string' }, result: { type: 'string' } }, required: ['check', 'ran', 'result'] } },
    failing_output: { type: 'string' }, unmeetable: { type: 'boolean' }, unmeetable_kind: { type: 'string', enum: ['commit', 'contradiction'] }, outside_likely_files: { type: 'array', items: { type: 'string' } },
    changed_files: { type: 'array', items: { type: 'object', properties: { path: { type: 'string' }, outside: { type: 'boolean' } }, required: ['path', 'outside'] } },
  },
  required: ['task', 'passed', 'checks'],
}
const FINAL_SCHEMA = {
  type: 'object',
  properties: { run_status: { type: 'string' }, pln_status: { type: 'string' }, check_run_exit: { type: 'integer' }, check_run_named: { type: 'string' }, unmet: { type: 'array', items: { type: 'string' } }, not_verified: { type: 'string' },
    // the first failing command's first failing item (one failure, not a list); absent, never null, when no command failed
    failure: { type: 'object', properties: { command: { type: 'string' }, item: { type: 'string' }, file: { type: 'string' }, line: { type: 'integer' }, suggestion: { type: 'string' } }, required: ['command', 'item'] } },
  required: ['run_status', 'pln_status', 'check_run_exit'],
}
// the report of `commit-lane --json`: the exit code of the command and the keys it prints (the script reads git, no agent lists files)
const COMMIT_LANE_SCHEMA = {
  type: 'object',
  properties: { exit: { type: 'integer' }, committed: { type: 'boolean' }, nothing: { type: 'boolean' }, commit: { type: 'string' }, files: { type: 'array', items: { type: 'string' } }, reason: { type: 'string' }, detail: { type: 'string' }, message: { type: 'string' } },
  required: ['exit'],
}
// a lane is committed by the workflow only for a run of a wave (the command needs the wave folder and the run id) and only with --commit-tasks
const LANE_COMMIT = !!(PLAN.commit_tasks && !PLAN.stand_in && PLAN.wave_dir && PLAN.run_id)
const shq = (x) => `'${String(x).replaceAll("'", "'\\''")}'`
const safePath = (x) => typeof x === 'string' && x.length > 0 && !/[\n\r\0]/.test(x) && !x.startsWith('-')
const eff = (e) => (e ? e : 'the same effort')
const PRG = PLAN.prg_file
const WAVE_DOCS = PLAN.run_dir.includes('/run/') ? PLAN.run_dir.replace(/\/run\/[^/]+\/?$/, '') + '/*.md' : '(none)'
const PLN = PLAN.pln_file
// numbered progress groups (2.22.0): every agent is created under a phase whose title starts with a zero-padded number, so a UI that sorts groups
// alphabetically shows them in execution order. `PH` is the default group; a call that runs in parallel with others passes its own.
const pad = (n, w = 2) => String(n).padStart(w, '0')
// one group per task, numbered in execution order (levels, then lanes): 01 · task-001 · title; the agents of a task (task-, verify-, retry-, reverify-,
// commit-, and the lane marker, which carries the first task of its lane) are found by the task id their label ends with
const ALLTASKS = (PLAN.levels || []).flatMap((lv) => lv.flatMap((ln) => ln))
const NW = Math.max(2, String(ALLTASKS.length + 2).length)
const TPH = {}
ALLTASKS.forEach((t, i) => { TPH[t.id] = `${pad(i + 1, NW)} · ${t.id} · ${String(t.title || '').slice(0, 48)}` })
let PH = `${pad(0, NW)} · setup`
const ag = (prompt, o, ph) => {
  const hit = ph === undefined && o && o.label ? Object.keys(TPH).find((id) => o.label.endsWith('-' + id)) : null
  const p = ph !== undefined ? ph : hit ? TPH[hit] : PH
  return agent(prompt, p ? { ...o, phase: p } : o)
}
const results = []
const findings = []
// executor, verifier and retry pair of every task, and the Stage 11 pair, are resolved by the generator (profiles.py):
// the Delegation Policy's escalation on failure (one rung up; at the top of its range the Policy says inline in the session,
// which a leaf cannot do, so the nearest honest rung is the profile's strongest tier at high) is computed there.

function entryPrompt(text) {
  return (ROOT +
  `Append one dated line to the Log section of ${PRG} (use today's date from \`date +%F\`; add it after the last Log line, before "## Findings"; if the file does not exist create it with the frontmatter type: prg, run: ${PLAN.run}, status: active${PLAN.wave ? ', wave: ' + PLAN.wave : ''} and the headings "# Progress Log", "## Log", "## Findings", "## Lessons Learnt"). ` +
  `Write exactly this text after "- <date>: " and change nothing else in the file:\n\n${text}\n\nReturn the word done.${STAND_IN_NOTE}`)
}
// `extra` is plain text written after the JSON of the detail (a command read out of JSON text would show each backslash of its quoting doubled)
const stop = async (reason, detail, extra) => {
  await ag(entryPrompt(`implement workflow stopped, state blocked: ${reason} ` + JSON.stringify(detail) + (extra ? ` ${extra.text}` : '')), opt('bookkeeping', { label: 'prg-escalation' }))
  return { state: 'blocked', reason, detail, ...(extra ? { fix_command: extra.command } : {}), results, findings }
}
// the `fix-task` preview of a failed Stage 11: only when the failure names a file the command can take; never --apply (the operator reads the preview first).
// File and reason are agent text, so they go through shq; the generator and the run directory are the generator's own paths, in double quotes like laneCommand.
const fixTaskCommand = (f) => {
  if (!f || typeof f.file !== 'string' || !safePath(f.file)) return null
  const flat = (x) => String(x == null ? '' : x).replace(/\s+/g, ' ').trim()
  const item = flat(f.item), hint = flat(f.suggestion)
  const why = item && hint ? `${item}: ${hint}` : item
  if (!why) return null
  return `python3 "${PLAN.generator_script}" fix-task "${PLAN.run_dir}" --file ${shq(f.file)} --why ${shq(why)}`
}
const fixTaskText = (command) => `To fix: ${command} (a preview, it writes nothing, and it may refuse with exit 2: the file may be off limits, outside the run, or the test the trace points at rather than the file to change; after an --apply, regenerate the implement workflow and launch it again).`
// an agent that did not start: it says so (not_started), or it reports done false having touched no file and without calling the task unmeetable.
// The harness relays the launching session's last chat message ahead of the brief and ranks it above it (archicode wave 025), so such an agent
// may refuse without setting the flag; a retry of the same brief would meet the same refusal, so it goes to the operator, not to the escalation.
const didNotStart = (x) => !!x && !x.unmeetable && (!!x.not_started || (x.done === false && !(x.files_touched && x.files_touched.length)))
const list = (xs) => (xs && xs.length ? xs.map((x) => `  - ${x}`).join('\n') : '  (none stated)')

// options of a task's implementation agent: the pair the generator resolved for the task (executor or retry)
const implOpts = (t, label, pair) => ({ label, schema: IMPL_SCHEMA, agentType: t.agent_type, model: pair.model, effort: pair.effort })

// the tree identifier of Stage 11 (complete-run/SKILL.md owns the recipe and the line): the working tree as it stands, read through a temporary index so
// the real one is untouched, without the folder Stage 11 itself writes into afterwards (the wave's folder for a wave-owned run, else the run's own)
const TREE_FOLDER = PLAN.wave_dir || PLAN.run_dir
const TREE_REPOS = (PLAN.repos || []).filter((e) => e && e.path)
const TREE_MULTI = TREE_REPOS.length > 0 && !(TREE_REPOS.length === 1 && TREE_REPOS[0].path === '.')
// with a repos map the recipe runs once per listed repository (a change in any of them changes the identifier), the root one without the folder
// the pathspec that leaves the wave's folder out of one repository's tree: its path from that repository's root, nothing when the folder lives in another repository
const treeExclude = (e, folder) => { const f = String(folder).replace(/\/+$/, ''), p = e.path.replace(/\/+$/, ''); const rel = p === '.' ? f : (f.startsWith(p + '/') ? f.slice(p.length + 1) : ''); return rel ? ` ${shq(':(exclude)' + rel)}` : '' }
const TREE_ONE = (e) => `T=$(mktemp -d) && GIT_INDEX_FILE=$T/index git -C ${shq(e.path)} add -A -- .${treeExclude(e, TREE_FOLDER)} && echo ${e.name}=$(GIT_INDEX_FILE=$T/index git -C ${shq(e.path)} write-tree)`
const TREE_NOTE = TREE_MULTI ? ` The tree of this run is one hash per listed repository (${TREE_REPOS.map((e) => e.name).join(', ')}), written <name>=<40 hex> and joined by commas without spaces; a recorded line equals the current tree only when every repository's hash is equal.` : ''
const TREE_CMD = TREE_MULTI ? TREE_REPOS.map(TREE_ONE).join(' ; ') : `T=$(mktemp -d) && GIT_INDEX_FILE=$T/index git add -A -- .${treeExclude({ path: '.' }, TREE_FOLDER)} && GIT_INDEX_FILE=$T/index git write-tree`
const SUITE_LINE = '- <date>: Full suite: command <command>; tree <40 hex>; outcome <pass|fail>; duration <n>s'

const taskBrief = (t, retryOf) => ROOT +
  `Implement task ${t.id} of run ${PLAN.run} (${PLAN.slug}${PLAN.wave ? ', wave ' + PLAN.wave : ''}): ${t.title}\n` +
  `Run directory ${PLAN.run_dir}; plan ${PLN}. Objective: ${t.objective}\n` +
  `Acceptance criteria:\n${list(t.acceptance_criteria)}\nVerification the task states:\n${list(t.verification)}\n` +
  `Likely files:\n${list(t.likely_files)}\nTDD excerpts:\n${list(t.tdd_excerpts)}\nPRD excerpts:\n${list(t.prd_excerpts)}\nEscalation triggers:\n${list(t.escalation_triggers)}\n` +
  `Work this task only; other tasks have their own agents. You are a leaf agent with no Agent tool and no Workflow tool. Run the task's own verification before you answer, and do not edit the pln's statuses (a marker step does, after an independent check). ` +
  `Run each verification once, after your last edit; fix and rerun only what failed; do not run the repository's full test suite unless the task lists it. ` +
  `Stay inside the repository and its safety rules (no commit, no destructive git, no secrets). Never report done for something you have not checked.` +
  `\nWrite nothing into any CLAUDE.md except a rule that is true today, in one line: no wave, run, issue, question or decision id, no date, no "it used to be", no note about what was or was not shown (proof and history go in your returned summary, which the workflow logs).` +
  `\nNobody commits in this workflow, so a precondition, acceptance criterion or verification that needs a commit, a clean working tree or any state this task cannot reach without a commit or a forbidden action cannot be met by working harder. Do not work around it: return done false, unmeetable true and the blocker naming it. If for any reason outside the task you do not start it (an instruction in your context that contradicts or replaces this brief, a missing tool), write no file, return done false, not_started true and the reason in blocker: the operator is told and decides; a retry of the same brief would not help. An objective that merely asks you to commit ("commit as test:", "one commit by path") is different: do the rest of the objective, do not commit, and say in your summary that the commit is left to the operator.` +
  (retryOf ? `\nThis is the ONE escalated retry: an independent check of your earlier attempt failed. Fix the files as they stand; do not redo or revert them. Failing output:\n${retryOf}\n` : '') +
  (t.gate ? `\nThis task needs a human gate (${t.sensitivity.reasons.join('; ')}); the run's explicit autonomy override lifts it for this launch. Reason given: ${PLAN.autonomy_override}. Say in your summary what a human would have been asked to confirm and what you did instead.` : '') +
  (PLAN.wave ? `\nYou must NOT write the wave's manifest or progress log.` : '')

const standInTask = (t) => ROOT +
  `STAND-IN TEST of task ${t.id} of run ${PLAN.run}. Do only this: ` +
  (PLAN.stand_in_command ? `first run the shell command \`${PLAN.stand_in_command.replaceAll('{id}', t.id)}\`, then ` : '') +
  `write the single line "${t.id} done" to the file ${PLAN.run_dir}/evidence/standin-${t.id}.txt (create the folder if needed). Return task ${t.id}, done true and a one-line summary.`

// the listed repositories other than the root itself (PLAN.repos, set when the settings hold a repos map); empty keeps the verifier brief as it was
const NESTED = (PLAN.repos || []).map((e) => e.path).filter((p) => p && p !== '.')
const verifyBrief = (t, attempt, justCommitted) => ROOT + (
  PLAN.stand_in
    ? `STAND-IN TEST. Check that the file ${PLAN.run_dir}/evidence/standin-${t.id}.txt exists and holds "${t.id} done". Return task ${t.id}, passed (true if so), one check entry saying what you did. Edit nothing.`
    : `Independent verification of task ${t.id} of run ${PLAN.run} (attempt ${attempt}); you did not implement it and must not trust any report of it. Edit nothing.\n` +
      `Task: ${t.title}\nObjective: ${t.objective}\nAcceptance criteria:\n${list(t.acceptance_criteria)}\nVerification stated:\n${list(t.verification)}\nLikely files:\n${list(t.likely_files)}\n` +
      `Run every stated verification yourself and read the actual files against each acceptance criterion, not the implementer's words. Run each stated verification once and nothing broader (not the repository's full test suite unless the task lists it); you still run it yourself, the implementer's run does not count. One entry in checks per verification or criterion: what you ran or read (ran) and what happened (result). passed is true only if every one holds; otherwise put the failing output in failing_output. ` +
      `Compare \`git status --porcelain\` with the likely files and list changes outside them (other tasks' files, ${PLAN.run_dir} and the wave's own documents ${WAVE_DOCS} excepted) in outside_likely_files. ` +
      (NESTED.length ? `The repository holds nested repositories (${NESTED.join(', ')}): run \`git status --porcelain\` at the root and again inside each of them, and report every changed file of a nested repository with its repository path as prefix (${NESTED[0]}/src/x), in outside_likely_files and changed_files alike. ` : '') +
      `Also return changed_files: every path of that status that this task changed (its likely files, plus each outside_likely_files path with outside true), as repository-relative paths, leaving out anything git ignores and anything under target/. ` +
      `Nobody commits in this workflow: a check that needs a commit or a clean working tree cannot hold whatever the implementer does, so set unmeetable true, unmeetable_kind 'commit', passed false, and name the check in failing_output. If instead the checks cannot all hold because they contradict each other or a test that already exists (nothing a commit would change), set unmeetable true, unmeetable_kind 'contradiction', passed false, and name both sides in failing_output. A commit the task's objective asks for is not a criterion here: do not fail the task for its absence, check the rest and note in a check entry that the commit is left to the operator.` +
      (justCommitted ? `\nThis workflow has just committed this lane's files by path, so HEAD now holds them: a check that only needed that commit should hold now; judge it again from scratch.` : ''))

// only with PLAN.commit_tasks (--commit-tasks) and a run of a wave: the one place this workflow commits, once per lane, after the retries and
// only when a task is commit-unmeetable. A bookkeeping agent runs ONE script command and reports it; the script reads git for the file list,
// the paths below only narrow it (the run directory is always in scope) and no agent is given any other git command.
const laneCommand = (ids, paths, apply) => `python3 "${PLAN.generator_script}" commit-lane ${PLAN.wave_dir} --run ${PLAN.run_id} --label ${shq('tasks ' + ids.map((x) => String(x).replace(/[^A-Za-z0-9._-]/g, '')).join(', '))}` +
  (PLAN.commit_trailer ? ` --commit-trailer ${shq(PLAN.commit_trailer)}` : '') +
  paths.map((p) => ` --path ${shq(p)}`).join('') + (apply ? ' --apply --json' : ' --apply')
const commitLaneBrief = (ids, paths) => ROOT + ONE_TASK +
  `Commit the lane of tasks ${ids.join(', ')} of run ${PLAN.run} with one command; edit nothing yourself and run no other git command. The command writes the commit message, trailer included: do not amend, rewrite or add to it, and do not change a trailer to match your own session. Run exactly this from the repository root and report its result:\n` +
  laneCommand(ids, paths, true) + `\n` +
  `It prints a JSON object and exits 0 (committed, or nothing to commit) or 2 (refused, with a reason). Return the exit code of the command in exit, and from the JSON: committed, nothing, commit, files, reason, detail. If the exit code is not 0 and the JSON is missing, put its stderr in message.${STAND_IN_NOTE}`

// ONE marker per lane (wave 2.21.0): the pln is re-read and re-edited once for every task of the lane that passed its independent check
// (done) or failed it for good (blocked), instead of once per task; each task still gets its own status and its own `results:` line
const laneMarkerBrief = (marks) => ROOT + ONE_TASK +
  `Record the outcome of ${marks.length} task(s) of run ${PLAN.run} in ${PLN} with one command; edit nothing yourself and do not read the file. Run exactly this from the repository root and report its result:\n` +
  `python3 "${PLAN.generator_script}" mark ${PLN} --marks-json - <<'MARKS_JSON'\n` + JSON.stringify(marks.map((m) => ({ id: m.id, status: m.status, line: m.line }))) + `\nMARKS_JSON\n` +
  `Return the exit code of the command in exit and, if it is not 0, its stderr in message.${STAND_IN_NOTE}`
const MARK_SCHEMA = { type: 'object', properties: { exit: { type: 'integer' }, message: { type: 'string' } }, required: ['exit'] }

const startBrief = () => ROOT +
  `Start the implementation of run ${PLAN.run}: in ${PLN} set the \`status\` of the execution_manifest block to 'in_progress' unless it already reads 'done', and in ${PLAN.status_file} set the frontmatter \`status:\` to 'in-progress' unless it already reads 'completed'. Change nothing else. Return the word done.${STAND_IN_NOTE}`

// when a command fails, the agent reports it as one structured failure and repairs nothing: the fix is a task of the run (the operator's fix-task command)
const FAILURE_NOTE = `When a command of the Verification Plan, the full suite or check_run.py fails, return failure with command (as it was run), item (the first failing test, check or criterion, by name), file (repository-relative path the output points at; omit it when the output names none), line (an integer; omit it when unknown) and suggestion (one sentence on what a fix would change), taken from the failing output only: fill file and line from what the output shows, never guess. Report, do not repair: edit no file to fix a failure. Omit failure when no command failed.`
const finalBrief = () => ROOT +
  `Stage 11 of run ${PLAN.run} (${PLAN.slug}). Read the section "## Stage 11 — Verification" of ${PLAN.skill_file} and carry it out for this run: ${PLN} Verification Plan, every PRD acceptance criterion re-checked against the files, repository-wide checks, ` +
  `then the pln's execution_manifest status (done only if every criterion holds, otherwise blocked with the unmet criteria named), the run's status (completed or in-progress) and its prg, the backlog sweep, the canonical obligations. ` +
  `You are a leaf agent with no Agent tool; tasks were implemented and independently verified one by one by earlier agents (${PLAN.pending.length ? PLAN.pending.join(', ') : 'none this generation'}; already done: ${PLAN.done.join(', ') || 'none'}). ` +
  `Run the repository's full test suite ONCE, as Stage 11 says (step 1), and do not run it a second time in this stage: when the Verification Plan names a full-suite command, append one line to ${PRG} in the format ${SUITE_LINE}, its tree being the output of the recipe of Stage 11 (the git recipe over a temporary index, excluding ${TREE_FOLDER}) read after the suite ran; record outcome fail too.${TREE_NOTE} ` +
  `Run \`python3 "${PLAN.check_script}" --as-completed ${PLAN.run_dir}\` before you set completed. Return the statuses as read back from the files, the check's exit code and the item it names if not 0, and every unmet criterion. Append one Log line starting "- <date>: Stage 11" to ${PRG}. ` +
  `Stay inside the repository and its safety rules. Never report success you have not checked. ` + FAILURE_NOTE
const finalCheckBrief = () => ROOT + (
  PLAN.stand_in
    ? `STAND-IN TEST. Read ${PLAN.status_file} and ${PLN}; return run_status (frontmatter status), pln_status (execution_manifest status) and check_run_exit 0. Edit nothing.`
    : `Independent final check of run ${PLAN.run}; you did not do Stage 11. Edit nothing. Return run_status as read from ${PLAN.status_file}, pln_status as read from the execution_manifest block of ${PLN}, ` +
      `and run \`python3 "${PLAN.check_script}" --as-completed ${PLAN.run_dir}\` yourself: check_run_exit and, if not 0, check_run_named. List in unmet any task of the pln whose status is not done. ` +
      `Full test suite: when the Verification Plan names one, its green is needed. ${PRG} may hold the line Stage 11 recorded (${SUITE_LINE}). Compute the current tree with \`${TREE_CMD}\` (the folder ${TREE_FOLDER} is left out of the tree on purpose: a change to the documents in it never invalidates a green).${TREE_NOTE} ` +
      `Accept the recorded green for the same tree: cite its date, command and tree in place of a rerun. Rerun the suite yourself, once, when the tree differs from the recorded one, when the command is live (it calls a paid or remote service), networked, seeded (a random or clock seed) or known to be unstable, when the recorded outcome is not pass, or when no line is recorded; name a failing suite in unmet. ` + FAILURE_NOTE)

if (PLAN.pending.length === 0 && PLAN.blocked.length === 0 && PLAN.run_completed) {
  return { state: 'nothing-to-do', note: 'every task is done and the run is completed', results }
}
if (PLAN.blocked.length) return await stop('tasks blocked before start', PLAN.blocked)

// overrides of declared tiers, the human gate and the autonomy override are written to the run's prg before anything
// runs, so the log says what the generated file says (the same list is in the file's header comment)
const GATED = PLAN.gated || []
const OVERRIDES = PLAN.overrides || []
const overrideText = () => `implement workflow generated with cost profile ${PLAN.cost_profile}. ` +
  `Overrides of declared tiers (${OVERRIDES.length}): ${OVERRIDES.length ? OVERRIDES.join(' | ') : 'none'}. ` +
  `Human gate required for: ${GATED.length ? GATED.join(', ') : 'no task'}. ` +
  `Autonomy override: ${PLAN.autonomy_override ? 'carried by the launch, reason: ' + PLAN.autonomy_override : 'none'}.`
const awaiting = async (lane) => {
  const tasks = lane.filter((t) => t.gate).map((t) => ({ task: t.id, title: t.title, reasons: t.sensitivity.reasons }))
  await ag(entryPrompt(`implement workflow stopped, state awaiting-human: ${tasks.map((x) => x.task).join(', ')} need a human gate and no agent was given the task(s) ` +
    JSON.stringify(tasks) + `. Provide the validation yourself, or regenerate with --autonomy-override "<reason>" to lift the gate explicitly; tasks already done are dropped on regeneration.`), opt('bookkeeping', { label: 'prg-awaiting-human' }))
  return { state: 'awaiting-human', tasks, results, findings }
}
if (OVERRIDES.length || GATED.length || PLAN.autonomy_override) {
  const logged = await ag(entryPrompt(overrideText()), opt('bookkeeping', { label: 'prg-overrides' }))
  if (!logged) return await stop('overrides entry returned nothing', PLAN.run)
}

let started = null
for (const level of PLAN.levels) {
  for (const lane of level) {
    if (lane.some((t) => t.gate) && !PLAN.autonomy_override) return await awaiting(lane)
    if (!started) {
      started = await ag(startBrief(), opt('bookkeeping', { label: 'start' }))
      if (!started) return await stop('start step returned nothing', PLAN.run)
    }
    const impl = await parallel(lane.map((t) => () => PLAN.stand_in
      ? ag(standInTask(t), { label: `task-${t.id}`, schema: IMPL_SCHEMA, model: 'haiku', effort: 'low' })
      : ag(taskBrief(t), implOpts(t, `task-${t.id}`, t))))
    // with a lane commit available an implementer that calls its task unmeetable (it cannot make a commit-dependent check hold) is verified all the same:
    // the independent verifier confirms the claim before anything is committed, and only the verifier's word flags the task for the lane commit below
    const verifiable = (x) => !!x && !didNotStart(x) && (!x.unmeetable || (LANE_COMMIT && !!(x.files_touched && x.files_touched.length)))
    const ver = await parallel(lane.map((t, i) => () => verifiable(impl[i])
      ? ag(verifyBrief(t, 1), PLAN.stand_in
          ? { label: `verify-${t.id}`, schema: VERIFY_SCHEMA, model: 'haiku', effort: 'low' }
          : { label: `verify-${t.id}`, schema: VERIFY_SCHEMA, model: t.verify.model, effort: t.verify.effort })
      : null))
    const failed = []
    lane.forEach((t, i) => {
      if (!impl[i] || !impl[i].done || !ver[i] || !ver[i].passed) failed.push(i)
    })
    // one escalation rung (the pair is t.retry), then verify again; a hard_judgment task is already at the top and is retried as is.
    // A task whose check is commit-unmeetable is only flagged here: the lane is committed once, after every retry of the lane is over.
    const second = {}
    const flagged = []
    for (const i of failed) {
      const t = lane[i]
      if (didNotStart(impl[i])) {
        second[i] = { again: null, v2: null, effort: null, why: impl[i].blocker || impl[i].summary || 'task not started', notStarted: true }
        continue
      }
      if ((impl[i] && impl[i].unmeetable) || (ver[i] && ver[i].unmeetable)) {
        const why = (ver[i] && ver[i].failing_output) || (impl[i] && (impl[i].blocker || impl[i].summary)) || 'unmeetable check'
        if (LANE_COMMIT && impl[i] && (impl[i].done || impl[i].unmeetable) && ver[i] && ver[i].unmeetable && ver[i].unmeetable_kind !== 'contradiction') {
          second[i] = { again: null, v2: null, effort: null, why, flagged: true, unmeetable: true }
          flagged.push(i)
          continue
        }
        const named = (impl[i] && impl[i].unmeetable && (impl[i].blocker || impl[i].summary)) || (ver[i] && ver[i].failing_output) || 'unmeetable precondition'
        second[i] = { again: null, v2: null, effort: null, why: named, unmeetable: true, contradiction: !!(ver[i] && ver[i].unmeetable_kind === 'contradiction' && !(impl[i] && impl[i].unmeetable)) }
        continue
      }
      const why = !impl[i] ? 'implementation agent returned nothing' : !impl[i].done ? ('reported not done: ' + (impl[i].blocker || impl[i].summary)) : !ver[i] ? 'verification agent returned nothing' : (ver[i].failing_output || 'verification failed')
      const effort = t.retry.effort
      const again = PLAN.stand_in
        ? await ag(standInTask(t), { label: `retry-${t.id}`, schema: IMPL_SCHEMA, model: 'haiku', effort: 'low' })
        : await ag(taskBrief(t, why), implOpts(t, `retry-${t.id}`, t.retry))
      const v2 = again
        ? await ag(verifyBrief(t, 2), PLAN.stand_in
            ? { label: `reverify-${t.id}`, schema: VERIFY_SCHEMA, model: 'haiku', effort: 'low' }
            : { label: `reverify-${t.id}`, schema: VERIFY_SCHEMA, model: t.verify.model, effort: t.verify.effort })
        : null
      second[i] = { again, v2, effort, why }
    }
    // the paths a task contributes to the lane commit: what its verifier saw changed (git status), else its likely files; a path that could
    // break out of the command line is dropped and named in the entry
    const droppedPaths = []
    const pathsOf = (t, v) => {
      const raw = v && v.changed_files && v.changed_files.length ? v.changed_files.map((c) => c.path) : (t.likely_files || [])
      return raw.filter((x) => { if (safePath(x)) return true; droppedPaths.push(String(x)); return false })
    }
    const taskPassed = (i) => { const e = second[i]; return e ? !!(e.again && e.again.done && e.v2 && e.v2.passed) : true }
    // ONE commit of the lane, only when a task is flagged: the included tasks are those that passed and the flagged ones (a task blocked after its retry
    // contributes nothing, its partial files stay uncommitted); then only the flagged tasks are verified again
    let cl = null
    if (flagged.length) {
      const included = lane.map((t, i) => i).filter((i) => taskPassed(i) || (second[i] && second[i].flagged))
      const ids = included.map((i) => lane[i].id)
      const paths = [...new Set(included.flatMap((i) => pathsOf(lane[i], second[i] ? (second[i].flagged ? ver[i] : second[i].v2) : ver[i])))]
      // nothing to commit by path, or a commit agent that answers nothing: the lane is not committed and the flagged tasks wait with that reason
      if (!paths.length) cl = { exit: 3, committed: false, reason: 'no path to commit: no changed file seen and no likely file' }
      else cl = await ag(commitLaneBrief(ids, paths), opt('bookkeeping', { label: `commit-lane-${lane[0].id}`, schema: COMMIT_LANE_SCHEMA }))
      if (!cl) cl = { exit: -1, committed: false, reason: 'the lane commit agent returned nothing' }
      const committedOk = !!cl && cl.exit === 0
      if (committedOk) {
        const hash = cl.commit || null
        const again = await parallel(flagged.map((i) => () => ag(verifyBrief(lane[i], 2, true), { label: `reverify-${lane[i].id}`, schema: VERIFY_SCHEMA, model: lane[i].verify.model, effort: lane[i].verify.effort })))
        flagged.forEach((i, k) => {
          const v2 = again[k]
          second[i] = { again: { ...impl[i], done: true }, v2, effort: null, why: second[i].why, lane: true, hash, commit_exit: 0 }
        })
      } else if (cl) {
        flagged.forEach((i) => { second[i].commit_exit = cl.exit; second[i].commit_reason = cl.reason || cl.message || 'refused' })
      }
    }
    const bad = []
    const commitWait = []
    const operatorWait = []
    const marks = []
    for (let i = 0; i < lane.length; i++) {
      const t = lane[i]
      const esc = second[i]
      const passed = taskPassed(i)
      if (esc && esc.lane && esc.v2 && esc.v2.unmeetable) { esc.unmeetable = true; esc.why = esc.v2.failing_output || esc.why; esc.contradiction = esc.v2.unmeetable_kind === 'contradiction' }
      const v = esc && !esc.flagged ? esc.v2 : ver[i]
      results.push({ task: t.id, tier: t.tier, model: t.model, effort: t.effort, first_pass: !esc, escalated_to: esc ? esc.effort : null, verified: v })
      if (esc && esc.notStarted) {
        // the agent did not start (nothing written): no retry, the task stays pending and the operator decides
        operatorWait.push({ task: t.id, title: t.title, reason: esc.why })
        continue
      }
      if (!passed && esc.unmeetable && !esc.contradiction) {
        // not a failure of the task: its work is on disk and only a commit is missing (the lane commit was refused, or the check is still
        // unmeetable after it); it stays pending, so the next generation resumes it
        const files = (impl[i] && impl[i].files_touched && impl[i].files_touched.length ? impl[i].files_touched : t.likely_files) || []
        const outside = ((v && v.outside_likely_files) || (ver[i] && ver[i].outside_likely_files) || []).filter((f) => !files.includes(f))
        // what the verifier saw changed by this task, outside-declared paths marked; the implementer's own list is only the fallback
        const changed = (v && v.changed_files) || (ver[i] && ver[i].changed_files) || []
        commitWait.push({ task: t.id, title: t.title, files, outside_likely_files: outside, changed_files: changed, check: esc.why, committed_by_workflow: esc.hash || null, commit_exit: esc.commit_exit === undefined ? null : esc.commit_exit, reason: esc.commit_reason || null, paths: pathsOf(t, v) })
        continue
      }
      if (!passed) {
        bad.push(esc.contradiction ? `${t.id}: its checks contradict each other or an existing test, a commit changes nothing (${esc.why})` : esc.unmeetable ? `${t.id}: unmeetable, no retry (${esc.why})` : esc.lane ? `${t.id}: failed its check after the lane commit (${esc.why})` : `${t.id}: failed twice (${esc.why})`)
        marks.push({ id: t.id, status: 'blocked', line: esc.contradiction ? `tier ${t.tier}, effort ${t.effort}, its checks contradict each other or an existing test (a commit changes nothing), no retry: ${esc.why}` : esc.unmeetable ? `tier ${t.tier}, effort ${t.effort}, unmeetable precondition or check, no escalated retry (nothing commits in this workflow): ${esc.why}` : esc.lane ? `tier ${t.tier}, effort ${t.effort}, failed its check after the lane commit (${esc.hash || 'nothing to commit'}); blocked by the implement workflow: ${esc.why}` : `tier ${t.tier}, effort ${t.effort}, failed first check and the escalated retry (${eff(esc.effort)}); blocked by the implement workflow` })
        continue
      }
      const line = `tier ${t.tier}, model ${t.model}, effort ${t.effort}, profile ${PLAN.cost_profile}, ${esc ? (esc.lane ? 'passed after the lane commit (' + (esc.hash || 'nothing to commit') + ')' : 'passed after escalation to effort ' + eff(esc.effort)) : 'passed first time'}, inline (leaf), independently verified`
      marks.push({ id: t.id, status: 'done', line })
      if (v && v.outside_likely_files && v.outside_likely_files.length) findings.push({ task: t.id, outside_likely_files: v.outside_likely_files })
    }
    // the marker runs before any stop, so a task that passed is never lost; commit_exit and mark_exit are two separate values
    let markExit = null
    if (marks.length) {
      const marked = await ag(laneMarkerBrief(marks), opt('bookkeeping', { label: `mark-lane-${lane[0].id}`, schema: MARK_SCHEMA }))
      if (!marked) bad.push(`${marks.map((m) => m.id).join(', ')}: marker returned nothing`)
      else if (marked.exit !== 0) { markExit = marked.exit; bad.push(`${marks.map((m) => m.id).join(', ')}: mark command failed (mark_exit ${marked.exit}) ${marked.message || ''}`.trim()) }
    }
    if (bad.length) return await stop('task not verified', markExit === null ? bad : [...bad, { commit_exit: cl ? cl.exit : null, mark_exit: markExit }])
    if (operatorWait.length) {
      await ag(entryPrompt(`implement workflow stopped, state awaiting-operator: ${operatorWait.map((x) => x.task).join(', ')} not started by their agent, nothing written, the tasks stay pending. Read the reasons, fix the cause, then regenerate. ` + JSON.stringify(operatorWait)), opt('bookkeeping', { label: 'prg-awaiting-operator' }))
      return { state: 'awaiting-operator', tasks: operatorWait, results, findings }
    }
    if (commitWait.length) {
      const ids = commitWait.map((x) => x.task)
      const paths = [...new Set(commitWait.flatMap((x) => x.paths))]
      const command = PLAN.wave_dir && PLAN.run_id ? laneCommand(ids, paths, false) : null
      const tasks = commitWait.map(({ paths: _p, ...x }) => ({ ...x, commit_command: command, dropped_paths: droppedPaths }))
      const how = !LANE_COMMIT ? 'this workflow commits nothing here' : cl && cl.exit !== 0 ? `the lane commit was refused (commit_exit ${cl.exit}, reason ${cl.reason || cl.message || 'none stated'})` : 'the lane was committed by the workflow and the check still failed'
      await ag(entryPrompt(`implement workflow stopped, state awaiting-commit: ${ids.join(', ')} have a check that is unmeetable as the workflow runs it (the judgment of the independent check, not proof that a commit is missing); ${how}. For each task, committed_by_workflow is the hash of the lane commit or null. ` +
        (command ? `Run: ${command} then regenerate; the tasks are still pending. ` : `Commit the task files by path yourself, then regenerate; the tasks are still pending. `) + JSON.stringify(tasks)), opt('bookkeeping', { label: 'prg-awaiting-commit' }))
      return { state: 'awaiting-commit', tasks, results, findings }
    }
  }
}

PH = `${pad(ALLTASKS.length + 1, NW)} · stage 11`
const fin = await ag(PLAN.stand_in ? `STAND-IN TEST. Append the Log line "- <date>: Stage 11 stand-in" to ${PRG} (create it with a "## Log" heading if absent), set the frontmatter status of ${PLAN.status_file} to completed and the execution_manifest status of ${PLN} to 'done'. Return run_status, pln_status and check_run_exit 0 as read from the files.` : finalBrief(),
  PLAN.stand_in ? { label: 'stage-11', schema: FINAL_SCHEMA, model: 'haiku', effort: 'low' } : { label: 'stage-11', schema: FINAL_SCHEMA, model: PLAN.stage11.model, effort: PLAN.stage11.effort })
if (!fin) return await stop('stage 11 returned nothing', PLAN.run)
const chk = await ag(finalCheckBrief(), PLAN.stand_in ? { label: 'final-check', schema: FINAL_SCHEMA, model: 'haiku', effort: 'low' } : opt('verify-run', { label: 'final-check', schema: FINAL_SCHEMA }))
if (!chk) return await stop('final check returned nothing', PLAN.run)
results.push({ stage: 11, reported: fin, independent: chk })
if (!PLAN.stand_in && (chk.run_status !== 'completed' || chk.pln_status !== 'done' || chk.check_run_exit !== 0)) {
  const failure = chk.failure || fin.failure
  const fixCommand = fixTaskCommand(failure)
  return await stop('final check not clean', { run_status: chk.run_status, pln_status: chk.pln_status, check_run_exit: chk.check_run_exit, named: chk.check_run_named || '', unmet: chk.unmet || [],
    ...(failure ? { failure } : {}) }, fixCommand ? { command: fixCommand, text: fixTaskText(fixCommand) } : undefined)
}
return { state: 'done', run: PLAN.run, tasks: PLAN.pending, results, findings }
