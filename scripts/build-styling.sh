#!/usr/bin/env bash

set -e

node scripts/sass-render/bin/sass-render.js -t sass-template.tmpl -s 'packages/*/scss/*.scss'
