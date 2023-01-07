import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Accueil from './Accueil';
import ListPosts from './ListPosts';
import PostParId from './PostParId';
import NavBar from './NavBar';

const AppRoute = () => {
   return(
       <div>
           <BrowserRouter>
           <NavBar/>
           <Routes>
               <Route path={'/'}  element={<Accueil/>} />
               <Route path={'/ListPosts'}  element={<ListPosts/>} />
               <Route path={'/PostParId/:id'}  element={<PostParId />} />
           </Routes>
           </BrowserRouter>
       </div>
   )
}

export default AppRoute;