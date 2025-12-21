---
description: Upgrade Node/npm dependencies safely (lockfile included)
---

You are acting as a maintenance agent for this repository.

Goal:
- Upgrade npm dependencies safely.
- Keep the PR focused on dependency upgrades only.

Steps:
1) Inspect package.json and package-lock.json. Identify outdated direct dependencies and devDependencies.
2) Prefer safe upgrades:
  - patch/minor upgrades first
  - major upgrades only if necessary and low-risk
3) Apply upgrades using npm in a way that updates package-lock.json consistently.
4) Run:
  - npm ci
  - npm test (or the closest available check)
  - npm run generate:package c4nord (if it is impacted).
5) If something breaks, either:
  - pin back the problematic dependency, or
  - include the minimal code change required (but keep scope tight)
6) Produce a PR summary including:
  - what changed (key packages)
  - why (security/bugfix/maintenance)
  - how verified (commands + results)
