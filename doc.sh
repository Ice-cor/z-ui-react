#!/bin/env bash
# 自动发版到github
yarn doc
git checkout gh-pages
doc/* ./
git add .
git commit -m "update"
git push
git checkout master


