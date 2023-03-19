#!/usr/bin/env bash

pushd . > /dev/null
SCRIPT_PATH="${BASH_SOURCE[0]}";
if [ -h "$SCRIPT_PATH" ]; then
  while [ -h "$SCRIPT_PATH" ] ; do cd "$(dirname "$SCRIPT_PATH")"; SCRIPT_PATH=$(readlink "$SCRIPT_PATH"); done
fi
cd "$(dirname "$SCRIPT_PATH")" > /dev/null
SCRIPT_PATH="$(pwd)";
popd  > /dev/null

REPOSITORY_PATH="$SCRIPT_PATH/..";

set -ex

mkdir -p "$REPOSITORY_PATH/.workdir" "$REPOSITORY_PATH/distribution"

cd "$REPOSITORY_PATH" && npm run generate:workdir

podman run --rm \
  --userns=keep-id \
  -v "$REPOSITORY_PATH/.workdir:/workdir:z,U" \
  -v "$REPOSITORY_PATH/distribution:/distribution:z,U"  \
  docker.io/thibaultmorin/plantuml-generator:1 \
  plantuml-generator library generate library.yaml \
  -O=/distribution
