import {hot} from 'react-hot-loader';
import * as React from 'react';

import '../styles/theme.sass';
import './Home.sass';

import logoUW from '../assets/uw-pl.png';
import logoIUW from '../assets/iuw-pl.png';
import logoWUM from '../assets/wum-pl.png';

import planet from '../assets/planet-earth.svg';
import speaker from '../assets/speaking.svg';
import timer from '../assets/timer.svg';

class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static logos = [
    {
      class: 'logo-uw',
      src: logoUW,
    },
    {
      class: 'logo-iuw',
      src: logoIUW,
    },
    {
      class: 'logo-WUM',
      src: logoWUM,
    },
  ];

  renderLogos() {
    return (
      <div className="logos">
        {Home.logos.map(logo =>
          (<div className="logo-item">
              <img src={logo.src} className={logo.class}/>
            </div>
          )
        )}
      </div>
    );
  }

  render() {
    return (
      <div className="page">
        <header className="header">
          <div className="centered-container">
            <span className="logo">Uhura</span>
            <p className="motto">
              Giving back voice to the voiceless
            </p>
          </div>
        </header>
        <main>
          <section>
            <div className="motto-box">
              <p className="big">
                Every year thousands of people around the world lose their voice due to a cancer of
                upper air passages.
              </p>
              <p className="big emph">Many of them lose their ability to speak.</p>
              <div className="alert alert-warning" role="alert">
                A simple secondary alert—check it out!
              </div>
            </div>
          </section>
          <section>
            <div className="section__left-col">
              <h2>What can we do?</h2>
              <hr className="header-underline"/>
            </div>
            <div>
            <p className="big">
              With Project Uhura we want to restore their freedom, by creating glasses for voice.
            </p>
              <p>
                With the help of technology the glasses will be able to understand and convey what Patient wants to say just from the movements of their muscles. We create the profession of tomorrow – the voice optician.
              </p>
            </div>
          </section>
          <section>
            <div className="section__left-col">
              <h2>Our solution</h2>
              <hr className="header-underline"/>
            </div>
            <div>
            <p className="big">
              Uhura physical interface process signal from various sources e.g. virtual keyboard, which could be used on any surface. It integrates speaker and EMG sensors in one device.
            </p>
            <p>
              Their capabilities are coordinated by our program, UhuraOs, that reads the movements of face muscles, and then processess them into intonation, which is then applied to the words and played by the speaker. What is more, we include the voice banking technology, meaning that Uhura speaks with the Patient’s voice from before the surgery.
            </p>
            </div>
          </section>
          <section className="benefit-section">
            {/*<h2 style={{display: 'block', width: "100%"}}>A patient can use Uhura</h2>*/}
            <div className="benefits">
              <div className="benefit-item">
                <div className="benefit-img"> <img src={planet}/> </div>
                <span className="benefit-caption">anytime & anywhere</span>
              </div>
              <div className="benefit-item">
                <div className="benefit-img"> <img src={timer}/> </div>
                <span className="benefit-caption">instantly</span>
              </div>
              <div className="benefit-item">
                <div className="benefit-img"> <img src={speaker}/> </div>
                <span className="benefit-caption">using his own voice with identity and emotion</span>
              </div>
            </div>
          </section>
        </main>
        <footer>
          {this.renderLogos()}
        </footer>
      </div>
    );
  }
}

export default hot(module)(Home);
