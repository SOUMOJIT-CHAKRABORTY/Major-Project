import "./hotel.css"
import Navbar from "../../components/navbar/navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faArrowLeft, faArrowRight, faCircleXmark, faClose, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/mailList"
import Footer from "../../components/footer/Footer"
import { useState } from "react"


const Hotel= () => {
    const [slideNumber , setSlideNumber] = useState(0);
    const [open , setOpen] = useState(false);
    const photos =[
     {
        src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/264968226.jpg?k=76c2ad7c269217aef8731db9736d129026ae7e544cb184a9c21c5ad5c2c8364d&o=&hp=1"
     },
     {
        src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/264553863.jpg?k=2670216714131f438e0a6ad1a590c9178c8aaf20e82ae7401897c3c81a68703d&o=&hp=1"
     },
     {
        src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/264566679.jpg?k=d8d6b5eef76cc9ae5438e1cd4b93bf53636e72711692fee84f328a6196635d3f&o=&hp=1"
     },
     {
        src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/264566640.jpg?k=4fa97729d8f5333fd2768d2365b1fd0be36f46e1b5427483c5c08f99db06de33&o=&hp=1"
     },
     {
        src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/264556390.jpg?k=d4a7a03752505c06c3130a725483902e1c2373dc87ca58f29e6cb784fb73b5fb&o=&hp=1"
     },
     {
        src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/279452550.jpg?k=cf28b1a5afcf773e8aeb122be4d6abe684a88d2be5b05a7f42fcf3e6ceb3790e&o=&hp=1"
     },
     {
        src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/442003417.jpg?k=561cdc1cac3b81337aa6bfc6727f651658ca2bc8edd919e205bc0aa3f6fb27b0&o=&hp=1"
     },
     {
        src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/291061157.jpg?k=71a1ba5d531bb19a2c184a77dd50c87dd419f04392d9de14a118368bd256e015&o=&hp=1"
     },

    ];

    const handleOpen = (i)=>{
        setSlideNumber(i);
        setOpen(true);

        const handleMove = (direction) =>{
            let newSlideNumber;
            if(direction==="l"){
                newSlideNumber=slideNumber === 0?8:slideNumber-1
            }
            else{
                newSlideNumber=slideNumber === 8?0:slideNumber+1 
            }
        }

        setSlideNumber(newSlideNumber)
    }
    return(
        <div>
            <Navbar/>
            <Header type ="list" />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faArrowLeft}  onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faArrowRight}  onClick={()=>handleMove("r")} />  
                    </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or book now</button>
                    <h1 className="hotelTitle">Welcome hotel by ITC Hotels, Ashram Road, Ahmedabad</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>15, Ashram Road, 380013 Ahmedabad, India</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location 
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over RS 10000 at this property and get a free airport taxi!
                    </span>
                    
                    <div className="hotelImages">
                        {photos.map((photo,i)=>(
                            <div className="hotelImgWrapper">
                                <img 
                                onClick={()=>handleOpen(i)}
                                src={photo.src}
                                 alt="" 
                                className="hotelImg" />

                            </div>
                              ))}

                    </div>
                    <div className="hotelDetails">
                    <div className="hotelDetailsTexts">
                        <h1 className="hotelTitle">Stay in the heart of Ahmedabad</h1>
                        <p className="hotelDesc">
                        Situated in Ahmedabad and with IIM reachable within 3.6 km, Hotel Fun Residency by Antra Group features a tour desk, non-smoking rooms, a shared lounge, free WiFi and a terrace. The property is located 11 km from Gandhi Ashram, 15 km from Sardar Patel Stadium and 3.1 km from Vastrapur Lake. The accommodation provides room service, an ATM and currency exchange for guests.

All rooms are fitted with air conditioning, a flat-screen TV with satellite channels, a fridge, a kettle, a shower, free toiletries and a wardrobe. Rooms are equipped with a private bathroom with a bath, a hairdryer and slippers. At the hotel rooms come with bed linen and towels.

Hotel Fun Residency by Antra Group offers a buffet or vegetarian breakfast.Dry cleaning facilities, free private parking and a business centre are available, as well as a 24-hour front desk.

Gujarat High Court is 3.4 km from the accommodation, while Gujarat University is 5.2 km from the property. The nearest airport is Sardar Vallabhbhai Patel International, 15 km from Hotel Fun Residency by Antra Group, and the property offers a paid airport shuttle service.


                        </p>
                    </div>
                    <div className="hotelDetailsPrice">
                        <h1>Perfect for a 9-night stay</h1>
                        <span>
                            Located in the real heart of India , this property has an excellent location score of 9.8!
                        </span>
                        <h2>
                            <b>Rs20500</b> (9 nights)
                        </h2>
                        <button>Reserve or book now</button>
                    </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
            </div>
    )
}

export default Hotel