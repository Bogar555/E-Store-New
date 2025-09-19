import React, { createContext, useContext, useState, useEffect } from "react";
import type { Product } from "../../hooks/Type";

interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
}

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Product) => setProducts(prev => [...prev, product]);

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProducts must be used within ProductProvider");
  return context;
};
