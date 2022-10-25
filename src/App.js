import { NextUIProvider } from "@nextui-org/react";
import "./App.css";
import { createTheme } from "@nextui-org/react"
import PortfolioRoutes from "./PortfolioRoutes";

const darkTheme = createTheme({
	type: 'dark'
  })

function App() {
	return (
		<NextUIProvider theme={darkTheme}>
			<PortfolioRoutes />
		</NextUIProvider>
	);
}

export default App;
