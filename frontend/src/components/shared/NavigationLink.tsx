import { Link } from "react-router-dom";

type Props = {
    to: string;
    text: string;
    className: string;
    onClick?: () => Promise<void>;
};

const NavigationLink = (props: Props) => {
    return (
        <Link className={"nav-link " + props.className} to={props.to}>
            {props.text}
        </Link>
    );
};

export default NavigationLink;
