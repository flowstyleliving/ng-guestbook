namespace Controllers {
  export class GuestEditController {
    public guest: app.Interfaces.IGuest;

    public guestEdit() {
      this.GuestService.edit(this.guest).then((res) => {
        this.$state.go('guestDetails', {id: this.guest.id});
      })
    }

    constructor(
      private $stateParams: ng.ui.IStateParamsService,
      private $state: ng.ui.IStateService,
      private GuestService: app.Services.GuestService
    ) {
        this.guest = GuestService.getGuest($stateParams['id']);
    }
  }
  angular.module('app').controller('GuestEditController', GuestEditController);
}
