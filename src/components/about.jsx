export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2 className='nos'>Nosotros</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <p>{props.data ? props.data.paragraph2 : 'loading...'}</p>
              <h3>¿Porque Elegirnos?</h3>
              <div className='list-style' style={{fontSize: '17'}}>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <div className='container'>
          <div className='col-lg-12 col-sm-12 col-xs-12 section-title'>
            <h2>Misión</h2>
            <p style={{fontSize:'20'}}>{props.data ? props.data.Mision : 'loading...'}</p><br />
            <h2>Visión</h2>
            <p style={{fontSize:'20'}}>{props.data ? props.data.Vision : 'loading...'}</p><br />
            <h2>Propósito</h2>
            <p style={{fontSize:'20'}}>{props.data ? props.data.Proposito : 'loading...'}</p>
          </div>
          {/* <div className='row'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-4'>
                    {' '}
                    <i className={d.icon}></i>
                    <div className='service-desc'>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div> */}
        </div>
      </div>
    </div>
  )
}
