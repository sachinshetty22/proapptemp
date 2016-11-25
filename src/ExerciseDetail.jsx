import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Button, Toolbar, ListItem, Input, List, Fab, Ripple, Icon, ListHeader } from 'react-onsenui';
import { notification } from 'onsenui';
import YouTube from 'react-youtube';

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
          typeName: "Main Muscle",
          typeValue: "Hamstrings"
        },
        {
          ID: 2,
          typeName: "Other Muscles",
          typeValue: "Gluter,Lower Back, Quada"
        },
        {
          ID: 3,
          typeName: "Equipment",
          typeValue: "KettleBell"
        },
        {
          ID: 4,
          typeName: "Mechanics Type",
          typeValue: "Compound"
        },
        {
          ID: 5,
          typeName: "Mechanics Type",
          typeValue: "Compound"
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
        <div className='center'>Onsens UI</div>
      </Toolbar>
    );
  }
  renderRow(row, index) {

    return (
      <ListItem key={row.ID}>
        <div className='left'>
          {row.typeName}
        </div>
        <div className='right'>
          <span className="list__item__label"> {row.typeValue}</span>
        </div>
      </ListItem>
    );
  }



  render() {
    const opts = {
      height: '200',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div className="center" >
          <YouTube
            videoId="ZK7_BO0Ni8s"
            opts={opts}
            onReady={this._onReady}
            />
        </div>
        <List
          dataSource={this.state.workOutList}
          renderRow={this.renderRow}
          renderHeader={() => <ListHeader style={Styles.listTitle} >Lunge Pass Through</ListHeader>}
          />
      </Page>
    );
  }
}
const Styles = {
  listTitle: {
    textAlign: "center",
    fontSize: 16,
    padding: 10
  },
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



