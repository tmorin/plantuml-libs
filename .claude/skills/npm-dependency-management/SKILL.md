---
title: NPM Dependency Management
description: Safely upgrade and manage Node/npm dependencies with lockfile consistency
keywords:
  - npm
  - dependencies
  - package management
  - security
  - upgrades
level: intermediate
estimated_time: 30
---

# NPM Dependency Management Skill

## Overview
Master the process of safely upgrading npm dependencies while maintaining code stability and security.

## Key Concepts

### Dependency Types
- **Direct Dependencies**: Packages listed in package.json that your project explicitly uses
- **Dev Dependencies**: Packages used only during development and testing
- **Transitive Dependencies**: Packages required by your direct dependencies

### Upgrade Strategies
- **Patch Updates** (1.0.0 → 1.0.1): Bug fixes, always safe
- **Minor Updates** (1.0.0 → 1.1.0): New features, backward compatible
- **Major Updates** (1.0.0 → 2.0.0): Breaking changes, requires careful review

## Practical Workflow

### 1. Audit Current Dependencies
```bash
# Inspect package.json and package-lock.json
# List outdated packages
npm outdated

# Check for security vulnerabilities
npm audit
```

### 2. Plan Safe Upgrades
- Start with patch/minor versions
- Reserve major upgrades for critical security fixes or necessary changes
- Consider ecosystem compatibility

### 3. Apply Upgrades
```bash
# Update package-lock.json consistently
npm install [package]@[version]
# Or for multiple packages
npm update [package1] [package2]
```

### 4. Validate Changes
```bash
# Clean install
npm ci

# Run tests
npm test

# Run generation if applicable
npm run generate:package c4nord
```

### 5. Troubleshoot Failures
- **Option A**: Revert the problematic dependency to a compatible version
- **Option B**: Implement minimal code changes to support the new version
- **Document**: Keep the scope tight and focused on dependency upgrades

### 6. Document Changes
Create a clear PR summary with:
- List of packages upgraded
- Reason for each upgrade (security, bugfix, maintenance)
- Verification results from tests and generation

## Common Pitfalls
- ❌ Upgrading multiple major versions at once
- ❌ Skipping test validation after upgrades
- ❌ Mixing dependency upgrades with unrelated code changes
- ✅ Do: Upgrade conservatively, test thoroughly, keep PRs focused

## Tools & Commands
- `npm outdated` - View outdated packages
- `npm audit` - Check security vulnerabilities
- `npm update` - Update packages safely
- `npm ci` - Clean install using lockfile
- `npm test` - Run test suite

## Success Criteria
✓ All tests pass after upgrades
✓ Package-lock.json updated consistently
✓ No unrelated code changes in PR
✓ PR summary clearly documents changes and rationale
