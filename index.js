var shell = require('shelljs');
 

(async () => {
    if (!shell.which('git')) {
        shell.echo('Sorry, this script requires git');
        shell.exit(1);
    } else {
        shell.exec( 'yarn')
      }
})()