import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import SignupLogin from "./Components/SignupLogin";
import Profile from "./Components/Profile";
import RecipeDetails from "./Components/RecipeDetails";
import NewRecipe from "./Components/NewRecipe";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Main />} />
          <Route path="login" element={<SignupLogin />} />
          <Route path="profile" element={<Profile />} />
          <Route path="newrecipe" element={<NewRecipe />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
