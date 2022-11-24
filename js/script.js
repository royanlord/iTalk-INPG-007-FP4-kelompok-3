$(function() {
    $("#date").datepicker({                  
        maxDate: moment().toDate(),
        minDate: -7,
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        showAnim: 'slideDown',
        showButtonPanel: true,
        closeText: "Close",
    })
});