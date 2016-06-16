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

function convertMailAddress() {
  var emailElements;
  if (document.getElementsByClassName) emailElements = document.getElementsByClassName("mail");
  else emailElements = document.getElementsByClassNameForOldies("mail");
  var elementContent, replaceContent, replaceContent2;
  for (var i=0; i<emailElements.length; i++) {
    elementContent = emailElements[i].innerHTML;
    replaceContent = elementContent.replace(" [Ät] ", "&#64;");
    replaceContent2 = replaceContent.replace(" [PUNKT.] ", ".");
    emailElements[i].innerHTML =
    "<a href=\"mailto:" + replaceContent2 + "\">" + replaceContent2 + "</a>";
  }
}
// falls Browser zu alt (gehört noch zu Spamschutz)
// http://javascript.about.com/library/bldom08.htm
document.getElementsByClassNameForOldies = function(cl) {
  var retnode = [];
  var myclass = new RegExp('\\b'+cl+'\\b');
  var elem = this.getElementsByTagName('*');
  for (var i = 0; i < elem.length; i++) {
    var classes = elem[i].className;
    if (myclass.test(classes)) retnode.push(elem[i]);
  }
  return retnode;
};


// Google Maps Bild in iframe umwandeln
// var maps = d.querySelector(".img_maps");

// if (maps) {
  // $(maps).click(function(){
    // this.innerHTML = "";
    // var iframe = d.createElement("iframe");
    // iframe.className = "iframe_maps";
    // iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.4035285221476!2d12.359521315838819!3d51.340489979607995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6f789455aa88b%3A0xd64a5464a75a010f!2sMendelssohnstra%C3%9Fe+10%2C+04109+Leipzig!5e0!3m2!1sde!2sde!4v1461786147440";
    // iframe.width = "600";
    // iframe.height = "450";
    // iframe.frameborder = "0";
    // this.appendChild(iframe);
  // });
// }

// mp3-Links in jplayer-audio konvertieren
// var mediafiles = $('a[href*=".mp3"]');
// console.log(mediafiles);
// $(mediafiles).each(function(i){
    // $(this).addClass("right");
  // }
// );


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


// definierte Funktionen aufrufen
window.onload = convertMailAddress;
