import Item from "./Item";
import { PRODUCTS, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:px-8 px-5 py-16 sample-style">
      <Item Links={PRODUCTS} title="Address" />
       {/* <Item Links={cityIcons} title="RESOURCES" /> */}
     {/* <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" /> */}
    </div>
  );
};

export default ItemsContainer;