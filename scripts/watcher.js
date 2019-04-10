const watch = require('node-watch');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const watchOptions = {
  recursive: true,
  filter: path => {
    if (path.indexOf('node_modules') > -1) {
      return false;
    }
    if (path.indexOf('scss') === -1) {
      return false;
    }
    return /.(?:scss)$/.test(path);
  }
};

let updating = false;

async function addToQueue(fileName) {
  if (updating) {
    return;
  }
  console.log(`saw change to ${fileName}`);
  updating = true;
  console.log('building styles');
  const execPromise = exec(
    `node scripts/sass-render/bin/sass-render.js -t sass-template.tmpl -s "${fileName}"`
  );
  try {
    const { stdout } = await execPromise;
    console.log(stdout);
  } catch ({ stdout, stderr }) {
    console.log(stdout);
    console.log('ERROR:', stderr);
  }
  console.log('watcher build complete!');
  updating = false;
}

watch('packages', watchOptions, function(_event, fileName) {
  addToQueue(fileName);
});

console.log('watcher started!');
