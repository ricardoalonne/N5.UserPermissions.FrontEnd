import { Redirect } from "react-router-dom";

export const RedirectToNotFound = () => {
    return <Redirect to={{pathname: '/not-found'}} />
}

const NotFound = () => {
    return(
        <>
           <h1>Página no encontrada</h1>
        </>
    );
}

export default NotFound;