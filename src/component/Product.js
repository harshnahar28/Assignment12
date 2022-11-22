import {Filter} from "./filter/Filter";
import {ProductTable} from "./table/ProductTable";
import {ProductForm} from "./form/ProductForm";
import {useState} from "react";

const PRODUCTS = {
    '1': {id: 1, category: 'Music', price: '$459.99', name: 'Clarinet'},
    '2': {id: 2, category: 'Music', price: '$5,000', name: 'Cello'},
    '3': {id: 3, category: 'Music', price: '$4,500', name: 'Tuba'},
    '4': {id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge'},
    '5': {id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table'},
    '6': {id: 6, category: 'Furniture', price: '$100', name: 'Bean Bag'}
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