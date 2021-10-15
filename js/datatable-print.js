
$('.dataexxfrow1').DataTable( {

        "processing": true,
        "serverSide": true,
      "ajax": "ajax/server_processing.php",
   "language": {
            "url": "Arabic.json"
        },
    dom: 'Bfrtip',

   lengthMenu: [
            [ 10, 50, 100, 150, -1 ],
            [ '10 rows', '50 rows', '100 rows', '150 rows', 'عرض الكل' ]
        ],

	
	        buttons: [
			
			{
extend: 'excel',

text: 'تصدير أكسل',
charset: 'utf-8',
extension: '.xlsx',
fieldSeparator: ';',
fieldBoundary: '',
filename: 'export',
bom: true
			},
			         
			            'colvis',  'pageLength',


            {
                extend: 'print',
				  title: '',

		     customize: function ( win ) {
                $(win.document.body)
                    .css( 'font-size', '10pt' )
                    .prepend(
                        '<img src="'+img+'" width="100%" />',
                       '<div class="clearfix"></div>',
                       '<div class="text-center">'+tixx+'</div>'
                    );
                $(win.document.body).find( 'table' )
                    .addClass( 'compact' )
                    .css( 'font-size', 'inherit' );
            },
			
            text: 'طباعة الكل',

                exportOptions: {
					
					                    selected: true,

                    columns: ':visible'
                }
            },
			        {
            extend: 'print',
		title: '',

				     customize: function ( win ) {
                $(win.document.body)
                    .css( 'font-size', '10pt' )
                    .prepend(
                        '<img src="'+img+'" width="100%" />',
                       '<div class="clearfix"></div>',
					   '<div class="text-center">'+tixx+'</div>'

                    );
                $(win.document.body).find( 'table' )
                    .addClass( 'compact' )
                    .css( 'font-size', 'inherit' );
            },
            text: 'طباعة التحديد',
            exportOptions: {
                modifier: {
                    selected: true,
					columns: ':visible'

                }
            }
        },
        ],
	
	    select: true

 



} );
    $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');




$('.dataex-visibility-rowselector').DataTable( {

   "language": {
            "url": "Arabic.json"
        },
        
    dom: 'Bfrtip',
        "order": [],

   lengthMenu: [
            [ 10, 50, 100, 150, -1 ],
            [ '10 rows', '50 rows', '100 rows', '150 rows', 'عرض الكل' ]
        ],

	

	 
	        buttons: [
			
			{
extend: 'excel',

text: 'تصدير أكسل',
charset: 'utf-8',
extension: '.xlsx',
fieldSeparator: ';',
fieldBoundary: '',
filename: 'export',
bom: true
			},
			         
			            'colvis','pageLength',

            {
                extend: 'print',
				  title: '',

		     customize: function ( win ) {
                $(win.document.body)
                    .css( 'font-size', '10pt' )
                    .prepend(
                        '<img src="'+img+'" width="100%" />',
                       '<div class="clearfix"></div>',
                       '<div class="text-center">'+tixx+'</div>'
                    );
                $(win.document.body).find( 'table' )
                    .addClass( 'compact' )
                    .css( 'font-size', 'inherit' );
            },
			
            text: 'طباعة الكل',

                exportOptions: {
					
					                    selected: true,

                    columns: ':visible'
                }
            },
			        {
            extend: 'print',
		title: '',

				     customize: function ( win ) {
                $(win.document.body)
                    .css( 'font-size', '10pt' )
                    .prepend(
                        '<img src="'+img+'" width="100%" />',
                       '<div class="clearfix"></div>',
					   '<div class="text-center">'+tixx+'</div>'

                    );
                $(win.document.body).find( 'table' )
                    .addClass( 'compact' )
                    .css( 'font-size', 'inherit' );
            },
            text: 'طباعة التحديد',
            exportOptions: {
                modifier: {
                    selected: true,
					columns: ':visible'

                }
            }
        },
        ],
	
	    select: true,	

 

	

} );
    $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
