import { Config } from "./config"

export interface Stage<I, O> {
  readonly config: Config
  readonly input: I

  execute(): Promise<O>
}
