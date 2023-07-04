import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  btnHandleRef = btnComponent => {
    this.btnComponent = btnComponent;
  };

  mastheadHandleRef = masthead => {
    this.mastheadComponent = masthead;
    this.mastheadComponent.logo = `<img src='logo192.png'>`
    this.mastheadComponent.links = [
      {name: 'link 1', url: 'http://google.com'},
      {name: 'link 2', url: '/'},
      {name: 'link 3', url: '/'},
      {name: 'link 4', url: '/'}
    ]

    this.mastheadComponent.compressed = true;
    this.mastheadComponent.rightNav =
    `<kn-button 
      [buttonId]="'helpButton'" 
      [buttonType]="'kn-pill'" 
      [buttonText]="'Help'" 
      [buttonIconLeft]="'fa-regular fa-circle-question'">
    </kn-button>`

    
  };

  componentDidMount() {
    this.btnComponent.addEventListener('btnClick', e => {
      console.log(e.detail);
    });
    
    this.personObj = 
    [
      {id: 0, name:"John Doe", role:"Product Manager", tags: 'john, doe, product, manager'},
      {id: 1, name:"Joe Smith", role:"Developer", tags: 'joe, smith, developer'},
      {id: 2, name:"Rick James", role:"IT Manager", tags: 'rick, james, manager'},
      {id: 3, name:"Bobby Knight", role:"Developer", tags: 'bobby, knight, developer', selected: true}
    ]

    const fields = { text: 'name', value: 'id'};
    let multiselect = document.querySelector("#multiselectComponentId");
    multiselect.fields = fields;
    multiselect.data = this.personObj;

    // const helpBtn = document.getElementById('helpButton');
    // helpBtn.addEventListener('btnClick', e => {
    //   console.log(e.details)
    // })
    
  }

  componentWillUnmount() {
    this.btnComponent.removeEventListener('btnClick', null);
  }

  
  render() {
    return (
      <div className="App">
        <kn-web-masthead  ref={this.mastheadHandleRef} ></kn-web-masthead>
        <div class="main">
          <div class="col">
            <kn-tooltip id="tooltipExample" tooltip="This is a tooltip" direction="top">
              <span slot="content"><i class="fa-solid fa-circle-info"></i></span>
            </kn-tooltip>
          </div>
          <div class="col">
            <kn-button 
              ref={this.btnHandleRef}
              id="exampleButtonComponentId" 
              button-id="exampleButton" 
              button-type="kn-primary" 
              button-text="Button">
            </kn-button>
            <kn-multi-select 
              id="multiselectComponentId" 
              component-id="multiSelect" 
              label="Multi select" 
              delimiter=", " 
              component-width="385px" 
              searchbox-placeholder="Search" 
              display-placeholder="Select item(s)">
            </kn-multi-select>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
