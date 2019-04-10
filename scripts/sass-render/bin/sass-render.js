#!/usr/bin/env node

const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const glob = require('glob');
const { sassRender } = require('../index.js');

const options = [
  {
    name: 'source',
    alias: 's',
    type: String,
    description: 'Template file to render sass into.',
    defaultOption: true
  },
  {
    name: 'template',
    alias: 't',
    type: String,
    description: 'Template file to use, must use `<% content %>` as delimiter'
  },
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    description: 'Print this message.'
  }
];

const { source, template, help } = commandLineArgs(options);

function printUsage() {
  const sections = [
    {
      header: 'sass-render',
      content: "Render sass into an element's lit template"
    },
    {
      header: 'Options',
      optionList: options
    }
  ];
  console.log(commandLineUsage(sections));
}

if (help) {
  printUsage();
  process.exit(0);
}

if (!(source && template)) {
  console.error('Must provide a source and template!');
  printUsage();
  process.exit(-1);
}

glob(source, (err, files) => {
  files.forEach(file => {
    sassRender(file, template).catch(error => {
      console.error(error);
      process.exit(-1);
    });
  });
});
