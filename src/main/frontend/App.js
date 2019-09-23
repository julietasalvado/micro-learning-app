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
              <Tile
                  content={{
                      header:'Everything React: Tutorials for Beginners and Experts Alike',
                      url:"https://dzone.com/articles/everything-react-tutorials-for-beginners-and-exper",
                      body:"Released by Facebook in 2013, React has steadily become an industry-standard library for front-end development. Per Stack Overflow's most recent Developer Survey, React sits at the top of the list for both developer's most loved and wanted web library/framework of 2019. This ..."}}
              />
              <Tile
                  content={{
                      header:'Everything React: Tutorials for Beginners and Experts Alike',
                      url:"https://dzone.com/articles/everything-react-tutorials-for-beginners-and-exper",
                      body:"Released by Facebook in 2013, React has steadily become an industry-standard library for front-end development. Per Stack Overflow's most recent Developer Survey, React sits at the top of the list for both developer's most loved and wanted web library/framework of 2019. This ..."}}
              />
              <Tile
                  content={{
                      header:'Everything React: Tutorials for Beginners and Experts Alike',
                      url:"https://dzone.com/articles/everything-react-tutorials-for-beginners-and-exper",
                      body:"Released by Facebook in 2013, React has steadily become an industry-standard library for front-end development. Per Stack Overflow's most recent Developer Survey, React sits at the top of the list for both developer's most loved and wanted web library/framework of 2019. This ..."}}
              />
          </div>
      </Container>
      </div>
  );
}

export default App;
