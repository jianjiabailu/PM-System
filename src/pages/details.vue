<template>
	<div class="details">
		<div class="details-header">
			<div>
				<p>8</p>
				<p>需求数</p>
			</div>
			<div>
				<p>28</p>
				<p>BUG数</p>
			</div>
			<div>
				<p>开发中</p>
				<p>项目状态</p>
			</div>
		</div>
		<div>
			<p>项目经理：alex</p>
			<p>起止时间：2019-07-08 至 2019-09-08</p>
			<p>项目成员：alex，asd，张三，李思</p>
			<p>项目描述：测试需要</p>
		</div>
		
		<div>
			<h4>项目需求</h4>
			<table>
				<tr>
					<td>标题</td>
					<td>简介</td>
					<td>预计工时</td>
					<td>已消耗</td>
					<td>状态</td>
				</tr>
				<tr>
					<td>UI整改</td>
					<td>调整UI界面，修改主题颜色</td>
					<td>10</td>
					<td>8</td>
					<td>已完成</td>
				</tr>
			</table>
		</div>
		<div>
			<h4>项目BUG</h4>
			<table>
				<tr>
					<td>标题</td>
					<td>简介</td>
					<td>指派人</td>
					<td>解决者</td>
					<td>状态</td>
				</tr>
				<tr>
					<td>图片太小</td>
					<td>首页图片大小跟原型图不符</td>
					<td>alex</td>
					<td>李思</td>
					<td>未完成</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'detail'
	}
</script>

<style>
	.details{
		padding: 0 10px;
	}
	
	.details-header{
		display: flex;
		align-items: center;
		text-align: center;
	}
	.details-header>div{flex: 1;}
	
	table {
		width: 100%;
	}
	table tr {
		display: flex;
	}
	table tr  td {
		flex: 1;
		text-align: center;
	}
</style>
