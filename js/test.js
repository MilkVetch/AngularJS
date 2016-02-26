angular.module('colorApp',[])
	.controller('colorController',function(){
		var colorList = this;
		colorList.list = [
			{name:'red',id:'#FF0000'},
			{name:'yellow',id:'#FFFF00'},
			{name:'blue',id:'#0000FF'},
		];
		colorList.addColor = function(){
			colorList.list.push({name:colorList.name,id:colorList.id});
			colorList.name = '';
		}
	});