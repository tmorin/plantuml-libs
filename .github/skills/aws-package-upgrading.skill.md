---
title: AWS Package Upgrading
description: Upgrade AWS icons package to the latest version following established procedures
keywords:
  - aws
  - package upgrade
  - icons
  - aws-icons
  - maintenance
level: intermediate
estimated_time: 45
---

# AWS Package Upgrading Skill

## Overview
Learn to upgrade the AWS package with the latest AWS icons while following documented procedures and handling errors effectively.

## Prerequisites
- Familiarity with the plantuml-libs repository structure
- Understanding of package management concepts
- Access to doc/howto.upgrade-aws-package.md

## Key Concepts

### AWS Package Structure
- Contains PlantUML-compatible AWS icons
- Regularly updated by AWS with new services and icons
- Requires specific upgrade procedures for consistency

### Upgrade Process
The upgrade follows a documented ETL-like pattern:
1. **Prepare**: Set up environment and backup
2. **Fetch**: Download latest AWS icons
3. **Transform**: Convert to PlantUML format
4. **Integrate**: Merge into package structure
5. **Validate**: Test and verify output
6. **Document**: Update changelogs and documentation

## Practical Workflow

### 1. Review Upgrade Documentation
```bash
# Read the official upgrade guide
cat doc/howto.upgrade-aws-package.md
```

### 2. Execute Upgrade Steps
Follow the documented procedure step-by-step:
- Set up work directory
- Download latest AWS icon pack
- Extract and process files
- Convert icons to PlantUML format
- Update package manifests

### 3. Handle Errors
When encountering issues:
- Analyze the root cause
- Consult the documentation for known issues
- Implement fixes as needed
- **Improve documentation**: Document the issue and solution for future reference

### 4. Validate Results
```bash
# Build the package
npm run build

# Test generation
npm run generate:package aws

# Verify icons are accessible
# Check visual output in generated artifacts
```

### 5. Document Changes
Provide summary including:
- Version upgraded from/to
- Number of new/updated icons
- Any breaking changes
- Known issues or limitations

## Error Handling Strategies

### Common Issues
- **Icon conversion failures**: Check format compatibility
- **Missing dependencies**: Review doc for required tools
- **Version conflicts**: Verify compatibility with current PlantUML version

### Documentation Improvements
When fixing errors:
- Add troubleshooting section to howto guide
- Document version-specific issues
- Include workarounds for known problems

## Tools & Resources
- AWS Icons repository (source)
- PlantUML icon format specs
- Build scripts in package.json
- Existing AWS package as reference

## Success Criteria
✓ Latest AWS icons available in package
✓ Package builds without errors
✓ Generation runs successfully
✓ All visual tests pass
✓ Documentation updated with any new procedures
