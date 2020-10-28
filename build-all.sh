#rm -Rf build
set -ex
npm run build:aws-20200430 -- $@
npm run build:aws-20200911 -- $@
npm run build:azure-v2 -- $@
npm run build:c4model -- $@
npm run build:eventstorming -- $@
npm run build:homecloud -- $@
npm run build:material-4.0 -- $@
