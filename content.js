window.interval = setInterval(() => {
    document.querySelectorAll('.front-page-carousel').forEach(e => {
        e.querySelectorAll('video').forEach(v => {
            v.pause();
        });
    });
}, 0);