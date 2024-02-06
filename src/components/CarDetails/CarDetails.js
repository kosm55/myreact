const CarDetails = ({details}) => {
    const {brand,price,year} = details;
    return (
        <div>
            <h1>brand: {brand}</h1>
            <h2>price: {price}</h2>
            <h2>year: {year}</h2>
        </div>
    );
};

export {CarDetails};