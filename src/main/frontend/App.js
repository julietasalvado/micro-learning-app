import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Header, Tab, Input} from "semantic-ui-react";

const panes = [
    { menuItem: 'Article', render: () =>
            <Tab.Pane>
                <Input placeholder='Add article...' />
            </Tab.Pane> }
];

function App() {
  return (
      <div>
      <Container style={{ marginTop: '3em' }}>
          <Header as='h1'> μlearning app</Header>
          <Tab panes={panes} />

          <div className="App">
              <header className="App-header">
                  <h1> Microlearning app</h1>
                  <img src={logo} className="App-logo" alt="logo"/>
              </header>
          </div>
      </Container>
      </div>
  );
}

export default App;
