import { Link } from "react-router-dom";

export const Navbar = () => {
    return <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/create-recipe">Create Recipe</Link>
        <Link to="/save-recipes">Saved Recipes</Link>
        <Link to="/auth">Register/Login</Link>
    </div>
}