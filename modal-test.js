if (Meteor.isClient) {
  Template.body.rendered = function() {
    MaterializeModal.alert();
  };
}
