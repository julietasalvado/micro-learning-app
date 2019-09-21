import React from 'react';
import './App.css';
import Tile from './Tile.js'
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
              <Tile />
          </div>
      </Container>
      </div>
  );
}

export default App;
