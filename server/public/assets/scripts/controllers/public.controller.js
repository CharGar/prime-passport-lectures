myApp.controller('PublicController', ['getService', function(getService) {
  var vm = this;

  vm.items = getService.items;
  getService.getItems();

}]); //end PublicController
