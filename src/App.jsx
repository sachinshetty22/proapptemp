import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Button, Toolbar, ListItem, Input, List } from 'react-onsenui';
import { notification } from 'onsenui';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = this.getInitialData();
  }


  getInitialData() {
    return {
      username: '',
      password: ''
    };
  }
  alertPopup() {
    notification.alert('This is an Onsen UI alert notification test.');
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Onsen UI</div>
      </Toolbar>
    );
  }


  render() {

    return (
      <Page renderToolbar={this.renderToolbar}>
        <section className="wrap-section" style={Styles.body}>
          <div className="cont">
            <div className="wrap-box">
              <ul>
                <li className="active"><p>9</p><p>*</p><p>KG</p></li>
                <li>*</li>

                <li><p>9</p><p>*</p><p>KG</p></li>
                <li>*</li>
                <li><p>9</p><p>*</p><p>KG</p></li>
              </ul>

              <ul style={{ padding: 0, margin: 0 }}>
                <li><span>+</span></li>
                <li className="active">
                  <p className="sec-no">9</p>
                  <p>*</p>
                  <p> <Input
              value={this.state.password}
              onChange={this.handlePasswordChange}
              modifier='underbar'
              type='number'
              float
              placeholder='10' />
                  </p>
                  <p style={{ padding: 10, fontSize:24 }}>KG</p>
                </li>
                <li><span>-</span></li>
              </ul>
<Button style={{margin: '6px', float:'left'}} modifier='quiet'>{`< Previous`}</Button>
            <Button style={{margin: '6px' , float:'right'}} modifier='cta'>Next Set ></Button>
            
            </div>
          </div>
        </section>
      </Page>
    );
  }
}
const Styles = {
  body: {
    textAlign: 'center',
    padding: 10
  }

}

