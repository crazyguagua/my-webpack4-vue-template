<template>
    <div class="newsList">
        <section v-for="l in list" :key="l.item_id">
            <a href="javascript:void(0)">
                <div class="oneline">
                    <div class="desc">
                        <h3 class="title">{{l.title}}</h3>
                        <div class="info"></div>
                    </div>
                    <div class="imgHolderflex" v-if="l.image_url">
                        <img :src="l.image_url" alt="">
                    </div>
                </div>
                <div class="imgHolder" v-if="l.image_list&& l.image_list.length>0">
                    <div class="imgWrapper" v-for="ll in l.image_list" :key="ll.url">
                        <img :src="ll.url" alt="">
                    </div>
                </div>

            </a>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'newsList',
        props: {
            list: Array
        }
    }
</script>

<style lang="less">
    .newsList {
        section {
            margin: 0 15px;
            border-bottom: 1px solid rgba(221, 221, 221, 0.6);
            padding: 8px 0;

            .desc {
                .title {
                    font-size: 17px;
                    line-height: 21px;
                    color: #222;
                    font-weight: normal;
                    margin: 0;
                }
            }

            .imgHolder {
                display: flex;
                flex-wrap: nowrap;
                margin-top: 8px;

                .imgWrapper {
                    flex: 1;
                    padding-left: 4px;
                }
            }

            .oneline {
                display: flex;

                .imgHolderflex {}

            }


            img {
                width: 100%;
            }
        }
    }
</style>