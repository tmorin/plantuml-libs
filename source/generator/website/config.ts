export interface Config {
  inputDirectories: Array<string>
  skipPatterns: Array<string>
  outputDirectory: string
  tracking: {
    gTagId: string
  }
  library: {
    name: string
    github: string
    version: string
  }
}
