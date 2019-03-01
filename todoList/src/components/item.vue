<template>
	<div :class="['todo-item', todo.isCompleted? 'completed':'']">
		<input type="checkbox" class="toggle" v-model="todo.isCompleted">
		<label for="">{{todo.content}}</label>
		<button class="del-btn" @click="delL"></button>
	</div>
</template>

<script>
export default{
	data (){
		return{

		}
	},
	props:{
		todo:{
			type: Object,
			required:true,
		}
	},
	methods:{
		delL:function (){
			this.$emit('del',this.todo.id)
		}
	}
}
</script>

<style lang="stylus" scoped>
	.todo-item{
		position: relative;
		background-color: #fff;
		font-size: 24px;
		border-bottom: 1px solid rgba(0,0,0,0.06);
		&:hover{
			.del-btn:after{
				content:'x';
				font-size:20px;
			}
		}
		label{
			white-space: pre-line;
			word-break:break-all;
			padding: 15px 60px 15px 15px;
			margin-left: 45px;
			display: block;
			line-height: 1.2;
			transition:color 0.4s;
		}
		&.completed{
			label{
				color: #d9d9d9;
				text-decoration: line-through;
			}
		}
	}
	.toggle{
		text-align: center;
		width: 40px;
		height: 40px;
		position: absolute;
		top: 0;
		left: 0;
		box-sizing: border-box;
		border:3px solid #d9d9d9;
		border-radius:50%;
		appearance:none;
		outline: none;
		background-color:#fff;
		&:checked{
			background-color:green;
		}
	}
	.del-btn{
		position: absolute;
		top: 0;
		right:10px;
		color: #333;
		border:none;
		appearance:none;
		outline: none;
	}
</style>