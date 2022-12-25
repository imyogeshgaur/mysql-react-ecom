import { lazy } from "react";
const Signin = lazy(() => import('./Components/common/Signin'));
const Signup = lazy(() => import('./Components/common/Signup'));
const NotFound = lazy(() => import('./Components/common/NotFound'));
const ForgetPassword = lazy(() => import('./Components/common/ForgetPassword'));
const ResetPassword = lazy(() => import('./Components/common/ResetPassword'));
const ShowProducts = lazy(() => import('./Components/user/ShowProducts'))
const AddProducts = lazy(() => import("./Components/vendor/AddProducts"))
const ShowUsers = lazy(() => import("./Components/admin/ShowUsers"))

// import ShowUsers from './Components/admin/ShowUsers';
// import AddProducts from './Components/vendor/AddProducts';
// import ForgetPassword from './Components/common/ForgetPassword';
// import NotFound from './Components/common/NotFound';
// import ResetPassword from './Components/common/ResetPassword';
// import Signin from './Components/common/Signin';
// import Signup from './Components/common/Signup';
// import ShowProducts from './Components/user/ShowProducts';

const routes = [
    { path: "/", element: <Signin /> },
    { path: "/signup", element: <Signup /> },
    { path: "/forgetPassword", element: <ForgetPassword /> },
    { path: "/resetPassword/:id", element: <ResetPassword /> },
    { path: "/products", element: <ShowProducts /> },
    { path: "/addProducts", element: <AddProducts /> },
    { path: "/allUsers", element: <ShowUsers /> },
    { path: "*", element: <NotFound /> }
]

export default routes;