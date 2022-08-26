<template>
	<div class="page">
		<Header></Header>
		<main class="main">
			<router-view></router-view>
		</main>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from '@/components/Header/Header.vue';
	import Footer from '@/components/Footer/Footer.vue';
	import { mapGetters, mapActions } from 'vuex';
	export default {
		components: { Header, Footer },
		methods: {
			...mapActions(['GET_MOUNTED']),
		},
		computed: {
			...mapGetters(['ISAUTH'])
		},
		watch: {
			ISAUTH() {
				if (this.ISAUTH) {
					this.$router.push('/')
				}
			}
		},
		mounted() {
			this.GET_MOUNTED(JSON.parse(localStorage.getItem('cdek-auth')))
		},
	}
</script>

<style lang="scss">
	.page {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.main {
		display: flex;
		flex-grow: 1;
	}
</style>