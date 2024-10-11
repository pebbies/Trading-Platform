import "./App.css";
import Interface from "./components/interface";
import Search from "./components/search";

function App() {
  return (
    <div className="w-full h-screen bg-black font-ibm-plex">
      <Search />

      <Interface />
    </div>
  );
}

export default App;
