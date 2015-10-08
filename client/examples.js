Template.message.events({
  "click button#example-message": function(e, tmpl) {
    MaterializeModal.message({
      title: "MaterializeModal Message!",
      message: "Put your message content here!"
    });
  }
});

Template.alert.events({
  "click button#example-alert": function(e, tmpl) {
    MaterializeModal.alert({
      title: "MaterializeModal Alert!",
      message: "How alarming."
    });
  }
});

Template.error.events({
  "click button#example-error": function(e, tmpl) {
    MaterializeModal.error({
      title: "MaterializeModal Error",
      label: "Label your Error!",
      message: "Describe your error!"
    });
  }
});

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

Template.confirm.events({
  "click button#example-confirm": function(e, tmpl) {
    MaterializeModal.confirm({
      title: "MaterializeModal Confirm",
      label: "Label your Confirm!",
      message: "Yes, or no?",
      callback: function(error, response) {
        if (response.submit) {
          Materialize.toast("Yes!", 5000, "green");
        } else {
          Materialize.toast("No!", 5000, "red");
        }
      }
    });
  }
});

Template.prompt.events({
  "click button#example-prompt": function(e, tmpl) {
    MaterializeModal.prompt({
      title: "MaterializeModal Prompt",
      message: "Hi!  Enter some text.",
      callback: function(error, response) {
        if (response.submit) {
          Materialize.toast("User entered: "+response.value, 5000, "green");
        } else {
          Materialize.toast("Cancelled by user!", 5000, "red");
        }
      }
    });
  }
});

Template.form.events({
  "click button#example-form": function(e, tmpl) {
    MaterializeModal.form({
      title: "Enter some Data!",
      bodyTemplate: "my-form",
      callback: function(error, response) {
        if (response.submit) {
          // Iterate over form results & display.
          for (var field in response.value) {
            Materialize.toast(field + ": " + response.value[field], 5000, "green");
          }
        } else {
          Materialize.toast("Cancelled by user!", 5000, "red");
        }
      }
    });
  }
});

Template.reactiveDataContext.events({
  "click button#reactive-data-context": function(e, tmpl) {
    Tracker.autorun(function() {
      MaterializeModal.display({
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

Template.fullscreen.events({
  "click button#example-fullscreen": function(e, tmpl) {
    MaterializeModal.message({
      message: "This is a fullscreen modal.",
      fullscreen: true
    });
  }
});

Template.bottomsheet.events({
  "click button#example-bottomsheet": function(e, tmpl) {
    MaterializeModal.progress({
      progress: 0.76,
      message: "For example, the bottomsheet can be a useful way to indicate that the page is waiting on information to load!",
      bottomSheet: true
    });
  }
});
