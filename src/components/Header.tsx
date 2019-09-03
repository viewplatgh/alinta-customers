import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="tile is-ancestor" style={{ marginTop: 20 }}>
      <div className="tile is-parent is-12">
        <div className="tile is-child">
          <p className="title">Alinta app by Rob Lao</p>
          <Link className="button is-default" to="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
