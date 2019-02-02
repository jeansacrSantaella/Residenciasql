ng.controller('natacionController', ['$scope', '$http', 
  function($scope,$http) {


    $scope.uploadFile=function(){
      var fd=new FormData();
       console.log($scope.files);
       angular.forEach($scope.files,function(file){
       fd.append('file',file);
       });
      $http.post('http://localhost:1337/assets/images/DeportistasFotos',fd,
          {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined}                     
           }).success(function(d)
               {
                   console.log(d);
               })         
      }

}]);
        