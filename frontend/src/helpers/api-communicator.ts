import axios from "axios";

export const loginUser = async (email: string, password: string) => {
    const loginResponse = await axios.post("/user/login", { email, password });
    if (loginResponse.status !== 200) {
        throw new Error("Unable to Login");
    }

    const data = await loginResponse.data;
    return data;
};

export const checkAuthStatus = async () => {
    const authResponse = await axios.get("/user/auth-status");
    if (authResponse.status !== 200) {
        throw new Error("Unable to Authenticate");
    }

    const data = await authResponse.data;
    return data;
};
