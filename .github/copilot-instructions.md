# GitHub Copilot Instructions for plantuml-libs

## Priority Guidelines

When generating code for this repository:

1. **Version Compatibility**: Respect TypeScript 5.0+, Node.js 22.7+, and all npm dependencies as specified in package.json
2. **Context Files**: Follow patterns and standards defined in the .github/copilot directory
3. **Codebase Patterns**: Scan existing code in the source directory for established patterns
4. **Architectural Consistency**: Maintain the monolithic package-based architecture with clear separation between generator and library concerns
5. **Code Quality**: Prioritize maintainability, testability, and security in all generated code

## Technology Stack

### Core Technologies
- **TypeScript**: 5.0.3
  - Strict mode enabled
  - ES2021 target
  - Node module resolution
  - ESM module format
  - allowSyntheticDefaultImports: true
- **Node.js**: 22.7.4
- **Build System**: npm scripts
- **Code Generation**: ts-node for runtime TypeScript execution

### Key Dependencies
- **CLI Framework**: yargs (command-line argument parsing)
- **File I/O**: fs-extra (promise-based file operations)
- **Utilities**: lodash, moment, glob
- **Parsing/Generation**: cheerio, csv-parse, html-minifier-terser, marked, yaml
- **Versioning**: standard-version (semantic versioning)

## Code Organization & Patterns

### Project Structure
```
source/
├── library/
│   ├── index.ts              # Main library factory and exports
│   └── packages/             # Individual package factories (AWS, Azure, C4, etc.)
│       └── {package-name}/
│           └── index.ts      # Package-specific factory
└── generator/
    ├── website/              # Website generation pipeline (ETL stages)
    │   ├── index.ts          # Entry point with yargs CLI
    │   ├── stage.ts          # Stage interface
    │   ├── extract.ts        # Extract stage
    │   ├── transform.ts      # Transform stage
    │   ├── load.ts           # Load stage
    │   ├── config.ts         # Configuration interface
    │   ├── resource.ts       # Resource types
    │   └── ...               # Supporting modules
    └── workdir/              # Work directory generation
```

### Two-Tier Architecture: Library and Generator

**Library** (source/library/):
- Implements factory pattern for each technology package (AWS, Azure, C4, etc.)
- Each factory generates raw PlantUML sprite and icon resources
- Packages are independently designed but share common patterns
- Run with: `npm run generate:workdir`

