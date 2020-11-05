#!/usr/bin/env bash

eval "$(curl -q -s https://raw.githubusercontent.com/coryb/osht/master/osht.sh)"

rm -Rf .gdiag test/wd1/*.png test/wd2/*.png test/wd3/*.png

RUNS bin/gdiag.js -c --wd test
GREP "clean directory (test)"
GREP "never ran previously"
GREP "parse directory (test)"
GREP "process source (wd1/src1.puml)"
GREP "process source (wd1/src2.puml)"
GREP "process source (wd2/src1.puml)"
GREP "warn: Command failed: java -jar .gdiag/plantuml-"

RUNS stat test/wd1/src1-diag1.png
RUNS stat test/wd1/src2-diag1.png
RUNS stat test/wd2/src1-diag1.png
RUNS stat test/wd2/src1-diag2.png

RUNS touch test/wd1/src1.puml

RUNS bin/gdiag.js --wd test
GREP "ran previously on"
GREP "parse directory (test)"
GREP "process source (wd1/src1.puml)"
NGREP "process source (wd1/src2.puml)"
NGREP "process source (wd2/src1.puml)"
NGREP "process source (wd3/src1.puml)"

RUNS bin/gdiag.js -c --wd test/wd2
GREP "clean directory (test/wd2)"
GREP "delete (test/wd2/src1-diag1.png)"
GREP "delete (test/wd2/src1-diag2.png)"
GREP "never ran previously"
GREP "parse directory (test/wd2)"
GREP "process source (src1.puml)"

RUNS stat test/wd1/src1-diag1.png
RUNS stat test/wd1/src2-diag1.png
RUNS stat test/wd2/src1-diag1.png
RUNS stat test/wd2/src1-diag2.png
RUNS stat test/wd3/src1-local.png
RUNS stat test/wd3/src1-remote.png
