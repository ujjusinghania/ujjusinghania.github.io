import { Grommet } from "grommet";
import { grommet } from 'grommet/themes';
import Routes from './Routes.js';
import './index.css';

function App() {
	return (
		<Grommet theme={grommet} >
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Varela Round" />
			<Routes />
		</Grommet>
	);
}

export default App;
