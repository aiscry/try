<template id="footer">
			<ul class="ftNav">
				<li>
					<router-link to="/home">
						<p><img src="../../assets/images/首页.png"/></p>
						<p class="wz">首页</p>
					</router-link>
				</li>
				<li>
					<router-link to="/address">
						<p><img src="../../assets/images/地区.png"/></p>
						<p class="wz">地区</p>
					</router-link>
				</li>
				<li>
					<router-link to="/summer">
						<p><img src="../../assets/images/推荐.png"/></p>
						<p class="wz">推荐</p>
					</router-link>
				</li>
				<li>
					<router-link to="/my">
						<p><img src="../../assets/images/我的.png"/></p>
						<p class="wz">我的</p>
					</router-link>
				</li>
			</ul>
</template>



<style scoped>
			.ftNav{
				position: fixed;
				bottom: -1px;
				left: 0;
				width: 100%;
				height: 55px;
				background: #6fb89b;
			}
			.ftNav li{
				float: left;
				margin-top: 7px;
				width: 25%;
				height: 55px;
				text-align: center;
			}
			.ftNav li:nth-of-type(3){
				margin-top: 9px;
			}
			.ftNav li a{
				text-decoration: none;
			}
		
			.ftNav img{
				margin: 0 auto;
				width: 22px;height: 22px;
				color: #ffffff;
				line-height: 25px;
				text-align: center;
			}
			.wz{
				font-size: 12px;
				color: #333;
			}
			.router-link-active p{
				color: #4c6e78;
			}
</style>