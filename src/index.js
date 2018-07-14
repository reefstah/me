import Vue from 'vue';
import fetch from 'isomorphic-fetch';


// Step 1: Create a Vue instance
const app = new Vue({
  render(h) {
	  return <App
	  		message="good bye"
		  />;
  }
});

// Step 2: Create a renderer
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('src/index.template.html', 'utf-8'),
});

// Step 3: Render the Vue instance to HTML
renderer
  .renderToString(app)
  .then(html => {
    console.log(html);
  })
  .catch(err => {
    console.error(err);
  });
