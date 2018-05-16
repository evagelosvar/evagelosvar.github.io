//<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
//http://www.w3schools.com/jsref/event_onchange.asp
 //replace();
//222

function replace()
{


var array = ["Y","N"];
$(array).each(function (i) {
	var t=mChoice(array[i]);
	var oldWordRegEx = new RegExp("\\["+array[i]+"\\]",'g');
	var strNewString = $('body').html().replace(oldWordRegEx, t);
$('body').html(strNewString);
});



//------------------------------------------------------------------
var array = ["A","B","C","D","E","F","G","0"];
$(array).each(function (i) {
	var t=cChoice(array[i]);
	var oldWordRegEx = new RegExp("\\["+array[i]+"\\]",'g');
	var strNewString = $('body').html().replace(oldWordRegEx, t);
	//alert(str);
$('body').html(strNewString);
});

//------------------------------------------------------------------
var oldWordRegEx = new RegExp("\\[\\["+".*?"+"\\]\\]",'g');
	
//var strMatch = $('body').html().match(/\[\[.*?\]\]/g);
var strMatch = $('body').html().match(oldWordRegEx);
if (strMatch!=null)
{
	//strMatch is array
		for (i=0;i < strMatch.length;i++)
		{
			//alert(strMatch[i]);
			//var t=fChoice(x,str[i]);
			//document.body.innerHTML = document.body.innerHTML.replace(str[i], t);
			//alert(oldWordRegEx);
			//alert(strMatch);
			//alert(x);
		var t=fChoice(strMatch[i])
		//alert(t);
		var strNewString = $('body').html().replace(strMatch[i], t);
			
		$('body').html(strNewString);

		}
}
return;
}

function fChoice(txt)
{
txt=txt.toString()
//alert(txt);
//txt=txt.trim();
txt = txt.substr(2, txt.length-4); //Περιεργο substring
//style="width:150px;border-top:0;border-left:0;border-right:0;border-color:red;background:yellow">
var t="\<SELECT NAME=\"fChoice\"\> "+
"\<OPTION VALUE=\"" + txt +"\"\>_" +"\<\/option\>"+
"\<OPTION VALUE=\"" + txt+"\"\>"+txt+"\<\/option\>"+
"\<\/SELECT\>";
	
	return t;
}

function mChoice(x)
{
	
	var t="\<SELECT NAME=\"mChoice\"\> "+
"\<OPTION VALUE=\"" + x +"\"\>_" +"\<\/option\>"+
"\<OPTION VALUE=\"" + x +"\"\>Y " +"\<\/option\>"+
"\<OPTION VALUE=\"" + x +"\"\>N " +"\<\/option\>"+
"\<\/SELECT\>"
	
	return t;
}

function cChoice(x)
{
	var t="\<SELECT NAME=\"cChoice\"\> "+
"\<OPTION VALUE=\"" + x +"\"\>_" +"\<\/option\>"+
"\<OPTION VALUE=\"" + x +"\"\>A" +"\<\/option\>"+
"\<OPTION VALUE=\"" + x +"\"\>B" +"\<\/option\>"+
"\<OPTION VALUE=\"" + x +"\"\>C" +"\<\/option\>"+
"\<OPTION VALUE=\"" + x +"\"\>D" +"\<\/option\>"+
"\<OPTION VALUE=\"" + x +"\"\>E" +"\<\/option\>"+
"\<OPTION VALUE=\"" + x +"\"\>F" +"\<\/option\>"+
"\<OPTION VALUE=\"" + x +"\"\>G" +"\<\/option\>"+
"\<OPTION VALUE=\"" + x +"\"\>0" +"\<\/option\>"+
"\<\/SELECT\>"
	
	return t;
}

 
function myFunction() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
}

$( document ).ready(function() {
	//alert("replaceAfter");
	replace();

	
	
//$('select').on('change', function() {
$('select').change(function(){

var txt=$("option:selected", this).text();
txt=txt.trim();
//alert(txt);
//alert(txt.length);
	if (this.value== txt) 
		{
			 $(this).css('background-color', 'C0FFA1');
		}
if (this.value!= txt) 
		{
			 $(this).css('background-color', 'FFE4E3');
		}
	if (txt=="_") 
		{
			 $(this).css('background-color', 'white');
		   
		}




})

});
