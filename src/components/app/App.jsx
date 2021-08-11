import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'; 
import ArtistList from '../artist/ArtistList';
import AlbumList from '../album/AlbumList';
import Recordings from '../recordings/Recordings';
import Lyrics from '../lyrics/Lyrics';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ArtistList} />
        <Route exact path="/artist/:id" component={AlbumList} />
        <Route exact path="/artist/album/:id" component={Recordings} />
        <Route exact 
          path="/lyrics/:title"
          component={Lyrics} />
      </Switch>
    </Router>
  );
}
