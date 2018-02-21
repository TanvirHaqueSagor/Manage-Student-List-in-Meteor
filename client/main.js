import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
student=new Meteor.Collection("Student")



 Template.form.events({
 
 'submit #insert-form':function(e,t){
 e.preventDefault();
 var name=t.find('#name').value;
 var email=t.find('#email').value;
 var phone=t.find('#phone').value;
 var dateOfBirth=t.find('#dateOfBirth').value;
 student.insert({name:name,email:email,phone:phone,dateOfBirth:dateOfBirth});
 }
 });
 Template.form.helpers({
 'records':function(){
 return student.find({});
 }
 })
 Template.form.onRendered(function() {
    this.$('.datetimepicker').datetimepicker({ format: "DD-MM-YYYY" });
});

 