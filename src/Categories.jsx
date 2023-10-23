import "./styles/categories.css";
function Categories({ categoryList, highlight, selectCategory }) {
  return (
    <div className="categories">
      {categoryList.map((cat, index) => (
        <p
          key={index}
          style={highlight(cat)}
          onClick={() => selectCategory(cat)}
        >
          {cat}
        </p>
      ))}
    </div>
  );
}

export default Categories;
