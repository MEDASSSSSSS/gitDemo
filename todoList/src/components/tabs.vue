<template>
	<div class="helper">
		<span class="left">
			{{inCompletedItemsLen}} items left
		</span>
		<span class="tabs">
			<span v-for="state in states" :key="state" :class="['state', filter === state? 'active':'']" @click="toggleFilter(state)">
				{{state}}
			</span>
		</span>
		<span class="clear" @click="clearAllCompleted">Clear Completed</span>
	</div>
</template>

<script>
export default{
	props:{
		todos:{
			type:Array,
			require:true
		},
		filter:{
			type: String,
			require:true
		}

	},
	data(){
		return {
			states:['all', 'active','completed'],
			
		}
	},
	computed:{
		inCompletedItemsLen(){
			return this.todos.filter(todo => !todo.isCompleted).length
		}
	},
	methods:{
		clearAllCompleted(){
			this.$emit('clearAllCompleted')
		},
		toggleFilter(state){
			this.$emit('toggleState',state);
		}
	}
}
</script>

<style lang="stylus">
.helper{
	background:#fff;
	display:flex;
	.left{
		left:10px;
		font-size:12px;
		line-height:30px;
		margin-left:10px;
	}
	.tabs{
		flex-grow:1;
		float:left;
		left:50%;

		.state{
			text-align:center;
			font-size:12px;
			line-height:30px;
			margin:0 5px;
			padding:2px 5px;
		}
		.active{
			border:1px solid #333;
			border-radius:2px;
		}
	}
	.clear{
		right:10px;
		font-size:12px;
		line-height:30px;
		margin-right:10px;
	}
}
	
</style>