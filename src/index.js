import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import UserCard from './UserCard';

// semua file yg diambil dari folder lain harus diimport
import sweet from './img/sweet.jpg';
import ryder from './img/ryder.jpg';
import bigsmoke from './img/bigsmoke.jpg';

const App = () => {
    return (
        <div className='ui comments'>
            <SingleComment name = 'Ryder' date = 'Today at 4:20 AM' text = 'Busta! Straight Busta!' pic = {ryder}/>
            <SingleComment name = 'Big Smoke' date = 'Today at 13:00 PM' text = 'Follow the Damn Train!' pic = {bigsmoke}/>
            <UserCard>HEY YOU! STOP RIGHT THERE YOU CRIMINAL SCUM!</UserCard>
            <UserCard>
                <SingleComment name = 'Sweet' date = 'Today at 6:09 AM' text = 'Grove st 4 Life' pic = {sweet}/>
            </UserCard>                
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))