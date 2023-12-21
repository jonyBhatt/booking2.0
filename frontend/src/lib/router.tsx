import App from "@/App";
import { Layout } from "@/layout/layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route path="dashboard" element={<p>Dashboard</p>} />
      {/* ... etc. */}
    </Route>
  )
);

export default router;
