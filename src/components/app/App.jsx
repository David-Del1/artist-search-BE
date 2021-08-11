import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'; 
import DetailContainer from '../../containers/DetailContainer';
import ArtistList from '../artist/ArtistList';
import Recordings from '../recordings/Recordings';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ArtistList} />
        <Route exact path="/artist/:id" component={DetailContainer} />
        <Route exact path="/artist/album/:id" component={Recordings} />
      </Switch>
    </Router>
  );
}
