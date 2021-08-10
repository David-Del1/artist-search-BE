import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'; 
import DetailContainer from '../../containers/DetailContainer';
import ArtistList from '../artist/ArtistList';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ArtistList} />
        {/* <Route exact path="/artist/:id" component={} /> */}
        <Route exact path="/:id" component={DetailContainer} /> 
      </Switch>
    </Router>
  );
}
