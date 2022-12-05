import {Filter} from "./filter/Filter";
import {ProductTable} from "./table/ProductTable";
import {ProductForm} from "./form/ProductForm";
import {useState} from "react";

const PRODUCTS = {
    '1': {id: 1, category: 'Clothing', price: '$500', name: 'Burberry London'},
    '2': {id: 2, category: 'Vehicle', price: '$105,000', name: 'Tesla'},
    '3': {id: 3, category: 'Music', price: '$300', name: 'Fender 105CE'},
    '4': {id: 4, category: 'Luxury', price: '$799', name: 'Giorgio Armani Watch'},
    '5': {id: 5, category: 'Electronics', price: '$1,399', name: 'iPhone 14 Pro 1TB'},
    '6': {id: 6, category: 'Electronics', price: '$1999', name: 'MacBook Air Pro'}
};
export const Product = () => {
    const [products, setProducts] = useState(PRODUCTS);
    const [filter, setFilter] = useState('');

    const addProduct = (product) => {
        const key = Math.max(...Object.keys(products).map(key => parseInt(key))) + 1
        product.id = key
        const updatedProducts = {
            ...products,
            [key]: product
        }
        setProducts({...updatedProducts})
    }

    const handleDestroy = (id) => {
        let updatedProduct = products
        delete updatedProduct[id]
        setProducts({...updatedProduct})
    }

    return <div style={{width: 500}}>
        <h2>My Inventory</h2>
        <Filter filter={filter} setFilter={setFilter}/>
        <ProductTable products={products} filterText={filter} onDestroy={handleDestroy}/>
        <ProductForm onSave={addProduct}/>
    </div>
}
