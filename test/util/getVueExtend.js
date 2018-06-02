import Vue from 'vue';

const getVueExtend = function(component, propsData) {
  const Constructor = Vue.extend(component);
  const vm = new Constructor({propsData}).$mount();
  return vm;
};

export {
  getVueExtend,
};
