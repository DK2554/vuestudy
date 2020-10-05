//컴포넌트를 등록한다
Vue.component("sibling-component", {
  props: ["propsdata"],
  template: "<p>{{propsdata}}</p>",
});
Vue.component("child-component", {
  props: ["propsdata"],
  template: "<p>{{propsdata}}</p>",
});
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    anotherMessage: "Hellow Vue! anotherMessage",
  },
});
