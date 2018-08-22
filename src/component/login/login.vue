<template id="login">
	<div class="wrap">
		<router-link to="my"><span class="return"><img src="../../assets/images/返回.png"/></span></router-link>
		<div class="login">
		<form action="">
			<div class="in">
				<span><img src="../../assets/images/我的.png"/></span>
				<input type="text" placeholder="请输入用户名" class="user" />
			</div>
			<div class="in">
				<span><img src="../../assets/images/密码.png"/></span>
				<input type="password" placeholder="请输入密码" class="psd" />
			</div>
			<div>
				<input type="submit" value="登录" class="btn"/>
			</div>
		</form>
		</div>
		<div class="register">
			<p><router-link to="">忘记密码？</router-link>&nbsp;|&nbsp;&nbsp;<router-link to="register">新用户注册</router-link></p>
		</div>
	</div>
	
	
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
			}
		}
	}
	
</script>

<style scoped>
	.wrap{
		position: fixed;
		top: 0;left: 0;
		width: 100%;height: 100%;
		z-index: 99;
		background:-webkit-linear-gradient(top,#74a496,#6fb89b);
	}
	.return{
		position: absolute;
		top: 13px;left: 11px;
	}
	.return img{
	     width:25px;
	     height:25px;
	}
	
	.login{
	    width:100%;
	    padding-top:150px;
	}
	form{
		position: relative;
		margin:0 auto;
		width: 82%;
	}
	form span img{
	    padding-top:5px;
	    width:20px;
	    height:20px;
	}
	.in{
	    margin-top:10px;
	}
	input{
		border: none;
		border-bottom: 1px solid #fff;
		height: 30px;
		width: 210px;
		font-size: 14px;
		color: #444;
		background: none;
		outline: none;
	} 
	.btn{
		margin-top: 40px;
		width:248px ;
		height: 35px;
		background: #4c6e78;
		color: #fff;
		outline: none;
		border-radius:5px;
	}
	.register{
		margin: 60px auto;
		width: 48%;
		font-size: 13px;
	}
	.register a{
		color: #fff;
	}
</style>