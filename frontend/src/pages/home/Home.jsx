import Featured from "../../components/featured/Featured"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/navbar"
import PropertyList from "../../components/propertyList/propertyList"
import "./home.css"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header/>
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
        </div>
        </div>
  )
}

export default Home