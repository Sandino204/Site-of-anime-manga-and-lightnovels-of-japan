import React from 'react'
import './MangaComponent.css'

export default props => {
    return (
        <a className="tumbCaixa " href={props.link}>
            <img src={props.linkImg} alt={props.name} className="thumbs p-2"/>
            <h2 className="tumbname">{props.name}</h2>
        </a>
    )
} 