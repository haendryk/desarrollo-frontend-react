import Search from './_components/Search.jsx';
import Products from './_components/Products.jsx';
import { useState } from "react";

const Product = ({ products }) => {

    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (  
    <div>
      <Search 
        filterText={filterText} 
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
    <Products
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
    );
}

export default Product;