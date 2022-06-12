import HomeIndex, { RedirectToHome } from "../pages/home/Home.Index";
import PermissionIndex from "../pages/permission/Permission.Index";
import PermissionCreate from "../pages/permission/Permission.Create";
import PermissionDetail from "../pages/permission/Permission.Detail";
import PermissionEdit from "../pages/permission/Permission.Edit";
import NotFound from "../pages/error/NotFound";


interface Route{
    key: string;
    path: string;
    exact?: boolean;
    component: () => JSX.Element;
}

const routes : Route[] = [
    {
        key: "home",
        path: "/",
        exact: true,
        component: HomeIndex,
    },
    {
        key: "permissions-index",
        path: "/permissions",
        exact: true,
        component: PermissionIndex,
    },
    {
        key: "permissions-request",
        path: "/permissions/request",
        exact: true,
        component: PermissionCreate,
    },
    {
        key: "permissions-detail",
        path: "/permissions/detail/:id(\\d+)",
        exact: true,
        component: PermissionDetail,
    },
    {
        key: "permissions-edit",
        path: "/permissions/edit/:id(\\d+)",
        exact: true,
        component: PermissionEdit,
    },
    {
        key: "not-found",
        path: "/not-found",
        exact: true,
        component: NotFound,
    },
    {
        key: "page-not-found",
        path: "*",
        component: () => RedirectToHome(),
    }
];

export default routes;