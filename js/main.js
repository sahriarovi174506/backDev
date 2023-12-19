(function ($) {
    "use strict";

    $(document).ready(function () {


        // hamburger
        $('.hamburger').click(() => {
            $('.hamburger').toggleClass('active');
            $('.header_right').toggleClass('active');
        });

        // Sub Menu Toggle
        $('.submenu_wrap').click(function () {
            // Remove 'active' class from all other 'submenu_wrap' elements
            $('.submenu_wrap').not(this).removeClass('active');

            // Toggle 'active' class for the clicked 'submenu_wrap' element
            $(this).toggleClass('active');
        });

        $('.submenu').click(function () {
            $('.submenu_wrap').addClass('active');
        });

        // product about slider
        $('.project_slider').owlCarousel({
            rtl: false,
            dots: false,
            items: 1,
            nav: false,
            margin: 30,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
        });

        // product about slider
        $('.etab_contents_sm').owlCarousel({
            rtl: false,
            navText: ['<img src="./img/arrow-left.svg" alt="">', '<img src="./img/arrow-right.svg" alt="">'],
            dots: false,
            items: 1,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
        });


        // Tab
        $('.enav_box').first().addClass('active');

        // Tab click event
        $('.enav_box').click(function () {
            // Remove active class from all tabs
            $('.enav_box').removeClass('active');

            // Add active class to the clicked tab
            $(this).addClass('active');

            // Get the corresponding tab content ID
            var tabId = $(this).data('tab');

            $('.etab_content').removeClass('active');

            $(tabId).addClass('active');

            $('.etab_content').removeClass('show');

            setTimeout(function () {
                $(tabId).addClass('show');
            }, 300);

            // Update the class in the ".expert_tab" element
            $('.expert_tab.expert_tab_lg').removeClass().addClass('expert_tab expert_tab_lg ' + tabId.substring(1));


            SetImageHeight()
        });

        function SetImageHeight() {
            $(".etab_content.active").each(function () {
                // Get the child "img" element of the current "etab_content.active" element
                var imgElement = $(this).find("img");

                // Get the height of the "img" element
                var imgHeight = imgElement.height();

                // Set the height of the current "etab_content.active" element to be equal to the height of the "img" element
                $(".expert_tab_lg .etab_contents").height(imgHeight);
            });
        }
        SetImageHeight()
        $(window).on('resize', function () {
            // Call SetImageHeight() when the window is resized
            SetImageHeight();
        });


        // Video 
        $('.playbtn').click(function () {
            // Hide the thumbnail and play button
            $('.thumbnail, .playbtn').hide();

            // Show and play the video
            $('.video').show()[0].play();
        });

        // When the video is paused
        $('.video').on('pause', function () {
            // Hide the video
            $(this).hide();

            // Show the thumbnail and play button after a delay (adjust the delay time as needed)
            $('.thumbnail, .playbtn').show();
        });


        // Set Video Width
        function updateVideoHeight() {
            var thumbnailHeight = $('.thumbnail').height();
            $('.video').height(thumbnailHeight);
        }

        // Update video height on window resize
        $(window).on('resize', function () {
            updateVideoHeight();
        });

        // Initial call to set video height
        updateVideoHeight();
    });



})(jQuery);