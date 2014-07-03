$(document).ready(function () { // load xml file using jquery ajax
    $.ajax({
        type: "GET",
        url: "galleryMain.xml",
        dataType: "xml",
        success: function(xml) {
            var galOutput = '';
			var navOutput = '<ul>';
			
            $(xml).find('picture').each(function(){
                var c1 = $(this).find('class').text();
                var d1 = $(this).attr('data');
				var i1 = $(this).attr('source').text();
				var a1 = $(this).attr('alt').text();
				var s1 = $(this).attr('style').text();
				
                galOutput += '<div class="'+c1+'" data-id="'+d1+'"><img src="'+i1+'" alt="'+a1+'" style="'+s1+'"/></div>';
            });
			galOutput += '';
			
			$(xml).find('thumb').each(function(){
                var c2 = $(this).find('class').text();
				var c3 = $(this).find('subclass').text();
                var d2 = $(this).attr('data');
				var n2 = $(this).attr('count');
				var i2 = $(this).attr('source').text();
				var t2 = $(this).attr('title').text();
				var a2 = $(this).attr('alt').text();
				
                navOutput += '<li><a href="#!/'+d2+'/" data-title="'+t2+'" data-id="'+d2+'" data-count="'+n2+'" class="'+c2+'"><div class="'+c3+'"><img src="'+i2+'" alt="'+a2+'" /></div></a></li>';
            });
			navOutput += '</ul>';
			
			
			$('#gallery-items').html(galOutput);
			$('#gallery-nav').html(navOutput);
        }
    });

