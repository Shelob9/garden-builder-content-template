var shell = require('shelljs');
 

(async () => {
    /** */
    if (!shell.which('git')) {
        shell.echo('Sorry, this script requires git');
        shell.exit(1);
    } else {
        //** Install Garden Builder */
        if (shell.test('-d', 'digitial-garden-builder')) {
            shell.rm('-rf', 'digitial-garden-builder');
        }
        if (shell.exec('git clone --depth 1 git@github.com:Shelob9/digitial-garden-builder.git').code !== 0) {
            shell.echo('Error: Git checkout failed');
            shell.exit(1);
        }

        /** Create Garden HTML */
        shell.echo( '!Making HTML and such out of the Garden!')
        shell.cp('client.env', 'digitial-garden-builder/client/.env');
        shell.cp('garden.json', 'digitial-garden-builder/client/garden.json');
        shell.exec('cd digitial-garden-builder/client && yarn')
        shell.exec('cd digitial-garden-builder/client && yarn build')
        shell.exec('cd digitial-garden-builder/client && yarn export')
        /** Copy out dir */
        shell.echo( '!Copying to output directory!')
        shell.cp( '-R', 'digitial-garden-builder/client/out', 'out')
    }
})()