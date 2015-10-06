if (Meteor.isClient) {

  //  (1) Create a reactive-var.
  //      Make sure we can access it from the console.
  window.exampleMessage = new ReactiveVar();
  //  (2) Set it to a value.
  window.exampleMessage.set("Hello world!");

  //  (3) Create a MaterializeModal.
  Template.body.rendered = function() {
    MaterializeModal.message({ bodyTemplate: "reactiveModal", title: "Reactive Modal Example!", exampleMessage: window.exampleMessage });
  };

  //  (4) We just create simple .get() helpers to grab the
  //      value of any reactive-vars we passed into our
  //      MaterializeModal.
  Template.reactiveModal.helpers({
    exampleMessage: function() {
      return this.exampleMessage.get();
    }
  });

}
