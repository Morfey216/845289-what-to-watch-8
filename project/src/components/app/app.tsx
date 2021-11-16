import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Films } from '../../types/films';
import AddReview from '../pages/add-review/add-review';
import SelectedFilm from '../pages/selected-film/selected-film';
import Main from '../pages/main/main';
import MyList from '../pages/my-list/my-list';
import NotFound from '../pages/not-found/not-found';
import Player from '../pages/player/player';
import SignIn from '../pages/sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  title: string;
  genre: string;
  release: string;
  films: Films;
}

function App({title, genre, release, films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = {AppRoute.Main} exact>
          <Main
            title = {title}
            genre = {genre}
            release = {release}
            films = {films}
          />
        </Route>
        <Route path={AppRoute.SignIn} exact>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList films = {films}/>}
          authorizationStatus={AuthorizationStatus.NoAuth}
        />
        <Route path={AppRoute.Film} exact>
          <SelectedFilm film={films[0]} films={films}/>
        </Route>
        <Route path={AppRoute.AddReview} exact>
          <AddReview film={films[0]}/>
        </Route>
        <Route path={AppRoute.Player} exact>
          <Player film={films[0]}/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
