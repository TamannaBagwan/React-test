import { useState } from "react";
import "../App.css";

const ItemDetails = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    quantity: "",
    unitPrice: "",
    dateOfSubmission: "",
  });

  const [errors, setErrors] = useState('');
  const [isChecked, detIsChecked] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validation = () => {
    let errors = {};
    if (formData.itemName.length > 226) {
      errors.itemName = "Item name should not be more than 226 characters ";
    }
    if (formData.quantity.length > 10) {
      errors.quantity = "Quantity should not be more than 10 digits ";
    }
  };
  return (
    <div className="app">
      <h2> Item Details </h2>
      <div>
        <input type="checkbox" />
        <label>Item</label>

        <input type="checkbox" />
        <label>Supplier</label>
      </div>

      <div className="itemDiv">
        <div className="items">
        <label className="itemLabels"> Item Name </label> <br />
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          placeholder="enter item name"
          onChange={handleChange}
        />{" "}
        </div>
       
        <br />
        <div className="items">
        <label className="itemLabels"> Quantity </label> <br />
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          placeholder="enter qunatity"
        />{" "}
        </div>
      
        <br />
        <div className="items">
        <label className="itemLabels"> Unit Price </label> <br />
        <input
          type="number"
          name="unitPrice"
          value={formData.unitPrice}
          placeholder="enter unit price"
        />{" "}
        </div>
      
        <br />

        <div className="items">
        <label className="itemLabels"> Date of Submission </label> <br />
        <input
          type="date"
          name="dateOfSubmission"
          value={formData.dateOfSubmission}
          placeholder="Select date"
        />
        </div>
       
      </div>
    </div>
  );
};

export default ItemDetails;
