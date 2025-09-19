import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../components/context/UserContext";
import { useProducts } from "../../components/context/ProductContext";
import { categories } from "../../hooks/Type";
import { Button } from "react-bootstrap";

export const AdminUpload = () => {
  const { user } = useUser();
  const { products, addProduct } = useProducts();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  if (user?.role !== "admin") {
    alert("Access Denied");
    navigate("/");
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    if (!type || !name || !price || !imagePreview) {
      alert("Please fill all fields.");
      return;
    }

    addProduct({ id: Date.now(), type, name, price, image: imagePreview });
    setType("");
    setName("");
    setPrice("");
    setImageFile(null);
    setImagePreview("");
    alert("Product uploaded successfully!");
  };

  return (
    <div className="admin-upload-container">
      <h2 className="mb-4">📦 Upload Product</h2>

      <div className="form-section">
        {/* <Autocomplete
          id="type"
          options={categories}
          autoHighlight
          getOptionLabel={(option) => option.name}
          value={categories.find((c) => c.name === type) || null}
          onChange={(event, newValue) => {
            setType(newValue ? newValue.name : "");
          }}
          renderInput={params => {
           
            return (
              <TextField
                {...params}
                label="Gender"
                size="small"
                variant="outlined"
              />
            )
          }}
        /> */}
        <TextField
          placeholder="Categories"
          size="small"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <TextField
          placeholder="Product Name"
          size="small"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />

        <TextField
          placeholder="Price (₹)"
          size="small"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.currentTarget.value)}
        />

        <input type="file" accept="image/*" onChange={handleFileChange} />

        {imagePreview && (
          <div className="image-preview">
            <p>Image Preview:</p>
            <img src={imagePreview} alt="Preview" width={100} />
          </div>
        )}

        <Button variant="primary" onClick={handleSubmit}>
          Upload Product
        </Button>
      </div>

      <h3 className="mt-5">🧾 Existing Products</h3>
      <ul className="product-list">
        {products.map((p) => (
          <li key={p.id} className="product-item">
            <img src={p.image} width={50} alt={p.name} />
            <div>
              <b>{p.type}</b> - {p.name} - ₹{p.price}
            </div>
          </li>
        ))}
      </ul>

      <div className="logout-section mt-4">
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};
