import React from 'react'
import './MangaListComponent.css'

export default props => {
    return (
        <div className="row text-dark">
            <h3 className="font-weight-bold col-12 text-center list">{props.id} = "{props.name}"</h3>
        </div>
    )
}