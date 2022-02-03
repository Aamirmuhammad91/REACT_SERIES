const Footer = ({ length }) => {
  return (
    <footer>
      <p>{length === 1 ? `${length} item ` : `${length} items `}remaining</p>
    </footer>
  );
};

export default Footer;
