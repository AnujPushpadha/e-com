import NavBar from "../features/navbar/Navbar";
import AdminProductDetail from "../features/admin/components/AdminProductDetail";
// import AdminPro from "../features/product-list/components/ProductDetail";
function AdminProductDetailPage() {
  return (
    <div>
      <NavBar>
        <AdminProductDetail></AdminProductDetail>
      </NavBar>
    </div>
  );
}

export default AdminProductDetailPage;
