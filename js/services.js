app.factory('jsonService', function($http) {
    var promise;
    var jsondata = {
        get: function() {
            if ( !promise ) {
                var promise =  $http.get('../json/teas.json').success(function(response) {
                    return response.data;
                });
                return promise;
            }
        }
    };
    return jsondata;
});

app.factory('catsService', function () {
  var categories = []
  var jsondata = {
      get: function (data) {
        data.forEach(function (item) {
           item.categories.forEach(function (cat) {
             if (($.inArray(cat, categories)) >= 0) {
               console.log('i exsist');
             }else {
               categories.push(cat)
             }
           })
         })
      return categories
    }
  }
  return jsondata
})
