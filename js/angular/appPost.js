
var myApp = angular.module('app', ['angularUtils.directives.dirPagination','ngSanitize', 'ngMask']);

myApp.controller('blog-spa', ['$scope', '$window', '$http', function($scope,$window,$http) {

$http.get('http://www.cscwellnesscenter.com.mx/blog-spa/?rest_route=/wp/v2/posts&_embed',{
  headers:{'Authorization': 'basic' +btoa('user_spa:4N@i$%hbbJ@9EHESIQ') }

}).then(function (res){
  $scope.postSpa = res.data;
  console.log($scope.postSpa);
});
}]);  
 
myApp.controller('tips',['$scope', '$window','$http', function($scope,$window,$http) {

$http.get('http://www.cscwellnesscenter.com.mx/blog-spa/?rest_route=/wp/v2/categories', {
  headers: {'Authorization': 'basic' +btoa('user_noticias:DNHV$Dr0(*jJEg0uMV')}
      
}).then(function (res){
    $scope.postTips = res.data;
    console.log($scope.postTips);
});
}]);


myApp.controller('entradasNotices', ['$scope','$window','$http', function($scope,$window,$http) {

  $http.get('http://www.coine.lat/coine_noticias/?rest_route=/wp/v2/posts&_embed', {
    headers: {'Authorization': 'Basic '+btoa('user_noticias:DNHV$Dr0(*jJEg0uMV') }
   
  }).then(function (res){
    $scope.postNotices = res.data;
    console.log($scope.postNotices);
  });
}]);



