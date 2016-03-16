namespace app.Controllers {
  export class HomeController {
    public guests: Array<app.Interfaces.IGuest> = [];
    public isLoading = true;

    public deleteGuest(guest: app.Interfaces.IGuest) {
      this.GuestService.delete(guest.id).then((res) => {
        this.guests.splice(this.guests.indexOf(guest), 1);
      }, (res) => {
        alert(res);
      });
    }
    constructor(private GuestService: app.Services.GuestService) {
      GuestService.getAllSync().then((res) => {
        for(let g of res) {
          g.dateCreated = Date.parse(g.dateCreated.toString());
          this.guests.push(g)
        }
        this.isLoading = false;
      })
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
