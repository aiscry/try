<template id="address">
		<div>
		<div class="header">
			<div class="select">
				<router-link to="home"><span><img src="../../assets/images/返回.png"/></span></router-link>
			</div>
			<div class="title">
				<p>地区</p>
			</div>
			<div class="search">
				<span><img src="../../assets/images/搜索.png"/></span>
			</div>
		</div>
		<div class="content">
	        <ul>
				<li>
					<div class="addName">
						<p>国内热门</p>	
					</div>
					<ol class="prolist">
						<li>云南</li>
						<li>四川</li>
						<li>厦门</li>
						<li>西藏</li>
						<li>云南</li>
						<li>成都</li>
						<li>青海</li>
					</ol>
				</li>
				<li>
					<div class="addName">
						<p>亚洲</p>	
					</div>
					<ol class="prolist">
						<li>日本</li>
						<li>泰国</li>
						<li>韩国</li>
						<li>越南</li>
						<li>菲律宾</li>
					</ol>
				</li>
				<li>
					<div class="addName">
						<p>欧洲</p>	
					</div>
					<ol class="prolist">
						<li>瑞士</li>
						<li>希腊</li>
						<li>法国</li>
						<li>德国</li>
						<li>英国</li>
						<li>意大利</li>
					</ol>
				</li>
				<li>
					<div class="addName">
						<p>美洲</p>	
					</div>
					<ol class="prolist">
						<li>美国</li>
						<li>加拿大</li>
						<li>西班牙</li>
						<li>秘鲁</li>
						<li>智利</li>
						<li>巴西</li>
						<li>阿根廷</li>
						<li>墨西哥</li>
					</ol>
				</li>
				<li>
					<div class="addName">
						<p>其他</p>	
					</div>
					<ol class="prolist">
						<li>南非</li>
						<li>澳大利亚</li>
						<li>新西兰</li>
						<li>冰岛</li>
						<li>群岛</li>
						<li></li>
						<li></li>
					</ol>
				</li>
		   </ul>
		   
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
				border-bottom: 1px solid #eee;
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
			.content{
				margin-top: 55px;
				width: 100%;
				padding-bottom: 65px;
			}
			.content > ul{
			    list-style:none;
				background:#f5f5f5;
			}
			.content > ul > li{
			    float:left;
			    width:100%;
				background: #fff;
			}
			
			.addName{
				padding:20px  20px;
				box-sizing: border-box;
				border-bottom: 1px solid #ccc;
			}
			.addName p{
				font-size: 17px;
				font-weight: bold;
			}
			.prolist li{
				position: relative;
				float:left;
				padding:0px 0px;
				width: 20%;
				height: 60px;
				text-align:center;
				line-height:60px;
				border-bottom: 1px solid #ccc;
				box-sizing: border-box;
				overflow: hidden;
			}
			.prolist li img{
				float: left;
				margin-right: 20px;
				width: 30%;
				height: 85%;
			}
			.content .loading{
				position: relative;
				margin: 0 auto;
				width: 36%;
			}
			.loading span:nth-of-type(2){
				position: absolute;
				top:5px ;left: 46px;
				color: #aaa;
			}
			
</style>