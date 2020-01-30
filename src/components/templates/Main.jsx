import './Main.css'
import React from 'react'
import Home from '../home/Home'
import Manga from '../manga/Manga'
import Anime from '../anime/Anime'

export default props => {
    return (
        <div className="container-fluid main">
            <Anime className="raw"></Anime>
        </div>
    )
}