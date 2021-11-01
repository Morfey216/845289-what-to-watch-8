import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import AddReview from '../pages/add-review/add-review';
import Film from '../pages/film/film';
import Main from '../pages/main/main';
import MyList from '../pages/my-list/my-list';
import NotFound from '../pages/not-found/not-found';
import Player from '../pages/player/player';
import SignIn from '../pages/sign-in/sign-in';

type AppProps = {
  title: string,
  genre: string,
  release: string
}

function App({title, genre, release}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = {AppRoute.Main} exact>
          <Main
            title = {title}
            genre = {genre}
            release = {release}
          />
        </Route>
        <Route path={AppRoute.SignIn} exact>
          <SignIn />
        </Route>
        <Route path={AppRoute.MyList} exact>
          <MyList/>
        </Route>
        <Route path={AppRoute.Film} exact>
          <Film/>
        </Route>
        <Route path={AppRoute.AddReview} exact>
          <AddReview/>
        </Route>
        <Route path={AppRoute.Player} exact>
          <Player/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
