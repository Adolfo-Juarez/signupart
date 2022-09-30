#!/usr/bin/env sh

set -e
npm run build
cd dist
echo > .nojekyll

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:Adolfo-Juarez/signupart.git main:gh-pages