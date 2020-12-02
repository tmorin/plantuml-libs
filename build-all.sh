#rm -Rf build
set -ex
node bin/glib.js --pn aws-20200430 $@
node bin/glib.js --pn aws-20200911 $@
node bin/glib.js --pn azure-v2 $@
node bin/glib.js --pn c4model $@
node bin/glib.js --pn eventstorming $@
node bin/glib.js --pn fontawesome-5.15 $@
node bin/glib.js --pn homecloud $@
node bin/glib.js --pn material-4.0 $@
