"use client";
import { useAuth } from "../context/AuthContext"; // adjust path if needed

const DashboardLayout = ({ children, notifications, revenue, users, login }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div className="flex justify-start p-4 m-4 border-t">
        <div className="flex flex-col">
          <div>{revenue}</div>
          <div>{users}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
};

export default DashboardLayout;
