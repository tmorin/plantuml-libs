# GitHub Copilot Agents for plantuml-libs

This document describes the available GitHub Copilot agents that can assist with development tasks in the plantuml-libs project.

## Available Agents

### 1. TypeScript MCP Server Development
- **Collection**: TypeScript MCP Server Development
- **Primary Agent**: typescript-mcp-expert
- **Use Case**: Building Model Context Protocol (MCP) servers in TypeScript/Node.js
- **Relevant Skills**: 
  - TypeScript best practices
  - MCP SDK integration
  - Node.js server development
  - Async/await patterns
- **How to Use**: When building server-side components or integrations requiring MCP protocol support
- **Install**: Available via awesome-copilot collections

### 2. Frontend Web Development
- **Collection**: Frontend Web Development
- **Primary Agents**: 
  - expert-react-frontend-engineer
  - electron-angular-native
- **Use Case**: Building UI components, frontend libraries, and web interfaces
- **Relevant Skills**:
  - React/Angular/Vue development
  - TypeScript for frontend
  - CSS frameworks and styling
  - Component design patterns
- **How to Use**: When implementing website generation features or UI-related functionality
- **Install**: Available via awesome-copilot collections

### 3. Testing & Test Automation
- **Collection**: Testing & Test Automation
- **Primary Agents**:
  - tdd-red
  - tdd-green
  - tdd-refactor
  - playwright-tester
- **Use Case**: Writing unit tests, integration tests, and end-to-end testing
- **Relevant Skills**:
  - Mocha and assertion testing
  - Test-driven development (TDD)
  - Playwright for e2e testing
  - Test coverage optimization
- **How to Use**: When implementing new features or refactoring existing code with tests
- **Install**: Available via awesome-copilot collections

### 4. Project Planning & Management
- **Collection**: Project Planning & Management
- **Primary Agents**:
  - task-planner
  - task-researcher
  - implementation-plan
  - prd
- **Use Case**: Breaking down features, planning implementation, managing tasks
- **Relevant Skills**:
  - Feature breakdown and decomposition
  - Implementation planning
  - Task organization
  - Requirements analysis
- **How to Use**: When planning new features or organizing development work
- **Install**: Available via awesome-copilot collections

### 5. Security & Code Quality
- **Collection**: Security & Code Quality
- **Relevant Instructions**:
  - security-and-owasp
  - a11y (accessibility)
  - performance-optimization
  - object-calisthenics
- **Use Case**: Code security reviews, accessibility compliance, performance optimization
- **Relevant Skills**:
  - OWASP security best practices
  - Web accessibility (WCAG)
  - Performance optimization patterns
  - Code quality metrics
- **How to Use**: When conducting code reviews or optimizing performance-critical sections
- **Install**: Available via awesome-copilot collections

## Recommended Development Workflows

### 1. Feature Implementation Workflow
1. Use **task-planner** agent to break down the feature
2. Use **implementation-plan** agent to create detailed implementation plan
3. Use **tdd-red** agent to write failing tests first
4. Use **tdd-green** agent to implement the feature
5. Use **tdd-refactor** agent to optimize and refactor
6. Use **se-security-reviewer** to review for security implications

### 2. Library Package Extension Workflow
1. Use **task-researcher** to understand requirements
2. Use **expert-react-frontend-engineer** (if UI needed) or **typescript-mcp-expert** (if backend)
3. Use **tdd-red/green/refactor** cycle for implementation
4. Use **playwright-tester** for integration testing
5. Use **se-system-architecture-reviewer** to validate design

### 3. Website Generation Enhancement Workflow
1. Use **task-planner** to outline changes
2. Use **frontend-web-dev** agents for UI/styling changes
3. Use **tdd-green** for generator logic implementation
4. Use **performance-optimization** instructions for ETL stages
5. Use **security-and-owasp** instructions for data handling

## Integration with plantuml-libs Patterns

When using these agents, keep in mind:

- **Architecture Pattern**: The project uses Pipeline/ETL (Extract → Transform → Load) for website generation
- **Factory Pattern**: Each package implements a factory interface
- **Testing**: Tests use Mocha with Node.js assert module
- **Code Style**: 
  - TypeScript 5.0+ with strict mode
  - No semicolons
  - Double quotes
  - 80-character line length preference
- **Versioning**: Semantic versioning with semantic commits

## Getting Started

1. Open GitHub Copilot Chat in your IDE
2. Reference the relevant agent using `@` symbol
3. Provide context about your task (file paths, requirements, etc.)
4. Follow the agent's guidance and suggestions
5. Iterate and refine based on feedback

## Additional Resources

- **Project Instructions**: See `.github/copilot-instructions.md` for detailed development guidelines
- **Prompts**: Custom prompts available in `.github/prompts/`
- **Contributing**: See `CONTRIBUTING.md` for project contribution guidelines

---

Last Updated: December 22, 2025
