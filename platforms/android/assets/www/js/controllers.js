angular.module('starter.controllers', ['ionic'])

.controller('ContactCtrl', function($scope, $stateParams, $ionicPopup) {
  this.contact = {};
  this.contact.pnom = "";
  this.contact.nom = "";
  this.contact.email = "";
  this.contact.message = "";
  $scope.showAlert = function($scope) {

   var alertPopup = $ionicPopup.alert({
     title: 'Message envoyé !',
     template: 'Votre message a bien été envoyé, nous vous répondrons dans les plus brefs délais.',
     buttons:[{
        text: 'Fermer',
        type: 'button-dark',
        onTap: function(e) {}
        }]
   });
   this.contact.pnom="";
   this.contact.nom="";
   this.contact.email="";
   this.contact.message="";

   <!-- Permet de Faire une page de chargement-->
   
   $ionicLoading.show({
     noBackdrop: true,
     template: '<p class="item-icon-left"><ion-spinner></ion-spinner></p>'
   });

   $scope.$on('$ionicView.loaded', function(){
     $ionicLoading.hide();
   });

   <!--                                       -->
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
