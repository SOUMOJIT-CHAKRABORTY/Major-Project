import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/landmark/square250/194987.webp?k=1f8226ac8a813efd44dec44b8a2381658fb4e0dd1d561244d8d13e1d7721a199&o=" 
            alt="" className="featuredImage" />
        <div className="featuredTitle">
            <h1>Taj Mahal</h1>
           </div>
        </div>

        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=" 
            alt="" className="featuredImage" />
        <div className="featuredTitle">
            <h1>Goa</h1>

        </div>
        </div>

        <div className="featuredItem1">
            <img src="https://static.javatpoint.com/tourist-places/images/tourist-places-in-west-bengal1.png" 
            alt="" className="featuredImage" />
        <div className="featuredTitle">
            <h1>Kolkata</h1>
        
        </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" 
            alt="" className="featuredImage" />
        <div className="featuredTitle">
            <h1>Mumbai</h1>
           </div>
        </div>

    </div>
  )
}

export default Featured