const path = require('path')
const fs = require('fs')

// const outDir = bundler.options.outDir;
const whiteList = [
  '.eslintrc.json',
  '.git',
  '.cache',
  '.gitignore',
  '.vscode',
  'README.md',
  'src',
  'package.json',
  'package-lock.json',
  'node_modules',
]

try {
  if (fs.statSync('./').isDirectory()) {
    const files = fs.readdirSync('./')
    files.forEach(file => {


      if (whiteList.includes(file)) {
        return
      }

      console.log(file)
      // const filePath = `${outDir}/${file}`;
      fs.unlinkSync(`./${file}`)
    })
  }
}
catch (err) {
  console.log(err)
}