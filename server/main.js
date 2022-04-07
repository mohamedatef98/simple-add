import { Meteor } from 'meteor/meteor';
import { Colors } from '../imports/api/Color';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('colors', () => {
  return Colors.find({})
})

Meteor.methods({
  'add'({color}) {
    const newColor = {
      color
    }
    console.log(newColor)
    Colors.insert(newColor)
  }
})
