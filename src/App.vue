<template>
	 	<main>
			<router-view></router-view>
			<v-footer></v-footer>
		</main>
</template>

<script>
		import footer from './component/footer/footer.vue';

		export default{
			components:{
				'v-footer':footer,
				
			}
		}
</script>


