import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/landmark/square250/194987.webp?k=1f8226ac8a813efd44dec44b8a2381658fb4e0dd1d561244d8d13e1d7721a199&o=" 
            alt="" className="featuredImage" />
        <div className="featuredTitle">
            <h1>Taj Mahal</h1>
            <h2>123 properties</h2>
        </div>
        </div>

        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=" 
            alt="" className="featuredImage" />
        <div className="featuredTitle">
            <h1>Goa</h1>
            <h2>523 properties</h2>
        </div>
        </div>

        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/region/square250/68522.webp?k=a53c0fffc2f8d8c1ec72144fdb934d5e2bc5cf8c324467bce89c4f3bae22c181&o=" 
            alt="" className="featuredImage" />
        <div className="featuredTitle">
            <h1>Kerala</h1>
            <h2>533 properties</h2>
        </div>
        </div>
    </div>
  )
}

export default Featured