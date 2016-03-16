namespace app.Services {
  interface IGuestResourceClass extends ng.resource.IResource<IGuestResourceClass> {
    id: number;
    author: string;
    dateCreated: string;
    message: string;
  }

  interface IGuestResource extends ng.resource.IResourceClass<IGuestResourceClass> {

  }

  export class GuestService {
    private GuestResource: ng.resource.IResourceClass<IGuestResourceClass>;

    public getAll() {
      //GET
      return this.GuestResource.query();
    }

    // public getGuest() {
    //   return this.GuestResource.get({id: id});
    // }

    public add(guest: app.Interfaces.IGuest) {
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