**Generator** (source/generator/):
- **workdir/**: Orchestrates library packages, produces `.workdir/` manifest
  - Aggregates all packages into a single `library.yaml` manifest
  - Copies supporting resources (templates, assets)
  - Used by: `npm run generate:workdir`
  
- **website/**: ETL pipeline for rendering documentation
  - **Extract**: Parses `.workdir/library.yaml` and asset manifests
  - **Transform**: Processes resources, generates Markdown documentation
  - **Load**: Writes distribution/* with PlantUML files and docs
  - Used by: Docker container (plantuml-generator image)
  - Validates structure with: `npm run generate:website`

The full build (scripts/generate-library.sh) chains: workdir → website → distribution/

### Architecture Patterns
- **Pipeline/ETL Pattern**: Website generation uses Extract → Transform → Load stages
- **Factory Pattern**: Each package implements a factory interface
- **Configuration-Driven**: Extensive use of yargs for CLI configuration
- **Promise-Based**: Async/await throughout; no callbacks
- **Stream-Based Processing**: Large data processing uses Node.js streams

### Naming Conventions
- **Class Names**: PascalCase (e.g., `ExtractStage`, `TransformStage`)
- **Interface Names**: PascalCase with optional `I` prefix not used (e.g., `Stage`, `Config`)
- **Variables**: camelCase for local variables and parameters
- **Constants**: UPPER_SNAKE_CASE (e.g., `PACKAGE_FACTORIES`)
- **Imports**: Use short aliases for common libraries
  - `import P from "path"` (path module)
  - `import Fe from "fs-extra"`
  - `import Fx from "fs-extra".promises`
  - `import U from "util"`

### Interface Patterns
- Define interfaces inline with implementations
- Use `readonly` for immutable properties
- Declare generic interfaces for reusable patterns (e.g., `Stage<I, O>`)
- Export interfaces alongside implementations

### Class Patterns
- Private constructor with static factory method: `static create(...): ClassName`
- Implement interfaces explicitly
- Constructor injection for dependencies
- Methods marked `async` return `Promise<T>`
- Use object destructuring in method signatures

Example:
```typescript
export class ExtractStage implements Stage<void, ExtractStageOutput> {
  constructor(readonly config: Config, readonly input: undefined) {}

  static create(config: Config): ExtractStage {
    return new ExtractStage(config, undefined)
  }

  async execute(): Promise<ExtractStageOutput> {
    // implementation
  }
}
```

### Import Organization
1. Standard library imports (path, util, stream)
2. External package imports (yargs, fs-extra, glob)
3. Local module imports (relative paths)
4. No blank lines between import groups (contrary to many style guides)

Example:
```typescript
import P from "path"
import yargs from "yargs"
import { ExtractStage } from "./extract"
import { TransformStage } from "./transform"
```

## Code Style & Formatting

### Prettier Configuration
- **No semicolons** (`semi: false`)
- **Double quotes** (`singleQuote: false`)
- Default line length: 80 characters

### TypeScript-Specific
- Use modern TypeScript features: never use `any` without explicit `@ts-expect-error`
- Use strict null checks (implicit from TypeScript 5.0)
- Prefer type inference where possible
- Use mapped types and conditional types for advanced patterns

### Error Handling
- Use try/catch for async operations
- Return `Promise<void>` or `Promise<T>` for async functions
- No custom error classes observed; use standard Error type
- Check file existence with `fs.existsSync()` before operations

### Logging
- Use `console.time()` and `console.timeEnd()` for performance measurements
- Use `console.log()` for informational output
- Follow patterns from library index.ts: `console.time("library generated")`

## Testing Approach

### Test Framework
- **Mocha**: ^11.7.5 for test runner
- **Assert**: Node.js built-in strict assertion module (`require("assert").strict`)

### Test Organization
- Test file pattern: `*.spec.js` or `*.spec.mjs`
- Location: `/test` directory
- Describe blocks: `describe("feature-name", () => { ... })`
- Test cases: `it("should do something", async function() { ... })`
- Use `this.timeout(milliseconds)` for long-running tests

### Testing Patterns
- Setup: `beforeEach()` hook for test preparation
- Assertions: `A.equal(expected, actual)` for equality
- File system: Cleanup temporary files in `beforeEach()`
- Async tests: Always use `async function` (not arrow functions) to access `this.timeout`
- Process execution: Use `cp.spawnSync()` with `stdio: "inherit"`

Example:
```javascript
describe("gdiag", () => {
  beforeEach(async function () {
    await cleanup()
  })

  it("should do something", async function () {
    this.timeout(100000)
    // test code
  })
})
```

### Test Fixtures
- Store test data in `/test/fixtures/` or `/test/`
- Use temporary directories (e.g., `.tmp/`) for test outputs
- Clean up after tests with `fs-extra.rm()`

## Project Goals & Conventions

### Project Goals
- Keep maintenance changes small, reviewable, and well-tested
- Prioritize code consistency over individual preferences
- Follow established patterns in the codebase

### Versioning
- **Scheme**: Semantic Versioning (MAJOR.MINOR.PATCH)
- **Current Version**: 17.0.0
- **Tool**: standard-version for automated releases
- **Conventions**: 
  - Use [Conventional Commits](https://www.conventionalcommits.org/) format: `<type>(<scope>): <description>`
  - Common types: `feat:` (new feature), `fix:` (bug fix), `refactor:` (code restructuring), `chore:` (maintenance), `docs:` (documentation), `test:` (test changes)
  - Optionally include scope in parentheses for clarity: `feat(aws): add new icon support`
  - Always include Co-authored-by trailer: `Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>`
  - Pre-release versions use `--prerelease alpha` flag

### NPM Package Details
- **Name**: @tmorin/plantuml-libs
- **Type**: Public npm package
- **CLI Entry Point**: `bin/gdiag.js`
- **License**: MIT

## Build, Test & Lint Commands

### Building
The library has a two-stage build process managed by Docker:

1. **Generate work directory** (TypeScript generators):
   ```bash
   npm run generate:workdir  # Generates .workdir/ with library manifest
   ```

2. **Generate distribution** (Docker-based):
   ```bash
   scripts/generate-library.sh  # Full build: workdir → distribution/
   ```

The full `scripts/generate-library.sh` requires Podman/Docker and the `plantuml-generator` image.

### Testing
```bash
npm test                    # Run all tests (Mocha)
npm test -- --grep "gdiag" # Run single test suite (pattern matching)
npm test -- test/gdiag.spec.js  # Run specific test file
```

### Linting
```bash
npm run lint               # Run ESLint on source/**/*.ts
```

### Code Generation (TypeScript validation)
```bash
npm run generate:website   # Validates generator/website stage logic
npm run generate:package   # Re-generates individual packages (rare)
```

### ESLint Configuration
- **Config**: eslint.config.mjs (flat config format)
- **Parser**: @typescript-eslint/parser
- **Extends**: eslint:recommended, plugin:@typescript-eslint/recommended
- **Target Files**: source/**/*.ts
- **Ignored**: bin/**, test/**, .workdir/**, distribution/**
- **Rules**: Follow @typescript-eslint recommended; no custom overrides

### Mocha Test Configuration
Mocha uses default configuration (no rc file). Tests:
- Run all `*.spec.js` and `*.spec.mjs` files in `/test` directory
- Use `this.timeout(milliseconds)` for long tests (default: 2000ms)
- AWS and Azure test files perform network requests (slow, unavoidable)

## Documentation Standards

### Code Comments
- Minimal comments; prefer self-documenting code
- Document non-obvious logic with inline comments
- Use TypeScript types as documentation (interfaces, generics)
- JSDoc comments follow TypeScript patterns

### File Documentation
- Top-level exports should include brief descriptions
- Complex algorithms should have explanatory comments
- Package factories should document the source package and version

Example:
```typescript
// Stage in the ETL pipeline for website generation
export interface Stage<I, O> {
  readonly config: Config
  readonly input: I

  execute(): Promise<O>
}
```

## General Best Practices

### When Adding New Code
1. **Scan existing code** for similar patterns before writing
2. **Respect version compatibility** - check package.json for exact versions
3. **Follow naming conventions** - match the style of surrounding code
4. **Use async/await** - never use callbacks or `.then()` chains
5. **Implement the Stage interface** for ETL pipeline components
6. **Write tests** in `/test` directory using Mocha + assert
7. **Run `npm run lint`** before committing
8. **Keep functions focused** - single responsibility principle
9. **Use static factory methods** for class instantiation
10. **Maintain immutability** - use `readonly` properties

### Performance Considerations
- Use Node.js streams for processing large files
- Leverage `Promise.all()` for parallel async operations
- Use glob patterns for efficient file discovery
- Consider memory impact when generating library manifests

### Security Considerations
- Validate input from yargs CLI arguments
- Use fs-extra for safe file operations (validates paths)
- Avoid shell execution; use child_process.spawnSync directly
- Keep dependencies up-to-date (npm audit)

### When in Doubt
- Look for similar code in the codebase and follow its patterns
- Prioritize consistency with existing code over external best practices
- Follow the established style even if you disagree
- Check the /test directory for usage examples
