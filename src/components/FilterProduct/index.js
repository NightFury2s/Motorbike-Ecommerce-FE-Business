import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

function FilterProduct({ filter, setApiFiter, setLink,SetCurrentPage }) {
  const [openFilter, setOpenFilter] = useState(true);

  const handleFilter = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div className="ProductPage-content-filter-container">
      <h2 className="ProductPage-content-filter-items-name">
        Xe máy
        {openFilter ? (
          <FaAngleUp
            onClick={handleFilter}
            className="ProductPage-content-filter-items-name-icon"
          />
        ) : (
          <FaAngleDown
            onClick={handleFilter}
            className="ProductPage-content-filter-items-name-icon"
          />
        )}
      </h2>
      <ul
        className={`ProductPage-content-filter-list ${
          openFilter ? "open" : ""
        }`}
      >
        {filter.map((e) => (
          <li
            key={e.id}
            onClick={() => {
              setApiFiter(e.link);
              setLink("/productcar/getTypeDetail");
              SetCurrentPage(0)
            }}
            className="ProductPage-content-filter-items"
          >
            {e.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterProduct;
