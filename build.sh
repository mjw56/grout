#!/usr/bin/env bash

set -ev

rm -rf dist/
rm -rf dist-module/
mkdir dist/
mkdir dist-module/

cp index.html dist/

babel index.js \
  --out-file dist/index.js

babel src \
  --out-dir dist/src

webpack \
  --config webpack.dist.config.js