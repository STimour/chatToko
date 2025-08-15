import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div className="min-h-screen flex flex-col">
 
      <main className="container mx-auto flex-1 py-6">
        <Outlet />
      </main>
    </div>
	);
};

export default MainLayout;