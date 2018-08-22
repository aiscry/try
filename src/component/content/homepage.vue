<template id="home">
	<div>
		<div class="header">
		<div class="logo">
		<h1>Travel</h1>
		</div>
				<div class="ipt">
					<input type="text" placeholder="搜索地点" v-model="addname"/>
					<router-link :to="msg"><span><img src="../../assets/images/搜索2.png"/></span></router-link>
				</div>
		</div>
		<div id="con" class="con">
			<mt-swipe :auto="4000">
			  <mt-swipe-item><img src="src/assets/images/banner1.jpeg" alt="" /></mt-swipe-item>
			  <mt-swipe-item><img src="src/assets/images/banner2.jpeg" alt="" /></mt-swipe-item>
			  <mt-swipe-item><img src="src/assets/images/banner3.jpeg" alt="" /></mt-swipe-item>
			  <mt-swipe-item><img src="src/assets/images/banner4.jpg" alt="" /></mt-swipe-item>
			</mt-swipe>
			<ul class="conNav">
			<li>
				<router-link to="/home">
					<p><img src="../../assets/images/签证.png"/></p>
					<p class="wz">签证</p>
				</router-link>
			</li>
			<li>
				<router-link to="/address">
					<p><img src="../../assets/images/游乐场所.png"/></p>
					<p class="wz">出境游</p>
				</router-link>
			</li>
			<li>
				<router-link to="/summer">
					<p><img src="../../assets/images/租车.png"/></p>
					<p class="wz">接送机</p>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<p><img src="../../assets/images/出行时间.png"/></p>
					<p class="wz">一日游</p>
				</router-link>
			</li>
			<li>
				<router-link to="/home">
					<p><img src="../../assets/images/地图.png"/></p>
					<p class="wz">智慧旅游</p>
				</router-link>
			</li>
			<li>
				<router-link to="/address">
					<p><img src="../../assets/images/攻略.png"/></p>
					<p class="wz">定制游</p>
				</router-link>
			</li>
			<li>
				<router-link to="/summer">
					<p><img src="../../assets/images/风景.png"/></p>
					<p class="wz">国内游</p>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<p><img src="../../assets/images/行李.png"/></p>
					<p class="wz">自由行</p>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<p><img src="../../assets/images/花费.png"/></p>
					<p class="wz">特价游</p>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<p><img src="../../assets/images/伴手礼.png"/></p>
					<p class="wz">更多</p>
				</router-link>
			</li>
			</ul>
			<div class="more">
				<div>
					<h4>旅游推荐</h4>
				</div>
				<ul class="morelist">	
					<li v-for="(v,i) in morelist" @click="enter(i)">
						<router-link to="details">
							<img :src="v.img" alt="" />
							<div>
								<p class="title">{{v.title}}</p>
								<p class="des">{{v.des}}</p>
								<p class="price">
									<span>{{v.price}}</span>
								</p>
								<p class="date">{{v.date}}</p>
								<p class="appraise">{{v.appraise}}</p>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="mask" v-show="bool" @click="hide">{{noinfo}}</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				morelist:'',
				title:'',
				addname:'',//输入框值
				msg:'',//router-link，路由的路径名称，控制msg是否等于details
				bool:false,//控制白色层显示隐藏
				noinfo:'',//白色层文字
			}
		},
		mounted(){
			this.$http.get('src/data/tg.json').then(function(res){
				this.morelist=res.body.more;
			})
			
		},
		methods:{
			enter(i){
				titles=this.morelist[i].title;
				indexs=i;//传给details文件，用于判断应该获取打他数组中的第几个details
			},
			//隐藏白色层
			hide(){
				this.bool=false;
				this.foodname="";
			},
		}
	}
</script>

<style scoped>
			.header{
				position: fixed;
				top: 0;left: 0;
				padding: 0 20px;
				width: 100%;
				height: 55px;
				box-sizing: border-box;
				background:#74a496;
				z-index: 1;
			}
			.header .logo{
				position: absolute;
				top: 17px;left:20px ;
			}
			.header .logo a{
				text-decoration: none;
			}
			.header .logo h1{
				float: left;
				font-size: 18px;
				color: #fff;
			}
			.header .ipt {
				position: relative;
			}
			.header .ipt span{
				position: fixed;
				top: 18px;right:23%;
				color:#000;
				font-size: 20px;
			}
			.header .ipt{
				margin: 0px auto;
				padding-top: 13px;
				width: 53%;
			}
			.header .ipt input{
				padding-left: 20px;
				width: 100%;
				height: 30px;
				border-radius: 50px;
				outline: none;
				border: none;
				background: #f5f5f5;
				font-size: 14px;
			}
			.header .ipt img{
			    width:19px;
			    height:19px;
			}
			
			.con{
				margin-top: 55px;
				padding-bottom: 54px;
			}
			
			.mint-swipe, .mint-swipe-items-wrap{
				height: 180px;
			}
			.mt-swipe-item{
				padding-bottom: 100px;
			}
			img{
				width: 100%;
			}
			.conNav{
				width: 100%;
				height:150px;
			}
			.conNav li{
				float: left;
				width: 20%;
				height:70px;
				text-align: center;
				line-height:40px;
			}
			.conNav li a{
				text-decoration: none;
			}
			.conNav p{
			    height:35px;
			}
			.wz{
			    margin:0;
			    padding:0;
				font-size: 12px;
				color:#4c6e78;
			}
			.conNav li img{
			    margin: 10px auto;
				width: 30px;
				height: 30px;
				line-height: 25px;
				text-align: center;
			}
			.more{
				width: 100%;
				padding:10px 20px;
				box-sizing: border-box;
				border-bottom: 1px solid #ccc;
			}
			.more > div{
				width: 100%;
				overflow: hidden;
			}
			.more > div h4{
				float: left;
			}
			.more > div p{
				float: right;
				margin-top: 5px;
				width: 137px;
				font-size: 12px;
			}
			.more > div p span{
				display: inline-block;
				margin: 0 5px;
				width: 16px;
				height: 16px;
				background: #505050;
				border-radius: 5px;
				color: #fff;
				font-size: 12px;
				text-align: center;
				line-height: 16px;
			}
			.morelist{
				margin-top: 20px;
			}
			.morelist li{
				position: relative;
				margin-top: 20px;
				width: 100%;
				height: 90px;
			}
			.morelist li img{
				float: left;
				margin-right: 20px;
				width: 25%;
				height: 80%;
			}
			.morelist li a{
				text-decoration:none;
			}
			.morelist li a .title{
				margin-right: 20px;
				font-size: 15px;
				color: #222;
			}
			.morelist li .des{
				margin-top: 5px;
				font-size: 12px;
				color: #666;
			}
			.morelist li .price{
				margin-top: 5px;
				font-size: 12px;
				color: red;
			}
			.morelist li .date{
				position: absolute;
				top:2px;right: 0;
				font-size:12px ;
				color:#236975;
			}
			.morelist li .appraise{
				position: absolute;
				bottom:10px;right: 0;
				font-size:12px ;
				color:#e1b84b;
			}
			
			/*白色层*/
			.mask{
				position: fixed;
				top: 55px;left: 0;
				background: #fff;
				padding-top: 30px;
				width: 100%;height: 100%;
				text-align: center;
				color: #aaa;
				z-index: 4;
			}
</style>