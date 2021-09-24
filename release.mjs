#!/usr/bin/env zx

await $`npm run build`;

const lsFiles = await $`git ls-files -m`;

if (lsFiles.stdout) {
  await $`git add .`;
  await $`git commit -m 'chore: build'`;
  await $`git push`;
}

let semver = await question('选择语义化版本类型: ', {
  choices: ['patch', 'minor', 'major'],
});

await $`npm version ${semver}`;
await $`npm publish`;
await $`git push`;
await $`git push --tags`;
