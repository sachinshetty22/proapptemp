import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Button, Toolbar, ListItem, Input, List, Fab, Ripple, Icon } from 'react-onsenui';
import { notification } from 'onsenui';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = this.getInitialData();
  }


  getInitialData() {
    return {
      workOutList: [
        {
          ID: 1,
          day: 1,
          name: "Dips",
          numberOfExercise: 5
        },
        {
          ID: 2,
          day: 2,
          name: "Burpees",
          numberOfExercise: 8
        },
        {
          ID: 3,
          day: 3,
          name: "Crunches",
          numberOfExercise: 9
        },
        {
          ID: 4,
          day: 4,
          name: "Lunges",
          numberOfExercise: 9
        },
        {
          ID: 5,
          day: 1,
          name: "Dips",
          numberOfExercise: 5
        },
        {
          ID: 6,
          day: 2,
          name: "Burpees",
          numberOfExercise: 8
        },
        {
          ID: 7,
          day: 3,
          name: "Crunches",
          numberOfExercise: 9
        },
        {
          ID: 8,
          day: 4,
          name: "Lunges",
          numberOfExercise: 9
        }
      ]
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
  renderRow(row, index) {

    return (
      <ListItem key={row.ID}>
        <div>
          <div style={Styles.listMainText}>
            {row.name}
          </div>
          <div className="inbox-body" style={Styles.listSubText}>{`${row.numberOfExercise} Exercise`}</div>
        </div>
      </ListItem>
    );
  }



  render() {

    return (
      <Page renderToolbar={this.renderToolbar}>
        <div className="center" style={Styles.infoBlock}>
          <div style={Styles.infoDayTextBlock}>
            Day
          </div>
          <div style={Styles.infoDayBlock}>
            8
           </div>
          <div style={Styles.infoTitleBlock}>
            Full-Body Workout
          </div>
        </div>
        <List
          dataSource={this.state.workOutList}
          renderRow={this.renderRow}
          />
        <Fab position="right bottom">
          <Ripple></Ripple>
          <Icon icon="md-play"></Icon>
        </Fab>
      </Page>
    );
  }
}
const Styles = {
  leftItem: {
    width: 35,
    height: 35,
    color: '#FFFFFF',
    paddingLeft: 22,
    paddingTop: 19,
    border: '1px solid #3392C2'
  },
  listMainText: {
    paddingTop: 5,
    paddingBottom: 5
  },
  listSubText: {
    color: '#757575',
    fontSize: 14,
  },
  infoBlock: {
    backgroundColor: '#2c3e50',
    textAlign: "center",
    padding: 10
  },
  infoDayTextBlock: {
    fontSize: 16
  },
  infoDayBlock: {
    fontSize: 90,
    padding: 10
  },
  infoTitleBlock: {
    fontSize: 25
  }


}



