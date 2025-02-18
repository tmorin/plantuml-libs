import { AwsQ22024Factory } from "./packages/aws-q2-2024"
import { AzureV17Factory } from "./packages/azure-19"
import { C4modelFactory } from "./packages/c4model"
import { C4nordFactory } from "./packages/c4nord"
import { C4K8sFactory } from "./packages/c4k8s"
import {
  DefaultPackageContext,
  LibraryFactory,
} from "../generator/workdir/factories"
import { DomainstorytellingFactory } from "./packages/domainstorytelling"
import { Eip1Factory } from "./packages/eip-1"
import { EventstormingFactory } from "./packages/eventstorming"
import { Fontawesome6Factory } from "./packages/fontawesome-6"
import { GcpFactory } from "./packages/gcp"
import { Homecloud2Factory } from "./packages/homecloud-2"
import { Library, Package } from "../generator/workdir/manifest"
import { Material4Factory } from "./packages/material-4"
import { Simpleicons14Factory } from "./packages/simpleicons-14"

const PACKAGE_FACTORIES = [
  new AwsQ22024Factory(),
  new AzureV17Factory(),
  new C4modelFactory(),
  new C4nordFactory(),
  new C4K8sFactory(),
  new DomainstorytellingFactory(),
  new Eip1Factory(),
  new EventstormingFactory(),
  new Fontawesome6Factory(),
  new GcpFactory(),
  new Homecloud2Factory(),
  new Material4Factory(),
  new Simpleicons14Factory(),
]

export const PACKAGES = PACKAGE_FACTORIES.map((d) => d.getUrn())

async function emptyModule(urn: string): Promise<Package> {
  return Promise.resolve({
    urn,
    modules: [],
    examples: [],
  })
}

const create: LibraryFactory = async (context): Promise<Library> => {
  console.time("library generated")
  const packages: Array<Package> = await Promise.all(
    PACKAGE_FACTORIES.map((packageFactory) => {
      if (context.packages.indexOf(packageFactory.getUrn()) >= 0) {
        const packageContext = new DefaultPackageContext(
          context,
          packageFactory.getUrn(),
        )
        packageContext.info("process the package", packageFactory.getUrn())
        const timerLabel = `package processed`
        packageContext.time(timerLabel)
        if (context.cleanPkgTmpDir) {
          packageContext.doCleanPackageTmpDirectory()
        }
        return packageFactory.create(packageContext).finally(() => {
          packageContext.timeEnd(timerLabel)
        })
      }
      return emptyModule(packageFactory.getUrn())
    }),
  )
  console.timeEnd("library generated")
  return {
    name: "tmorin/plantuml-libs",
    remote_url:
      "https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution",
    packages,
    tera_discovery_pattern: "source/templates/**/*",
  }
}
export default create
