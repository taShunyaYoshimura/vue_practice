new Vue ({
    data:{
        a: 1,
        b: 2
    },
    created: function () {
        console.log('a is: ' + this.a)
    },
    created: function () {
        console.log('b is ' + this.b)
    }
})

new Vue ({
    data:{
        c: 3,
        d: 4
    },
    created: function () {
        console.log('c is: ' + this.c)
        console.log('d is: ' + this.d)
    }
})