// JS für raffael.one

MP.ready(function() {

    /**
     * convert audio links to audio players
     */
    var postContainer = document.querySelector('main');

    if (!postContainer) return;

    var myAudio = document.createElement('audio');
    if (myAudio.canPlayType) {
        // Currently canPlayType(type) returns: "", "maybe" or "probably"
        var canPlayMp3 = !!myAudio.canPlayType && "" != myAudio.canPlayType('audio/mpeg');
        var canPlayOgg = !!myAudio.canPlayType && "" != myAudio.canPlayType('audio/ogg; codecs="vorbis"');
    }
    delete myAudio;

    var audioTypes = {
        ogg: 'audio/ogg',
        mp3: 'audio/mpeg',
    };

    Object.keys(audioTypes).forEach(function(k) {

        if (k == 'ogg' && !canPlayOgg) return;
        if (k == 'mp3' && !canPlayMp3) return;

        var audioLinks = postContainer.querySelectorAll('a[href$="'+k+'"]');

        if (!audioLinks.length) return;

        audioLinks.forEach(function(el) {
            var audioUrl   = el.getAttribute('href'),
                audioTitle = el.innerText,
                player     = document.createElement('audio');

            player.setAttribute('controls', true);
            player.setAttribute('src', audioUrl);
            player.setAttribute('type', audioTypes[k]);
            player.setAttribute('preload', 'none');
            player.setAttribute('title', audioTitle);

            el.before(player);
        });

    });

    /**
     * convert YouTube and Vimeo links to iframes
     */
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

    var embeds = document.querySelectorAll(".embed a");

    if (!embeds) return;

    var frameBg = '/img/hoop-pole3_opt.svg';

    embeds.forEach(function(el) {
        var url   = el.getAttribute('href'),
            text  = el.innerText,
            video = popVideoId(url);

        if (!el.getAttribute('data-video-id')) {
            el.setAttribute('data-video-id', video.id);
        }
        if (!el.getAttribute('data-video-provider')) {
            el.setAttribute('data-video-provider', video.player);
        }
        if (!el.getAttribute('data-video-thumb')) {
            el.setAttribute('data-video-thumb', frameBg);
        }

    });

    // init video links
    MP.Video.convertVideoLinksToIframes();

});
