import "../blocks/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ModalWithForm from "./ModalWithForm";

function App() {
  const weatherTemp = "75" + "° F";
  return (
    <div className="page">
      <Header />
      <Main weatherTemp={weatherTemp} />
      <Footer />
      <ModalWithForm title={"Clothes"} buttonText={"submit"}>
        hello
      </ModalWithForm>
    </div>
  );
}

export default App;
