// JS für raffael.one

var d = document;

// lightbox2-Anpassungen
lightbox.option({
	// 'resizeDuration': 200,
	'wrapAround': true,
	'positionFromTop': 30,
	// 'albumLabel': 'Bild %1 von %2',
	'showImageNumberLabel': false,
	'disableScrolling': true
})

// Email-Adresse Spamschutz     
// E-Mail-Adresse im Quellcode in der Form:
// <span class="mail">post [Ät] mydomain [PUNKT.] net</span>

$(document).ready(function(){
	var elementContent, replaceContent, replaceContent2;
	$(".mail").each(function(){
		elementContent = $(this).html();
		replaceContent = elementContent.replace(" [Ät] ", "&#64;");
		replaceContent2 = replaceContent.replace(" [PUNKT.] ", ".");
		$(this).html("<a href=\"mailto:" + replaceContent2 + "\">" + replaceContent2 + "</a>");
	});
});

// source: http://curlybracket.net/2013/04/22/replace-links-to-mp3-or-ogg-files-by-html5-on-the-fly/
// convert audio links to audio players; adjust these two vars to your needs
//var dewplayerURL = "/wp-content/themes/curlybracket/flash/dewplayer-mini.swf";
var postContainer = 'main';

var audioTagSupport = !!(document.createElement('audio').canPlayType);
var myAudio = document.createElement('audio');
if (myAudio.canPlayType) {
	 // Currently canPlayType(type) returns: "", "maybe" or "probably"
	 var canPlayMp3 = !!myAudio.canPlayType && "" != myAudio.canPlayType('audio/mpeg');
	 var canPlayOgg = !!myAudio.canPlayType && "" != myAudio.canPlayType('audio/ogg; codecs="vorbis"');
}
// there are ogg files
jQuery(postContainer+' a[href$="ogg"]').each(function(){
	 var audioURL = jQuery(this).attr('href');
	 if(canPlayOgg) {
			var myAudioType = "audio/ogg;";
			jQuery(this).before('<audio controls src="'+audioURL+'" type="'+myAudioType+'" preload="none"></audio>');
	 }
});
// there are mp3s
jQuery(postContainer+' a[href$="mp3"]').each(function(){
	 var audioURL = jQuery(this).attr('href');
	 var audioTitle = jQuery(this).html();
	 if(canPlayMp3) {
			var myAudioType = "audio/mpeg;";
			jQuery(this).before('<audio controls src="'+audioURL+'" type="'+myAudioType+'" title="'+audioTitle+'" preload="none"></audio> ');
	 } else {
			// flash reads mp3s
//      jQuery(this).before('<object type="application/x-shockwave-flash" data="'+dewplayerURL+'" width="200" height="20" id="dewplayer-mini" name="dewplayer-mini"><param name="movie" value="'+dewplayerURL+'" /><param name="flashvars" value="mp3='+audioURL+'" /><param name="wmode" value="transparent" /></object>');
	 }
});




// Bilder-Links in Lightbox-Links umwandeln
$('a[href$="jpg"]').not('a[data-lightbox]').each(function() {
	$(this).attr("data-lightbox","autolightbox");
});






/*********** Youtube-Video-Links in iframe umwandeln ***********/

function popVideoId(url) {
	var videoUrl = url;
	var videoId;
	var video = ["id","player"];
	var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
	var regExp2 = /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;

	var match = videoUrl.match(regExp);
	if (match && match[2].length == 11) {
		video["id"] = match[2];
		video["player"] = "youtube";
	} else {
		
		var match = videoUrl.match(regExp2);
		if (match) {
			video["id"] = match[3];
			video["player"] = "vimeo";
		}
		else {
			video["id"] = 'no video found';
			video["player"] = "none";
		}
	}
	return video;
}
$(document).ready(function(){
	var embed = $(".embed a");
	$(embed).each(function(){
		var url = $(this).attr("href");
		var video = popVideoId(url);
		
		// Youtube
		if (video["player"] == "youtube"){
			$(this).before('<iframe class="embedded" width="500" height="281" data-src="https://www.youtube-nocookie.com/embed/' + video["id"] + '?rel=0&amp;showinfo=0" src="about:blank" frameborder="0" allowfullscreen></iframe><span class="iframe-play-button icon-youtube" data-src="https://www.youtube-nocookie.com/embed/' + video["id"] + '?rel=0&amp;showinfo=0"></span>');
		}
		// Vimeo
		if (video["player"] == "vimeo"){
			$(this).before('<iframe class="embedded" data-src="https://player.vimeo.com/video/' + video["id"] + '?color=ffffff&title=0&byline=0&portrait=0" src="about:blank" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><span class="iframe-play-button icon-vimeo" data-src="https://player.vimeo.com/video/' + video["id"] + '?color=ffffff&title=0&byline=0&portrait=0"></span>');
		}
		else {}
		$(".iframe-play-button").click(function(event){
			var src = $(event.target).data("src");
			$(event.target).hide();
			$('iframe.embedded[data-src="' + src + '"]').attr("src", src);
		});
	});
});


/****** Gimmick - Startseite ********/
var gimmick = false;
function toggleStartPage(){
	if (gimmick == false){gimmick = true;}
	else {gimmick = false;}
	$("main").toggleClass("invisible");
	$("header").toggleClass("invisible");
	$("footer").toggleClass("invisible");
	$("#under-construction").toggleClass("invisible");
	$("body").toggleClass("rotating");
}

// Klick auf Button startet Funktion
// Klick-Event wird gestoppt damit das folgende Klick-Event zum Beenden nicht schon beim Start-Klick aktiviert wird.
$("#gimmick-button").click(function(event){
	event.preventDefault();
	event.stopPropagation();
	toggleStartPage();
});

$(document).ready(function(){
	$(document).keydown(function(event){
		if (/*event.which == 27 && */gimmick == true){
			toggleStartPage();
		}
	});
	$("html").click(function(event){
		if (gimmick == true){
			toggleStartPage();
		}
	});
});


/********** under construction-Hinweis *******/
//if (document.location.hostname != "localhost") {
//	$("body").append('<p id="under-construction" style="position:fixed;top:1px;width:1000px;left:50%;margin-left:-500px;font-size:12px;line-height:14px;text-align:center;z-index: 1000;color:#fff;">Hinweis: Diese Seite ist gerade in <a href="https://github.com/raffaelj/raffael.one" title="Quellcode auf Github" style="color:#fff;text-decoration:underline dotted;">Entwicklung</a>, Inhalte und Aussehen können sich bis zur Fertigstellung noch jederzeit ändern.</p>');
//}
