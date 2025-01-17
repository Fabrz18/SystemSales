import React from "react";

const Options = [
    { value: "cantidad", label: "Cantidad" },
    { value: "name", label: "Nombre" },
    { value: "precio", label: "Precio" },
    { value: "descripcion", label: "Descripcion" }
]

function TypeSearch({searchValue, setSearchValue, setSelectedOption}) {
    return (
        <div className="type-search">
        <select
                    id="selecter"
                    onChange={(e) => setSelectedOption(e.target.value)}
                >
                    <option value="" >All</option>
                    {Options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))};
        </select>
        <input  
        placeholder="Buscar"
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}
        />
        <button>Add Product</button>
        </div>
    );
}

export { TypeSearch };