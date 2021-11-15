import { Link } from 'react-router-dom';

type LogoProps = {
  lightClass?: string;
}

function Logo({lightClass}: LogoProps): JSX.Element {
  return (
    <div className="logo">
      <Link className={lightClass ? `logo__link ${lightClass}` : 'logo__link'} to="/">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
