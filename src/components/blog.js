import React from 'react';
import data from '../data/data.json';

const Blog = () =>{
    console.log(data.Blog);
    return(
        <div id="blog" className='mt-5'>
            <div className="card text-light" >
                <img src={data.Blog.img} className='img-fluid rounded' style={{maxHeight: 600}}  alt="..."/>
                <div className="card-img-overlay text-center d-flex align-items-end justify-content-center">
                    <a href="https://www.freepik.com/vectors/background">Background vector created by starline - www.frepik.com</a>                    
                </div>
            </div>            
        </div>
    )
}

export default Blog;