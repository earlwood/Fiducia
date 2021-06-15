export const Header = ({data}) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {data ? data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{data ? data.paragraph : 'Loading'}</p>
                <p id='contactanos'>Contactanos</p>
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
                {/* <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
