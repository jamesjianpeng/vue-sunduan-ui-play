
import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import SunduanUI from 'vue-sunduan-ui';

console.log(SunduanUI);
Vue.use(SunduanUI);

const createAppId = function() {
  const scriptTag = document.body.lastChild;
  const app = document.createElement('div');
  app.id = 'app';
  document.body.insertBefore(app, scriptTag);
  return '#' + app.id;
};

new Vue({
  router,
  el: createAppId(),
  render: (h) => h(App),
});
