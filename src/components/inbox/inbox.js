import React, { useEffect, useState } from 'react';
import Message from './message';
import axios from 'axios';
import './inbox.css';

const Inbox = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            // url: 'http://www.monneylane.com/inbox,
            url: 'http://localhost:5000/inbox',
        }).then(
            response => {
                setMessages(response.data);
            },
            error => {
                console.log(error);
            },
        );
    }, []);

    return (
        <div className="content">
            <h1>Inbox</h1>
            <div className="messages">
                {messages.map((message, id) => (
                    <Message key={id} {...message} />
                ))}
            </div>
        </div>
    );
};

export default Inbox;
