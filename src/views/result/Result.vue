<template>
    <div class="result-page">
      <div class="main">
        <div class="score">{{accuracy | limitLength}}%</div>
        <div class="desc">
          <div class="ch">你的正确率为{{accuracy | limitLength}}%</div>
          <div class="en">Your correct rate is {{accuracy | limitLength}}%</div>
          <div class="tips">Tips：{{tips}}</div>
        </div>
        <div class="component">
          <button @click="goHome" class="go-home">回到首页</button>
          <button @click="again" class="again">再来一次</button>
        </div>
      </div>
      <div class="icons">
        <div class="share">
          <span class="iconfont iconwenhao"></span>
        </div>
        <div class="share">
          <span class="iconfont iconfenxiang"></span>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
      name: "Result",
      data: function () {
        return {
          correct: 0,
          count: 0,
          errors: []
        }
      },
      methods: {
        goHome: function () {
          this.$store.state.score = 0
          this.$store.state.errors = {
            b: 0,
            o: 0,
            d: 0,
            h: 0
          }
          this.$router.push('/')
        },
        again: function () {
          this.$store.state.score = 0
          this.$store.state.errors = {
            b: 0,
            o: 0,
            d: 0,
            h: 0
          }
          this.$router.push('/conversion')
        }
      },
      mounted() {
        this.correct = this.$store.state.score;
        this.errors = this.$store.state.errors
        // 使用queryString传值
        /*if (this.$route.query.score)
        this.correct = this.$route.query.score;*/
      }
      ,
      computed: {
        accuracy: function () {
          return this.correct / 12 * 100
        },
        // 根据错误题，来显示提示信息
        tips: function () {
          if (this.errors.b + this.errors.o + this.errors.d + this.errors.h === 12 ||
              this.errors.b + this.errors.o + this.errors.d + this.errors.h === 0)
            return '所有进制转换都需要加强'
          else if (this.errors.b >= this.errors.o &&
              this.errors.b >= this.errors.d &&
              this.errors.b >= this.errors.h)
            return '在二进制转换方面还需要加强'
          else if (this.errors.o >= this.errors.b &&
              this.errors.o >= this.errors.d &&
              this.errors.o >= this.errors.h){
            return '在八进制转换方面还需要加强'
          }
          else if (this.errors.d > this.errors.b &&
              this.errors.d >= this.errors.o &&
              this.errors.d >= this.errors.h){
            return '在十进制转换方面还需要加强'
          }
          else if (this.errors.h >= this.errors.b &&
              this.errors.h >= this.errors.d &&
              this.errors.h >= this.errors.o){
            return '在十六进制转换方面还需要加强'
          }
        }
      },
      filters: {
        // 百分数取整数
        limitLength: function (val) {
          return val.toFixed(0)
        }
      }
    }

</script>

<style scoped lang="stylus">

  .result-page
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #FCF9ED;
    .main
      text-align: center;
      margin: 120px auto 0;
      .score
        color: #fff;
        line-height: 200px;
        font-size: 3.2em;
        width: 200px;
        height: 200px;
        background-color: #FFBA5A;
        border-radius: 50%;
        margin: 0 auto;
      .desc
        .ch
          font-size: 1.8em;
          margin-top: 50px;
        .en
          margin-top: 10px;
          font-size: 1.1em;
        .tips
          margin-top 15px
          font-size 1.2em

      .component
        margin-top: 80px;
        button
          width: 180px;
          height: 70px;
          border-radius: 35px;
          font-size: 1.3em;
          margin: 0 30px;
        button:hover
          opacity: .5;
          cursor: pointer;
          transition: 300ms;
        .go-home
          background-color: #6FB2FF;
          border: none;
          color: #fff;
        .again
          background-color: #fff;
          border: 4px solid #6FB2FF;
    .icons
      position absolute
      top 60px
      right 100px
      div
        margin-bottom 30px
        text-align center
        span
          font-size 1.8em
          color #FF7657
          cursor pointer
        .iconwenhao
          font-size 2.4em
</style>
