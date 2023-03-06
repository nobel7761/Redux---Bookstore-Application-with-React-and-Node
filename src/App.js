import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;
