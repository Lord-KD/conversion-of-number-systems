let app = new Vue({
    el: '#app',
    data: {
        my_input : null,
        is_true: false,
        result: false,
        is_answer: false,
        numD: null,
        numB: null,
        input_nums : []
    },
    computed: {
        randomNumD: function () {
            return this.numD = Math.ceil(Math.random()*10)
        },
        randomNumB: function () {
            return this.numB = this.numD.toString(2)
        }
    },
    methods:{
        submitted: function () {
            this.result = true;

            if (this.my_input !== null) {
                console.log(this.my_input)
                this.input_nums = this.my_input.split('');
            }

            if (this.my_input === this.numB){
                this.is_true = true
            }else {
                this.is_true = false
            }

        },
        reload: function () {
            location.reload()
        },
        answer: function () {
            this.is_answer = !this.is_answer
        },
        red_or_green: function (item,index) {
            answer_nums = this.numB.split('');

            if (index < answer_nums.length && answer_nums[index] === item){
                return 'green'
            }
            return 'red'
        }
    }
});
