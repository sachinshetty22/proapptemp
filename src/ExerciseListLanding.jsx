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
        <section  style={Styles.body}>
          <p>
            <Input
              value={this.state.username}
              onChange={this.handleUsernameChange}
              modifier='underbar'
              float
              placeholder='Username' />
          </p>
          <p>
            <Input
              value={this.state.password}
              onChange={this.handlePasswordChange}
              modifier='underbar'
              type='password'
              float
              placeholder='Password' />
          </p>
          <p>
            <Button modifier='large' onClick={this.handleClick} >Sign in</Button>
          </p>
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

