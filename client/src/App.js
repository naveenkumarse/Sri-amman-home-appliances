import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import NavBar from "./components/navbar/Navbar.js";
import Login from "./components/login/login.js";
import Register from "./components/login/register.js";
import Description from "./components/products/Description";
// import Cart from "./components/products/Cart";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
import { UserContext } from "./components/protectedRoutes/UserContext";
import { useState } from "react";
import DashBoard from "./components/home/dashboard";
import MyFooter from "./components/footer/footer";
// import img1 from "./assets/placeholder.png";
// import ProductList from "./components/products/productList";
// import About from "./components/about/About";
import Footer from "./components/footer/footer";
import Filters from "./components/listproducts/Filters";

import AddProduct from "./pages/admin/AddProduct";
import MyCart from "./components/listproducts/MyCart";
import Contact from "./components/contact/Contact";
import AdminProductList from "./pages/admin/adminProductList";
import AdminNavBar from "./components/navbar/AdminNavbar";
import AdminFilters from "./pages/admin/AdminFilters";
import Userlist from "./pages/admin/UserList";
import Orderlist from "./pages/admin/OrderList";
function App() {

  const [user, setUser] = useState("");
  return (
    <div className="App">
      <HashRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>

            <Route path="/" element={
              <div>
                <NavBar />
                <DashBoard />
                <MyFooter />
              </div>
            } />

            <Route path="/contact" element={
              <div>
                <NavBar />
                <Contact />
                <MyFooter />
              </div>
            } />
            <Route
              path="/productlist"

              element={
                <div>
                  <NavBar />
                  {/* <ProductList /> */}
                  <Filters />
                  {/* <Items /> */}
                  <MyFooter />
                </div>
              }
            />
            <Route path="/description/:param" element={
              <div>

                <NavBar />
                <Description />
              </div>
            } />

            <Route path="/admin" element={
              <div>
                <AdminNavBar />
                <AddProduct />
                <Footer />
              </div>
            } />

            <Route path="/login" element={
              <div>
                <NavBar />
                <Login />
              </div>
            } />
            <Route path="/register" element={
              <div>
                <NavBar />
                <Register />
              </div>
            } />
            <Route element={<ProtectedRoutes />}>
              <Route path="/description" element={
                <div>

                  <NavBar />
                  <Description />
                </div>
              } />
            </Route>

            <Route element={<ProtectedRoutes />}>
              <Route path="/cart" element={
                <div>
                  <NavBar />
                  {/* <MyCart /> */}
                  <Footer />
                </div>
              } />
            </Route>

              <Route path="/adminProductList" element={
                <div>
                  <AdminNavBar />
                  <AdminFilters />
                  {/* <AdminProductList /> */}
                  <Footer />
                </div>
              } />
              <Route path="/usersList" element={
                <div>
                  <AdminNavBar />
                  <Userlist />
                  <Footer />
                </div>
              } />
              <Route path="/orderList" element={
                <div>
                  <AdminNavBar />
                  <Orderlist />
                  <Footer />
                </div>
              } />
          </Routes>
        </UserContext.Provider>
      </HashRouter>
    </div>
  );
}

export default App;
