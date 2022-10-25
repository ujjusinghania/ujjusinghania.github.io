import { Route, HashRouter, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";

const PortfolioRoutes = () => {
	return (
		<HashRouter>
			<Switch>
				<Route path="/projects" component={ProjectsPage} />
				<Route component={HomePage} />
			</Switch>
		</HashRouter>
	);
};

export default PortfolioRoutes;
