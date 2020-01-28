import React from 'react'
import './Logo.css'

export default props => {
    return (
        <aside className="container-fluid logo">
            <div className="row">
            <h1 className="text-light col-lg-3 col-md-4 col-6 text-center mt-md-2 mt-3">AniClu</h1> 
            <div className="col-lg-6 col-md-4 none"></div>
            <div className="col-lg-3 mt-md-2 text-center col-md-4 col-6 mt-3">
                <i className="fa fa-facebook-square text-light mx-2"></i>
                <i className="fa fa-twitter-square text-light mx-2"></i>
                <i className="fa fa-instagram text-light mx-2"></i>
            </div>
            </div>
        </aside>
    )
}