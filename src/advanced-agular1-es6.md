title: Angular 1 with ES6 and Webpack (my way)
author:
  name: Falko Krause
  github: select
  url: https://github.com/select/learn-web-development
output: dist/advanced-agular1-es6.html
theme: ./cleaver-select-theme
controls: true

--
# Angular 1 with ES6 and Webpack

## My approach

--
### Controllers the old way

This is how I organized my code a year ago with <br> Angular 1.

It might not be perfect, I was learing Angular but it felt like a clean solution. 

--
```
o
├─o index.html
└─/ app
  ├─o app.js
  ├─o router.js
  ├─/ welcome
  │ ├─o welcome.controller.html
  │ └─o welcome.controller.js
  └─/ bower_components
    ├─ …
    └─ …
```

--
`index.html`
```html
<!DOCTYPE html>
<html>
<head>
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-route/angular-route.js"></script>
    <script src="app/app.js" type="text/javascript"></script>
    <script src="app/welcome/welcome.controller.js" type="text/javascript"></script>
    <script src="app/router.js" type="text/javascript"></script>
</head>
<body ng-app="app">
    <div ng-view> </div>
</body>
</html>
```

--
`app/app.js`
```javascript
var app = angular.module('app', [
  'ngRoute',
]);

```

--
`app/welcome/welcome.controller.js`
```javascript
angular.module('app').controller('WelcomeController', ['$scope',
  function($scope) {
    $scope.message = 'Hello World';
  }
]);

```

`app/welcome/welcome.controller.html`
```html
<h1>Message: {{message}}</h1>
```

--
`app/router.js`
```javascript
angular.module('app').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/welcome', {
      templateUrl: 'app/welcome/welcome.controller.html',
      controller: 'WelcomeController',
    }).
    …
    otherwise({
      redirectTo: '/welcome'
    });
  }
]);
```

--
### Functional models

What I liked about this code organisation is, that I created functional models that are easy to work with.
<style>
  .neighbor-smaller + p + pre {
   font-size: 0.4em; 
  }
</style>
<p class="neighbor-smaller"></p>
```
o
├─o index.html
└─/ app
  ├─o app.js
  ├─o router.js
  ├─/ users
  │ ├─o users.controller.html
  │ ├─o users.controller.js
  │ └─o users.service.js
  ├─/ stores
  │ ├─o stores.controller.html
  │ ├─o stores.controller.js
  │ └─o stores.service.js
  ├─/ articles
  │ ├─o articles.controller.html
  │ ├─o articles.controller.js
  │ └─o articles.service.js
  └─/ bower_components
    ├─ …
    └─ …
```


--
### Angular 2 with ES6

Then I learned Angular 2 half a year ago.

I enjoyed especially the Web-Component philosophy.

