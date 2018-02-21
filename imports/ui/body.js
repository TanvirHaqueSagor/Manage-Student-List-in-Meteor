import { Template } from 'meteor/templating';
 
import { Tasks } from '../api/tasks.js';
import './body.html';
 
 /*
Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});
 */
 
 
Template.body.helpers({
  records() {
  var findCollection = Records.find().fetch();
  console.log(findCollection);
    return findCollection;
  },
});
 
Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
 const target = event.target;    
 const name=target.name.value;
 const email=target.email.value;
 const phoneNumber=target.phoneNumber.value;
 const dateOfBirth=target.dateOfBirth.value;
 
   // Insert a task into the collection
   // Tasks.insert({
   //   text,
   //   createdAt: new Date(), // current time
   // });
	
	var myData = {
   name: "value 1...",
   email: "value 2...",
   phoneNumber: "value 3...",
   dateOfBirth: "value 4...",
}
	
	
	Records.insert(myData);
	
 
    // Clear form
    target.name.value = '';
    target.email.value = '';
    target.phoneNumber.value = '';
    target.dateOfBirth.value = '';
  },
});