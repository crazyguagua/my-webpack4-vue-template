<template>
    <div>
        <mt-header  title="首页"></mt-header>
        <div class="wrapper">
            <div class="swipers">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="img in lunboList" :key="img.url">
                        <img :src="img.url" >
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="menuWrapper">
                <homeMenu />
            </div>
        </div>

    </div>
</template>

<script>
    import {
        post
    } from '@/http'
    import homeMenu from '_c/homeMenu'
    export default {
        name: 'home',
        components: {
            homeMenu
        },
        created() {
            this.getLunboList()
        },
        data() {
            return {
                lunboList: []
            }
        },
        methods: {
            getLunboList() {
                post(`/api/mall/lunbotulist`).then(d => {
                    this.lunboList = d.list
                })
            }
        }
    }
</script>

<style lang="less">

    .swipers {
        // margin-top:40px;
        height: 120px;
        background: rgb(123, 191, 236);

        .mint-swipe-item {
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>