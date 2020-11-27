import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  searchProduct,
  setPriceRange,
  setQuantityRange,
} from "../../redux/query/query.action";
import { selectCurrentQuery } from "../../redux/query/query.selector";
import AddEditProductModal from "../addEditProductModal";
import AddProductButton from "../addProductButton";
import InputField from "../utility/inputField";
import ItemFilter from "./itemFilter";

const QueryBar = ({
  query,
  searchProduct,
  setPriceRange,
  setQuantityRange,
}) => {
  const { searchTerm, priceRange, quantityRange } = query;
  const [openModal, setOpenModal] = useState(false);

  const openAddProductModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div style={styles.queryWrap}>
      <div className="d-flex ">
        <div className="flex-grow-1 mt-3 mr-2">
          <InputField
            value={searchTerm}
            placeholder="Search product by name"
            type="text"
            setValue={searchProduct}
          />
        </div>
        <AddProductButton handleClick={openAddProductModal} />
      </div>
      <div className="flex-column flex-md-row d-flex justify-content-between">
        {/* Price Filter */}
        <ItemFilter
          value={priceRange}
          filterType="Price"
          setValue={setPriceRange}
        />
        {/* Quantity Filter */}
        <ItemFilter
          value={quantityRange}
          filterType="Quantity"
          setValue={setQuantityRange}
        />
      </div>

      {/* Add product Modal */}
      {openModal && (
        <AddEditProductModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          add={true}
        />
      )}
    </div>
  );
};

const styles = {
  queryWrap: {
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "5px",
    position: "sticky",
    top: "5.5rem",
    zIndex: "1",
  },
};

const mapStateToProps = createStructuredSelector({
  query: selectCurrentQuery,
});

const mapDispatchToProps = (dispatch) => ({
  searchProduct: (data) => dispatch(searchProduct(data)),
  setPriceRange: (data) => dispatch(setPriceRange(data)),
  setQuantityRange: (data) => dispatch(setQuantityRange(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryBar);
