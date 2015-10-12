Template.modalHelpers.events({
  "click button#example-modal-helpers": function(e, tmpl) {
    Materialize.modalize.display({
      title: "Modal Title",
      template: "basicModal"
    });
  }
});

Template.dataContext.events({
  "click button#example-data-context-static": function(e, tmpl) {
    Materialize.modalize.display({
      template: "aboutMe",
      age: 23,
      cats: ["kip", "fatcat"]
    });
  },
  "click button#example-data-context-reactive": function(e, tmpl) {
    Tracker.autorun(function() {
      Materialize.modalize.display({
        template: "aboutMe",
        age: Session.get("age") || 0,
        cats: Session.get("cats") || []
      });
    });
  }
});

Template.myTmpl.events({
  "submit form, dismissed": function(e, tmpl) {
    //  (1) Grab the user's input
    var result = tmpl.find("input#myInput").value;
    //  (2) Do some custom logic!
    if (result === "close the modal") {
      Materialize.toast("That's the ticket!  Closing the modal.", 5000, "green");
      Materialize.modalize.close();
    } else {
      Materialize.toast("I'm sorry, Dave, I'm afraid I can't do that.", 5000, "red");
    }
    return false;
  }
});

Template.customExample.events({
  "click button#custom-example": function(e, tmpl) {
    Materialize.modalize.display({
      title: "Modalize Example",
      template: "myTmpl",
      dismiss: false,
      fixedFooter: true,
      bottomSheet: true
    });
  }
});

Template.modalTitle.events({
  "click button#example-modal-title": function(e, tmpl) {
    Materialize.modalize.display({
      title: '<i class="material-icons left">mode_edit</i>Lorem Ipsum!',
      template: "loremIpsum"
    });
  }
});

Template.customDismiss.events({
  "dismissed": function(e, tmpl) {
    Materialize.toast("But you can never leave.", 5000, "red");
  }
});

Template.dismissBehaviour.events({
  "click button#example-custom-dismiss": function(e, tmpl) {
    Materialize.modalize.display({
      template: "customDismiss",
      dismiss: false
    });
  }
});

Template.fixedFooter.events({
  "click button#example-fixed-footer": function(e, tmpl) {
    Materialize.modalize.display({
      template: "loremIpsum",
      fixedFooter: true
    });
  }
});

Template.fullscreen.events({
  "click button#example-fullscreen": function(e, tmpl) {
    Materialize.modalize.display({
      template: "loremIpsum",
      fullScreen: true,
      fixedFooter: true
    });
  }
});

Template.bottomsheet.events({
  "click button#example-bottomsheet": function(e, tmpl) {
    Materialize.modalize.display({
      template: "loremIpsum",
      title: "This is a Bottom Sheet",
      bottomSheet: true
    });
  }
});
