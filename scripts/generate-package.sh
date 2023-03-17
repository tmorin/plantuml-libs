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

sync

uid=$(id "$USER" -u)
gid=$(id "$USER" -g)

mkdir -p "$REPOSITORY_PATH/.workdir" "$REPOSITORY_PATH/distribution"
sudo chown -R "$uid":"$gid" "$REPOSITORY_PATH/.workdir" "$REPOSITORY_PATH/distribution"

cd "$REPOSITORY_PATH" && npm run generate:workdir -- -p "$1"

sync

podman run --rm \
  -v "$REPOSITORY_PATH/.workdir:/workdir" \
  -v "$REPOSITORY_PATH/distribution:/distribution" \
  docker.io/thibaultmorin/plantuml-generator:1 \
  plantuml-generator library generate library.yaml \
  --urn="$1" --clean-urn="$1" -O=/distribution

sync

sudo chown -R "$uid":"$gid" "$REPOSITORY_PATH/.workdir" "$REPOSITORY_PATH/distribution"
