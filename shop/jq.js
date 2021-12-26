function checkData() {
    var name = $("#name").val();
    var pass = $("#pass").val();
    $.get('1p.html', {name:name, pass:pass}, function(data) {
    });
    }