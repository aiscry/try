import VueRouter from 'vue-router';

import homepage from '../component/content/homepage.vue';
import addpage from '../component/content/addpage.vue';
import mypage from '../component/content/mypage.vue';
import summerpage from '../component/content/summerpage.vue';
import login from '../component/login/login.vue';
import register from '../component/login/register.vue';


export default new VueRouter({
	routes:[
		{path:'/address',component:addpage},
		{path:'/home',component:homepage},
		{path:'/my',component:mypage},
		{path:'/summer',component:summerpage},
		{path:'/login',component:login},
		{path:'/register',component:register},
		{path:'/',redirect:'/home'},//重定向之前，要先写出它的路由路径
	]
})
