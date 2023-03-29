import React, { useState, useEffect } from 'react';
import ProductList from './productList';
import Pagination from './pagination';

const ProductContainer = () => {

  // we will fill fetched data here 
  const [products, setProducts] = useState([]);
  // default current page is 1, will change on handlePageClick
  const [currentPage, setCurrentPage] = useState(1);
  // products that we want to show on each page 
  const productsPerPage = 10;
  // number of page we want 
  const totalPages = 10;
// useEffect for fetching products 
  useEffect(() => {
    // fetch products from API
    fetchProducts()
  }, [currentPage]);
  // fetching here 
async function fetchProducts(){
 
  let res=await fetch("/products?limit=4&page="+currentPage)
  let result =await res.json()
  setProducts(result.currentProducts)
}
// pagination logic =
//this line calculate the where to start displaying product by current page eg. if user is on page 2 then multiply by 10 = 20
// start showing product from 20 if user is on 2nd page 
//   const indexOfLastProduct = currentPage * productsPerPage;
  
//   // this line calculate previous product, if user is now on page 2 then 20-10=10 , means start extracting product from index 10 
  
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
// // this line extract product to show on current page if user is on page 3 then start from 20th index to 30 
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageClick = (page) => {
 setCurrentPage(page)
  };
  const handleNext=(currentPage)=>{
    setCurrentPage(currentPage+1);
    
    }
    
    const handlePrev=(currentPage)=>{
        setCurrentPage(currentPage-1)
    }
  return (
    <div>
    {
      // we are passing extracted products here based on current page position 
    }
      <ProductList products={products} />
      {
      // passed 10.and one callback function to handle next previous page operation 
      } 
      
      <Pagination totalPages={totalPages} onPageClick={handlePageClick} onNext={handleNext} onPrev={handlePrev} />
    </div>
  );
};

export default ProductContainer;