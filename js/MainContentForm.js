$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "http://www.whatcanimake.org/jes/xml/galleryMain.xml",
        dataType: "xml",
		success: parseXmlGal,
        error: function (error) {
			alert("Gal: Some problem.");
		}
	});
});

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "http://www.whatcanimake.org/jes/xml/galleryNav.xml",
        dataType: "xml",
		success: parseXmlNav,
        error: function (error) {
			alert("Nav: Some problem.");
		}
	});
});

function parseXmlGal(xml) {
	var galOutput = '';

	$(xml).find('picture').each(function(){
		var c1 = $(this).find('class').text();
		var d1 = $(this).attr('data').text();
		var i1 = $(this).attr('source').text();
		var a1 = $(this).attr('alt').text();
		var s1 = $(this).attr('style').text();
		
		galOutput += '<div class="'+c1+'" data-id="'+d1+'"><img src="'+i1+'" alt="'+a1+'" style="'+s1+'"/></div>';
	});

	galOutput += '';
	
	$('#gallery-items').html(galOutput);
}

function parseXmlNav(xml) {
	var navOutput = '<ul>';
	
	$(xml).find('thumb').each(function(){
		var c2 = $(this).find('class').text();
		var c3 = $(this).find('subclass').text();
		var d2 = $(this).attr('data').text();
		var n2 = $(this).attr('count').text();
		var i2 = $(this).attr('source').text();
		var t2 = $(this).attr('title').text();
		var a2 = $(this).attr('alt').text();
		
		navOutput += '<li><a href="#!/'+d2+'/" data-title="<strong>'+t2+'</strong>" data-id="'+d2+'" data-count="'+n2+'" class="'+c2+'"><div class="'+c3+'"><img src="'+i2+'" alt="'+a2+'" /></div></a></li>';
	});
	
	navOutput += '</ul>';

	$('#gallery-nav').html(navOutput);
}

/*
$(document).ready(function(){ 
	
	$("div").css("border", "3px solid red");
	
});
*/
