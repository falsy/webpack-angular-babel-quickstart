import ctrl from './controllers/controller';
import view from './views/view.html';

export default function routes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url : '/',
      template: view,
      controller: ctrl
    })

  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(true);
};