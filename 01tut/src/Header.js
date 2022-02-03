import React from 'react';

const Header = ({ title }) => {
  return (
    <header>
      <h2>{title}</h2>
    </header>
  );
};

Header.defaultProps = {
  title: 'shopping list',
};

export default Header;
