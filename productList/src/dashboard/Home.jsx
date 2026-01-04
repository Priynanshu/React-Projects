import React, { useContext, useState } from 'react'
import CategoryFilter from '../components/filters/CategoryFilter'
import ProductGrid from '../components/products/ProductGrid'
import Container from '../components/layout/Container'
import { ProductContext } from '../context/ProductProvider'

const Home = () => {

  const { productData } = useContext(ProductContext)
  const [category, setCategory] = useState("all");

  
  const filteredProducts = productData.filter((p) => {
    return category === "all" ? true : p.category === category;
  });

  return (
    <Container>
      <div className="flex gap-4 mb-6">
       <CategoryFilter value={category} onChange={setCategory} />
      </div>
      <ProductGrid products={filteredProducts} />
    </Container>
  )
}

export default Home