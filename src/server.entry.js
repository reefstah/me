import {App} from './app';

export default function(context) {
  return new Promise((resolve, reject) => {
	  resolve(App);
  });
};
