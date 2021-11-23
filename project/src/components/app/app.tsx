import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import AddReview from '../pages/add-review/add-review';
import SelectedFilm from '../pages/selected-film/selected-film';
import Main from '../pages/main/main';
import MyList from '../pages/my-list/my-list';
import NotFound from '../pages/not-found/not-found';
import Player from '../pages/player/player';
import SignIn from '../pages/sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = {AppRoute.Main} exact>
          <Main />
        </Route>

        <Route path={AppRoute.SignIn} exact>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        />
        <Route path={AppRoute.Film} exact>
          <SelectedFilm />
        </Route>
        <Route path={AppRoute.AddReview} exact>
          <AddReview />
        </Route>
        <Route path={AppRoute.Player} exact>
          <Player />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
