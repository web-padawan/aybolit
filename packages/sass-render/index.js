const fs = require('fs');
const path = require('path');
const util = require('util');

const sass = require('sass');
const nodeSassImport = require('node-sass-import');
const nodeSassTildeImporter = require('node-sass-tilde-importer');

const renderSass = util.promisify(sass.render);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const delimiter = /<%\s*content\s*%>/;

async function sassToCss(sassFile) {
  const result = await renderSass({
    file: sassFile,
    importer: [nodeSassTildeImporter, nodeSassImport],
    outputStyle: 'compressed'
  });
  return result.css.toString();
}

const templateFile = path.join(__dirname, './sass-template.tmpl');

async function sassRender(sourceFile) {
  const template = await readFile(templateFile, 'utf-8');
  const match = delimiter.exec(template);
  if (!match) {
    throw new Error(`Template file ${templateFile} did not contain template delimiters`);
  }
  console.log(`Processing ${sourceFile}`);
  const replacement = await sassToCss(sourceFile);
  const newContent = template.replace(delimiter, replacement);
  const outputFile = sourceFile.replace('.scss', '-css.js').replace('scss', 'src/styles');
  return writeFile(outputFile, newContent, 'utf-8');
}

exports.sassRender = sassRender;
