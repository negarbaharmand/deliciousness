import Pages from "./pages/Pages";
import Category from "./component/Category";
//BroserRouter gives the functionality to navigate over pages
import { BrowserRouter } from "react-router-dom";
import Search from "./component/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
