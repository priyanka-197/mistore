import "./App.css";
import Prenavbar from "./components/Prenavbar";
import Navbar from "./components/Navbar";
import data from "./data/data.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProudcts from "./components/StarProudcts";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import Footer from "./components/Footer";

function App() {
  const start = data.banner.start;
  return (
    <div className="App">
      <Router>
        <Prenavbar />
        <Navbar />
        <Slider start={start} />
        <Offers offer={data.offer} />
        <Heading text={"Star Proudcts"}/>
        <StarProudcts starProudct={data.starProduct}/>
        <Heading text={"Hot Accessories"}/>
        <HotAccessoriesMenu/>
        <Route exact path='/music'>
          <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>
        </Route>
        <Route exact path='/smartDevice'>
          <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>
        </Route>
        <Route exact path='/lifestyle'>
          <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>
        </Route>
        <Route exact path='/home'>
          <HotAccessories music={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>
        </Route>
        <Route exact path='/mobileAccessories'>
          <HotAccessories music={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>
        </Route>
        <Footer footer={data.footer}/>
      </Router>
    </div>
  );
}

export default App;
