const fs = require('fs');

const commitTemplate = fs.readFileSync('commit-template.hbs').toString();

module.exports = {
  hooks: {
    'before:init': 'npm run build && git add lib/ lib-esm/',
    'after:bump': 'npm install',
  },
  git: {
    commitMessage: 'chore(release): version ${version}',
    tagName: '${version}',
    requireCleanWorkingDir: false,
  },
  plugins: {
    '@release-it/bumper': {
      out: 'package.json',
    },
    '@release-it/conventional-changelog': {
      writerOpts: {
        commitPartial: commitTemplate,
      },
      infile: 'CHANGELOG.md',
      preset: {
        name: 'conventionalcommits',
        types: [
          { type: 'feat', section: 'Features' },
          { type: 'fix', section: 'Bug Fixes' },
          { type: 'chore', hidden: true },
          { type: 'docs', hidden: true },
          { type: 'style', hidden: true },
          { type: 'refactor', hidden: true },
          { type: 'perf', hidden: true },
          { type: 'test', hidden: true },
          { type: 'build', hidden: true },
          { type: 'ci', hidden: true },
          { type: 'test', hidden: true },
          { type: 'revert', hidden: true },
        ],
      },
      ignoreRecommendedBump: true,
    },
  },
  npm: false,
};
