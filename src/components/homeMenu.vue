<template>
    <div class="homeValue">
        <div class="row">
            <div class="col">
                <a  class="menu">
                    <div ><iconfont type="xinwen" /></div>
                    <span>新闻</span>
                </a>
            </div>
            <div class="col">
                <a  class="menu">
                    <div><iconfont type="zuqiu-2" /></div>
                    <span>比赛</span>
                </a>
            </div>
            <div class="col">
                <a  class="menu">
                    <div><iconfont type="tableshare" /></div>
                    <span>分享</span>
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <a  class="menu">
                    <div ><iconfont type="ziyuan" /></div>
                    <span>小说</span>
                </a>
            </div>
            <div class="col">
                <a  class="menu">
                    <div><iconfont type="gouwuche" /></div>
                    <span>商城</span>
                </a>
            </div>
            <div class="col">
                <a  class="menu">
                    <div><iconfont type="music_record" /></div>
                    <span>音乐</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.row{
    &:after{
        content:"";
        clear:both;
        display: block;
    }
    .col{
        float:left;
        width:33.333%;
        text-align: center;
        padding: 10px;
        color: #666;
        .menu{
            width:100%;
            display:inline-block;
        }
        .iconfont{
            font-size:30px;
            color: #7bbfec;
        }
    }
}
</style>
