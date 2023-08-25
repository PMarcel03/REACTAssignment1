import Data from './Data.json'; //Loads Data JSON file containing SCP entries
import SCPInfo from './SCPdata'; //Loads SCPData.js
import Style from './Style.css'; //Loads Style Sheet
import 'bootstrap/dist/css/bootstrap.css'; //Loads Bootstrap

function App() {
  return (
    <>
    <SCPInfo />
    </>
  );
}

export default App;
