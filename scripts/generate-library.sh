#!/usr/bin/env bash

sync
uid=$(id "$USER" -u)
gid=$(id "$USER" -g)

sudo chown -R "$uid":"$gid" .workdir distribution

docker run --rm \
  -v "$(pwd)/.workdir:/workdir" \
  -v "$(pwd)/distribution:/distribution" \
  thibaultmorin/plantuml-generator:feat-generate-library plantuml-generator \
  --log-level Debug \
  library generate library.yaml \
  -c=All -O=/distribution

sync

sudo chown -R "$uid":"$gid" .workdir distribution
