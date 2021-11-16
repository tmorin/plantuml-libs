import {DefaultPackageContext, LibraryFactory} from "../../workdir-generator/factories";
import {Library, Package} from "../../workdir-generator/manifest";
import {Eip1Factory} from "./packages/eip-1";
import {Aws20210131Factory} from "./packages/aws-20210131";
import {Aws20210730Factory} from "./packages/aws-20210730";
import {AwsQ32021Factory} from "./packages/aws-q3-2021";
import {AzureV2Factory} from "./packages/azure-4";
import {Fontawesome5Factory} from "./packages/fontawesome-5";
import {C4modelFactory} from "./packages/c4model";
import {C4nordFactory} from "./packages/c4nord";
import {DomainstorytellingFactory} from "./packages/domainstorytelling";
import {GcpFactory} from "./packages/gcp";
import {EventstormingFactory} from "./packages/eventstorming";
import {Material4Factory} from "./packages/material-4";
import {Simpleicons5Factory} from "./packages/simpleicons-5";
import {Homecloud2Factory} from "./packages/homecloud-2";

const PACKAGE_FACTORIES = [
    new Aws20210131Factory(),
    new Aws20210730Factory(),
    new AwsQ32021Factory(),
    new AzureV2Factory(),
    new C4modelFactory(),
    new C4nordFactory(),
    new DomainstorytellingFactory(),
    new Eip1Factory(),
    new EventstormingFactory(),
    new Fontawesome5Factory(),
    new GcpFactory(),
    new Homecloud2Factory(),
    new Material4Factory(),
    new Simpleicons5Factory(),
];

export const PACKAGES = PACKAGE_FACTORIES.map(d => d.getUrn());

async function emptyModule(urn): Promise<Package> {
    return new Promise(r => r({
        urn,
        modules: [],
        examples: [],
    }))
}

const create: LibraryFactory = async (context): Promise<Library> => {
    console.time("library generated")
    const packages: Array<Package> = await Promise.all(
        PACKAGE_FACTORIES.map(packageFactory => {
            if (context.packages.indexOf(packageFactory.getUrn()) >= 0) {
                const packageContext = new DefaultPackageContext(context, packageFactory.getUrn());
                packageContext.info("process the package", packageFactory.getUrn());
                const timerLabel = `package processed`;
                packageContext.time(timerLabel);
                if (context.cleanPkgTmpDir) {
                    packageContext.doCleanPackageTmpDirectory();
                }
                return packageFactory.create(packageContext).finally(() => {
                    packageContext.timeEnd(timerLabel);
                });
            }
            return emptyModule(packageFactory.getUrn());
        })
    );
    console.timeEnd("library generated")
    return {
        name: "tmorin/plantuml-libs",
        remote_url: "https://github.com/tmorin/plantuml-libs/distribution",
        packages,
        tera_discovery_pattern: "source/templates/**/*"
    }
}

export default create;
