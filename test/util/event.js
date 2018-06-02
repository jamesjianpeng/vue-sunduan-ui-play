const clickEvent = function(vm) {
  const clickEvent = new window.Event('click');
  vm.$el.dispatchEvent(clickEvent);
  vm._watcher.run();
};

export {
  clickEvent,
};
