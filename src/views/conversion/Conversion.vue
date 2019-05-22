<template>
    <div id="conversionPage">
      <Header></Header>
      <CrogressBar :index="index"></CrogressBar>
      <div class="left">
        <div class="title">
          {{question.q | toCH}}进制
        </div>
        <div class="main">
          {{question.value}}
        </div>
        <div class="buttons">
          <button :class="bounce" @click="show_answer">答案</button>
          <div class="answer animated fadeIn" v-if="answer_bool">{{question.answer}}</div>
        </div>
      </div>
      <div class="right">
        <div class="title">
          {{question.c | toCH}}进制
        </div>
        <div class="main">
          <div class="input-div">
            <input v-model="convert_num" type="text" placeholder="请输入相应进制">
            <button @click="open_tips">{{tip_text}}</button>
          </div>
          <div class="tip" v-show="tip_bool">
            <span v-for="(item,index) in input_nums" :class="red_or_green(item,index)">{{item}}</span>
          </div>
        </div>
        <div class="buttons">
          <button @click="submit">提交</button>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '@/components/Header'
  import CrogressBar from '@/components/Crogress-bar'
  import anime from "animejs";
  import axios from "axios";

    export default {
      name: "Conversion",
      data: function () {
        return{
          index: 0,
          bounce: '',
          questions: [{
            q:null,
            c:null,
            value:null,
            answer:null
          }],
          convert_num: null,
          tip_text: '开启提示',
          tip_bool: false,
          answer_bool: false
        }
      },
      components: {
        Header,
        CrogressBar
      },
      methods: {
        // 提示字符输入正确与否，正确为绿色，不正确为红色
        red_or_green: function (item,index) {

          // item为input输入的每个字符
          let answer_nums = this.question.answer.split('');
          if (index < answer_nums.length && answer_nums[index] === item){
            return 'green'
          }
          return 'red'
        },
        // 提交按钮
        submit: function () {
          // 如果答对，进行加分
          if (this.convert_num === this.question.answer){
            this.$store.state.score ++;
          }else {
            // 如果答错，将题目index记录下来
            this.$store.commit('setErrors', this.questions[this.index].q)
          }

          if (this.index < this.questions.length - 1){
            // 没打完题，index自增
            let me = this;
            me.index ++;
            me.answer_bool = false
            me.convert_num = ''
          }else {
            // 答完题，跳到结束页
            let me = this;
            me.$router.push('/result');
          }
        },
        open_tips: function () {
          // 提示按钮开关
          this.tip_bool = !this.tip_bool;
          if (this.tip_bool){
            this.tip_text = '关闭提示'
          }else {
            this.tip_text = '开启提示'
          }
        },
        show_answer: function () {
          // 答案按钮开关
          this.answer_bool = !this.answer_bool;
          if (this.answer_bool)
            this.bounce = 'animated bounce';
          else
            this.bounce = '';
        }
      },
      computed: {
        question: function () {
          return this.questions[this.index]
        },
        input_nums: function () {
          if (this.convert_num !== null)
            return this.convert_num.split('');
          return []
        }
      },
      filters: {
        // 把数字转换成对应的中文数字
        toCH: function (val) {
          if (val === 2)
            return '二';
          else if (val === 8)
            return '八';
          else if (val === 10)
            return '十';
          else if (val === 16)
            return '十六';
        }
      },
      mounted() {
        // 使用axios获取问题数据
        axios.get('/api/questions').then(res => {
          //把questions数据存储到vuex中
          this.$store.state.questions = res.data
          this.questions = this.$store.state.questions
          // 正确答案
          // 先将所给的任意进制转为十进制，再将十进制转为任意进制
          for (let i = 0; i < this.questions.length; i++) {
              let decimalism = parseInt(this.questions[i].value,this.questions[i].q);
              // 将正确答案存到对应题目的answer中
              this.questions[i].answer = decimalism.toString(this.questions[i].c);
          }
        })
      }
    }
</script>

<style scoped lang="stylus">
  *
    box-sizing border-box
  .green
    color green
  .red
    color red

  .left, .right
    text-align center
    position absolute
    top 50px
    bottom 0

  .title
    margin-top 150px
    font-size 2em
  .main
    height 40%

  .answer
    font-size 4em
    color #fff

  .left
    left 0
    right 50%
    float left
    background-color #FF806F
    .title
      color #fff
    .main
      font-size 7em
      color #fff
      padding-top 40px
    button
      background-color #FFBA5A

  .right
    left 50%
    right 0
    float right
    background-color #FCF9ED
    .main
      box-sizing border-box
      padding-top 40px
      input
        vertical-align middle
        font-size 1.2em
        border none
        width 50%
        height 50px
        box-shadow 2px 3px 8px rgba(0,0,0,0.07)
        border-radius 6px 0 0 6px
        padding-left 10px
      input::placeholder
        font-size 1em
        color #999
      button
        vertical-align middle
        font-size 1.1em
        width 100px
        height 50px
        border 0
        border-radius 0 6px 6px 0
        box-shadow 2px 3px 8px rgba(0,0,0,0.07)
        color #fff
        background-color #FFBA5A
      .tip
        padding-top 30px
        font-size 2em
    .buttons
      button
        background-color #61E0F7


  .buttons button
    width 140px
    height 70px
    border none
    border-radius 8px
    font-size 1.6em
    color #fff


</style>
