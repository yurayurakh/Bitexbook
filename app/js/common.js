(function() {
    var txt = {
        ru: {
            'banner-title': 'СТАРТОВАЛА ПЕРВАЯ ЛЕГАЛЬНАЯ КРИПТОБИРЖА',
            'banner-desc': 'Купить криптовлюту Bitcoin, Ethereum, Litecoin <br/>\n' +
            '               и другие теперь <span>просто, легко и надежно</span> как в банке',
            'benefits-1': 'Безопасность средств на максимуме -<br/>\n' +
            '                                        5 уровней защиты счетов клиентов',
            'benefits-2': 'Скоростная служба поддержки, даже<br/>\n' +
            '                                        верификция проходит до 24 часов',
            'benefits-3': 'Мгновенный ввод за 1 минуту<br/>\n' +
            '                                        по картам VISA/MasterCard',
            'btn-1': 'Перейти на сайт биржи',
            'video-btn': 'О нас, за 30 секунд'
        },

        en: {
            'banner-title':'LAUNCHED THE FIRST LEGAL CRYPTO-EXCHANGE',
            'banner-desc':'Buy Bitcoin, Ethereum, Litecoin and others.<br>\n' +
            '                        Now it\'s <span>simple, easy and reliable</span> as in a bank',
            'benefits-1': 'Highly safe! 5 levels of customer<br/>\n' +
            '                                        account protection',
            'benefits-2': 'High-speed support service, even<br/>\n' +
            '                                        verification takes up to 24 hours',
            'benefits-3': 'Instant deposit in 1 minute<br/>\n' +
            '                                        by Visa/MasterCard',
            'btn-1': 'Go to the website',
            'video-btn': 'About us, in 30 second'
        }
    };

    const ruBtn = document.querySelector('.lang-ru');
    const enBtn = document.querySelector('.lang-en');
    const videoRu = document.querySelector('#video-ru');
    const videoEn = document.querySelector('#video-en');

    ruBtn.addEventListener('click', setLang.bind(null,'ru'));
    ruBtn.addEventListener('click', function() {
        if (!ruBtn.classList.contains('is-active')) {
            ruBtn.classList.add('is-active');
            enBtn.classList.remove('is-active');
        }
    });
    enBtn.addEventListener('click', setLang.bind(null,'en'));
    enBtn.addEventListener('click', function() {
        if (!enBtn.classList.contains('is-active')) {
            enBtn.classList.add('is-active');
            ruBtn.classList.remove('is-active');
        }
    });

    document.addEventListener('DOMContentLoaded', function() {

        const currentLang = localStorage.getItem('lang');

        if (currentLang == 'en') {
            enBtn.classList.add('is-active');
            ruBtn.classList.remove('is-active');
            videoEn.classList.add('is-video-active');
            videoRu.classList.remove('is-video-active');
        }
    });

    function setLang(lang){
        var textItem;
        if( !txt.hasOwnProperty(lang)) return;
        if( window.hasOwnProperty('localStorage'))
            window.localStorage.setItem('lang', lang);
        for(textItem in txt[lang]) {
            document.getElementById(textItem).innerHTML = txt[lang][textItem];
        }
    }

    var lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang)) || 'ru';
    setLang(lang);
})();

$(document).ready(function () {

    var heightPage = function () {

        //docH = document.documentElement.clientHeight,
        var docH = $(document).height(),
            mainBlock = $(".main-content"),
            footer = $(".footer"),
            footerH = footer.outerHeight();

        if(document.documentElement.clientWidth > 768) {
            mainBlock.outerHeight(docH - footerH);

            var movementStrength = 25;
            var height = movementStrength / $(window).height();
            var width = movementStrength / $(window).width();
            $("#overall").mousemove(function(e){
                var pageX = e.pageX - ($(window).width() / 1);
                var pageY = e.pageY - ($(window).height() / 1);
                var newvalueX = width * pageX * -1 - 25 - 450;
                var newvalueY = height * pageY * -1 - 25 - 450;
                $('#overall').css("background-position", +newvalueX+"px     "+newvalueY+"px");
            });
        }
    };

    heightPage();

    $(".js-modal-btn").on("click touch", function() {

        $(".js-modal").addClass("is-open-modal");
    });

    $(".js-modal-close").on("click touch", function () {

        $(".js-modal").removeClass("is-open-modal");
    });

    $(".js-modal").on("click touch",function(e){
        if(e.target == this) {
            $(this).removeClass("is-open-modal");
        }
    });

    function youtubePlugIn() {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

        function onYouTubeIframeAPIReady() {
            console.log("onYouTubeIframeAPI Ready");
        }
    }

    youtubePlugIn();

    setTimeout(function () {
        var youtubePlayerRu,
            youtubePlayerEn,
            height;

        $(".js-lang").on("click touch", function() {
           if($(this).hasClass("is-active")) {

               var dataVideo = $(this).data("lang");

               if (dataVideo == "ru") {
                   $(".js-video").removeClass("is-video-active");
                   $("#video-ru").addClass("is-video-active");
               }else if (dataVideo == "en") {
                   $(".js-video").removeClass("is-video-active");
                   $("#video-en").addClass("is-video-active");
               }
           }

        });

        if(document.documentElement.clientWidth > 768) {
            height = 450;
        } else {
            height = 350;
        }

        youtubePlayerRu = new YT.Player( 'video-ru', {
            videoId: 'UYnAxNWb8kQ', // YouTube Video ID
            width: "100%",               // Player width (in px)
            height: height,              // Player height (in px)
            playerVars: {
                autoplay: 0,        // Auto-play the video on load
                controls: 1,        // Show pause/play buttons in player
                showinfo: 0,        // Hide the video title
                modestbranding: 0,  // Hide the Youtube Logo
                playlist: 'UYnAxNWb8kQ',
                loop: 0,            // Run the video in a loop
                rel: 0,
                fs: 1,              // Show the full screen button
                cc_load_policy: 0,  // Hide closed captions
                iv_load_policy: 3,  // Hide the Video Annotations
                autohide: 1         // Hide video controls when playing
            },
            events: {
                'onReady': onYtPlayerReady
            }
        });

        youtubePlayerEn = new YT.Player( 'video-en', {
            videoId: 'FUxxvL76w1Y', // YouTube Video ID
            width: "100%",               // Player width (in px)
            height: height,              // Player height (in px)
            playerVars: {
                autoplay: 0,        // Auto-play the video on load
                controls: 1,        // Show pause/play buttons in player
                showinfo: 0,        // Hide the video title
                modestbranding: 0,  // Hide the Youtube Logo
                playlist: 'FUxxvL76w1Y',
                loop: 0,            // Run the video in a loop
                rel: 0,
                fs: 1,              // Show the full screen button
                cc_load_policy: 0,  // Hide closed captions
                iv_load_policy: 3,  // Hide the Video Annotations
                autohide: 1         // Hide video controls when playing
            },
            events: {
                'onReady': onYtPlayerReady
            }
        });

        function onYtPlayerReady(event) {
            //event.target.playVideo();
        }

        $(".js-modal-close").on("click touch", function () {
            youtubePlayerRu.stopVideo();
            youtubePlayerEn.stopVideo();

        });

        $(".js-modal").on("click touch",function(e){
            youtubePlayerRu.stopVideo();
            youtubePlayerEn.stopVideo();

        });

    }, 500);
});







