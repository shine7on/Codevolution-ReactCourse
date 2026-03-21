export const Product = ({title,price,inStock,categories}) => {
	return (
		<>
			<h1>{title}</h1>
			<p>Price: {price}</p>
			<p>In stock: {inStock ? 'yes' : 'no'}</p>
			<p>Categories: {categories.join(', ')}</p>
		</>
	);
};