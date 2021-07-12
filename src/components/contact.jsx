import { useState } from 'react';
import emailjs from 'emailjs-com';
import swal from '@sweetalert/with-react';

import JsonData from '../data/data.json';

const initialState = {
  name: '',
  email: '',
  telefono: '',
  servicio: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, phone, service, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();    

    emailjs.sendForm('service_67b5rgo', 'template_4mvfsdk', e.target, 'user_bZTNXZ2Nmnz6xB7iOB1W2')
    .then((result) => {
      e.target.reset();
          swal({
            icon: "success",
            title: "Se ha enviado el correo!" 
        });
      },
      (error) => {
        swal({
          icon: "warning",
          dangerMode: true,
          title: error
        });
      }
    )
  }
  const data = JsonData.Contact;
  
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className="row">
            <div className='col-md-6'>
              {/* <div className='row'> */}
                <div className='section-title'>
                  <h2>Contáctanos</h2>
                  <p>                  
                    Por favor llena el formulario para enviarnos un correo electrónico
                    y nos comunicaremos a la brevedad posible.
                  </p>
                </div>
                <form name='sentMessage' validate="true" onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          className='form-control'
                          placeholder='Nombre'
                          required
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          className='form-control'
                          placeholder='Correo Electrónico'
                          required
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className='form-group'>
                        <input
                          type='text'
                          id='phone'
                          name='phone'
                          className='form-control'
                          placeholder='Teléfono o Celular'
                          required
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className='form-group'>
                        <select id='service' name='service' className='form-control' required onChange={handleChange}>                      
                          <option value={0}>Seleccione Servicio</option>
                          {
                            data.services.map((d,i) => (
                              <option key={i} value={d}>{d}</option>
                            ))
                          }
                        </select>
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      rows='4'
                      placeholder='Mensaje'
                      required
                      onChange={handleChange}
                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                  <div id='success'></div>
                  <button type='submit' className='btn btn-custom btn-lg'>
                    Enviar Mensaje
                  </button>
                </form>
              {/* </div> */}
            </div>
            <div className="col-md-2"></div>
            <div className='col-md-4' id='cont'>            
              <div className='contact-item'>
                <h3>Contacto Fiducia</h3>
                <p>
                  <span>
                    <i className='fa fa-map-marker'></i> Dirección
                  </span>
                  {props.data ? props.data.address : 'loading'}
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-phone'></i> Teléfono
                  </span>{' '}
                  {props.data ? props.data.phone : 'loading'}
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-envelope-o'></i> Correo Electrónico
                  </span>{' '}
                  {props.data ? props.data.email : 'loading'}
                </p>
              </div>
              
              {/* <div className='col-md-12'>
                <div className='row'> */}
                  <div className='social'>
                    <ul>
                      <li>
                        <a href={props.data ? props.data.facebook : '/'} target="_blank" rel="noreferrer">
                          <i className='fa fa-facebook'></i>
                        </a>
                      </li>
                      <li>
                        <a href={props.data ? props.data.instagram : '/'} target="_blank" rel="noreferrer">
                          <i className='fa fa-instagram'></i>
                        </a>
                      </li>
                      <li>
                        <a href={props.data ? props.data.linkedin : '/'} target="_blank" rel="noreferrer">
                          <i className='fa fa-linkedin'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                {/* </div>
              </div> */}
            </div>
          </div>

        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2021 Built and Designed with React JS by <strong>Earl Wood</strong>
            {/* <a href='http://www.templatewire.com' rel='nofollow'>
              TemplateWire
            </a> */}
          </p>
        </div>
      </div>
    </div>
  )
}
