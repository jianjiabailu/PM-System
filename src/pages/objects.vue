<template>
	<div class="container">
		<div class="list">
			<RouterLink class="item-card" to="/detail/1">
				<p>ecigsbuy</p>
				<span class="_status">开发中（进度：80%）</span>
				<p>项目经理：alex</p>
				<p>起止时间：2019-07-08 至 2019-09-08</p>
				<p>项目成员：alex，asd，张三，李思</p>
				<p>项目描述：测试需要</p>
			</RouterLink>
			<RouterLink class="item-card" to="/detail/2">
				<p>ecigsbuy</p>
				<span class="_status">开发中（进度：80%）</span>
				<p>项目经理：alex</p>
				<p>起止时间：2019-07-08 至 2019-09-08</p>
				<p>项目成员：alex，asd，张三，李思</p>
				<p>项目描述：测试需要</p>
			</RouterLink>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'objs'
	}
</script>

<style>
	.list{
		padding: 10px;
	}
	.item-card{
		display: block;
		position: relative;
		padding: 10px;
		margin-bottom: 1em;
		box-shadow: 0 0 10px 4px rgb(0,0,0,.1);
	}
	._status{
		position: absolute;
		right: 0; top: 1em;
	}
	.item-card p{
		margin: 10px 0;
	}
</style>
