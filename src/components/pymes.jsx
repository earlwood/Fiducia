import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Pymes = ({data}) => {

    const location = useLocation();

    useEffect (() => {
        const div = document.getElementById(location.pathname.replace('/', ''))
        console.log(div);
        if(div){
            window.scrollTo({
            top: div.offsetTop - 50,
            behavior: 'smooth',
            })
        }
    }, [location])
    // console.log(location);
    return(
        <div id='pymes' className='text-center'>
            <div className='container'>
                <div>
                <h2>Pymes</h2>
                
                </div>
                <div className='row'>
                    { data
                        ?  data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className='col-md-6'>
                                {' '}
                                <img className='img-service' src={d.img} alt="..." />
                                <div className='service-desc'>
                                    <h3>{d.name}</h3>
                                    
                                    <div className='p-2 d-flex justify-content-start'>
                                        <div className='col-lg-6 col-sm-6 col-xs-12'>
                                            <ul>
                                                {d
                                                ? d.pyme1.map((dd, ii) => (
                                                    <li key={`${dd}-${ii}`}>{dd}</li>
                                                    ))
                                                : 'loading'}
                                            </ul>
                                        </div>
                                        <div className='col-lg-6 col-sm-6 col-xs-12'>
                                            <ul>
                                                { data
                                                ? d.pyme2.map((dd, ii) => (
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
                        <i className="fa fa-whatsapp pym"></i>
                    </a>
                    <a
                        href="tel:5218133873961"
                        className="btn btn-custom-pymes"
                        style={{marginLeft: '20'}}
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-phone pym"></i>
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default Pymes;