var baidu=angular.module('baidu',['ngRoute']);


baidu.filter('toChinese',[function(){
	return function(e){
		return e?'开':'关';
	}
}])

baidu.controller('caCtrl', ['$scope', function($scope){
	$scope.data=[
		{name:'常用网址1',des:'好好学习',state:true},
		{name:'常用网址2',des:'好好学习',state:false},
		{name:'常用网址3',des:'好好学习',state:true},
		{name:'常用网址4',des:'好好学习',state:false},
 	]
}])	
baidu.controller('homeCtrl', ['$scope', function($scope){
	
}])

baidu.controller('indexCtrl', ['$scope', function($scope){
	
}])


baidu.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/',{
		controller:'homeCtrl',
		templateUrl:'template/baidu.html'
	}).when('/card',{
		controller:'caCtrl',//创建了一个独立的控制器。
		templateUrl:'template/card.html'

	})
 }])
