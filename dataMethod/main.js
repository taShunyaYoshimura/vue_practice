var data = { a : 1 }

var vm = new Vue({
    data:data,
    data: {
        newTodoText: '',
        visitCount: 0,
        hideCompletedTodos: false,
        todos: [],
        error: null
      }
})

vm.a == data.a

vm.a = 2
data.a

vm.a = 3
vm.a

vm.b = 'hi'

var obj = {
    foo: 'bar'
  }
  
  Object.freeze(obj)
  
  new Vue({
    el: '#app',
    data: obj
  })

  var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data
vm.$el === document.getElementById('example')

vm.$watch('a', function (newValue, oldValue) {
})