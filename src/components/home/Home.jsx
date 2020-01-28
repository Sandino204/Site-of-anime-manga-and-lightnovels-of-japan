import React from 'react'
import './Home.css'
import Hai from '../../assets/imgs/hai.jpg'

export default props => {
    return (
        <div>
            <a href="#/manga/haikyu" className="spotlight-all">
                <div className="container" >
                    <div className="d-flex align-itens-center align-text-center
                        row mt-5 text-dark home bg-light spotlight">
                            <div className="col-4"></div>
                            <h2 className="text-center col-4 py-2 my-0">Spotlight</h2>
                            <div className="col-4"></div>
                    </div>
                    <div className="row spotlight-img bg-white px-0 py-1">
                        <div className="">
                            <img src={Hai} alt="Haikyuu" className="rounded mx-auto d-block pl-5 mx-0"/>   
                        </div>
                    </div>
                    <div className="d-flex align-itens-center align-text-center
                        row text-dark home bg-light spotlight-desc">
                            <div className="col-4"></div>
                            <p className="text-center col-4 py-2 my-0">Haikyuu</p>
                            <div className="col-4"></div>
                    </div>
                </div>
            </a>
            <div className="container">
                <h2 className="row d-flex align-itens-center align-text-center
                    mt-2 text-dark home bg-light l-updates-all">
                    <div className="col-4"></div>
                    <h2 className="text-center col-4 py-2 my-0">Last updates</h2>
                    <div className="col-4"></div>
                </h2>                
            </div>
        </div>
    )
}