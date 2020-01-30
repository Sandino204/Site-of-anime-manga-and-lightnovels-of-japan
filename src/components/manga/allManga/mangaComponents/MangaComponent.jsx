import React from 'react'
import './MangaComponent.css'

export default props => {
    return (
        <a className="tumbCaixa col-8 col-md-4 col-lg-2 m-3 round-all" href={props.link}>
            <img src={props.linkImg} alt={props.name} className="img-thumbnail mx-auto d-block m-2"/>
            <h2 className="tumbname text-dark">{props.name}</h2>
        </a>
    )
} 