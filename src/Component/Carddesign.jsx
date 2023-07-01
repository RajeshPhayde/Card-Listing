import { useEffect, useState } from "react";
import Carddetails from "./Carddetails";

const Carddesign = () => {

    let [cards, setCards] = useState([]);
    let [hamburger, setHamburger] = useState(false);

    useEffect(()=>
    {
            setTimeout(()=>{
                fetch("http://localhost:4000/data")
                .then((res)=>{ return res.json()})
                .then((data)=>{
                    console.log(data)
                    setCards(data);
                })
                .catch((err)=>{console.log(err.message)
                            })
            }, 1000)
    }, [])

    return (
        <div className="list-cards">
            <div className="nav">
                <button> Your </button>
                <button> All </button>
                <button> Blocked </button>
            </div>
            <div className="filters">
                <input/>

                    <button onClick={()=>{setHamburger(!hamburger)}} ><i class='bx bx-menu-alt-left' style={{color:'#020202'}}  ></i> Filter</button>

            </div>
            {hamburger && <div className="filter-comp">
                            <h3>Filters</h3>
                            <div id="inp">
                                <label htmlFor="checkbox"><input type="checkbox" />Subscription</label>
                                <label htmlFor="checkbox"><input type="checkbox" />Burner</label>
                            </div>
                            <h4>Cardholder</h4>
                            <select name="" id="select">
                                <option  value="">Select card holder</option>
                                <option value="">NA</option>
                            </select>

                            <div className="btn">
                                <button>Apply</button>
                                <button>Clear</button>
                            </div>
                        </div> }
            <div className="card-list">
                <Carddetails cards={cards}/>
            </div>
        </div>
    );
}

export default Carddesign;