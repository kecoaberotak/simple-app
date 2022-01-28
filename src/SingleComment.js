import React from "react";

// semua file yg diambil dari folder lain harus diimport
import sweet from './img/sweet.jpg';

const SingleComment = () => {
    return (
        <div className='comment'>
            <a href='/' className='avatar'>
                <img src={sweet} alt='profile picture'></img>
            </a>
            <div className='content'>
                <a href='/' className='athor'>
                    Carl
                </a>
                <div className='metadata'>
                    <span className='date'>
                        Today at 5:00PM
                    </span>
                </div>
                <div className='text'>
                    hello
                </div>
            </div>
        </div>
    )
}

// export membuat file bisa digunakan oleh file lain
export default SingleComment;