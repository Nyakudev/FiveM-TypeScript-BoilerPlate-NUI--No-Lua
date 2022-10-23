const {resolve} = require('path')
const buildPath = resolve(__dirname, 'build')

const {build} = require('esbuild')

build({
    entryPoints: ['./client/commands.ts', './client/ui.ts', './server/server.ts'],
    outdir: resolve(buildPath, 'js'),
    bundle: true,
    minify: true,
    platform: 'browser',
    target: 'es2020',
    logLevel: 'info',
    watch: true
}).catch(() => process.exit(1))