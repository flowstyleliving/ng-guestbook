namespace app.Filters {
  angular.module('app').filter('truncate', () => {
    return function(str: string, amt) {
        amt = parseInt(amt);
        let result = str.substr(0, amt - 3);

        if(amt >= str.length) return str;
        else return result + "...";
      };
  });
}
