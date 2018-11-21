$(document).ready(function(){
	var open = false;
	var productos = ["fantaLata", "cocaLata", "spriteLata", "cielLata", "mundetLata", "fantaMedio", "cocaMedio", "spriteMedio", "cielMedio", "mundetMedio", "fantaGde", "cocaGde", "spriteGde", "cielGde", "mundetGde"];
	
	$("#open").click(function() {
	if (open) {
		open = false;
		$("#puerta").fadeIn();
		$("#open").removeClass("btn btn-danger");
		$("#open").addClass("btn btn-primary");
		$("#open").html("Click Here to Open");
	}else{
		open = true;
		$("#puerta").fadeOut();
		$("#open").removeClass("btn btn-primary");
		$("#open").addClass("btn btn-danger");
		$("#open").html("Click Here to Close");
	}
});

	$('body #refri').on('click', 'img', function(){
		var datId = $(this).attr('id');
		$.each(productos, function( index, value ) {
			if (datId == value) {
				$('#modalShow').modal('show');
			}
		});
	});


});