(function ($) {
    $('#treesTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/cities",
        "columns": [
            { "data": "id" },
            { "data": "Index" },
            { "data": "Girth_in" },
            { "data": "Height_ft" },
            { "data": "Volume_ft_3" },
        ]
    } );

})(jQuery);