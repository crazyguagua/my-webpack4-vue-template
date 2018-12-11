<template>
    <transition mode="out-in">
        <router-view></router-view>
    </transition>
</template>

<script>
export default {
    name:'app'
}
</script>

<style lang="css">
.v-enter,.v-leave-to{
    opacity:0;
}
</style>
