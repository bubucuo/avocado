import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h3>Dashboard</h3>

      <Outlet />
    </div>
  );
}
