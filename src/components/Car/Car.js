const Car = ({itemCar,detCar}) => {
    let {brand} = itemCar;
    return (
        <div>
            <div>{brand}</div>
            <button onClick={()=>detCar(itemCar)}>more info</button>
        </div>
    );
};

export {Car};