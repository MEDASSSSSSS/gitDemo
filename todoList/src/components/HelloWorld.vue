<template>
  <div class="hello">
   
    <input type="text" v-model='inputT' v-on:focus="getO" @keyup.enter="createO">
    <button @click="createO">Submit</button>
    <ul>
      <li v-for='obj in objs' v-bind:class="{finished:obj.isFinished}" @click="toggleFinished(obj)">{{obj.label}}</li>
    </ul>
  </div>
</template>

<script>
import Store from '../store'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'This is what I need to do',
      inputT: 'Please input an object',
      objs:Store.fetch()
    }
  },
  methods:{
    getO:function(event){
      this.inputT = event.target.data;
    },
    toggleFinished: function(obj){
      obj.isFinished = !obj.isFinished;
    },
    createO: function(){
      if(this.inputT != 'Please input an object'){
        this.objs.push({label:this.inputT, isFinished:false});
        this.inputT = 'Please input an object';
      }
    }
  },
  watch:{
    objs:{
      handler: function(val){
        Store.save(val)
      },
      deep:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  border: 1px solid #ddd;
  border-radius: 5px;
  line-height: 30px;
  margin: 5px 10px;
}
.finished{
  background: #06f;
  color: #fff;
}
a {
  color: #42b983;
}
input{
  width: 300px;
  height: 30px;
  text-indent: 10px;
  border-radius: 5px;
  border: 2px solid #ddd;
  color: #666;
}
button{
  width: 60px;
  height: 30px;
  line-height: 30px;
  background: #06f;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
}
</style>
