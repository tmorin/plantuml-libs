---
title: Azure Package Upgrading
description: Upgrade Azure package with latest Microsoft Azure Icons following established procedures
keywords:
  - azure
  - package upgrade
  - icons
  - microsoft-azure
  - maintenance
level: intermediate
estimated_time: 45
---

# Azure Package Upgrading Skill

## Overview
Master the process of upgrading the Azure package with the latest Microsoft Azure Icons while maintaining consistency and handling errors effectively.

## Prerequisites
- Familiarity with the plantuml-libs repository structure
- Understanding of package management concepts
- Access to doc/howto.upgrade-azure-package.md
- Basic knowledge of Microsoft Azure services

## Key Concepts

### Azure Package Structure
- Contains PlantUML-compatible Microsoft Azure icons
- Regularly updated by Microsoft with new services and icons
- Follows consistent upgrade procedures for maintainability

### Icon Categories
- Computing resources
- Storage and databases
- Networking services
- Security and management tools
- Integration services

## Practical Workflow

### 1. Review Azure Upgrade Guide
```bash
# Read the official upgrade guide
cat doc/howto.upgrade-azure-package.md
```

### 2. Prepare for Upgrade
- Review the current package version
- Check Microsoft's latest icon release
- Plan for any breaking changes
- Set up clean work environment

### 3. Execute Upgrade Process
Follow the documented procedure:
- Fetch latest Microsoft Azure Icons
- Process icons for PlantUML compatibility
- Organize by service category
- Update package metadata
- Verify icon naming conventions

### 4. Handle Errors Systematically
When issues occur:
- Identify the error type and location
- Review documentation for known issues
- Implement targeted fixes
- **Enhance documentation**: Add troubleshooting steps for future upgrades

### 5. Validate the Upgrade
```bash
# Build the updated package
npm run build

# Test generation with Azure package
npm run generate:package azure

# Verify icon availability and accessibility
# Check visual output against expected results
```

### 6. Document Your Changes
Provide comprehensive summary:
- Azure version upgraded from/to
- New icons added
- Updated or deprecated icons
- Impact on existing diagrams
- Any migration guidance needed

## Error Handling Best Practices

### Common Challenges
- **Icon format incompatibility**: Ensure SVG/PNG conversion quality
- **Naming convention conflicts**: Maintain consistency with existing icons
- **Service metadata updates**: Keep service descriptions current
- **Import path changes**: Update references if structure changes

### Documentation Enhancement
When resolving errors:
- Add detailed troubleshooting section
- Include example fixes with context
- Document version-specific considerations
- Provide rollback instructions if needed

## Integration with CI/CD
- Test package in CI pipeline
- Verify generation artifacts
- Run visual regression tests if available
- Tag release with version update

## Tools & Resources
- Microsoft Azure Icons repository
- PlantUML icon format specifications
- Build and generation scripts
- Package testing utilities

## Success Criteria
✓ Latest Microsoft Azure icons integrated
✓ Package builds successfully
✓ Generation runs without errors
✓ Icons render correctly in diagrams
✓ Documentation reflects changes
✓ All tests pass
