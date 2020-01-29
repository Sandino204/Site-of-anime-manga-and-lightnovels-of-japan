import React from 'react'
import './AllManga.css'
import Hai from '../../../assets/imgs/hai.jpg'
import MangaComponent from './mangaComponents/MangaComponent'
export default props => {
    return(
        <div div className="container mt-5 text-dark home bg-light round-top">
            <div className="row">
                <h2 className="text-center col-12">Manga</h2>
                <MangaComponent name={"Haikyuu"} linkImg={Hai}></MangaComponent>
            </div>
        </div> 
    )
}