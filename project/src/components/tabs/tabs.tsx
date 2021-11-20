import { useState } from 'react';
import { TAB_ITEMS } from '../../const';
import { Film } from '../../types/films';
import { Reviews } from '../../types/reviews';
import FilmOverview from '../film-overview/film-overview';

type TabsProps = {
  film: Film;
  reviews: Reviews;
}

function Tabs({film, reviews}: TabsProps): JSX.Element {
  const [ active, setActive ] = useState(0);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {TAB_ITEMS.map((tabItem, index) => (
            <li key={tabItem} className={index === active
              ? 'film-nav__item film-nav__item--active'
              : 'film-nav__item'}
            >
              <button className="film-nav__link" onClick={() => setActive(index)}>{tabItem}</button>
            </li>
          ))}
        </ul>
      </nav>

      {TAB_ITEMS[active] && <FilmOverview film={film} />}

    </div>
  );
}

export default Tabs;
