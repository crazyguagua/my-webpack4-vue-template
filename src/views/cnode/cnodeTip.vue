<template>
    <div>
        <ul>
            <li v-for="l in list" :key="l.id" class="cell">
                <a class="avatar">
                    <img :src="l.author.avatar_url" alt="">
                </a>
                <div class="content">
                    <div class="tag">{{renderTag(l)}}</div>
                    <div class="title">{{l.title}}</div>
                </div>
                <div class="time">
                    <span>{{l.create_at | timeFilter}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {
        get
    } from '@/http/cnode'
    export default {
        props: {
            tab: {
                type: Object,
                required: true
            },
            active: {
                required: true,
                type: Boolean
            }

        },
        filters: {
            timeFilter: (a) => {
                return '一天前'
            }
        },
        data() {
            return {
                loaded: false,
                limit: 20,
                page: 1,
                list: []
            }
        },
        methods: {
            getTabData() {
                let limit = this.limit
                let page = this.page
                get(`/topics?tab=${this.tab.key}&limit=${limit}&page=${page}`)
                    .then(d => {
                        let list = d.data
                        this.list = list
                        this.loaded = true
                    })
            },
            renderTag(l) {
                let tag = l.tab
                let top = l.top
                if (top) {
                    return '置顶'
                } else if (tag === 'share') {
                    return '分享'
                } else if (tag === 'good') {
                    return '精华'
                } else if (tag === 'job') {
                    return '招聘'
                } else if (tag === 'ask') {
                    return '问答'
                }
            }
        },
        watch: {
            active: {
                handler(newVal) {

                    if (newVal && !this.loaded) {
                        this.getTabData()
                    }
                },
                immediate: true
            }
        }
    }
</script>

<style lang="less">
    .cell {
        &:first-of-type {
            border-top: none;
        }

        padding:10px;
        background: #fff;
        border-top: 1px solid #f0f0f0;
        display: flex;
        // justify-content:space-between;
        align-items: center;
        .avatar {
            flex:0 1 30px;
            height: 30px;
            img {
                width:100%;
                height:100%;
                border-radius: 3px;
            }
        }

        .content {
            display: flex;
            justify-content: center;
            align-items: center;
            padding:0 5px;
            flex-grow:1;
            .tag {
                padding: 5px;
                border-radius: 5px;
                background-color: #e5e5e5;
                color: #999;
                font-size: 12px;
            }
            .title{
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: 1em;
                color:#888;
                margin-left:5px;
            }
        }
        .time{
             color:#888;
             font-size: 12px;
             flex:0 1 80px;
        }

    }
</style>