#!/usr/bin/env node

const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const sassRender = require('../index.js').sassRender;

const options = [
  {
    name: 'source',
    alias: 's',
    type: String,
    description: 'Template file to render sass into.',
    defaultOption: true,
  },
  {
    name: 'output',
    alias: 'o',
    type: String,
    description: 'Output file path',
  },
  {
    name: 'template',
    alias: 't',
    type: String,
    description: 'Template file to use, must use `<% content %>` as delimiter',
  },
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    description: 'Print this message.',
  },
];

const {source, output, template, help} = commandLineArgs(options);

function printUsage() {
  const sections = [
    {
      header: 'sass-render',
      content: 'Render sass into an element\'s lit template',
    },
    {
      header: 'Options',
      optionList: options,
    },
  ];
  console.log(commandLineUsage(sections));
}

if (help) {
  printUsage();
  process.exit(0);
}

if (!(source && template && output)) {
  console.error('Must provide a source, template, and output file!');
  printUsage();
  process.exit(-1);
}

sassRender(source, template, output).catch((err) => {
  console.error(err);
  process.exit(-1);
});
