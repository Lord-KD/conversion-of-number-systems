<template>
  <div class="progress-bar">
    <div class="progress-bar-body"></div>
    <div class="progress-bar-content" :anime="process_bar_width"></div>
  </div>
</template>

<script>
  export default {
    name: "CrogressBar",
    props: ['index'],
    computed: {
      process_bar_width: function () {
        this.$anime({
          targets: '.progress-bar-content',
          width: (this.index) / 12 * 100+ '%',
          duration: 500,
          easing: 'easeInOutQuad'
        });
      }
    }
  }
</script>

<style scoped lang="stylus">
  .progress-bar-body
    position absolute
    top 6.5%
    width 100%
    height 6px
    background-color #ccc
    z-index 100

  .progress-bar-content
    position absolute
    top 6.5%
    height 6px
    background-color #FFBA5A
    z-index 200
</style>
