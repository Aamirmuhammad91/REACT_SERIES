import ItemsList from './ItemsList';

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: '3rem', color: 'red' }}>The list is empty</p>
      )}
    </main>
  );
};

export default Content;
