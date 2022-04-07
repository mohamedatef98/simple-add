import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import { Colors } from '../imports/api/Color';
import 'meteor/aldeed:autoform/static'
import { AutoFormPlainTheme } from 'meteor/communitypackages:autoform-plain/static'

AutoFormPlainTheme.load()
AutoForm.setDefaultTemplate('plain')


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  Meteor.subscribe('colors')
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  colors() {
    return Colors.find({})
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.insertColorForm.helpers({
  colorsCollection() {
    return Colors;
  }
})
