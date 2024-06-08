import { Avatar, Box, Button, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { RiChatNewLine } from "react-icons/ri";
import ChatList from "../components/ChatList";

const chatlist = [
    {
        id: "abckacjkanklcnakjcbkaj",
        title: "1st Chat",
    },
    {
        id: "skbckabkvcjavjka",
        title: "2nd Chat",
    },
    {
        id: "scnaknvlanvioebvjbjkla",
        title: "3rd Chat",
    },
    {
        id: "abckacjsklmlakcmnalkmcnlakcmakanklcnakjcbkaj",
        title: "4th Chat",
    },
    {
        id: "asjkabckjbakjcabckacjkanklcnakjcbkaj",
        title: "5th Chat",
    },
    {
        id: "msklcmn2n1kj4n12hri12br9ub",
        title: "6th Chat",
    },
    {
        id: "kslancla98990cjajcnajknckaj",
        title: "7th Chat",
    },
    {
        id: "abckacjkansjkancna9989cya89caklcnakjcbkaj",
        title: "8th Chat",
    },
    {
        id: "abckacjkanklcnsjknc21j2n1kjn31akjcbkaj",
        title: "9th Chat",
    },
    {
        id: "abckacjkanklcsanc8898c90a0canakjcbkaj",
        title: "10th Chat",
    },
    {
        id: "abckacjkanklcnakjcbkaj",
        title: "1st Chat",
    },
    {
        id: "skbckabkvcjavjka",
        title: "2nd Chat",
    },
    {
        id: "scnaknvlanvioebvjbjkla",
        title: "3rd Chat",
    },
    {
        id: "abckacjsklmlakcmnalkmcnlakcmakanklcnakjcbkaj",
        title: "4th Chat",
    },
    {
        id: "asjkabckjbakjcabckacjkanklcnakjcbkaj",
        title: "5th Chat",
    },
    {
        id: "msklcmn2n1kj4n12hri12br9ub",
        title: "6th Chat",
    },
    {
        id: "kslancla98990cjajcnajknckaj",
        title: "7th Chat",
    },
    {
        id: "abckacjkansjkancna9989cya89caklcnakjcbkaj",
        title: "8th Chat",
    },
    {
        id: "abckacjkanklcnsjknc21j2n1kjn31akjcbkaj",
        title: "9th Chat",
    },
    {
        id: "abckacjkanklcsanc8898c90a0canakjcbkaj",
        title: "10th Chat",
    },
    {
        id: "abckacjkanklcnakjcbkaj",
        title: "1st Chat",
    },
    {
        id: "skbckabkvcjavjka",
        title: "2nd Chat",
    },
    {
        id: "scnaknvlanvioebvjbjkla",
        title: "3rd Chat",
    },
    {
        id: "abckacjsklmlakcmnalkmcnlakcmakanklcnakjcbkaj",
        title: "4th Chat",
    },
    {
        id: "asjkabckjbakjcabckacjkanklcnakjcbkaj",
        title: "5th Chat",
    },
    {
        id: "msklcmn2n1kj4n12hri12br9ub",
        title: "6th Chat",
    },
    {
        id: "kslancla98990cjajcnajknckaj",
        title: "7th Chat",
    },
    {
        id: "abckacjkansjkancna9989cya89caklcnakjcbkaj",
        title: "8th Chat",
    },
    {
        id: "abckacjkanklcnsjknc21j2n1kjn31akjcbkaj",
        title: "9th Chat",
    },
    {
        id: "abckacjkanklcsanc8898c90a0canakjcbkaj",
        title: "10th Chat",
    },
];

const Chat = () => {
    const auth = useAuth();
    return (
        <Box
            sx={{
                display: "flex",
                flex: 1,
                width: "100%",
                height: {
                    xs: "calc(100vh - 56px)", // Small screens
                    sm: "calc(100vh - 64px)", // Medium to large screens
                },
            }}
        >
            <Box
                sx={{
                    display: { sm: "flex", xs: "none" },
                    width: "260px",
                    // bgcolor: "green",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        height: "54px",
                        width: "100%",
                        display: "flex",
                        px: 1,
                    }}
                >
                    <Button
                        sx={{
                            width: "100%",
                            justifyContent: "space-between",
                            borderRadius: 3,
                        }}
                        className="btn-hover"
                    >
                        <Typography
                            sx={{
                                fontFamily: "work sans",
                                textTransform: "capitalize",
                                fontSize: "1rem",
                                fontWeight: 500,
                                marginLeft: 1.5,
                            }}
                        >
                            New Chat
                        </Typography>
                        <RiChatNewLine
                            size={22}
                            style={{
                                margin: "0 12px",
                                color: "white",
                            }}
                        />
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    {/* contains all chats list */}
                    <ChatList chatList={chatlist} />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        height: "72px",
                        px: 1,
                    }}
                >
                    <Button
                        className="btn-hover"
                        sx={{
                            width: "100%",
                            justifyContent: "flex-start",
                            my: 1,
                            borderRadius: 3,
                        }}
                    >
                        <Avatar
                            sx={{
                                // mx: "auto",
                                // my: 2,
                                bgcolor: "white",
                                color: "black",
                                fontWeight: 600,
                            }}
                        >
                            {auth?.user?.name[0].toUpperCase()}
                            {auth?.user?.name.split(" ")[1][0].toUpperCase()}
                        </Avatar>
                        <Typography
                            sx={{
                                marginLeft: 1,
                                fontFamily: "work sans",
                                textTransform: "capitalize",
                                fontWeight: 300,
                                fontSize: "1rem",
                            }}
                        >
                            {auth?.user?.name}
                        </Typography>
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    width: {
                        sm: "calc(100vw - 260px)",
                        xs: "100%",
                    },
                    bgcolor: "#212121",
                    borderTopLeftRadius: "12px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        // bgcolor: "red",
                        mx: 3,
                        borderRadius: 5,
                    }}
                ></Box>
            </Box>
        </Box>
    );
};

export default Chat;
