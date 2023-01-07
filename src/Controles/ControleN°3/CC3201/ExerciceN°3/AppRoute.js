import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Accueil from './Accueil';
import ListPhotos from './ListPhotos';
import PhotoParId from './PhotoParId';
import NavBar from './NavBar';
//import {useFetch} from '../ExerciceN°2/Photos'

const AppRoute = () => {
   //const lst = useFetch("https://jsonplaceholder.typecode.com/photos?_limit=10");
   return(
       <div>
           <BrowserRouter>
           <NavBar/>
           <Routes>
               <Route path={"/"}  element={<Accueil/>} />
               <Route path={"/ListPhotos"}  element={<ListPhotos/>} />
               <Route path={"/PhotoParId/:id"}  element={<PhotoParId />} />
           </Routes>
           </BrowserRouter>
       </div>
   )
}

export default AppRoute;