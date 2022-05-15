const { exec } = require('child_process');

const messages = [
  'initial commit',
  'update readme.md',
  'update',
  'first commit',
  'dummy',
  'updated readme',
  'create readme.md',
  'fix',
  'cleanup',
  'test',
  'typo',
  'wip',
  'bump version',
  'updates',
];

const randomMessage = messages[Math.floor(Math.random() * messages.length)];
exec(`git commit -m "${randomMessage}" --allow-empty`);
