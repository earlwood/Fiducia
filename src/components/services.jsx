import React from 'react';
import { useHistory } from "react-router-dom";

export const Services = ({data}) => {
  
  const history = useHistory();

  const handleClick = (name) => {
    
    // console.log(name);
    name === 'Contabilidad'
    ? history.push('/contabilidad')
    : name === 'Créditos Hipotecarios'
      ? history.push('/hipotecarios')
      : name === 'Créditos Pyme' && history.push('/pymes');
    // history.push('/pymes');
  }

  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Nuestros Servicios</h2>          
        </div>
        <div className='row'>
          {data
            ? data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-sm-12 col-md-12 col-lg-4'>
                  {' '}
                  <img className='img-service' src={d.img} alt="..." />
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <p>{d.mas !== '' 
                        ? <button className='btn btn-custom-services' onClick={()=> handleClick(d.name)}>{d.mas}</button>
                        : '' 
                      }</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}