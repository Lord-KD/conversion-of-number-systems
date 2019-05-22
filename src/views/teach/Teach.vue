<template>
  <div class="page">
    <Header class="Header"></Header>
    <div class="content">
      <div class="left">
        <div class="buttons">
          <router-link class="btn" to="/teach/toB">转二进制</router-link>
          <router-link class="btn" to="/teach/toD">转十进制</router-link>
          <router-link class="btn" to="/teach/else">其他进制转换</router-link>
        </div>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header/'

  export default {
    name: "Teach",
    components: {
      Header
    }
  }
</script>

<style scoped lang="stylus">
  *
    box-sizing border-box

  html,body
    height 100%

  .page
    height 100%
    .content
      display flex
      height 93%
      .left
        width 30%
        background-color #6FB2FF
        .buttons
          height 100%
          display flex
          flex-direction column
          justify-content space-around
          padding 40px 0
          .btn
            display block
            text-align center
            line-height 90px
            text-decoration none
            color #2c3e50
            font-size 1.4em
            width 220px
            height 90px
            border none
            border-radius 60px
            margin 0 auto
            background-color #fff
            cursor pointer
      .right
        font-size 1.4em
        width 70%
        background-color #FCF9ED
        padding 40px 100px
</style>
