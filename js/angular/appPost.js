//controlador obtiene post
var myApp = angular.module('app', ['angularUtils.directives.dirPagination','ngSanitize', 'ngMask']);

myApp.controller('blog-spa', ['$scope', '$window', '$http', function($scope,$window,$http) {

$http.get('http://www.cscwellnesscenter.com.mx/blog-spa/?rest_route=/wp/v2/posts&_embed&categories=1',{
  headers:{'Authorization': 'basic' +btoa('user_spa:4N@i$%hbbJ@9EHESIQ') }

}).then(function (res){
  $scope.postSpa = res.data;
  console.log($scope.postSpa);
});
}]);  
 
//controlador obtiene tips
myApp.controller('tips',['$scope', '$window','$http', function($scope,$window,$http) {

$http.get('http://www.cscwellnesscenter.com.mx/blog-spa/?rest_route=/wp/v2/posts&_embed&categories=5', {
  headers: {'Authorization': 'basic' +btoa('user_spa:4N@i$%hbbJ@9EHESIQ')}
      
}).then(function (res){
    $scope.postTips = res.data;
    console.log($scope.postTips);
});
}]);




