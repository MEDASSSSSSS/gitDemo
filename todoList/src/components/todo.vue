<template>
	<section class="todoH">
		<input type="text" class="add-input" autofocus="autofocus" placeholder="What to do next?" @keyup.enter="addL">
		<item v-bind:todo="todo" v-for="todo in filteredTodos" :key="todo.id" @del="deleteL"></item>
		<tabs v-bind:filter="filter" :todos="todos" @toggleState="toggleFilter" @clearAllCompleted="deleteAllCompleted"></tabs>
	</section>
</template>

<script>
import Store from '../store'
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0;
export default{
	name: 'todo',
	data (){
		return {
			todos:Store.fetch(),
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
	watch:{
		todos:{
			handler:function(val){
					this.todos = val;
					console.log('changed')
					Store.save(this.todos);
				},
			deep:true
			}
	},
	methods:{
		addL: function(event){
			
			this.todos.unshift({id: id++, content: event.target.value.trim(), isCompleted:false});
			Store.save(this.todos);
			event.target.value = ''
		},
		deleteL (id){
			this.todos.splice(this.todos.findIndex(todo => todo.id ===id),1);
			Store.save(this.todos);
		},
		toggleFilter(state){
			this.filter = state;
		},
		deleteAllCompleted(){
			this.todos = this.todos.filter(todo => todo.isCompleted === false);		
			Store.save(this.todos);
		}
			
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