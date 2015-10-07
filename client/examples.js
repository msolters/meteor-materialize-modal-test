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

/*
//  (1) Create a reactive-var.
//      Make sure we can access it from the console.
window.exampleMessage = new ReactiveVar();
//  (2) Set it to a value.
window.exampleMessage.set("Hello world!");

//  (3) Create a MaterializeModal.
MaterializeModal.message({ bodyTemplate: "reactiveModal", title: "Reactive Modal Example!", exampleMessage: window.exampleMessage });

//  (4) We just create simple .get() helpers to grab the
//      value of any reactive-vars we passed into our
//      MaterializeModal.
Template.reactiveModal.helpers({
  exampleMessage: function() {
    return this.exampleMessage.get();
  }
});
*/
