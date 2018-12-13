<template>
    <div>
        <mt-header title="新闻">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="wrapper">
            <NewsList :list="newsList"/>
        </div>
        
    </div>
</template>

<script>
import {fetch} from '@/http'
import NewsList from '_c/news/newsList'
    export default {
        name:'news',
        components:{NewsList},
        data(){
            return {
                newsList:[]
            }
        },
        created(){
            this.getList()
        },
        methods:{
            getList(){
                fetch('/api/news/list').then(d=>{
                    this.newsList = d.list
                })
            }
        }
    }
</script>

<style>
.wrapper{
    position: absolute;
    top:40px;
    bottom:0;
    width:100%;
    z-index: 2;
}
</style>