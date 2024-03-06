//import React from "react"
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Slider from "../components/Slider/Slider";
const Home = () => {
  return (
    <div>
        <Slider/>
        <Categories />
        <Products />
    </div>
  )
}

export default Home;