var shell = require('shelljs');
 

(async () => {
  
    
        //** Install Garden Builder */
        if (shell.test('-d', 'digitial-garden-builder')) {
            shell.rm('-rf', 'digitial-garden-builder');
    }
        return;
        shell.cp('-R', 'node_modules/@digital-garden-builder/client', 'digital-garden-builder');
        shell.exec('cd digitial-garden-builder/client && yarn')
       return
        /** Create Garden HTML */
        shell.echo( '!Making HTML and such out of the Garden!')
        shell.cp('client.env', 'digitial-garden-builder/client/.env');
        shell.cp('garden.json', 'digitial-garden-builder/client/garden.json');
        
        shell.exec('cd digitial-garden-builder/client && yarn build')
        shell.exec('cd digitial-garden-builder/client && yarn export')
        /** Copy out dir */
        shell.echo( '!Copying to output directory!')
        shell.cp( '-R', 'digitial-garden-builder/client/out', 'out')
    
})()