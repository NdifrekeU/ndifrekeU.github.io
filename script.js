// autoplay videos on hover
document.querySelectorAll('.game-video').forEach(video => {
    video.addEventListener('mouseenter', () => video.play());
    video.addEventListener('mouseleave', () => video.pause());
});
