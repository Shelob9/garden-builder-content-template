var shell = require('shelljs');
 
function git(cmd,errorMessage) {
        if (shell.exec(cmd).code !== 0) {
                shell.echo(errorMessage);
                shell.exit(1);
            }     
}
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
            git(
                    'git clone --depth 1 git@github.com:Shelob9/digitial-garden-builder.git',
                    'Error: Git checkout failed'
            )
        

        /** Create Garden HTML */
        shell.echo( '!Making HTML and such out of the Garden!')
        shell.cp('client.env', 'digitial-garden-builder/client/.env');
        shell.cp('garden.json', 'digitial-garden-builder/client/garden.json');
        shell.exec('cd digitial-garden-builder/client && yarn')
        shell.exec('cd digitial-garden-builder/client && yarn build')
        shell.exec('cd digitial-garden-builder/client && yarn export')
        /** Copy out dir */
        shell.echo( '!Copying to output directory!')
        shell.cp('-R', 'digitial-garden-builder/client/out', 'docs');
        /** Switch to gh-pages branch, commit and push */
            git(
                'git checkout gh-pages',
                'Error: Checking out gh-pages branch'
            )
            git(
                //-a adds all to commit
                'git commit -am "Commit HTML"',
                'Error: committing build'
            )
            git(
                'git push -u origin gh-pages',
                'Error: push failed'
        )
            

    }
})()