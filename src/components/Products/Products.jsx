// import React from 'react'

import { useEffect, useState } from "react";
import axios from 'axios';
import Product from "../Product/Product"
import "./Products.scss"
const Products = ({ cat, filters, sort }) => {
    console.log('1', cat, filters, sort);
    
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
                setProducts(res.data)
            } catch (err) {

            }
        }
        getProducts();
    }, [cat])

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
            )
            )
        )
        // let check = cat && products.filter(item => Object.entries(filters).every(([key, value]) =>
        //     item[key].includes(value)
        // ))
        // console.log('check', check);
    }, [products, cat, filters])

    // aroww func: () => a === () => {return a} === function(){return a}

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) => {
                return [...prev].sort((a, b) => a.createdAt - b.createdAt)
            });
        } else if (sort === "asc") {
            setFilteredProducts((prev) => {
                return [...prev].sort((a, b) => a.price - b.price)
            });
        } else {
            setFilteredProducts((prev) => 
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort])
    console.log('produts', products);
    console.log('filteredProducts', filteredProducts);
    return ( 
        <div className="products">

            {cat

                ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
                : products
                    // .slice(0, 8)
                    .map((item) => <Product item={item} key={item.id} />)
            }


        </div>
    )
}

export default Products