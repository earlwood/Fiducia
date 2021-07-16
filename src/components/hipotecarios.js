import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Hipotecarios = ({data}) => {

    const location = useLocation();

    useEffect (() => {
        const div = document.getElementById(location.pathname.replace('/', ''))
        // console.log("hipotecarios",div);
        if(div){
            window.scrollTo({
            top: div.offsetTop - 30,
            behavior: 'smooth',
            })
        }
    }, [location])
    // console.log("location hipotecarios",location);
    return(
        <div id='hipotecarios' className='text-center'>
            <div className='container'>
                <div>
                <h2>Créditos Hipotecarios</h2>
                
                </div>
                <div className='row'>
                    { data
                        ?  data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className='col-md-12'>
                                {' '}
                                <img className='img-service' src={d.img} alt="..." />
                                <div className='service-desc'>
                                    <h3>{d.name}</h3>
                                    
                                    <div className='p-2 d-flex justify-content-center'>
                                        <div className='col-lg-6 col-sm-6 col-xs-12'>
                                            <ul>
                                                {d
                                                ? d.hipo1.map((dd, ii) => (
                                                    <li key={`${dd}-${ii}`}>{dd}</li>
                                                    ))
                                                : 'loading'}
                                            </ul>
                                        </div>
                                        <div className='col-lg-6 col-sm-6 col-xs-12'>
                                            <ul>
                                                { data
                                                ? d.hipo2.map((dd, ii) => (
                                                    <li key={`${dd}-${ii}`}> {dd}</li>
                                                    ))
                                                : 'loading'}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                        : 'loading'}
                </div><br />
                <h2>Contáctanos para más información</h2>
                <div className='col-md-12'>
                    {/* <Link className='btn btn-custom-pymes' to='/#contact'>Comprar</Link> */}
                    
                    <a
                        href="https://wa.me/528133873961"
                        className="btn btn-custom-pymes"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-whatsapp hip"></i>
                    </a>
                    <a
                        href="tel:5218133873961"
                        className="btn btn-custom-pymes"
                        style={{marginLeft: '20'}}
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-phone hip"></i>
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default Hipotecarios;