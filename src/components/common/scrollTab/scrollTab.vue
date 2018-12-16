<template>
    <div class="scrollTab" ref="container">
        <div class="tabList" :style="style" ref="list">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'scrollTab',
        props: {
            value: String,
            activeColor: {
                type: String,
                default: '#26a2ff'
            }, // 近似等于超出边界时最大可拖动距离(px);
            additionalX: {
                type: Number,
                default: 60
            },
            // 惯性回弹指数(值越大，幅度越大，惯性回弹距离越长);
            reBoundExponent: {
                type: Number,
                default: 10,
                validator(value) {
                    return value > 0
                }
            },
            // 灵敏度(惯性滑动时的灵敏度,值越小，阻力越大),可近似认为速度减为零所需的时间(ms);
            sensitivity: {
                type: Number,
                default: 1000,
                validator(value) {
                    return value > 0
                }
            },
            // 回弹过程duration;
            reBoundingDuration: {
                type: Number,
                default: 360
            }
        },
        data() {
            return {
                touching: false,
                rebounding:false,//是否需要回弹
                offsetX: 0
            }
        },
        computed: {
            style() {
                return {
                    'transform': `translateX(${this.offsetX}px)`,
                    'transition-timing-function:':this.transitionTimingFunction,
                    'transition-duration':this.transitionDuration
                }
            },
            transitionTimingFunction(){
                //回弹效果过度动画和不回弹不一样
                return this.rebounding? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'cubic-bezier(0.1, 0.57, 0.1, 1)'
            },
            transitionDuration(){
                //回弹持续时间
                if(this.rebounding&&!this.touching){
                    return `${this.reBoundingDuration}ms`
                }else{
                    return 0;
                }
            },
            //滑动元素的宽度减去容器的宽度
            scrollWidth() {
                return this.$refs.list.offsetWidth - this.$refs.container.offsetWidth
            }
        },
        methods: {
            bindEvents() {
                this.$el.addEventListener('touchstart', this.handleTouchStart, false)
                this.$el.addEventListener('touchmove', this.handleTouchMove, false)
                this.$el.addEventListener('touchend', this.handleTouchEnd, false)
            },
            handleTouchStart(e) {
                e.stopPropagation()
                let clientX = e.touches[0].clientX
                this.lastX = clientX
                this.touching = true
            },
            handleTouchMove(e) {
                e.preventDefault()
                e.stopPropagation()
                //如果内容没有超过容器的宽度，不滚动
                if (this.scrollWidth < 0) {
                    return
                }
                if (this.touching) {
                    let clientX = e.touches[0].clientX
                    this.currentX = clientX
                    this.startX = this.lastX
                    this.checkOffsetX()
                }
            },
            handleTouchEnd(e) {
                this.touching = false
                //检测是否需要回弹
                this.checkRebounding()
            },
            //计算offsetX的值
            checkOffsetX() {
                //分向左滑动还是向右滑动
                let moveLeft = this.currentX - this.startX < 0
                if (moveLeft) { //左滑动
                    //当前的平移值
                    if (this.offsetX <= 0 && this.offsetX + this.scrollWidth > 0 || this.translateX > 0) {
                        //还可以继续左侧滑动
                        this.offsetX += this.currentX - this.startX
                    } else if (this.scrollWidth + this.offsetX <= 0) {
                        //不能继续左滑了 回弹
                        let distance = this.additionalX * (this.currentX - this.lastX) /
                            (this.containerWidth + Math.abs(this.offsetX + this.scrollWidth))
                        this.offsetX += distance
                    }
                } else { //向右滑动
                    if((this.offsetX<0 && this.scrollWidth+this.offsetX>=0)||this.offsetX+this.scrollWidth<=0 ){ //offset<0 并且 在可以滚动的范围内
                        //可以向右滑动
                        this.offsetX += this.currentX -this.startX
                    }else{
                        //判断回弹
                        let distance = this.additionalX * (this.currentX - this.lastX)
                             / (this.containerWidth + this.offsetX)
                        this.offsetX+=distance
                    }
                }
                this.lastX = this.currentX
            },
            checkRebounding(){
                if(this.offsetX>0){
                    //当前位移量大于0 
                    this.offsetX = 0
                    this.rebounding = true
                }else if(this.offsetX<-1*this.scrollWidth){
                    //位移量小于 滚动的最大距离
                    this.offsetX = -1*this.scrollWidth
                    this.rebounding = true
                }else{
                    this.rebounding = false
                }
            }
        },
        mounted() {
            this.bindEvents()
            this.containerWidth = this.$refs.container.offsetWidth
            log(this.containerWidth)
        }
    }
</script>

<style lang="less">
    .scrollTab {
        position: relative;
        width: 100%;
        overflow: hidden;
        display: flex;
        border-bottom: 1px solid #eee;
        box-shadow: 0 0px 6px 1px #eee;

        .tabList {
            background-color: rgba(255, 255, 255, .8);
            position: relative;
            box-sizing: border-box;
            display: flex;
            flex-flow: row nowrap;
            flex-shrink: 0; // 希望某个容器在任何时候都不被压缩 这个样式很关键
            padding: 14px 10px;
            min-width: 100%;
        }
    }
</style>