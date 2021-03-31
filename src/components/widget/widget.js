import React from 'react';

const Widget = () => {
    return (
        <div>
            <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTheBrymaShows%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=218331294852186"
                width='340'
                height='100%'
                style={{border: 'none', overflow: 'hidden'}}
                scrolling='no'
                frameborder='0'
                allowTransparency='true'
                allow='encrypted-media'
            >
            </iframe>
        </div>
    )
}

export default Widget;
