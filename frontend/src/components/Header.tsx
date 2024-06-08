import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

type Props = {
    onlyLogo: boolean;
};

const Header = (props: Props) => {
    const auth = useAuth();

    return (
        <AppBar
            sx={{
                bgcolor: "transparent",
                position: "static",
                boxShadow: "none",
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: props.onlyLogo ? "center" : "normal",
                    alignItems: props.onlyLogo ? "flex-end" : "center",
                }}
            >
                <Logo onlyLogo={props.onlyLogo} />
                {!props.onlyLogo && (
                    <div>
                        {auth?.isLoggedIn ? (
                            <>
                                <NavigationLink
                                    className="btn-accent text-primary btn-accent-hover"
                                    to="/chat"
                                    text="Go to chat"
                                />
                                <NavigationLink
                                    to="/"
                                    text="Log out"
                                    className="bg-dark-secondary border text-primary"
                                    onClick={auth.logout}
                                />
                            </>
                        ) : (
                            <>
                                <NavigationLink
                                    className="bg-dark-secondary border text-primary"
                                    to="/login"
                                    text="Log In"
                                />
                                <NavigationLink
                                    className="btn-accent text-primary"
                                    to="/signup"
                                    text="Sign Up"
                                />
                            </>
                        )}
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
