import React from 'react';
import { Link } from 'react-router-dom';
import './message.css';

const Message = ({ name, email, subject, body, _id: { $oid } }) => {
    return (
        <Link className="message" to={`/inbox/${$oid}`}>
            <img src="/assets/250.png" alt="sender"></img>
            <p>{name}</p>
            <p>
                <span className="sender-email">{subject}</span> {body}
            </p>
            <p>{email}</p>
        </Link>
    );
};

export default Message;
