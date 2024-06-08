import { Box } from "@mui/material";
import { Link } from "react-router-dom";

type chatItem = {
    id: string;
    title: string;
};

type Props = {
    chatList: chatItem[];
};

const ChatListItem = (props: chatItem) => {
    return (
        <Link
            to={`/chat/${props.id}`}
            style={{
                textDecoration: "none",
                color: "white",
                fontWeight: 300,
                fontSize: "0.9rem",
                padding: "8px",
                borderRadius: "12px",
                fontFamily: "work sans",
            }}
            className="btn-hover"
        >
            {props.title}
        </Link>
    );
};

const ChatList = (props: Props) => {
    const chatListItems = props.chatList.map((chat: chatItem) => (
        <ChatListItem key={chat.id} id={chat.id} title={chat.title} />
    ));

    return (
        <ul
            style={{
                listStyleType: "none",
                padding: 0,
                margin: "12px",
                marginLeft: "16px",
                display: "flex",
                width: "100%",
                flexDirection: "column",
            }}
        >
            {chatListItems}
        </ul>
    );
};

export default ChatList;
