angular.module('basestationApp')
  .factory('Environments', function($firebaseArray, FirebaseUrl){
    var ref = new Firebase(FirebaseUrl+'environments');
    var environments = $firebaseArray(ref);

    return environments;
  });
