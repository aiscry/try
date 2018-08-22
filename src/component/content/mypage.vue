<template id="my">
	<div>
		<div class="header">
			<div class="select">
				<router-link to="home"><span><img src="../../assets/images/设置.png"/></span></router-link>
			</div>
			<div class="title">
				<p>我的</p>
			</div>
			<div class="search">
			    <span><img src="../../assets/images/扫一扫.png"/></span>
				<span><img src="../../assets/images/消息.png"/></span>
			</div>
		</div>
		<div id="con" class="con">
			<div class="login">
				<div>
					<router-link to="login"><button>登录/注册</button></router-link>
				</div>
			</div>
			
			<ul class="conNav">
				<li>
					<span><img src="../../assets/images/订单.png"/></span>
					<p class="wz">优惠券</p>
				</li>
				<li>
					<span><img src="../../assets/images/出行装备.png"/></span>
					<p class="wz">待付款</p>
				</li>
				<li>
					<span><img src="../../assets/images/支付中.png"/></span>
					<p class="wz">卡包</p>
				</li>
				<li>
					<span><img src="../../assets/images/首页-退款管理.png"/></span>
					<p class="wz">收藏</p>
				</li>
			</ul>
			<div  class="mylist">
			<ul>
				<li>
					<div class="addName">
						<p>我的钱包<span>余额、银行卡等></span></p>
							
					</div>
				<ol class="prolist">
					<li>
						<span><img src="../../assets/images/代金券.png"/></span>
						<p class="wz">代金券</p>
					</li>
					<li>
						<span><img src="../../assets/images/购物车.png"/></span>
						<p class="wz">拿去花</p>
					</li>
					<li>
						<span><img src="../../assets/images/钱.png"/></span>
						<p class="wz">借现金</p>
					</li>
					<li>
						<span><img src="../../assets/images/信用卡.png"/></span>
						<p class="wz">信用卡</p>
					</li>
				</ol>
				</li>
				<li>
				<ol class="prolist">
					<li>
						<span><img src="../../assets/images/收藏.png"/></span>
						<p class="wz">我的收藏</p>
					</li>
					<li>
						<span><img src="../../assets/images/点评.png"/></span>
						<p class="wz">我的点评</p>
					</li>
					<li>
						<span><img src="../../assets/images/浏览记录.png"/></span>
						<p class="wz">我的浏览</p>
					</li>
					<li>
						<span><img src="../../assets/images/互动社区.png"/></span>
						<p class="wz">我的社区</p>
					</li>
					<li>
						<span><img src="../../assets/images/常旅客信息.png"/></span>
						<p class="wz">常用旅客</p>
					</li>
					<li>
						<span><img src="../../assets/images/飞行模式.png"/></span>
						<p class="wz">飞行管家</p>
					</li>
					<li>
						<span><img src="../../assets/images/发票.png"/></span>
						<p class="wz">我的发票</p>
					</li>
					<li>
						<span><img src="../../assets/images/发票管理.png"/></span>
						<p class="wz">发票抬头</p>
					</li>
					<li></li>
				</ol>
				</li>
			</ul>
			</div>

		</div>
	</div>
	
</template>

<script>
	
	export default{
		data(){
			return{
				bool:false,
				prolist:'',
				msg:'',
			}
		}
	}

</script>

<style scoped>
			body,html {
				width: 100%;
			}
			.header {
				position: fixed;
				top: 0;left: 0;
				padding: 0 20px;
				width: 100%;
				height: 55px;
				box-sizing: border-box;
				background: #74a496;
				z-index: 1;
			}
			.header .select {
				position: absolute;
				top: 9px;
				left: 20px;
			}
			.header .select a{
				text-decoration: none;
			}
			.header .select img{
			    padding:5px;
			    width:25px;
			    height:25px;
			}
			.header .search img{
			    width:25px;
			    height:25px;
			}
			
			.header div:nth-of-type(3) {
				position: absolute;
				top: 14px;
				right: 20px;
			}
			
			.header div:nth-of-type(3) span {
				display: inline-block;
				margin: 0px 0px;
				width: 30px;
				height: 30px;
			}
			
			.header .title {
				margin: 0px auto;
				width: 60%;
			}
			
			.header .title p {
				width: 100%;
				height: 55px;
				text-align: center;
				line-height: 55px;
				font-size: 18px;
				color: #fff;
			}
			.con{
				margin-top: 55px;
				padding-bottom: 54px;
			}
			.login{
				height: 130px;
				background: url('../../assets/images/loginb.png') no-repeat 0px 0px;
				background-size: 100% 38%;
				background-attachment: fixed;
			}
			.login>div{
				width: 80px;
				margin: 0px auto;
				padding-top:45px;
				padding-bottom: 10px;
			}
			.login button{
				width: 100px;
				height: 35px;
				border-radius: 5px;
				border: none;
				outline: none;
				background: #74a496;
				color: #fff;
			}
			.login p{
				color:#fff;
				font-size: 14px;
				text-align: center;
			}
			
			.conNav{
				width: 100%;
				padding: 10px 20px;
				box-sizing: border-box;
				background: #fff;
				overflow: hidden;
			}
			.conNav li{
				float: left;
				width: 25%;
				height: 45px;
				text-align: center;
			}
			.conNav img{
				width:26px;
				height:26px;
			}
			.conNav .wz{
				font-size: 11px;
				color: #666;
			}
			.mylist{
				width: 100%;
				padding-bottom: 65px;
			}
			.mylist > ul{
			    list-style:none;
				background:#f5f5f5;
			}
			.mylist > ul > li{
			    float:left;
			    width:100%;
				background: #fff;
				border-top: 1px solid #ccc;
			}
			
			.addName{
				padding:18px  20px;
				box-sizing: border-box;
			}
			.addName p{
				font-size: 14px;
			}
			.addName span{
			    float:right;
			    font-size:10px;
			    color:gray;
			}
			.prolist li{
				float: left;
				width: 25%;
				height: 45px;
				text-align: center;
				padding-bottom: 20px;
				padding-top: 20px;
			}
			.prolist img{
				width:26px;
				height:26px;
			}
			.prolist .wz{
				font-size: 11px;
				color: #666;
			}
			.icon-enter{
				float: right;
				color: #999;
				font-size: 18px;
			}
</style>