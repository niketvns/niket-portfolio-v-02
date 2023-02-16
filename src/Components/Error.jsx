import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <>
            <div className="error">
                <h1>Error 404</h1>
                <p>Page not found</p>
                <NavLink to='/'><button><span><ArrowBackIcon /></span> Go Back</button></NavLink>
            </div>
        </>
    );
}

export default Error;