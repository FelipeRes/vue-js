
var logo = Vue.extend({  
	template: "<!--<img src='img/logo.png' width = '100px' height ='100px'></img>-->\
	Roll Dice!"
})
Vue.component('logo', logo)
new Vue({  
	el: '#header'
})

Vue.component('dice', {
  template: '\
    <button v-on:click="value = Math.floor((Math.random() * 10) + 1) ">{{value}}</button>\
  ',
  data: function () {
  return {
    value: Math.floor((Math.random() * 10) + 1)
  }
}
})

var dice = new Vue({
  el: '#todo-list-example',
  data: {
    todos: [0]
  },
  methods: {
    addNewTodo: function () {
      this.todos.push(0);
    },
    removeNewTodo: function () {
      this.todos.shift();
    }
  }
})





