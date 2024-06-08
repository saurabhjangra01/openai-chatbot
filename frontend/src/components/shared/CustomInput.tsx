import { TextField } from "@mui/material";

type Props = {
    name: string;
    type: string;
    label: string;
};

const CustomInput = (props: Props) => {
    return (
        <TextField
            InputLabelProps={{
                style: {
                    color: "#aeaeae",
                    fontWeight: 200,
                    fontSize: "15px",
                },
            }}
            InputProps={{
                style: {
                    width: "320px",
                    borderRadius: "6px",
                    color: "white",
                    fontSize: "16px",
                },
            }}
            name={props.name}
            label={props.label}
            type={props.type}
            margin="normal"
        />
    );
};

export default CustomInput;
