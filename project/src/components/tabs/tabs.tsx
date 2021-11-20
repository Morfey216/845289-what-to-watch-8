import { useState } from 'react';
import { CurrentTab, TAB_ITEMS } from '../../const';
import { Film } from '../../types/films';
import { Reviews } from '../../types/reviews';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';

type TabsProps = {
  film: Film;
  reviews: Reviews;
}

function Tabs({film, reviews}: TabsProps): JSX.Element {
  const [ active, setActive ] = useState(CurrentTab.Overview);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {TAB_ITEMS.map((tabItem) => (
            <li key={tabItem} className={CurrentTab[tabItem] === active
              ? 'film-nav__item film-nav__item--active'
              : 'film-nav__item'}
            >
              <button
                className="film-nav__link"
                style={{background: 'transparent', border: 0, cursor: 'pointer'}}
                onClick={() => setActive(CurrentTab[tabItem])}
              >
                {tabItem}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {active === CurrentTab.Overview && <FilmOverview film={film} />}
      {active === CurrentTab.Details && <FilmDetails film={film} />}
      {active === CurrentTab.Reviews && <FilmReviews reviews={reviews} />}

    </div>
  );
}

export default Tabs;
