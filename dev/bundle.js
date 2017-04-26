var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function($stateProvider){
// An array of state definitions
  var states = [
    {
      name: 'layouts',
      url: '',
      abstract: true,
      views: {
        'header': {
          templateUrl: 'templates/header.html'
        },
        'footer':{
          templateUrl: 'templates/footer.html'
        }
      }
    },

    {
      name: 'home',
      url: '/',
      views: {
        'container@': {
          templateUrl: 'templates/home.html'
        }
      }
    },

    {
      name: 'other',
      url: '/other',
      views: {
        'container@': {
          templateUrl: 'templates/other.html'
        }
      }
    },

    {
      name: 'listas',
      url: '/listas',
      views: {
        'container@': {
          templateUrl: 'templates/listas/list.html'
        }
      }
    }

  ]

  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });

});
//favoritosController.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlci5qcyIsImNvbnRyb2xsZXJzL2Zhdm9yaXRvc0NvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZEQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbXlBcHAgPSBhbmd1bGFyLm1vZHVsZSgnbXlBcHAnLCBbJ3VpLnJvdXRlciddKTtcbm15QXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlcil7XG4vLyBBbiBhcnJheSBvZiBzdGF0ZSBkZWZpbml0aW9uc1xuICB2YXIgc3RhdGVzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdsYXlvdXRzJyxcbiAgICAgIHVybDogJycsXG4gICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdoZWFkZXInOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaGVhZGVyLmh0bWwnXG4gICAgICAgIH0sXG4gICAgICAgICdmb290ZXInOntcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9mb290ZXIuaHRtbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICB7XG4gICAgICBuYW1lOiAnaG9tZScsXG4gICAgICB1cmw6ICcvJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdjb250YWluZXJAJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2hvbWUuaHRtbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICB7XG4gICAgICBuYW1lOiAnb3RoZXInLFxuICAgICAgdXJsOiAnL290aGVyJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdjb250YWluZXJAJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL290aGVyLmh0bWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAge1xuICAgICAgbmFtZTogJ2xpc3RhcycsXG4gICAgICB1cmw6ICcvbGlzdGFzJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdjb250YWluZXJAJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2xpc3Rhcy9saXN0Lmh0bWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgXVxuXG4gIC8vIExvb3Agb3ZlciB0aGUgc3RhdGUgZGVmaW5pdGlvbnMgYW5kIHJlZ2lzdGVyIHRoZW1cbiAgc3RhdGVzLmZvckVhY2goZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAkc3RhdGVQcm92aWRlci5zdGF0ZShzdGF0ZSk7XG4gIH0pO1xuXG59KTsiLCIvL2Zhdm9yaXRvc0NvbnRyb2xsZXIuanMiXX0=
