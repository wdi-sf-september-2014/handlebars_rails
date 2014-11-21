$(document).ready(function() {
	$.ajax({
		url: "http://daretodiscover.net/wine",
		type: "GET",
		success: function(data) {
			var template = HandlebarsTemplates['wines']({wines: data});

			$("#container").html(template);
		},
		error: function() {
			alert("Something went wrong...");
		}
	});
});