import React, { useState } from "react";
import TextInput from './TextInput'
import CustomButton from './Button'
import useChat from "./useChat";
import Header from './Header'

const styles = {
    myMessage:{
        textAlign: "end",
        marginRight: "20px",
    }
}

const Chat = (props) => {
    const { id } = props.match.params;
    const { messages, sendMessage } = useChat(id);
    const [newMessage, setNewMessage] = useState("");
    const username = window.localStorage.getItem("username")

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if(newMessage){
            sendMessage(newMessage);
            setNewMessage("");
        }
    };

    return (
        <div style={{width: "100%"}}>
            <Header />            
            <div>
                <ul style={{listStyleType: 'none'}}>
                    {messages.map((message, i) => (
                        <li
                            key={i}
                            style={message.ownedByCurrentUser? {...styles.myMessage} : {}}
                            className={` ${message.ownedByCurrentUser ? "my-message" : "received-message"
                                }`}
                        >
                            {message.body}
                        </li>
                    ))}
                </ul>
            </div>
            <TextInput
                value={newMessage}
                placeholder="Comece a conversar..."
                textFieldProps={{
                    multiline: true,
                    fullWidth: true,
                    onChange: handleNewMessageChange
                }}
            />
            <CustomButton text="Enviar" onClick={handleSendMessage} />
        </div>
    );
};

export default Chat;