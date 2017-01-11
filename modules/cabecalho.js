var logo = Vue.extend({  
	template: "<img src='img/logo.png' width = '100px' height ='100px'></img>"
})
var dice = Vue.extend({  
	template: "<img src='img/dice.png' width = '100px' height ='130px'></img>"
})

var body = new Vue({
		el: '#body',
		data: {
			numberOfDices: 3
		}
	})
var results = new Vue({
	el: '#results',
	data: {
		list: []
	}
})

var submit = new Vue({
	el: '#submit',
	data: {
		value: 'Hello Vue.js!'
	},
	methods: {
		rollDices: function () {
			for (var i = 0; i <= 10; i++) {
				submit.value = "llll";
				this.value.concat("<img src='img/dice.png' width = '100px' height ='130px'></img>");
				console.log(value);
			}	
		}
	}
})

Vue.component('logo', logo)
new Vue({  
	el: '#header'
})

Vue.component('dice', dice)
new Vue({  
	el: '#results'
})




