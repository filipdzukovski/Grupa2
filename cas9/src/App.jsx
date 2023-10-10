import {useEffect,useState} from "react";
import {Routes,Route} from 'react-router-dom';
import {Gallery} from './components/Gallery';
import {Home} from './components/Home';
import {Nav} from './components/Nav';
import axios from 'axios';
import {API_URL} from './utils/constants';
import "./css/App.css";
import {GalleryContext} from './utils/GalleryContext';

export function App(){

  const [photos,setPhotos] = useState([]);
  const [selectedImage,setSelectedImage] = useState("");

  useEffect(()=>{
    axios(`${API_URL}/photos`)
      .then(res=> setPhotos(res.data))
      .catch(err=>alert(err))
  },[])

  // function openPhoto(url){
  //   setSelectedImage(url);
  //   console.log(url)
  // }

  // function closePhoto(){
  //   setSelectedImage("");
  // }

  return(
    <div id="app">
      <Nav/>
          <GalleryContext.Provider value={{selectedImage,setSelectedImage}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" 
          element={
          <Gallery 
          listOfPhotos={photos}
          // setImage={openPhoto}
          // selektiranaSlika={selectedImage}
          // removePhoto={closePhoto}
           />
          }/>
        </Routes>
        </GalleryContext.Provider>
    </div>
  )
}