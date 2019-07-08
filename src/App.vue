<template>
  <div id="app">
		<router-view class="flex"></router-view>
		<Footer></Footer>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
	body{padding: 0; margin: 0;}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}
	.flex{flex: 1;overflow-y: auto;overflow-x: hidden;}
	a{color: inherit;text-decoration: none;}
</style>
