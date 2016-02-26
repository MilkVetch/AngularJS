angular.module('directoryApp',[])
	.controller('directoryController', function() {

		var dirList = this;

		dirList.list = [
			{name:'Khee', age: 27},
			{name:'King', age: 48},
			{name:'Gold', age: 50},
			{name:'Poem', age: 46}
		];

		dirList.addPerson = function() {
			dirList.list.push({name: dirList.name, age: dirList.age});
			dirList.name = '';
			dirList.age = 0;
		};
	});