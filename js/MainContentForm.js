function parseXmlGal(xml) {
		
	var galOutput = '';

	$(xml).find('picture').each(function(){
		var c1 = $(this).find('class').text();
		var d1 = $(this).find('data').text();
		var i1 = $(this).find('source').text();
		var a1 = $(this).find('alt').text();
		var s1 = $(this).find('style').text();
		
		galOutput += '<div class="'+c1+'" data-id="'+d1+'"><img src="'+i1+'" alt="'+a1+'" style="'+s1+'"/></div>';
	});

	galOutput += '';
	
	//alert(galOutput);
	
	$('#gallery-items').html(galOutput);
}

function parseXmlNav(xml) {

	var navOutput = '';
	
	$(xml).find('thumb').each(function(){
		var c2 = $(this).find('class').text();
		var c3 = $(this).find('subclass').text();
		var d2 = $(this).find('data').text();
		var n2 = $(this).find('count').text();
		var i2 = $(this).find('source').text();
		var t2 = $(this).find('title').text();
		var a2 = $(this).find('alt').text();
		
		navOutput += '<li><a href="#!/'+d2+'/" data-title="'+t2+'" data-id="'+d2+'" data-count="'+n2+'" class="'+c2+'"><div class="'+c3+'"><img src="'+i2+'" alt="'+a2+'" /></div></a></li>';
	});
	
	navOutput += '';

	//alert(navOutput);

	$('#box-nav').html(navOutput);
}

/*
$(document).ready(function(){ 
	
	$("div").css("border", "3px solid red");
	
});
*/
