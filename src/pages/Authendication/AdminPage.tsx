import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../components/context/ProductContext";

const AdminPage = () => {
  const [content, setContent] = useState("");
  const [allContent, setAllContent] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const { products, addProduct } = useProducts();
  const navigate = useNavigate();

  const handleUpload = () => {
    const saved = JSON.parse(localStorage.getItem("content") || "[]");
    saved.push(content);
    localStorage.setItem("content", JSON.stringify(saved));
    setAllContent(saved);
    setContent("");
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

  return (
    <div className="admin-upload-container">
      <h2 className="mb-4">📦 Upload Product</h2>

      <div className="form-section">
        <TextField
          placeholder="Categories"
          size="small"
          value={type}
          onChange={(e) => setType(e.currentTarget.value)}
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

        <Button onClick={handleSubmit}>
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
        <Button  onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AdminPage;