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
			...mapActions(['GET_AUTH']),
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
			if (localStorage.getItem('cdek-auth')) {
				this.GET_AUTH(JSON.parse(localStorage.getItem('cdek-auth')))
			}
		},
	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-size: 16px;
		font-family: sans-serif;
	}
	.page {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.main {
		flex-grow: 1;
	}
</style>