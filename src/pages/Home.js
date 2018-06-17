import { hot } from 'react-hot-loader';
import * as React from 'react';

import '../styles/theme.sass';
import './Home.sass';




class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
            <h2>About Uhura</h2>
            <div>
              <p>
                Every year thousands of people around the world lose their voice due to a cancer of upper air passages. Many of them lose their ability to speak.
              </p>
              <p>
                With Project Uhura we want to restore their freedom, by creating glasses for voice. With the help of technology the glasses will be able to understand and convey what Patient wants to say just from the movements of their muscles. We create the profession of tomorrow – the voice optician.
              </p>
            </div>
          </section>
          <section>
            <h2>Our solution</h2>
            <div>
              <p>
                Uhura physical interface process signal from various sources e.g. virtual keyboard, which could be used on any surface. It integrates speaker and EMG sensors in one device.
              </p>
              <p>
                Their capabilities are coordinated by our program, UhuraOs, that reads the movements of face muscles, and then processess them into intonation, which is then applied to the words and played by the speaker. What is more, we include the voice banking technology, meaning that Uhura speaks with the Patient’s voice from before the surgery.
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
export default hot(module)(Home);
