import './App.css';
import Product from './screens/Product/Product.jsx';
//import Default from './screens/Default/Default.jsx';

import './App.css';
const PRODUCTS = [
  {category: "Frutas", price: "2 Bs.", stocked: true, name: "Manzana"},
  {category: "Frutas", price: "5 Bs.", stocked: true, name: "fruta del dragón"},
  {category: "Frutas", price: "3 Bs.", stocked: false, name: "maracuyá"},
  {category: "Vegetales", price: "3 Bs.", stocked: true, name: "Espinaca"},
  {category: "Vegetales", price: "4 Bs.", stocked: false, name: "Calabaza"},
  {category: "Vegetales", price: "10 Bs.", stocked: true, name: "Guisantes"}
];

function App() {
  return (
    <Product products={PRODUCTS} />
  );
  
}
// function App() {
//   return (
//     <div className="App">
//       <filterProduct />
//     </div>
//   );
// }
export default App;
