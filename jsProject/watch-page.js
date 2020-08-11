$(document).ready(function() {

    const createSidelist = (obj, pos) => {

        let card = document.createElement('div');
        card.id = "card" + obj.id;
        card.className = 'card-class';

        let img = document.createElement('img');
        img.className = 'thumbnail';
        img.src = obj.thumbnail;
        card.appendChild(img);

        if (pos === 0) {
            card.classList.add('active-card');
        }

        card.onclick = () => {
            updateVideoData(obj.id);
            $('.card-class').removeClass('active-card');
            card.classList.add('active-card');
        };

        let heading = document.createElement('h3');
        heading.innerHTML = obj.title;
        card.appendChild(heading);

        return card;
    };

    // $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist', (data) => {
    $.get('/jsProject/watch-page-thumbnails.json', (data) => {
        data.map ((item, pos) => {
            $('#side-list').append(createSidelist(item, pos));
        })

    });

    const updateVideoData = (videoId) => {
        $.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/video/${videoId}`, (data) => {
                $('iframe').attr('src', `https://player.vimeo.com/video/${data.vimeoId}`);
                $('#video-title').html(data.title);
                $('#video-description').html(data.description);
                $('#views-count').html(data.views);
                $(window).scrollTop(0);
        });
    }

    });