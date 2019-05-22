<template>
  <div id="homepage">
    <div class="header">
      <div class="title">
        <h1 class="title_en">Binary conversion</h1>
        <h1 class="title_ch">进制转换</h1>
      </div>
      <div class="desc">
        <div>
          A website that can learn and practice binary conversions
        </div>
        <div>
          一个可以学习和练习进制转换的网站
        </div>
      </div>
    </div>
    <div class="container">
      <div class="btns">
        <button class="study"
                @click="TeachClicked"
                @mouseenter="up1"
                @mouseleave="down1">快速学习</button>
        <button class="game1"
                @click="CompareClicked"
                @mouseenter="up2"
                @mouseleave="down2">谁比较大</button>
        <button class="game2"
                @click="ConversionClicked"
                @mouseenter="up3"
                @mouseleave="down3">进制转换</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import anime from 'animejs'

export default {
  name: 'Home',
  data () {
    return {
    }
  }
  ,
  mounted() {
    anime({
      targets: '.header',
      translateY: [-400, 0],
      duration: 1000,
      easing: 'easeInOutExpo'
    });

    anime({
      targets: '.study',
      translateY: [-40, 0],
      duration: 1000,
      delay: 100
    });

    anime({
      targets: '.game1',
      translateY: [-40, 0],
      duration: 1000,
      delay: 200
    });

    anime({
      targets: '.game2',
      translateY: [-40, 0],
      duration: 1000,
      delay: 300
    });

  },
  methods: {
    up1: function () {
      anime({
        targets: '.study',
        easing: 'easeInOutQuad',
        scale: 1.2,
        duration: 150
      });

    },
    down1: function () {
      anime({
        targets: '.study',
        easing: 'easeInOutQuad',
        scale: 1,
        duration: 150,
      });
    },
    up2: function () {
      anime({
        targets: '.game1',
        easing: 'easeInOutQuad',
        scale: 1.2,
        duration: 150
      });

    },
    down2: function () {
      anime({
        targets: '.game1',
        easing: 'easeInOutQuad',
        scale: 1,
        duration: 150,
      });
    },
    up3: function () {
      anime({
        targets: '.game2',
        easing: 'easeInOutQuad',
        scale: 1.2,
        duration: 150
      });

    },
    down3: function () {
      anime({
        targets: '.game2',
        easing: 'easeInOutQuad',
        scale: 1,
        duration: 150,
      });
    },

    TeachClicked: function () {
      this.$router.push('/teach/toB')
    }
    ,
    CompareClicked: function () {
      this.$router.push('/compare')
    },
    ConversionClicked: function () {
      let me = this
      setTimeout(function () {
        me.$router.push('/conversion')
      }, 200);

    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  *
    margin 0
    padding 0
    box-sizing border-box
  #homepage
    display flex
    flex-direction column
    height 100%
    .header
      height 65%
      background-color: #FFBA5A
      text-align: center
      box-shadow: 0 4px 8px rgba(0,0,0,0.2)
      padding-top 160px
      .title_en
        font-size: 4.4em
      .title_ch
        font-size: 3em
        margin 15px 0 60px
      .desc div
        margin-top: 15px
    .container
      flex: 1
      text-align center
      .btns
        display flex
        justify-content space-between
        align-items center
        width 100%
        padding 0 25%
        height 300px
        position absolute
        bottom 0
        button
          width: 160px
          height: 85px
          border: none
          border-radius: 12px
          color: #fff
          font-size: 1.3em
          font-weight: normal
          box-shadow: 3px 2px 5px rgba(0,0,0,0.15)
        button:hover
          opacity: .7
          cursor: pointer
          transition: .3s
        .study
          background-color: #6FB2FF
        .game1
          background-color: #61E0F7
        .game2
          background-color: #FF806F
</style>
