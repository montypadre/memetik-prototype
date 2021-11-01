import GlobalStyle from "./globalStyles";
import Home from "./pages/home/Home";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  )
}

export default App;
