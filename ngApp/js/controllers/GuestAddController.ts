namespace app.Controllers {
  export class GuestAddController {
    public guest: app.Interfaces.IGuest = {id: null, author: '', dateCreated: null, message: null};

    public guestAdd() {
      this.GuestService.add(this.guest).then((res) => {
        this.$state.go('Home');
      }, (err) => {
        alert(err);
      })
    }
    constructor(private GuestService: app.Services.GuestService, private $state: ng.ui.IStateService) {

    }
  }
  angular.module('app').controller('GuestAddController', GuestAddController);
}
