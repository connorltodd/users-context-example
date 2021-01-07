import logo from "./logo.svg";
import "./App.css";
import UsersList from "./components/UsersList";
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <UsersList />
      </UserContextProvider>
    </div>
  );
}

export default App;
