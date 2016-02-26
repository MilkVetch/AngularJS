angular.module('directoryApp',[])
	.controller('directoryController',function(){
		var dirList = this;
		dirList.toggle = false;
		dirList.list = [
			{name:'ALex',age:20},
			{name:'Bob',age:27},
			{name:'Caleb',age:28},
			{name:'David',age:31},
			{name:'Elizabeth',age:92},
			{name:'Forest',age:29},
		];
	});