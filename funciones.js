$(document).ready(function () {
  $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    var target = $(e.target).attr("href");
    console.log(target);
  });
});