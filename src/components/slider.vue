<template>
	<div class="slider">
		<div class="s-box">
			<div class="s-item" v-for="(value,key) in list" :key="key">
				<img :src="value.imgPath" alt="">
			</div>
		</div>
		<div class="s-radio"></div>
	</div>
</template>

<script>
	export default {
		name: 'Slider',
		data(){
			return {
				active_index : 1,
				list: [
					{imgPath:'../assets/banner_meet.png',active:false},
					{imgPath:'../assets/banner_meet.png',active:false},
					{imgPath:'../assets/banner_meet.png',active:false}
				]
			}
		}
	}
</script>

<style>
	img{max-width: 100%;}
	.s-box{
		position: relative;
		white-space: nowrap;
	}
	.s-item{
		display: inline-block;
		width: 100%;
	}
	.s-item img{
		width: 100%; height: 100px;
	}
	.s-item.active{
		display: inline-block;
	}
</style>
