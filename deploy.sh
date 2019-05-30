#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m '文档'

git push -f git@github.com:UvDream/blog-vuepress.git master:gh-pages

cd -