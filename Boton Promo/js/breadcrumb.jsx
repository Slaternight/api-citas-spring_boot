import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Asumiendo que estás utilizando React Router

function Breadcrumb() {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Divide la ubicación actual en segmentos
    const segments = location.pathname.split('/').filter((segment) => segment !== '');

    // Crea las migas de pan en función de los segmentos de la ruta
    const breadcrumbItems = segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      return (
        <li key={segment}>
          <Link to={path}>{segment}</Link>
        </li>
      );
    });

    setBreadcrumbs(breadcrumbItems);
  }, [location.pathname]);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {breadcrumbs}
      </ul>
    </nav>
  );
}

export default Breadcrumb;
