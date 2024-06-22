const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const sourceDir = path.join(__dirname, 'assets');
const destDir = path.join(__dirname, 'dist/assets');

fse.copy(sourceDir, destDir, (err) => {
    if (err) {
        console.error('Error copying assets:', err);
    } else {
        console.log('Assets copied successfully!');
    }
});
