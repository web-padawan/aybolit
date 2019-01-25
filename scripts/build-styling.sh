#!/usr/bin/env bash

set -e

sassfiles=(`find packages -name "*.scss"`)

for sassfile in ${sassfiles[@]}; do
  # skip partials
  if [[ `basename ${sassfile}` =~ ^_ ]]; then
    continue
  fi
  cssjs=`echo ${sassfile} | sed -e 's/.scss/-css.js/'`
  echo "Generating ${cssjs}"
  node scripts/sass-render/bin/sass-render.js -t sass-template.tmpl -s ${sassfile} -o ${cssjs}
done
