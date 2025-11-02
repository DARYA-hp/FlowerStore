import Component1 from "./components/Comp1"
import Footer from "./components/Footer"
import Plant from "./components/Plant"
import 'leaflet/dist/leaflet.css';
import Slide from "./components/Slide"
import Slide1 from "./components/Slide1"
import Slide2 from "./components/Slide2"

function App() {
  return (
    <>
      <Slide/>
      <Slide1/>
      <Slide2/>
      <Component1 />
      <Plant />
      <Footer />

    </>
  )
}
export default App