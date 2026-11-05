import fs from 'node:fs'
const file = '.codex-refactor.mjs'
const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/)
for (let index = 0; index < lines.length; index++) {
  if (lines[index].includes('const post = blogPosts.find')) lines[index] = " const post = blogPosts.find((item) => path === '/' + item.slug + '/')"
}
fs.writeFileSync(file, lines.join('\n'), 'utf8')
