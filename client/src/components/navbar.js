import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"])


    return <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/create-recipe">Create Recipe</Link>
        <Link to="/save-recipes">Saved Recipes</Link>
        {!cookies.access_token ? (  <Link to="/auth">Register/Login</Link>) : <button> Logout</button>}
      
    </div>
}