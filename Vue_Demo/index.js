
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>This is a {{todo.text}}</li>'
})

var app = new Vue({
    el: "#app",
    data: {
        name: "melody",
        seen: true,
        nums: ["1", "2","3"], 
        todos: [
        { text: 'sun' },
        { text: 'moon' },
        ],
        groceryList: [
        { id: 0, text: 'box' },
        { id: 2, text: 'text' },
        { id: 3, text: 'doc' },
        ]
    },
    methods: {
        reverseMessage: function() {
            this.name = "melody happy"
        }
    }
})
app.name = "melody5417";
// app.seen = false;