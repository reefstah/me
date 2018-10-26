import App from 'app/app';


const app = new Vue({
  render(h) {
	  return <App
	  		message="hello"
		  />;
  }
});

app.$mount('#app');
