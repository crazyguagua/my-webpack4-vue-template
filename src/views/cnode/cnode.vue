<template>
    <div class="wrapper">
        <mt-header fixed title="cnode社区vue版">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="tabbar">
            <ScrollTab v-model="selectedTab">
                <ScrollTabItem v-for="tab in tabList" :key="tab.key" :id="tab.key">
                    {{tab.name}}
                </ScrollTabItem>
            </ScrollTab>
        </div>
        <div class="content">
            <mt-tab-container v-model="selectedTab">
                <mt-tab-container-item :id="tab.key" v-for="tab in tabList" :key="tab.key">
                    <CnodeTip :tab="tab" :active="tab.key === selectedTab" />
                </mt-tab-container-item>
            </mt-tab-container>

        </div>
    </div>
</template>

<script>
    import ScrollTab from '_c/common/scrollTab/scrollTab'
    import ScrollTabItem from '_c/common/scrollTab/scrollTabItem'
    import CnodeTip from './cnodeTip'
    export default {
        name: 'cnode',
        components: {
            ScrollTab,
            ScrollTabItem,
            CnodeTip
        },
        created() {

        },
        mounted(){
            this.getByTab()
        },
        data() {
            return {
                selectedTab: 'all',
                tabList: [{
                    key: 'all',
                    name: '全部',
                    limit: 10,
                    page: 1,
                    list:[]
                }, {
                    key: 'good',
                    name: '精华'
                }, {
                    key: 'share',
                    name: '分享'
                }, {
                    key: 'ask',
                    name: '问答',
                }, {
                    key: 'job',
                    name: '招聘',
                }]
                // }, {
                //     key: 'ceshi',
                //     name: '客户端测试',
                //     limit: 10,
                //     page: 1,
                //     list:[]
                // }, {
                //     key: '前端',
                //     name: '前端',
                //     limit: 10,
                //     page: 1,
                //     list:[]
                // }, {
                //     key: '后台',
                //     name: '后台',
                //     limit: 10,
                //     page: 1,
                //     list:[]
                // }, {
                //     key: '手机端',
                //     name: '手机端',
                //     limit: 10,
                //     page: 1,
                //     list:[]
                // }]
            }
        },
        methods: {
            getByTab() {
                let index = this.tabList.findIndex(item => {
                    return item.key === this.selectedTab
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .wrapper {
        padding-top: 40px;
        .content{
            margin: 10px;
            background: #ccc;
        }
    }
</style>