import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Beacon = lazy(() => import("../pages/beacon/Beacon"));
const FormBeacon = lazy(() => import("../pages/beacon/FormBeacon"));
const Ruangan = lazy(() => import("../pages/ruangan/Ruangan"));
const FormRuangan = lazy(() => import("../pages/ruangan/FormRuangan"));
const Roles = lazy(() => import("../pages/roles/Roles"));
const FormRoles = lazy(() => import("../pages/roles/FormRoles"));
const Presences = lazy(() => import("../pages/presensi/Presences"));
const Forms = lazy(() => import("../pages/Forms"));
const Cards = lazy(() => import("../pages/Cards"));
const Charts = lazy(() => import("../pages/Charts"));
const Buttons = lazy(() => import("../pages/Buttons"));
const Modals = lazy(() => import("../pages/Modals"));
const Tables = lazy(() => import("../pages/Tables"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  //beacon routes
  {
    path: "/beacon",
    component: Beacon,
  },
  {
    path: "/beacon/edit/:beacon_id",
    component: FormBeacon,
  },
  {
    path: "/beacon/tambah",
    component: FormBeacon,
  },
  //ruangan routes
  {
    path: "/ruangan",
    component: Ruangan,
  },
  {
    path: "/ruangan/tambah",
    component: FormRuangan,
  },
  {
    path: "/ruangan/edit/:ruangan_id",
    component: FormRuangan,
  },
  //roles routes
  {
    path: "/roles",
    component: Roles,
  },
  {
    path: "/roles/tambah",
    component: FormRoles,
  },
  {
    path: "/roles/edit/:role_id",
    component: FormRoles,
  },
  //presensi routes
  {
    path: "/presences",
    component: Presences,
  },
  {
    path: "/forms",
    component: Forms,
  },
  {
    path: "/cards",
    component: Cards,
  },
  {
    path: "/charts",
    component: Charts,
  },
  {
    path: "/buttons",
    component: Buttons,
  },
  {
    path: "/modals",
    component: Modals,
  },
  {
    path: "/tables",
    component: Tables,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;
