import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
    onlyLogo: boolean;
};

const Logo = (props: Props) => {
    return (
        <div
            style={{
                display: "flex",
                marginRight: props.onlyLogo ? "" : "auto",
                alignItems: "center",
                gap: "15px",
            }}
        >
            <Link to={"/"}>
                <img
                    src="openai.png"
                    alt="openai"
                    width={"30px"}
                    height={"30px"}
                    className="image-inverted"
                />
            </Link>
            {!props.onlyLogo && (
                <Typography
                    sx={{
                        display: { md: "block", sm: "none", xs: "none" },
                        mr: "auto",
                        fontWeight: "800",
                        textShadow: "2px 2px 20px #000",
                        fontSize: "20px",
                    }}
                >
                    GossipGPT
                </Typography>
            )}
        </div>
    );
};

export default Logo;
