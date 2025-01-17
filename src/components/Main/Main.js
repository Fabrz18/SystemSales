//REACT
import React from 'react';
// COMPONENTS

import {TypeSearch} from './TypeSearch.jsx';
import {ContentPrincipal} from './ContentPrincipal.jsx';
import {ContentPrincipalItem} from './ContentPrincipalItem.jsx';

// STYLES
import './Main.css';

const Example = [
    { cantidad: 20, name: "Osito Peluches", precio: 150, description: "Producto de la categoría Peluches, perfecto para niños y niñas." },
    { cantidad: 15, name: "Dominó Juegos de Mesa", precio: 80, description: "Producto de la categoría Juegos de Mesa, perfecto para niños y niñas." },
    { cantidad: 30, name: "Superhéroe Figuras de Acción", precio: 200, description: "Producto de la categoría Figuras de Acción, perfecto para niños y niñas." },
    { cantidad: 10, name: "Carrito Vehículos de Juguete", precio: 120, description: "Producto de la categoría Vehículos de Juguete, perfecto para niños y niñas." },
    { cantidad: 5, name: "Bloques Bloques de Construcción", precio: 300, description: "Producto de la categoría Bloques de Construcción, perfecto para niños y niñas." }
]



function Main() {
    const [products, setProducts] = React.useState(Example);
    const [selectedOption, setSelectedOption] = React.useState('');
    const [searchValue, setSearchValue] = React.useState('');
    const searchedProducts = products.filter(
        (product) => {
            let productm = product.name.toLowerCase();
            switch (selectedOption) {
                case "name":
                    productm = product.name.toLowerCase();
                    break;
                case "cantidad":
                    productm = product.cantidad.toString();
                    break;
                case "precio":
                    productm = product.precio.toString();
                    break;
                case "descripcion":
                    productm = product.description.toLowerCase();
                    break;
            }
            const searchValueM = searchValue.toLowerCase(); 
            return productm.includes(searchValueM);   
        }
    );
    return (
    <>
        <div className="PrincipalItemsLocation">
                
        <TypeSearch 
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
            setSelectedOption={setSelectedOption}
        />
        <ContentPrincipal>
        {searchedProducts.map(todo => (
            <ContentPrincipalItem
            cantidad={todo.cantidad}
            nombre={todo.name}
            precio={todo.precio}
            description = {todo.description}             
            />
        ))}    
        </ContentPrincipal>
        </div>
    </>
  );
}
export {Main};