angular.module('myHealth').directive('aptDetails', function () {
    return {
      restrict: 'E',
      templateUrl: 'client/apts/apt-details/apt-details.html',
      controllerAs: 'aptDetails',
      controller: function ($scope, $stateParams, $reactive) {
      	$reactive(this).attach($scope);

        this.subscribe('apts');
        this.subscribe('users');

      	this.helpers({
      		apt: () => {
            var apt = Apts.findOne({_id: $stateParams.aptId});
      			return apt;
      		},
          users: () => {
            return Meteor.users.find({});
          }
      	});

        this.map = {
        center: {
          latitude: 45,
          longitude: -73
        },
        zoom: 8,
        events: {}
        };

      	this.save = () => {
          Apts.update({_id: $stateParams.aptId}, {
            $set: {
              docName: this.apt.docName,
              hospitalName: this.apt.hospitalName,
              location: this.apt.location,
              date: this.apt.date,
              description: this.apt.description,
              'public': this.apt.public
              // remove public 
            }
      		  }, (error) => {
                  if (error) {
                    console.log('Oops, unable to update the apt...');
                  }
                  else {
                    console.log('Done!');
                  }
          });
        };
      }
    }
  });