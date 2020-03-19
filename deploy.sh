#!/bin/env bash
## 必须升级版本成功才会推到仓库上
npm version $1 && \
git push


