<template>
	<label class="radio">
		<span class="radio-label" v-if="options.title">{{options.title}}</span>
		<input type="radio" :name="options.name" v-model="modelVal" :disabled="options.disabled" :value="options.val" >
		<span class="radio-label">{{msg}}</span>
	</label>
</template>

<script>
	export default {
		name: 'my-radio',
		props: ['options'],
		data: function(){
			return {
				modelVal: this.model,
				name: this.options.name,
				val: this.options.val,
				msg: this.options.msg,
				disabled: this.options.disabled || false
			}
		},
	}
</script>

<style>
	
	.radio input[type="radio"] {
	  position: absolute;
	  opacity: 0;
	}
	.radio input[type="radio"] + .radio-label:before, 
	.radio input[type="radio"] ~ .radio-label:before {
	  content: '';
	  width: 1.2em;
	  height: 1.2em;
	  position: relative;
	  display: inline-block;
	  vertical-align: top;
	  cursor: pointer;
	  margin: 0 10px;
	  -webkit-transition: all 250ms ease;
	  transition: all 250ms ease;
	  background: #f4f4f4;
	  border-radius: 100%;
	  border: 1px solid #B39775;
	}
	.radio input[type="radio"]:checked + .radio-label:before, 
	.radio input[type="radio"]:checked ~ .radio-label:before {
	  background-color: #B39775;
	  box-shadow: inset 0 0 0 4px #f4f4f4;
	}
	.radio input[type="radio"]:focus + .radio-label:before, 
	.radio input[type="radio"]:focus ~ .radio-label:before {
	  border-color: #B39775;
	}
	.radio input[type="radio"]:disabled + .radio-label:before, 
	.radio input[type="radio"]:disabled ~ .radio-label:before {
	  box-shadow: inset 0 0 0 4px #f4f4f4;
	  border-color: gray;
	  background: gray;
	}
	.radio input[type="radio"] + .radio-label:empty:before, 
	.radio input[type="radio"] ~ .radio-label:empty:before {
	  margin: 0;
	}
</style>
