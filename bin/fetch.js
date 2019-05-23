const path = require('path');
const { writeFileSync } = require('fs');
const { execSync } = require('child_process');
const { github } = require('./lib');

(async () => {
  const ghResult = await github().then(data => JSON.stringify(data, null, 2));
  writeFileSync(path.resolve(__dirname, '../assets/js/github.js'), `export default ${ghResult}`, 'utf-8');
  execSync('npm run lint');
})();
