<template>
    <div class="scrollTabItem" @click="onItemClick">
        <span class="title" :style="id === $parent.value?activeStyle:{}">
            <slot name="default" />
        </span>
    </div>
</template>

<script>
    export default {
        name: 'scrollTabItem',
        props: {
            id: {
                type: String,
                required: true
            }
        },
        computed: {
            activeStyle() {
                return {
                    color: this.$parent.activeColor
                }
            }
        },
        methods: {
            onItemClick() {
                this.$parent.$emit('input', this.id)
            }
        }
    }
</script>

<style lang="less">
    .scrollTabItem {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left:15px;
        .title {
            color: #666;
            -webkit-user-select: none;/*禁用手机浏览器的用户选择功能 */
            -moz-user-select: none;
            padding: 0 10px;
        }
    }
</style>