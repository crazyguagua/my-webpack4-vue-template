<template>
    <i :class="['iconfont',`icon-${type}`]"></i>
</template>

<script>
export default {
    name:'iconfont',
    props:{
        type:String
    }
}
</script>

<style>

</style>
