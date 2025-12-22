# Copilot Skills for plantuml-libs

This document describes the available skills that complement the agents and prompts for maintaining the plantuml-libs project.

## Available Skills

### 1. NPM Dependency Management
**File**: `skills/npm-dependency-management.skill.md`
**Level**: Intermediate
**Duration**: ~30 minutes

Learn to safely upgrade npm dependencies while maintaining code stability and security. Covers:
- Dependency types (direct, dev, transitive)
- Upgrade strategies (patch, minor, major)
- Validation and testing workflow
- Troubleshooting common issues
- Documentation best practices

**Key Outcomes**:
- ✓ Understand safe upgrade strategies
- ✓ Execute npm upgrades with confidence
- ✓ Validate changes thoroughly
- ✓ Handle failures effectively

---

### 2. AWS Package Upgrading
**File**: `skills/aws-package-upgrading.skill.md`
**Level**: Intermediate
**Duration**: ~45 minutes

Master the process of upgrading the AWS package with latest icons. Covers:
- AWS package structure and organization
- Upgrade workflow and ETL pattern
- Error handling and troubleshooting
- Documentation improvements
- Validation and testing

**Key Outcomes**:
- ✓ Follow AWS upgrade procedures
- ✓ Handle errors systematically
- ✓ Enhance documentation
- ✓ Validate icon integration

---

### 3. Azure Package Upgrading
**File**: `skills/azure-package-upgrading.skill.md`
**Level**: Intermediate
**Duration**: ~45 minutes

Develop expertise in upgrading the Azure package with latest Microsoft Azure icons. Covers:
- Azure package structure
- Icon categories and organization
- Upgrade process workflow
- Error handling strategies
- Quality assurance checklist

**Key Outcomes**:
- ✓ Execute Azure package upgrades
- ✓ Handle format compatibility issues
- ✓ Improve documentation
- ✓ Validate visual output

---

### 4. GCP Package Upgrading
**File**: `skills/gcp-package-upgrading.skill.md`
**Level**: Intermediate
**Duration**: ~45 minutes

Develop proficiency in upgrading the GCP package with latest Google Cloud icons. Covers:
- GCP package structure
- Google Cloud services categories
- Upgrade execution steps
- Error resolution strategy
- Quality assurance processes

**Key Outcomes**:
- ✓ Execute GCP package upgrades
- ✓ Handle service naming changes
- ✓ Enhance documentation
- ✓ Validate icon rendering

---

## Integration with Agents and Prompts

Each skill corresponds to an agent and prompt:

| Agent | Prompt | Skill |
|-------|--------|-------|
| npm-deps-upgrade.agent.md | upgrade-npm-deps.prompt.md | npm-dependency-management.skill.md |
| aws-package-upgrade.agent.md | upgrade-package-aws.prompt.md | aws-package-upgrading.skill.md |
| azure-package-upgrade.agent.md | upgrade-package-azure.prompt.md | azure-package-upgrading.skill.md |
| gcp-package-upgrade.agent.md | upgrade-package-gcp.prompt.md | gcp-package-upgrading.skill.md |

## How to Use Skills

### In GitHub Copilot Chat
1. Reference the skill using `@skill-name` syntax
2. Skill content is merged into chat context
3. Use knowledge to guide your work
4. Follow best practices outlined in the skill

### Workflow Example
1. **Learn**: Review the relevant skill to understand concepts
2. **Understand**: Use the agent for guidance on execution
3. **Execute**: Use the prompt as your task specification
4. **Reference**: Return to the skill for troubleshooting

## Skill Structure

Each skill includes:
- **Overview**: High-level introduction
- **Prerequisites**: What you should know before starting
- **Key Concepts**: Essential ideas and terminology
- **Practical Workflow**: Step-by-step instructions
- **Error Handling**: Common issues and solutions
- **Tools & Resources**: Required tools and documentation
- **Success Criteria**: How to know you've succeeded

## Continuous Learning

Skills are designed for:
- **New Team Members**: Get up to speed quickly
- **Knowledge Transfer**: Document expertise
- **Process Consistency**: Ensure standardized approaches
- **Best Practices**: Share proven techniques

---

Last Updated: December 22, 2025
