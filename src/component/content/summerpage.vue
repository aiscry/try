<template id="summer">
	<div>
		<div class="header">
			<div class="select">
				<router-link to="home"><span><img src="../../assets/images/返回.png"/></span></router-link>
			</div>
			<div class="title">
				<p>暑假特辑</p>
			</div>
			<div class="search">
				<span><img src="../../assets/images/搜索.png"/></span>
			</div>
		</div>

		<div class="con">
			<ul class="sxlist">
				<li><span>综合评价</span><span><img src="../../assets/images/向下.png"/></span></li>
				<li><span>好评优先</span><span><img src="../../assets/images/向下.png"/></span></li>
				<li><span>价格优惠</span><span><img src="../../assets/images/向下.png"/></span></li>
				<li><span>筛选</span><span><img src="../../assets/images/向下.png"/></span></li>
			</ul>
		</div>
		<div>
		<ul class="prolist">
			<li v-for="v in prolist">
				<img :src="v.img" alt="" />
				<div>
					<p class="title">{{v.title}}</p>
					<p class="des">{{v.des}}</p>
					<p class="price">
						<span>{{v.price}}</span>
					</p>
					<p class="sale">{{v.sale}}</p>
					<p class="appraise">{{v.appraise}}</p>
					<p class="date">{{v.date}}</p>
				</div>
			</li>
		</ul></div>
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
		},
		mounted(){
			this.$http.get('src/data/mspro.json').then(function(res){
				console.log(res.body);
				this.prolist=res.body.zhprolist;
				if(this.prolist!=''){
					this.bool=false;
				}
			})
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
			
			
			.con{
				width: 100%;
				margin-top: 97px;
				padding-bottom: 10px;	
			}
			
			.sxlist{
				position: fixed;
				top: 55px;left: 0;
				padding:0 10px;
				width: 100%;
				height:35px;
				border-bottom: 1px solid #eee;
				z-index: 1;
			}
			.sxlist > li{
				position: relative;
				float: left;
				width: 25%;
				line-height: 33px;
				text-align: center;
				background: #fff;
			}
			.sxlist li span:nth-of-type(1){
				font-size: 12px;
			}
			.sxlist li img{
			    padding-top:5px;
				width: 13px;
				height:13px;
			}
			.sxlist li ol{
				display: none;
				position: absolute;
				top:34px;left: -2px;
				width: 92%;
				clear: both;
				border: 1px solid #eee;
				background :#fff;
			}
			.sxlist li ol li{
				height:20px;
				line-height: 20px;
				font-size: 11px;
				color: #666;
			}
			
			.pxlist{
				/*display: none;*/
				position: fixed;
				top: 91px;left: 0;
				width: 100%;height: 100%;
				background: rgba(0,0,0,0.5);
				z-index: 1;
			}
			.pxlist li{
				padding-left: 20px;
				height: 30px;
				line-height: 30px;
				font-size: 12px;
				background: #fff;
			}
			.prolist li {
				position: relative;
				padding: 10px 10px;
				width: 100%;
				height: 110px;
				border-bottom: 1px solid #ccc;
				box-sizing: border-box;
				background: #fff;
				overflow: hidden;
				z-index: 0;
			}				
			.prolist li img {
				float: left;
				margin-right: 10px;
				width: 30%;
				height: 92%;
			}
			.prolist li .title {
				margin-right: 20px;
				font-size: 15px;
			}
			.prolist li .des {
				margin-top: 5px;
				font-size: 12px;
				color: #666;
			}
			
			.prolist li .price {
				margin-top: 10px;
				font-size: 13px;
				color: red;
			}
			
			.prolist li .date {
				position: absolute;
				top: 83px;
				right: 20px;
				font-size:12px ;
				color:#236975;
			}
			
			.prolist li .appraise {
				position: absolute;
				bottom: 40px;
				right: 20px;
				font-size: 12px;
				color: #e1b84b;
			}
</style>