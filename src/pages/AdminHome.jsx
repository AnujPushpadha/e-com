import AdminProductList from "../features/admin/components/AdminProductList";
import NavBar from "../features/navbar/Navbar";
// import ProductList from "../features/product-list/components/ProductList";

function AdminHome() {
  return (
    <div>
      <NavBar>
        {/* <ProductList></ProductList> */}
        <AdminProductList></AdminProductList>
      </NavBar>
    </div>
  );
}

export default AdminHome;
