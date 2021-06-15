import React from 'react';
import { useHistory } from "react-router-dom";
export const Services = (props) => {
  
  const history = useHistory();

  const handleClick = () => {
    history.push('/pymes');
  }

  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Nuestros Servicios</h2>
          
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-6'>
                  {' '}
                  <img className='img-service' src={d.img} alt="..." />
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <p>{d.mas !== '' 
                        ? <button className='btn btn-custom-services' onClick={handleClick}>{d.mas}</button>
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