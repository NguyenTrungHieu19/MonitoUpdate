import { createBrowserRouter } from "react-router-dom"
import ShopTable from "../page/shop"
import MenusTable from "../page/menus"
import ProductPet from "../page/productPet"
import ProductFood from "../page/productFood"
import BannerFooter from "../page/bannerFooter"
import AdminComponent from "../context/AdminComponent"
import HomeUser from "../layout/homeUser"
import CategoryUser from "../layout/categoryUser"
import Login from "../page/login/login"
// import ProductDetail from "../component/userComponent/productDetailComponent"
import ProductPetDetail from "../component/userComponent/categoryComponent/ProductPetDetailCategory"
import Home from "../page/home"

const appRoutes = createBrowserRouter
    ([
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/admin",
            children: [
                // {
                //     path: "",
                //     element: <AdminComponent component={MenusTable} />,
                // },
                {
                    path: "",
                    element: <AdminComponent component={Home} />,
                },
                {
                    path: "shop",
                    element: <AdminComponent component={ShopTable} />,
                },
                {
                    path: "productpet",
                    element: <AdminComponent component={ProductPet} />,
                },
                {
                    path: "productfood",
                    element: <AdminComponent component={ProductFood} />,
                },
                {
                    path: "bannerfooter",
                    element: <BannerFooter />,
                },
            ],
        },
        {
            path: "/",
            element: <HomeUser />,
        },
        {
            path: "/main/home",
            element: <HomeUser />,
        },
        {
            path: "/main/category",
            element: <CategoryUser />,
        },
        {
            path:"/main/category/product/:id",
            element:<ProductPetDetail/>
        }
    ])

export default appRoutes;