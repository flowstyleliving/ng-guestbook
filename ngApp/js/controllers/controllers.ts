namespace app.Controllers {
  export class HomeController {
    public guests = [];

    public deleteGuest(guest: app.Interfaces.IGuest) {
      this.GuestService.delete(guest.id).then((res) => {
        this.guests.splice(this.guests.indexOf(guest), 1);
      }, (res) => {
        alert(res);
      });
    }
    constructor(private GuestService: app.Services.GuestService) {
      this.guests = GuestService.getAll();
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
