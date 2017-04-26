myApp.controller('navbar', function($scope) {
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
  $scope.search={
    query: "Search...",
    options: ["Movies","People","Anything"],
    by: "Movies"
  }
});
