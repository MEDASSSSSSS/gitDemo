<template>
	<section class="todoH">
		<input type="text" class="add-input" autofocus="autofocus" placeholder="What to do next?" @keyup.enter="addL">
		<item v-bind:todo="todo" v-for="todo in filteredTodos" :key="todo.id" @del="deleteL"></item>
		<tabs v-bind:filter="filter" :todos="todos" @toggleState="toggleFilter" @clearAllCompleted="deleteAllCompleted"></tabs>
	</section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0;
export default{
	name: 'todo',
	data (){
		return {
			todos:[],
			filter:'all'
		}
	},
	components:{
		Item, Tabs
	},
	computed:{
		filteredTodos(){
			if(this.filter ==="all"){return this.todos}
			var completed = this.filter === "completed";
			return this.todos.filter(todo => todo.isCompleted === completed)
		}
	},
	methods:{
		addL: function(event){
			
			this.todos.unshift({id: id++, content: event.target.value.trim(), isCompleted:false})
			event.target.value = ''
		},
		deleteL (id){
			this.todos.splice(this.todos.findIndex(todo => todo.id ===id),1)
		},
		toggleFilter(state){
			this.filter = state;
		},
		deleteAllCompleted(){
			this.todos = this.todos.filter(todo => todo.isCompleted === false)		}
	}
}
</script>

<style lang="stylus" scoped>
	.add-input{
	  width: 300px;
	  height: 30px;
	  text-indent: 10px;
	  border-radius: 5px;
	  border: 2px solid #ddd;
	  color: #666;
	}
</style>