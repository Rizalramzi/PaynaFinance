document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const videoPlayer = document.getElementById('videoPlayer');
    const videoThumbnail = document.getElementById('videoThumbnail');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');

    // Check if elements exist
    if (videoPlayer && videoThumbnail && playButton && pauseButton) {
        // Play button click event
        playButton.addEventListener('click', function () {
            videoThumbnail.style.display = 'none'; // Hide thumbnail
            playButton.classList.add('hidden'); // Hide play button
            videoPlayer.style.display = 'block'; // Show video
            videoPlayer.play(); // Play video
        });

        // Pause button click event
        pauseButton.addEventListener('click', function () {
            videoPlayer.pause(); // Pause video
            videoPlayer.style.display = 'none'; // Hide video
            pauseButton.classList.add('hidden'); // Hide pause button
            videoThumbnail.style.display = 'block'; // Show thumbnail
            playButton.classList.remove('hidden'); // Show play button
        });

        // Show pause button on video hover
        videoPlayer.addEventListener('mouseenter', function () {
            pauseButton.classList.remove('hidden');
            pauseButton.classList.add('flex');
        });

        // Hide pause button when not hovering
        videoPlayer.addEventListener('mouseleave', function () {
            pauseButton.classList.add('hidden');
            pauseButton.classList.remove('flex');
        });
    } else {
        console.error('One or more elements are missing in the DOM.');
    }
});