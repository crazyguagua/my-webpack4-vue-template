<template>
    <div>
            <transition>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>

    </div>

</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="css">
    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    /*v-leave-to 应该分开  左边一边消失  右边进入的效果*/
    .v-leave-to{
        opacity: 0;
        /* transform: translateX(-100%); */
        position: absolute;/**解决入场动画元素往上飘的问题*/
    }
    .v-enter-active{
        transition: opacity .5s, transform .5s;
    }
</style>