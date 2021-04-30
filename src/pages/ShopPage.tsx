import ShopItems from '../Components/ShopItems';
import SideMenu from '../Components/SideMenu';

const ShopPage = () => {
  return (
    <div className="columns">
      <div className="column is-2">
        <SideMenu />
      </div>
      <div className="column is-10">
        <ShopItems />
      </div>
    </div>
  );
};

export default ShopPage;
