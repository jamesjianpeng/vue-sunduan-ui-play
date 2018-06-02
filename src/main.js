
import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';

// Vue.config.productionTip = false;
// Vue.config.productionTip = process.env.NODE_ENV !== 'production';

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
