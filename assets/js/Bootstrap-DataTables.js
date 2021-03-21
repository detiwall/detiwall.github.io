var mSortingString = [];
var disableSortingColumn = [2,3,4,5];
mSortingString.push({ "bSortable": false, "aTargets": [disableSortingColumn] });

$(function() {
        var table = $('#example').dataTable({
            "paging": false,
            "ordering": false,
            "info": false,
            "aaSorting": [],
            "orderMulti": false,
            "aoColumnDefs": mSortingString

        });
});