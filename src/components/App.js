import "../blocks/App.css";
import Header from "./Header";
import Weather from "./Weather";
import CardSection from "./CardSection";

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Weather />
        <CardSection />
      </main>
    </div>
  );
}

export default App;
