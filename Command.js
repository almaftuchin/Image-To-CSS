$(function(){
	
	
	converter =   {
			image: "data:image/png;base64,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",
			alm_pixels: $('.alm_pixels'),
			space: 0,
			size: 1,
    	alpha: 'yes',
    	roundness: 0,
      toHex: function(num){
        var h = Math.round(num).toString(16);
    return h.length==0? '00': h.length==1? '0'+h : h;
      },
			run: function(){
				var img = new Image();
	    		img.src = this.image;
	    		var canvas = $('<canvas>')[0];
	    		var context = canvas.getContext('2d');
	    		context.drawImage(img, 0, 0);

	    		var shadow = [];
	    		for ( var i = 0; i < img.width; i++) {
	    			for ( var j = 0; j < img.height; j++) {
	    				var data = context.getImageData(i, j, 1, 1).data;
	    				var alpha = data[3]/255;
	    				alpha = Math.round(alpha*100)/100;
	    				var x = i+i*this.space;
	    				var y = j+j*this.space;
              if(this.alpha=='yes'){
	    					shadow.push( x+'px '+y+'px rgba('+data[0]+','+data[1]+','+data[2]+','+alpha+')' );
              }else{
                shadow.push( x+'px '+y+'px #'+this.toHex(data[0])+''+this.toHex(data[1])+''+this.toHex(data[2]) );
              }
	    			}
	    		}
	    		shadow = shadow.join(',');
	    		
	    		this.alm_pixels	
            		.css('border-radius',this.roundness+'px')
            		.css('width',this.size)
	    					.css('height',this.size)
	    					.css('box-shadow', shadow);
	    		$('.css textarea').val('.alm_pixels{\n\
	border-radius: '+this.roundness+';\n\
	display: inline-block;\n\
	width: '+this.size+'px;\n\
	height: '+this.size+'px;\n\
	box-shadow: '+shadow+';\n\
}');
	    		return false;
			}
	};
	
	setTimeout(function(){converter.run()}, 200);
	
	// bind controls to converter object
	$('#upload').change(function(evt) {
		var files = evt.target.files;
		var f = files[0];
		var reader = new FileReader();
		reader.onload = (function(theFile) {
			return function(e) {
				converter.image = e.target.result;
				converter.run();
			};
		})(f);
	    reader.readAsDataURL(f);
	});
	$('#space').change(function(){converter.space = $(this).val();});
	$('#size').change(function(){converter.size = $(this).val();});
	$('#roundness').change(function(){converter.roundness = $(this).val();});
  $('#alpha').change(function(){converter.alpha = $(this).val();});
	$('#convert').click(function(){converter.run()});
});
