import { useState } from "react";
import "../App.css";

const ItemDetails = () => {
  const [itemData, setItemData] = useState({
    itemName: "",
    quantity: "",
    unitPrice: "",
    dateOfSubmission: "",
  });

  const [supplierData, setSupplierData] = useState({
    supplierName: "",
    companyName: "",
    country: "",
    state: "",
    city: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isItemChecked, setIsItemChecked] = useState(false);
  const [isSupplierChecked, setIsSupplierChecked] = useState(false);

  const handleItemCheckbox = () => setIsItemChecked(!isItemChecked);
  const handleSupplierCheckbox = () => setIsSupplierChecked(!isSupplierChecked);

  const handleItemChange = (e) => {
    setItemData({
      ...itemData,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSupplierChange = (e) => {
    setSupplierData({
      ...supplierData,
      [e.target.name]: [e.target.value],
    });
  };

  const validation = () => {
    let newErrors = {};
    if (itemData.itemName.length > 226) {
      errors.itemName = "Item name should not be more than 226 characters ";
    }
    if (itemData.quantity.length > 10) {
      errors.quantity = "Quantity should not be more than 10 digits ";
    }
    setErrors(newErrors);
  };
  return (
    <div className="app">
      <h2> Item Details </h2>
      <div>
        <input
          type="checkbox"
          id="itemCheckbox"
          checked={isItemChecked}
          onChange={handleItemCheckbox}
        />
        <label htmlFor="itemCheckbox">Item</label>

        <input
          type="checkbox"
          id="supplierCheckbox"
          checked={isSupplierChecked}
          onChange={handleSupplierCheckbox}
        />
        <label htmlFor="supplierCheckbox">Supplier</label>
      </div>

      {isItemChecked && (
        <div className="itemDiv">
          <div className="items">
            <label className="itemLabels"> Item Name </label>
            <input
              type="text"
              name="itemName"
              value={itemData.itemName}
              placeholder="enter item name"
              onChange={handleItemChange}
            />
          </div>

          <div className="items">
            <label className="itemLabels"> Quantity </label>
            <input
              type="number"
              name="quantity"
              value={itemData.quantity}
              placeholder="enter qunatity"
              onChange={handleItemChange}
            />
          </div>

          <div className="itemDiv">
            <div className="items">
              <label className="itemLabels"> Unit Price </label>
              <input
                type="number"
                name="unitPrice"
                value={itemData.unitPrice}
                placeholder="enter unit price"
                onChange={handleItemChange}
              />
            </div>

            <div className="items">
              <label className="itemLabels"> Date of Submission </label>
              <input
                type="date"
                name="dateOfSubmission"
                value={itemData.dateOfSubmission}
                placeholder="Select date"
                onChange={handleItemChange}
              />
            </div>
          </div>
        </div>
      )}

      {isSupplierChecked && (
        <div className="supplierData">
          <div>
            <div className="items">
              <label className="itemLabels"> Supplier Name</label>
              <input
                type="text"
                placeholder="enter supplier name"
                value={supplierData.supplierName}
                onChange={handleSupplierChange}
              />
            </div>

            <div className="items">
              <label className="itemLabels">Company Name </label>
              <input
                type="text"
                placeholder="enter company name"
                value={supplierData.companyName}
                onChange={handleSupplierChange}
              />
            </div>
          </div>

          <div>
            <div className="items">
              <label className="itemLabels"> Country Name </label>
              <select name="country" onChange={handleSupplierChange}>
                <option> India </option>
              </select>
            </div>

            <div className="items">
              <label className="itemLabels">State </label>
              <select name="state" onChange={handleSupplierChange}>
                <option> USA </option>
              </select>
            </div>
          </div>

          <div>
            <div className="items">
              <label className="itemLabels"> City </label>
              <input
                type="text"
                placeholder="enter city"
                value={supplierData.city}
                onChange={handleSupplierChange}
              />
            </div>

            <div className="items">
              <label className="itemLabels"> Email </label>
              <input
                type="email"
                placeholder="enter email address"
                value={supplierData.email}
                onChange={handleSupplierChange}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
