import { Outlet } from "react-router-dom";
import HeaderMenu from "../../components/organisms/HeaderMenu";

const MainLayout = ({
  hrefIconGauche = '/:id'
}) => {
	return (
		<div className="min-h-screen flex flex-col">
      <HeaderMenu hrefIconGauche={hrefIconGauche}/>
      <main className="container mx-auto flex-1 py-6">
        <Outlet />
      </main>
    </div>
	);
};

export default MainLayout;