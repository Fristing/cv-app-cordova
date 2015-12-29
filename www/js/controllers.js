angular.module('starter.controllers', ['ionic'])

.controller('ContactCtrl', function($scope, $stateParams, $ionicPopup, $http) {
  this.contact = {};

  <!-- Recrypte les données pour passé en PHP -->
  Object.toparams = function ObjecttoParams(obj) {
      var p = [];
      for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
      }
      return p.join('&');
  };
  <!--                    -->

  $scope.showAlert = function($scope) {
    if (((typeof this.contact == "undefined")||(typeof this.contact.nom == "undefined")||(typeof this.contact.pnom == "undefined")||(typeof this.contact.email == "undefined")||(typeof this.contact.message == "undefined"))||((this.contact.nom == "")||(this.contact.pnom == "")||(this.contact.email == "")||(this.contact.message == ""))) {
      var alertPopup = $ionicPopup.alert({
            title: 'Message non envoyé !',
            template: 'Veullez renseigner tous les champs',
            buttons:[{
               text: 'Fermer',
               type: 'button-assertive',
               onTap: function(e) {}
               }]
          });
    }else{



      <!-- Envoie les données -->
      //Vos données
      var FormData = {

      };


      var request = $http({
          method: "post",
          url: "Votre Url",
          data: Object.toparams(FormData),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
      });


      request.success(function (data) {
        console.log(data);
          var alertPopup = $ionicPopup.alert({
            title: 'Message envoyé !',
            template: 'Votre message a bien été envoyé, je vous répondrai dans les plus brefs délais.',
            buttons:[{
               text: 'Fermer',
               type: 'button-dark',
               onTap: function(e) {}
               }]
          });
      });

      request.error(function (data) {
        console.log(data);
          var alertPopup = $ionicPopup.alert({
            title: 'Message non envoyé !',
            template: 'Problèmes de connexion, Veuillez réessayer plus tard.',
            buttons:[{
               text: 'Fermer',
               type: 'button-assertive',
               onTap: function(e) {}
               }]
          });
      });
      <!--                                       -->
      this.contact.pnom="";
      this.contact.nom="";
      this.contact.email="";
      this.contact.message="";
    }
 };



})

.controller('DefaultCtrl', function($scope, $ionicLoading) {
  <!-- Permet de Faire une page de chargement-->

  $ionicLoading.show({
    noBackdrop: true,
    template: '<p class="item-icon-left"><ion-spinner></ion-spinner></p>'
  });

  $scope.$on('$ionicView.loaded', function(){
    $ionicLoading.hide();
  });

  <!--                                       -->

});
