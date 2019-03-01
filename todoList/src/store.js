const STORAGE_KEY = 'todos-vuejs'
export default{
	fetch:function (){
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]')
	},
	save:function (item){
		window.localStorage.setItem(STORAGE_KEY, window.JSON.stringify(item))
		console.log(1)
	}
}