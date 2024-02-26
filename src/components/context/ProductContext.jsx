import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const productContext = createContext();

export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
    let API_PRODUCTS = "http://localhost:3000/product";

    const [product, setProduct] = useState([]);

    async function AddProduct(newProduct) {
        await axios.post(API_PRODUCTS, newProduct);
    }

    async function readProduct() {
        const { data } = await axios(API_PRODUCTS);
        setProduct(data);
    }


    async function deleteProduct(id) {
        await axios.delete(`${API_PRODUCTS}/${id}`)
        readProduct()
    }
  
async function UpdateProduct(id) {
    await axios.put(`${API_PRODUCTS}/${id}`);
 readProduct()
}



    let values = {
        AddProduct,
        readProduct,
        product,
        UpdateProduct,
        deleteProduct
    };

    return <productContext.Provider value={values}>{children}</productContext.Provider>;
};

export default ProductContext;
