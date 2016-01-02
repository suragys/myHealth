angular.module('myHealth').directive('aptList', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/apts/apt-list/apt-list.html',
      controllerAs: 'aptList',
      controller: function($scope, $reactive) {
        $reactive(this).attach($scope);

        this.newApt ={};

        this.subscribe('apts');

        this.helpers({
          apts: () => {
            return Apts.find({});
          }
        });

        this.addApt = () => {
          this.newApt.owner = Meteor.user()._id;
        	Apts.insert(this.newApt);
        	this.newApt = {};
        };

        this.removeApt = (apt) => {
        	Apts.remove({_id: apt._id});
        }
      }
    }
  });

/*
angular.module('myHealth').directive('aptList', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/apts/apt-list/apt-list.html',
      controllerAs: 'aptList',
      controller: function($scope, $reactive) {
        $reactive(this).attach($scope);

        this.newApt ={};
        // Have to remove pagination afterwards
        this.perPage = 5;
        this.page = 1;
        // Do this sorting for date in the future
        this.sort = {
          docName: 1
        };
        this.orderProperty = '1';
        this.searchText = '';

        this.subscribe('apts', () => {
          return [
            {
              limit: parseInt(this.perPage),
              skip: parseInt((this.getReactively('page') -1) * this.perPage),
              sort: this.getReactively('sort')
            },
            this.getReactively('searchText')
          ]
        });

        this.helpers({
          apts: () => {
            return Apts.find({} , {sort : this.getReactively('sort')});
          },
          aptsCount: () => {
            return Counts.get('numberOfApts');
          }
        });

        this.addApt = () => {
          this.newApt.owner = Meteor.user()._id;
          Apts.insert(this.newApt);
          this.newApt = {};
        };

        this.removeApt = (apt) => {
          Apts.remove({_id: apt._id});
        };

        this.pageChanged = (newPage) => {
          this.page = newPage;
        };

        this.updateSort = () => {
          this.sort = {
            name: parseInt(this.orderProperty)
          }
        };
      }
    }
  });
  */