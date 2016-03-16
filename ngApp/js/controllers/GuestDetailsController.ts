namespace app.Controllers {
  export class GuestDetailsController {
    public guest: app.Interfaces.IGuest;

    constructor(
      private $stateParams: ng.ui.IStateParamsService,
      private $state: ng.ui.IStateService,
      private GuestService: app.Services.GuestService
    ) {
      this.guest = GuestService.getGuest($stateParams['id']);

    }
  }
  angular.module('app').controller('GuestDetailsController', GuestDetailsController);
}
