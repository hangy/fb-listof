Polymer('table-viewer', {
  ready: function() {
    this.table = [];
  },
  toHtml: function(row, column) {
    return row[column].text();
  }
});
