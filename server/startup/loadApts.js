// if(Meteor.isServer) {
	Meteor.startup(function(){
		if(Apts.find().count() === 0){
			var apts = [
       {	
         'docName': 'Doctor 1',
         'hospitalName':'hospital 1',
         'location':'location 1',
         'date':'date1',
         'time':'time',
         'description': 'issue 1.',
         'patientName': 'patient 1'
       },
       {
       	 'docName': 'Doctor 2',
         'hospitalName':'hospital 2',
         'location':'location 2',
         'date':'date2',
         'time':'time2',
         'description': 'issue 2.',
         'patientName': 'patient 2'
       },
       {
       	 'docName': 'Doctor 3',
         'hospitalName':'hospital 3',
         'location':'location 3',
         'date':'date3',
         'time':'time3',
         'description': 'issue 3.',
         'patientName': 'patient 3'
       }
     ];
     for (var i = 0; i < apts.length; i++) {
     	Apts.insert(apts[i]);
     }
	}
  });
// }