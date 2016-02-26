angular.module('tutorialApp',[])
	.controller('tutorialController',function(){
		var tList = this;
		tList.list = [
			{id:1,num:'01.',name:'Model'},
			{id:2,num:'02.',name:'Repeat'},
			{id:3,num:'03.',name:'Init'},
			{id:4,num:'04.',name:'Controller 1'},
			{id:5,num:'05.',name:'Submit'},
			{id:6,num:'06.',name:'Controller 2'},
			{id:7,num:'07.',name:'Filter'},
			{id:8,num:'08.',name:'Class 1'},
			{id:9,num:'09.',name:'If, Show, Hide'},
			{id:10,num:'10.',name:'Img, Src'},
			{id:11,num:'11.',name:'Include'}
		];
	});