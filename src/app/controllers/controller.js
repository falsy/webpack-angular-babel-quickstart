class Controller {

  constructor($scope, Init) {
    this.$scope = $scope;
    this.Init = Init;

    this.testScopeView();
  }

  testScopeView() {
    this.$scope.test = this.Init.testText();
  }

  
}

export default Controller;