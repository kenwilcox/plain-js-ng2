(function() {
  var HelloApp = 
    ng.core
    .Component({
      selector: 'hello-app',
      template: '<h1>Hello Angular 2!</h1>'
    })
    .Class({
      constructor: function() {}
    });

  var MyName = 
    ng.core
    .Component({
      selector: 'my-name',
      template: '<p>My name is mudd</p>'
    })
    .Class({
      constructor: function() {}
    });
  
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(HelloApp);
    ng.platform.browser.bootstrap(MyName);
  });
})();
