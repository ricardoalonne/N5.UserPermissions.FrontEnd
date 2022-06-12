import { Link, Redirect } from "react-router-dom";

export const RedirectToHome = () => {
    return <Redirect to={{pathname: '/'}} />
}


const Index = () => {
    return(
        <>
           <h2 className="mt-3">¡Bienvenido!</h2>
           <p>¡Próximamente nuevas novedades! Por ahora empecemos con <Link to="/permissions">Permisos</Link>.</p>
        </>
    );
}

export default Index;