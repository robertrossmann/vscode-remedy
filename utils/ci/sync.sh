#!/bin/sh

set -o errexit

printf "\n=====>\tFetching new commits...\n"

# Ensure we are merging the release into current branch tips to avoid pushes being rejected
git fetch origin

printf "\n=====>\tMerging to master...\n"

git checkout master
git merge release

# Print the repo status after merging, for troubleshooting purposes
git status
git log --oneline HEAD~10..HEAD

printf "\n=====>\tPushing...\n"

git push origin master

printf "\n=====>\tCleaning up...\n"
git push origin :release
