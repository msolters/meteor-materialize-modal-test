
Template.loading.events({
  "click button#example-loading": function(e, tmpl) {
    MaterializeModal.loading();
  }
});

Template.progress.events({
  "click button#example-progress": function(e, tmpl) {
    var step = 0;
    var steps = [ "Starting up", "Computing checksums", "Verifying sanity", "Losing sanity", "Oh, there it is again.", "Questioning existence", "All Done!" ];
    var nextStep = function() {
      // (1)  Compute progress of this step
      var progress = (step+1) / steps.length;
      // (2) Update progress modal!
      MaterializeModal.progress({
        progress: progress,
        message: steps[step]
      });
      // (3) If there's another step, let's go to it in 1 second.
      if (step+1 === steps.length) {
        return;
      } else {
        step++;
        Meteor.setTimeout(nextStep, 1000);
      }
    }
    nextStep();
  }
});

Template.reactiveDataContext.events({
  "click button#reactive-data-context": function(e, tmpl) {
    Tracker.autorun(function() {
      Materialize.modalize.display({
        bodyTemplate: "aboutMe",
        age: Session.get("age") || 0,
        cats: Session.get("cats") || []
      });
    });
  }
});

Template.buttons.events({
  "click button#example-buttons": function(e, tmpl) {
    MaterializeModal.confirm({
      message: "Here's an example with custom HTML content!",
      closeLabel: '<i class="material-icons left red-text">exit_to_app</i> No',
      submitLabel: '<i class="material-icons left green-text">done</i> Yes'
    });
  }
});

Template.fixedFooter.events({
  "click button#example-fixed-footer": function(e, tmpl) {
    MaterializeModal.confirm({
      bodyTemplate: "loremIpsum",
      fixedFooter: true
    });
  }
});

Template.customFooter.events({
  "click button#example-custom-footer": function(e, tmpl) {
    MaterializeModal.message({
      message: "Here's a simple modal with a custom footer!",
      footerTemplate: "myFooter"
    });
  }
});

Template.myTmpl.events({
  "click button[data-custom-action], submit form": function(e, tmpl) {
    //  (1) Grab the user's input
    var result = tmpl.find("input#myInput").value;
    //  (2) Do some custom logic!
    if (result === "close the modal") {
      Materialize.toast("That's the ticket!  Closing the modal.", 5000, "green");
      Materialize.modalize.close();
    } else {
      Materialize.toast("Sorry, that's not the right command.", 5000, "red");
    }
    return false;
  }
});

Template.customExample.events({
  "click button#example-custom-footer-events": function(e, tmpl) {
    Materialize.modalize.display({
      bodyTemplate: "myTmpl",
      footerTemplate: "myFtr"
    });
  }
});

Template.fullscreen.events({
  "click button#example-fullscreen": function(e, tmpl) {
    Materialize.modalize.message({
      message: "This is a fullscreen modal.",
      fullscreen: true
    });
  }
});

Template.bottomsheet.events({
  "click button#example-bottomsheet": function(e, tmpl) {
    Materialize.modalize.progress({
      progress: 0.76,
      message: "For example, the bottomsheet can be a useful way to indicate that the page is waiting on information to load!",
      bottomSheet: true
    });
  }
});
