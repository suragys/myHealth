Meteor.publish("apts", function () {
  return Apts.find({
    $or: [
      {
        $and: [
          {"public": true},
          {"public": {$exists: true}}
        ]
      },
      {
        $and: [
          {owner: this.userId},
          {owner: {$exists: true}}
        ]
      }
    ]
  });
});

// Meteor.publish("apts", function (options, searchString) {
//   if (!searchString || searchString == null) {
//     searchString = '';
//   }

//   let selector = {
//     docName: { '$regex' : '.*' + searchString || '' + '.*', '$options' : 'i' },
//     $or: [
//       {
//         $and: [
//           {'public': true},
//           {'public': {$exists: true}}
//         ]
//       },
//       {
//         $and: [
//           {owner: this.userId},
//           {owner: {$exists: true}}
//         ]
//       }
//     ]
//   };

//   Counts.publish(this, 'numberOfApts', Apts.find(selector), {noReady: true});
//   return Apts.find(selector, options);
// });