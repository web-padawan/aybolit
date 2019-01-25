const watch = require('node-watch');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const watchOptions = {
  recursive: true,
  filter: (path) => {
    if (path.indexOf('node_modules') > -1) {
      return false;
    }
    if (path.indexOf('styles') === -1) {
      return false;
    }
    return /.(?:scss)$/.test(path);
  },
};

watch('packages', watchOptions, function(_event, fileName) {
  addToQueue(fileName);
});

let updating = false;

async function addToQueue(fileName) {
  if (updating) {
    return;
  }
  console.log(`saw change to ${fileName}`);
  updating = true;
  console.log('building styles');
  const execPromise = exec('npm run build');
  try {
    const {stdout} = await execPromise;
    console.log(stdout);
  } catch ({stdout, stderr}) {
    console.log(stdout);
    console.log('ERROR:', stderr);
  }
  console.log('watcher build complete!');
  updating = false;
}

console.log('watcher started!');
