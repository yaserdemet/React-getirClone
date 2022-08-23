import "./App.css";
import Campains from "./components/Campains";
import Card from "./components/Card";
import Categories from "./components/Categories";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SwipeableTextMobileStepper from "./components/SwipeableTextMobileStepper";
// import MobileApp from "./components/MobileApp";

function App() {
  return (
    <div>
      <Header />
      <SwipeableTextMobileStepper />
      <Categories />
      <Campains />
      <Favorites />
      {/* <MobileApp /> */}
      <Card />
      <Footer />
    </div>
  );
}

export default App;
