import Vue from 'vue';
import fetch from 'isomorphic-fetch';


var message = 'hello';

// Step 1: Create a Vue instance

const app = new Vue({
    render (h) {
        return <div>{message}</div>
    }
});

// Step 2: Create a renderer
const renderer = require('vue-server-renderer').createRenderer();


// Step 3: Render the Vue instance to HTML
renderer.renderToString(app).then(html => {
    console.log(html)
}).catch(err => {
    console.error(err)
});
