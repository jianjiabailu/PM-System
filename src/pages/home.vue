<template>
	<div class="home">
		<div class="hello">
			<h2>亲爱的alex，早上好</h2>
			<h3>今天是2019年7月8日</h3>
		</div>
		<div class="header">
			<div class="details-header">
				<div>
					<p>2</p>
					<p>我的需求</p>
				</div>
				<div>
					<p>10</p>
					<p>我的BUG</p>
				</div>
			</div>
		</div>
		<div>
			<h4>我的项目</h4>
			<div>
				<div>80%</div>
				<div>ecigsbuy</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data: function(){
			return {
				navList: [1,2,3,4,5,6,7,8,9,10],
				goodsList: [1,2,3,4],
				sex: '男',
				radioptions: [
					{
						name: 'sex',
						val: '男',
						msg: '选择男性',
						disabled: false
					},{
						name: 'sex',
						val: '女',
						msg: '选择女性',
						disabled: false
					}
				]
			}
		}
	}
</script>

<style>
	.hello{text-align: center;}
	ul.shelf{
		margin: 0;
		padding: 10px 20px;
	}
	li.goods{
		display: flex;
		box-sizing: border-box;
		margin-bottom: 20px;
		box-shadow: 0 0 5px 2px rgba(25,25,25,.2);
	}
	.sg-pic img{max-width: 100px;}
</style>
