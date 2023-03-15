const fs = require('fs');
const path = require('path');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const entryFiles = fs
.readdirSync(resolveApp('src/entries'))
.filter(fileName => /\.js$/.test(fileName));

const entries = entryFiles.reduce((result, fileName) => {
    const key = fileName.replace('.js', '');
    return {
        ...result,
        [key]: resolveApp(`src/entries/${fileName}`),
    };
}, {});

console.log({entries})

module.exports = {
    entries,
    entriesNames: Object.keys(entries),
};
