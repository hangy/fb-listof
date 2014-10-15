Polymer('table-selector', {
  ready: function() {
    this.tables = tables;
  },
  submitClick: function(event, detail, sender) {
    this.fire('tableSelected', sender.value);
  }
});
