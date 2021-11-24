import Footer from '../../footer/footer';
import PromoFilm from '../../promo-film/promo-film';
import { useSelector } from 'react-redux';
import { getPromoFilm } from '../../../store/data/selectors';
import Catalog from '../../catalog/catalog';

function Main(): JSX.Element {
  const promoFilm = useSelector(getPromoFilm);

  return (
    <>
      <PromoFilm promoFilm={promoFilm} />
      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </>);
}

export default Main;
