import React from 'react';
import './App.css';
import Tile from './Tile.js'
import articleData from "./articleData";
import {Container, Header, Tab, Input} from "semantic-ui-react";

const panes = [
    { menuItem: 'Article', render: () =>
            <Tab.Pane>
                <Input placeholder='Add article...' />
            </Tab.Pane> }
];

function App() {
    const articleComponents = articleData.map( article => <Tile header={article.header} url={article.url} body={article.body} />)

  return (
      <div>
      <Container style={{ marginTop: '3em' }}>
          <Header as='h1'> μlearning app</Header>
          <Tab panes={panes} />

          <div className="App">
              {articleComponents}
          </div>
      </Container>
      </div>
  );
}

export default App;
