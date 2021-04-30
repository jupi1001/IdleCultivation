import ShopItems from '../Components/ShopItems';
import XPCounter from '../Components/XPCounter';

const ShopPage = () => {
  return (
    <div className="columns">
      <div className="column is-2">
        <XPCounter />
      </div>
      <div className="column is-10">
        <ShopItems />
      </div>
    </div>
  );
};

export default ShopPage;
