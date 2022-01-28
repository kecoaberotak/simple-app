import React from "react";

const SingleComment = (props) => {
    return (
        <div className='comment'>
            <a href='/' className='avatar'>
                <img src = {props.pic} alt ='profile picture'></img>
            </a>
            <div className='content'>
                <a href='/' className='athor'>
                    {props.name}
                </a>
                <div className='metadata'>
                    <span className='date'>
                        {props.date}
                    </span>
                </div>
                <div className='text'>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

// export membuat file bisa digunakan oleh file lain
export default SingleComment;