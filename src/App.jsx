import Pages from "./pages/Pages";
import Category from "./component/Category";
//BroserRouter gives the functionality to navigate over pages
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
