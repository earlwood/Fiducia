export const Header = ({data}) => {
  return (
    <header id='header' >
      
      <div className="card text-grey" >
        <img src="../img/logo-handshake2.jpg" className='img-fluid rounded w-auto'  alt="..."/>
        <div className="card-img-overlay text-center">
          <h1 className='w-auto'>
            {data ? data.title : 'Loading'}
          </h1>
          {/* <p id='parag'>{data ? data.paragraph : 'Loading'}</p> */}
          <div className="contacta">
            <p id='contactanos'>Contáctanos</p>
            <a
              href="https://wa.me/528133873961"
              className="whatsapp_float btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-whatsapp whatsapp-icon"></i>
            </a>
            <a
              href="tel:5218133873961"
              className="whatsapp_float btn-lg"
              style={{marginLeft: '20'}}
              rel="noopener noreferrer"
            >
              <i className="fa fa-phone whatsapp-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
