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
export default {
    components: { Header, Footer }
}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
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