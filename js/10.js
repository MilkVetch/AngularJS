angular.module('dirApp',[])
	.controller('dirController',function(){
		var dirList = this;
		dirList.list = [
			{name:'Alex',age:25,img:"https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"},
			{name:'Bob',age:16,img:"https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"},
			{name:'Tidy',age:32,img:"https://s3.amazonaws.com/uifaces/faces/twitter/ritu/128.jpg"},
			{name:'Jim',age:58,img:"https://s3.amazonaws.com/uifaces/faces/twitter/davidburlton/128.jpg"}
		];
	});