let cmp = { template: "<p>this is another local child component</p>" };
Vue.component("todo-footer", {
  template: "<p>this is another global child component</p>",
});
var app = new Vue({
  el: "#app",
  data: {
    message: "컴포넌트부모",
  },
  components: {
    "todo-list": cmp,
  },
});
