import React, { useState } from "react";

import useChat from "./useChat";

const Chat = (props) => {
    const { id } = props.match.params;
    const { messages, sendMessage } = useChat(id);
    const [newMessage, setNewMessage] = useState("");

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        sendMessage(newMessage);
        setNewMessage("");
    };

    return (
        <div className="chat-room-container">
            <h1 className="room-name">Room: {id}</h1>
            <div className="messages-container">
                <ol className="messages-list">
                    {messages.map((message, i) => (
                        <li
                            key={i}
                            className={`message-item ${message.ownedByCurrentUser ? "my-message" : "received-message"
                                }`}
                        >
                            {message.body}
                        </li>
                    ))}
                </ol>
            </div>
            <textarea
                value={newMessage}
                onChange={handleNewMessageChange}
                placeholder="Write message..."
                className="new-message-input-field"
            />
            <button onClick={handleSendMessage} className="send-message-button">
                Send
      </button>
        </div>
    );
};

export default Chat;