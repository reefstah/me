const {createBundleRenderer} = require('vue-server-renderer');

const template = require('fs').readFileSync('./src/index.template.html', 'utf-8');
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');


const renderer = createBundleRenderer(serverBundle, {
	template,
	clientManifest
});

renderer.renderToString()
	.then(html => console.log(html))
	.catch(e => console.error(e));
