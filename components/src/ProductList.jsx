export const ProductList = () => {

    const products = [
        {
            id: 1,
            name: "apple",
            price: 5.99
        },
        {
            id: 2,
            name: "orange",
            price: 3.99
        },
        {
            id: 3,
            name: "watermelon",
            price: 15.99
        },
    ];


    return (
        <div>
            <h2>Product List</h2>
            {
                // Java Script code
                products.map((product) => {
                    return (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};