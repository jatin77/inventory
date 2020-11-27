import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "./style.scss";
import AddEditProductModal from "../../addEditProductModal";
import { removeProduct } from "../../../redux/product/product.action";
import { connect } from "react-redux";

const ProductItem = ({ item, removeProduct }) => {
  const { description, name, price, quantity, image, id } = item;

  const [openModal, setOpenModal] = useState(false);
  const [editID, setEditID] = useState(null);

  const openEditProductModal = () => {
    setOpenModal(true);
    setEditID(id);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDeleteNote = () => {
    removeProduct(id);
  };

  return (
    <>
      <div className="item">
        <div className="item__content">
          <div className="item__content--head">
            <img className="item-img" src={image} alt="" />
            <div>
              <p className="item__content--name">{name}</p>
              <p className="item__content--name">${price}</p>
              <p className="item__content--name">Quantity: {quantity}</p>
            </div>
          </div>
          <p className="item__content--desc">{description}</p>
        </div>
        <div className="item__actions">
          <Tooltip title="Edit item">
            <IconButton
              aria-label="edit item"
              onClick={() => openEditProductModal()}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete item">
            <IconButton
              aria-label="delete item"
              onClick={() => handleDeleteNote()}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      {openModal && id === editID && (
        <AddEditProductModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          edit={true}
          editProduct={item}
        />
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (data) => dispatch(removeProduct(data)),
});

export default connect(null, mapDispatchToProps)(ProductItem);
