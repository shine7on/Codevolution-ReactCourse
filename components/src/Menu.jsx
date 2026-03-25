import { MenuItem } from "./MenuItem";

export const Menu = () => {

    const handleOrder = (itemName,itemPrice) => {
        alert(`you ordered ${itemName}, which is ${itemPrice}`);
    };

    return (
        <div>
            <MenuItem name='pizza' price={12} onOrder={handleOrder}/>
            <MenuItem name='burger' price={10} onOrder={handleOrder}/>
            <MenuItem name='pasta' price={8} onOrder={handleOrder}/>
        </div>
    );
};