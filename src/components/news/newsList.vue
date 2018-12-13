<template>
    <div class="newsList">
        <section v-for="l in list" :key="l.item_id">
            <a href="javascript:void(0)">
                <div class="desc">
                    <h3>{{l.title}}</h3>
                    <div class="info"></div>
                </div>
                <div class="imgHolder"></div>
            </a>
        </section>
    </div>
</template>

<script>
export default {
    name:'newsList',
    props:{
        list:Array
    }
}
</script>

<style lang="less">
.newsList{
    section{
        margin:0 30px;
        border-bottom:1px solid rgba(221, 221, 221, 0.6);
    }
}
</style>
