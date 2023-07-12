import "../blocks/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  const weatherTemp = "75" + "° F";
  return (
    <div className="page">
      <Header />
      <Main weatherTemp={weatherTemp} />
      <Footer />
    </div>
  );
}

export default App;
