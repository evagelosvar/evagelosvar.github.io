

$(document).ready(function(){
//alert("111");
var dir = "img/";
var fileextension=".jpg";
var fileextension2=".JPG";
var path="000img/";
var path="./";
var arrlinks=[];
var filename
jQuery.ajaxSetup({async:false});

jQuery.get(path, function(data) {
		
//alert(data);

$(data).find("a:contains(" + ".mp4" + ")").each(function (index) {
	filename = this.href;
	arrlinks[index]=this.href;
	//alert(filename);
	$("div.slider").append($("<img data-video-url='" + filename + "' class='slidesa' src='" +  "PreviewImage.jpg" + "' style='max-height: 100px'></img>"));
 
	});
	

	
	
	
$(data).find("a:contains(" + fileextension + "),a:contains(" + fileextension2 + ")").each(function (index) {
filename = this.href;
//alert(index);
arrlinks[index]=this.href;
//var filename = this.href.replace(window.location.host, "").replace("http:///","");

$("div.slider").append($("<img class='slides' src='" +  filename + "' style='max-height: 100px'></img>"));
//$("body").append($("<img class='slides' src='" +  filename + "' style='max-height: 100px'></img>"));

//$("body").append($("<div>"+filename+"</div>"));
//alert(filename);


});
});
$("div.rotator").append($(	"<video class='rotatora' poster='PreviewImage.jpg' width='640' height='480' controls='controls'><source src='video.mp4' type='video/mp4' /></video>"));	
$("div.rotator").append($("<img class='rotator' style='max-height: 480px'></img>"));

//$("body").append($("<img class='rotator' style='max-height: 400px'></img>"));

//alert(arrlinks);
var imgs = $(".slides");
var current = 0;
var pos=0;
$(".rotator").prop("src", $(imgs.get(current)).prop("src") );
$('video.rotatora').hide();
function rotate( ) {
    //current = current >= imgs.length ? 0 : current + 1;
	
	//if (current+1>= imgs.length)
	//{current=0;}
	//else
	//{current=current+1;}
	
	
	
	
    //$(".rotator").prop("src", $(imgs.get(current)).prop("src") );
   // setTimeout( rotate, 3000 )
}
//rotate();

$('#next').click(function(){
//current=current+1;
if (current+1>= imgs.length)
{current=0;}
else{current=current+1;}
$(".rotator").prop("src", $(imgs.get(current)).prop("src") );
});

$('#prev').click(function(){

if (current<= 0)
{current=imgs.length-1;}
else{current=current-1;}
$(".rotator").prop("src", $(imgs.get(current)).prop("src") );
});

$('#anext').click(function(){
pos=pos-200;
 $("div.slider").animate({left: pos});
// alert("1lll");
});

$('#aprev').click(function(){
pos=pos+200;
 $("div.slider").animate({left: pos});
});




$('img.slides').hover(function(){
	$('img.rotator').show();
//$("div.images").remove();
		//var folder=$( this ).parent().find('th').text();
//alert($(this).prop("src"));	
$("img.rotator").prop("src", $(this).prop("src") );

	//$(this).css({border:"3px solid red" });
		$('video.rotatora').hide();
});

$('img.slidesa').hover(function(){
$('video.rotatora').show();
//alert("PPP");
//$("div.images").remove();
//var folder=$( this ).parent().find('th').text();
//alert($(this).prop("src"));	
//$("img.rotator").prop("src", $(this).prop("src") );
//$(this).css({border:"3px solid red" });
	
					//alert($(this).attr('data-video-url'));
					
	$('video.rotatora').attr("src", $(this).attr('data-video-url'))
	
	$('img.rotator').hide();
});





//end document ready
});



