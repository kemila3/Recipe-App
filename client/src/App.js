import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { SaveRecipes } from "./pages/save-recipes";
import { CreateRecipe } from "./pages/crreate-recipe";
import { Auth } from "./pages/auth";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/save-recipes" element={<SaveRecipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
