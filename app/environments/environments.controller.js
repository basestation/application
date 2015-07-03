angular.module('basestationApp')
  .controller('EnvironmentsCtrl', function($state, Auth, environments){
    var environmentsCtrl = this;
    environmentsCtrl.environments = environments;
    environmentsCtrl.newEnvironment = {
      name: '',
      description: ''
    };
    environmentsCtrl.createEnvironment = function(){
      environmentsCtrl.environments.$add(environmentsCtrl.newEnvironment).then(function(ref){
        $state.go('environments.create', {environmentId: ref.key()});
      });
    };

  });
