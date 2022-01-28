import React from "react";

const UserCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">
                <div className="header">Imperial Guard</div>
                <div className="desc">{props.children}</div>
            </div>
            <div className="ui bottom button">
                <i className="add icon"></i>
                Add Friend
            </div>
        </div>
    )
}

export default UserCard;