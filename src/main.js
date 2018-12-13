import Vue from 'vue'
import App from '@/App'
import router from './router'
import "babel-polyfill"
import '@/less/main.less'
import { Tabbar, TabItem ,Header,Swipe,SwipeItem} from 'mint-ui';

import IconFont from '_c/common/iconfont'
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
Vue.component('iconfont',IconFont)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

window.log = console.log.bind()
new Vue({
    el:'#app',
    router,
    render:(h)=>h(App)
})