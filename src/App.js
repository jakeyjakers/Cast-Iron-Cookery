import React, {useContext} from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import SignupLogin from "./Components/SignupLogin";
import Profile from "./Components/Profile";
import RecipeDetails from "./Components/RecipeDetails";
import NewRecipe from "./Components/NewRecipe";
import AuthContext from './Store/AuthContext'
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
const authCtx = useContext(AuthContext)

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Main />} />
          <Route path="login" element={<SignupLogin />} />
          {authCtx.token && <Route path="profile" element={<Profile />} /> }
         { authCtx.token && <Route path="newrecipe" element={<NewRecipe />} /> }
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
