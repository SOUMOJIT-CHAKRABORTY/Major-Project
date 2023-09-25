import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGclSxMsGTdhMrMJKE3MD4HrG9deV0vGXRaDh2ClwAjLB_SVj_X--D8xspSuMJzc4IwfU&usqp=CAU" 
        alt=""
         className="sImg"
         />
         <div className="siDesc">
        <h1 className="siTitle">Vandhe Bharat Express </h1>
        {/* <span className="siDistance"></span>*/ }
        <span className="siTaxiOp">Free breakfast</span>
        <span className="siSubtitle"> air conditioning</span>
        <span className="siFeatures">
            Executive chair car
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
            You can cancel later,so lock in this grat picture today!
        </span>
         </div>
         <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>9.5</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice"> Rs3000</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>

         </div>
    </div>
  )
}

export default SearchItem