import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import LoadingSubmitBtn from "../utility/LoadingSubmitBtn";
import { connect } from "react-redux";
import { addProduct, updateProduct } from "../../redux/product/product.action";
import InputField from "../utility/inputField";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const AddEditProductModal = ({
  openModal,
  handleCloseModal,
  edit,
  add,
  editProduct,
  addProduct,
  updateProduct,
}) => {
  const [name, setName] = useState(edit ? editProduct.name : "");
  const [imgUrl, setImgUrl] = useState(edit ? editProduct.image : "");
  const [description, setDescription] = useState(
    edit ? editProduct.description : ""
  );
  const [price, setPrice] = useState(edit ? editProduct.price : "");
  const [quantity, setQuantity] = useState(edit ? editProduct.quantity : "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !price || !quantity) {
      alert("Invalid Fields");
      return;
    }
    // Add/Update Product
    const saveProduct = {
      name,
      description,
      price,
      quantity,
      image: imgUrl,
      id: edit ? editProduct.id : Date.now(),
    };
    if (add) {
      // Add Product
      addProduct(saveProduct);
    } else {
      // Update Product
      updateProduct(saveProduct);
    }
    handleCloseModal();
  };

  return (
    <>
      <Dialog
        onClose={handleCloseModal}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleCloseModal}>
          {!add ? "Edit Product" : "Add Product"}
        </DialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Name"
              value={name}
              setValue={setName}
              type="text"
            />
            <InputField
              label="Description"
              value={description}
              setValue={setDescription}
              type="text"
            />
            <InputField
              type="text"
              label="Image URL"
              value={imgUrl}
              setValue={setImgUrl}
            />

            <div className="d-flex">
              <div className="mr-2">
                <InputField
                  type="number"
                  label="Price"
                  value={price}
                  setValue={setPrice}
                />
              </div>
              <InputField
                type="number"
                label="Quantity"
                value={quantity}
                setValue={setQuantity}
              />
            </div>
            <div className="d-flex">
              <div className="mr-3">
                <LoadingSubmitBtn
                  handleLoadingBtnClick={handleSubmit}
                  text={add ? "Add" : "Update"}
                  loading={false}
                />
              </div>
              <Button
                size="small"
                variant="outlined"
                onClick={handleCloseModal}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addProduct: (data) => dispatch(addProduct(data)),
  updateProduct: (data) => dispatch(updateProduct(data)),
});

export default connect(null, mapDispatchToProps)(AddEditProductModal);
