<template>
    <div>
        <div class="app-container">
            <transition>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
        <tabbar />

    </div>

</template>

<script>
    import tabbar from '_c/tabbar'
    export default {
        name: 'layout',
        components: {
            tabbar
        }
    }
</script>

<style lang="css">
    .app-container{
	    padding-bottom: 50px;
        overflow-x: hidden;
    }
    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    /*v-leave-to 应该分开  左边一边消失  右边进入的效果*/
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;/**解决入场动画元素往上飘的问题*/
    }
    .v-enter-active,
    .v-leave-active {
        transition: all .5s;
    }
</style>