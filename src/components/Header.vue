<template>
    <div class="header">
        <div class="main">
            <ul>
                <li class="logo">Binary conversion</li>
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <router-link to="/compare">比较大小</router-link>
                </li>
                <li>
                    <router-link to="/conversion">进制转换</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ComponentHeader"
    }
</script>

<style scoped lang="stylus">
    a
        text-decoration none
        color #2c3e50
    .header
        height 7%
        background-color #fff
        ul,li
            float left
            height inherit
        ul
            margin 0
            li
                vertical-align middle
                list-style-type none
                line-height 50px
                margin-right 50px
            .logo
                color #FFBA5A
                font-size 1.2em
                font-weight bold
</style>
