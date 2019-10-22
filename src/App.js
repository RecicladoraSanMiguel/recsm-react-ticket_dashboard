import React from 'react';
import Gallery from './components/gallery';
import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <div className="dashboard">
        <div className="dashboard_main">
        <div className="dashboard_main-header">
            This is the header
          </div>
          <div className="dashboard_main-gallery aspect-ratio aspect-ratio-16-9">
            <Gallery/> 
          </div>
        </div>
        <div className="dashboard_aside uk-grid">
          
          <div class="uk-card uk-card-default uk-width-1-2">
            <div class="uk-card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div class="uk-card-footer">
              <span class="uk-button uk-button-text">En Proceso</span>
            </div>
          </div>



          <div class="uk-card uk-card-default uk-width-1-2">
            <div class="uk-card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div class="uk-card-footer">
                <span class="uk-button uk-button-text">Listo para cobro</span>
            </div>
          </div>
          <div class="uk-card uk-card-default uk-width-1-2">
            <div class="uk-card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div class="uk-card-footer">
                <span class="uk-button uk-button-text">En Proceso</span>
            </div>
          </div>
          <div class="uk-card uk-card-default uk-width-1-2">
            <div class="uk-card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div class="uk-card-footer">
                <span class="uk-button uk-button-text">En Proceso</span>
            </div>
          </div>
          <div class="uk-card uk-card-default uk-width-1-2">
            <div class="uk-card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div class="uk-card-footer">
                <span class="uk-button uk-button-text">Listo para cobro</span>
            </div>
          </div>
          <div class="uk-card uk-card-default uk-width-1-2">
            <div class="uk-card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div class="uk-card-footer">
                <span class="uk-button uk-button-text">En Proceso</span>
            </div>
          </div>
          <div class="uk-card uk-card-default uk-width-1-2">
            <div class="uk-card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div class="uk-card-footer">
                <span class="uk-button uk-button-text">Listo para cobro</span>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default App;
