#!/usr/bin/env sh

set -e

npm run build

cd src/vue

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:AdeptOfficial/Healthy-Food-web.git master:gh-pages

cd -
