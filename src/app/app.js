import Vue from 'vue';

const App = Vue.component('app', {
	props: {
		message: String
	},
	render (h) {
    return <div id="foo">{this.message}</div>
  }
});

export default App;
