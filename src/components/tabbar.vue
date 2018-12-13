<template>
    <mt-tabbar v-model="selected">
        <mt-tab-item id="home">
            <iconfont slot="icon" type="home" />
            首页
        </mt-tab-item>
        <mt-tab-item id="explore">
            <iconfont slot="icon" type="exploreicon" />
            发现
        </mt-tab-item>
        <mt-tab-item id="order">
            <iconfont slot="icon" type="emaxcitygerenxinxitubiaoji03" />
            订单
        </mt-tab-item>
        <mt-tab-item id="my">
            <iconfont slot="icon" type="accountfilling" />
            我的
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
    export default {
        data() {
            return {
                selected: 'home'
            }
        },
        watch: {
            $route() {
                console.log('改变路由')
            },
            selected: function (val, oldVal) {
                // 这里就可以通过 val 的值变更来确定
                console.log(val)
                console.log(oldVal)
                this.$router.push({
                    name: val
                })
            }
        }
    }
</script>

<style>

</style>