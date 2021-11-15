import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type BreadcrumbsProps = {
  id: number;
  name: string;
}

function Breadcrumbs({id, name}: BreadcrumbsProps): JSX.Element {
  const pathToAddReview = generatePath(AppRoute.AddReview, {
    id: id,
  });

  const pathToFilm = generatePath(AppRoute.Film, {
    id: id,
  });

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={pathToFilm} className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link to={pathToAddReview} className="breadcrumbs__link">Add review</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
