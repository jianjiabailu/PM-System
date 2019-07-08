<template>
  <div class="hello">
    <h2>{{ title }}</h2>
	
    <router-link to="/home">现在开始</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function (){
		return {
			title: '欢迎来到我的网站',
			hide: false
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{
		flex: 1;
		text-align: center;
	}
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
</style>
