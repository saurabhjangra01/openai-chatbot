import { Box, Button, Typography } from "@mui/material";
import CustomInput from "../components/shared/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const Login = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    // taking form data without state
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        console.log(
            "at the time of clicking continue, value of auth => ",
            auth
        );

        try {
            toast.promise(
                auth?.login(email, password) as Promise<void>,
                {
                    loading: "Logging In",
                    success: "Login Successful",
                    error: "Login Failed",
                },
                {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                }
            );
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log("auth => ", auth);
        if (auth?.user) {
            navigate("/chat");
        }
    }, [auth]);

    return (
        <Box
            width={"100%"}
            height={"100%"}
            display={"flex"}
            flexDirection="column"
            flex={1}
        >
            <Box
                display={"flex"}
                flex={{ xs: 1, md: 0.5 }}
                justifyContent={"center"}
                alignItems={"center"}
                padding={10}
            >
                <form
                    onSubmit={handleFormSubmit}
                    style={{
                        margin: "auto",
                        padding: "30px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            variant="h5"
                            fontSize={"30px"}
                            textAlign={"center"}
                            padding={2}
                            fontWeight={500}
                            letterSpacing={"1px"}
                        >
                            Welcome back
                        </Typography>
                        <CustomInput
                            type="email"
                            name="email"
                            label="Email address"
                        />
                        <CustomInput
                            type="password"
                            name="password"
                            label="Password"
                        />
                        <Typography
                            fontSize={"14px"}
                            fontWeight={300}
                            marginTop={1}
                            color={"#10a37f"}
                        >
                            Forgot password?
                        </Typography>
                        <Button
                            type="submit"
                            sx={{
                                px: 2,
                                py: 1.5,
                                mt: 2,
                                width: "320px",
                                borderRadius: 2,
                                color: "white",
                                textTransform: "none",
                                fontWeight: 400,
                                letterSpacing: 1,
                                fontSize: "16px",
                                background: "#10a37f",
                                ":hover": {
                                    background: "#099372",
                                },
                            }}
                        >
                            Continue
                        </Button>
                        <Typography
                            fontSize={"14px"}
                            fontWeight={300}
                            marginTop={3}
                            textAlign={"center"}
                            letterSpacing={"1px"}
                        >
                            Don't have an account?{" "}
                            <Link
                                to={"/signup"}
                                style={{
                                    color: "#10a37f",
                                    textDecoration: "none",
                                }}
                            >
                                Sign Up
                            </Link>
                        </Typography>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default Login;
