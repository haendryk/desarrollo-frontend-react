 import Category from "./Category";
 import ListProduct from "./ListProduct";

const Products = ({ products, filterText, inStockOnly }) => {
    const rows = [];
  
    let lastCategory = null;

    products.forEach((product) => {
      if (
        product.name.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) === -1
      ) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <Category
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ListProduct
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });  
    return (
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
}

export default Products;