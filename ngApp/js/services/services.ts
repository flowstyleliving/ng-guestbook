namespace app.Services {
  interface IGuestResourceClass extends ng.resource.IResource<IGuestResourceClass>, app.Interfaces.IGuest {

  }

  interface IGuestResource extends ng.resource.IResourceClass<IGuestResourceClass> {

  }

  export class GuestService {
    private GuestResource: IGuestResource;

    public getAll() {
      //GET
      return this.GuestResource.query();
    }

    public getAllSync() {
      return this.GuestResource.query().$promise;
    }
    
    public getGuest(id: number) {
      return this.GuestResource.get({id: id});
    }

    public add(guest: app.Interfaces.IGuest) {
      guest.dateCreated = new Date();
      return this.GuestResource.save(guest).$promise;
    }

    public edit(guest: app.Interfaces.IGuest) {
      return this.GuestResource.save(guest).$promise;
    }

    public delete(entryId: number) {
      return this.GuestResource.delete({id: entryId}).$promise;
    }

    constructor(private $resource: ng.resource.IResourceService) {
      this.GuestResource = <IGuestResource>$resource('/api/guestbook/:id')
    }
  }
    angular.module('app').service('GuestService', GuestService);
}
