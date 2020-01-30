import React from 'react'
import './mangaList.css'
import Hai from '../../../assets/imgs/hai.jpg'
import MangaListComponent from './mangaListComponent/MangaListComponent'

const mangaName = "Haikyuu"

export default props => {
    return (
        <div>
            <div div className="container mt-5 text-dark home bg-light round-top">
            <div className="row">
                <h2 className="text-center col-12">{mangaName}</h2>
            </div>
            <div className="row spotlight-img bg-white px-0 py-1">
                <img src={Hai} alt="HAI" className="mx-auto d-block pl-1 mx-0"/>
            </div>
            <div className="mt-5">
                <MangaListComponent id={"1"} name={"manga numero 1"}></MangaListComponent>
            </div>
        </div>
        </div>
    )
}