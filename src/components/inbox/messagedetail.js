import React, { useEffect, useState } from 'react';
import './messagedetail.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Messagedetail = () => {
    const { id } = useParams();
    const [messages, setMessages] = useState();

    useEffect(() => {
        axios({
            method: 'get',
            // url: `https://mitchellvdhut-api.herokuapp.com/project?projectid=${id}`,
            url: `http://localhost:5000/inbox/message?messageid=${id}`,
        }).then(
            response => {
                setMessages(response.data);
            },
            error => {
                console.log(error);
            },
        );
    }, [id]);

    if (!messages) return <p>loading...</p>;
    const { name, email, subject, body, read } = messages;

    return (
        <div className="content">
            <div className="message-detail">
                <div className="message-title">
                    <h3>
                        <a href="/inbox" className="inbox-button">
                            &laquo; Inbox
                        </a>{' '}
                        /
                    </h3>
                    <h1>&nbsp;{subject}</h1>
                </div>
                <p>
                    {name}
                    {email}
                    {read}
                </p>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Messagedetail;
