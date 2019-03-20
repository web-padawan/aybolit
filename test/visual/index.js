import vrtest from 'vrtest/client';
import { fixtureSync, fixtureCleanup } from '@open-wc/testing-helpers';

// Get all the tests specifically written for preventing regressions.
const requireSuite = require.context('../../packages', true, /\.test\.js$/);

const tests = requireSuite.keys().reduce((res, path) => {
  const [suite, name] = path
    .replace('./', '')
    .replace('/tests', '')
    .replace('.test.js', '')
    .split('/');
  res.push({
    path,
    suite: `${suite}`,
    name,
    case: requireSuite(path).default
  });
  return res;
}, []);

let fixture;
let suite;

tests.forEach(test => {
  if (!suite || suite.name !== test.suite) {
    suite = vrtest.createSuite(test.suite);
  }

  suite.createTest(test.name, () => {
    if (fixture) {
      fixtureCleanup();
    }
    fixture = fixtureSync(test.case);
  });
});
