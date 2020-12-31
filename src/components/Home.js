import React from 'react';

const Home = ()=>{
    return(
        <div className='home'>
            <p className='blurb'>Using an online REST API from <a href='https://jsonplaceholder.typicode.com/'><span className='json'>JSONPlaceholder</span></a>, this web app displays a list of 100 Lorem Ipsum posts. The list is searchable and each item has its own page.
            </p>
            <p>This can be customized to display data from any APIs</p>
            <h3>Technologies used:</h3>
                <p>HTML, CSS, JS</p>
                <p>React / Router / Redux / Thunk</p>
                <p>Npm axios</p>
        </div>
    )
}

export default Home