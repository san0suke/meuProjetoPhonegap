$(function () {
    $('head').append('<link href="library/jquery_mobile/jquery.mobile.custom.structure.css" rel="stylesheet" />');
//    $('head').append('<link href="library/jquery_mobile/jquery.mobile.custom.theme.css" rel="stylesheet" />');
    $('head').append('<link href="assets/js/dataTables/dataTables.bootstrap.css" rel="stylesheet" />');
    $('head').append('<script src="library/jquery_mobile/jquery.mobile.custom.min.js" ></script>');
    $('head').append('<script src="assets/js/dataTables/jquery.dataTables.js"></script>');
    $('head').append('<script src="assets/js/dataTables/dataTables.bootstrap.js"></script>');

});
function table_load() {
    $('.table').dataTable({            
        "language": txt.dataTable   
    });
}