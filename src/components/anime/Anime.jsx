import React from 'react'
import './Anime.css'
import AnimeComponent from './animeComponent/AnimeComponent'
import Hai from '../../assets/imgs/hai.jpg'


export default props => {
    return (
        <div div className="container mt-5 p-3 text-dark home bg-light round-all">
            <div className="row">
                <h2 className="text-center col-12">Anime</h2>
                <AnimeComponent name={"Haikyuu"} linkImg={Hai}></AnimeComponent>
            </div>
        </div> 
    )
}