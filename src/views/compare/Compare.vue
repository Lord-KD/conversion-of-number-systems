<template>
  <div class="page">
    <Header></Header>
    <Crogress-bar :index="index"></Crogress-bar>
    <div class="content">
      <div class="main">
        <h2>谁比较大</h2>
        <div class="game-box">
          <div class="left">
            <div>
              <div class="title">{{topic.t1.q | toCH}}进制</div>
              <div class="num">{{topic.t1.value}}</div>
            </div>
            <div class="icon">
              <span class="iconfont iconbiaoqing2" @click="left"></span>
              <div class="desc">左边大</div>
            </div>
          </div>
          <div class="middle">
            <div class="compare-icon">?</div>
            <div class="icon">
              <span class="iconfont iconbiaoqing2" @click="mid"></span>
              <div class="desc">一样大</div>
            </div>
          </div>
          <div class="right">
            <div>
              <div class="title">{{topic.t2.q | toCH}}进制</div>
              <div class="num">{{topic.t2.value}}</div>
            </div>
            <div class="icon">
              <span class="iconfont iconbiaoqing2" @click="right"></span>
              <div class="desc">右边大</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import CrogressBar from "@/components/Crogress-bar";
  import axios from "axios";
  import anime from "animejs";

  export default {
    name: "Compare",
    data(){
      return{
        topics: [{
          t1: {q: null, value: null},
          t2: {q: null, value: null}
        }],
        index: 0,
        onceClick: true
      }
    },
    components: {
      Header,
      CrogressBar
    },
    mounted() {
      axios.get('/api/topics').then(res => {
        this.$store.state.topics = res.data
        this.topics = this.$store.state.topics
      })
    },
    methods: {
      nums: function () {
        let t1num = parseInt(this.topic.t1.value,this.topic.t1.q);
        let t2num = parseInt(this.topic.t2.value,this.topic.t2.q);
        return [t1num,t2num]
      },
      jump: function () {
        if (this.index < this.topics.length - 1)
          this.index ++
        else{
          this.$router.push('/result')
        }
      },
      left: function (e) {
        let el = e.target

        if (this.nums()[0] > this.nums()[1]) {
          this.$store.state.score++
          el.className = 'iconfont iconbiaoqing'
          anime({
            targets: el,
            scale: 2,
            duration: 800
          });
        }else {
          el.className = 'iconfont iconganga'
          anime({
            targets: el,
            scale: 2,
            duration: 800
          });
        }
        let me = this
        setTimeout(function () {
          el.className = 'iconfont iconbiaoqing2'
          anime({
            targets: el,
            scale: 1,
            duration: 300
          });
          me.jump()
        },800)
      },
      mid: function (e) {
        let el = e.target
        if (this.nums()[0] === this.nums()[1]) {
          this.$store.state.score++
          el.className = 'iconfont iconbiaoqing'
          anime({
            targets: el,
            scale: 2,
            duration: 800
          });
        }else {
          el.className = 'iconfont iconganga'
          anime({
            targets: el,
            scale: 2,
            duration: 800
          });
        }
        let me = this
        setTimeout(function () {
          el.className = 'iconfont iconbiaoqing2'
          anime({
            targets: el,
            scale: 1,
            duration: 300
          });
          me.jump()
        },800)
      },
      right: function (e) {
        if (this.onceClick) {
          this.onceClick = false
          let el = e.target
          if (this.nums()[0] < this.nums()[1]) {
            this.$store.state.score++
            el.className = 'iconfont iconbiaoqing'
            anime({
              targets: el,
              scale: 2,
              duration: 800
            });
          }else {
            el.className = 'iconfont iconganga'
            anime({
              targets: el,
              scale: 2,
              duration: 800
            });
          }
          let me = this
          setTimeout(function () {
            me.disabled = false
            el.className = 'iconfont iconbiaoqing2'
            anime({
              targets: el,
              scale: 1,
              duration: 300
            });
            me.jump()
            me.onceClick = true
          },800)
        }
      }
    }
    ,
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
    computed: {
      topic: function () {
        return this.topics[this.index]
      }
    }
  }
</script>

<style scoped lang="stylus">
  *
    box-sizing border-box
    margin 0
    padding 0

  html,body
    height 100%

  .page
    height 100%
    .content
      height 93%
      background-color #61E0F7
      padding-top 30px
      .main
        width 65%
        margin 0 auto
        background-color #fff
        height 85%
        border-radius 10px
        h2
          text-align center
          font-size 3em
          padding 30px 0
          color #FF7657
          font-weight normal
        .game-box
          display flex
          text-align center
          margin-top 30px
          padding 0 40px
          .left
            width 40%
            .iconbiaoqing2
              color #FFBA5A
            .iconbiaoqing
              color #FFBA5A
            .iconganga
              color #FFBA5A
          .middle
            width 20%
            .compare-icon
              padding-top 30px
              font-size 6em
              font-weight bold
              color #FF7657
              margin-bottom 25px
            .iconbiaoqing2
              color #665C84
            .iconbiaoqing
              color #665C84
            .iconganga
              color #665C84
          .right
            .iconbiaoqing2
              color #6FB2FF
            .iconbiaoqing
              color #6FB2FF
            .iconganga
              color #6FB2FF
            width 40%

  .title
    font-size 1.6em
  .num
    margin-top 20px
    font-size 4.4em
    margin-bottom 30px

  .iconfont
    display block
    font-size 4em
    cursor pointer
  .desc
    font-size 1.2em
    margin-top 10px

  .icon
    margin-top 80px
</style>
