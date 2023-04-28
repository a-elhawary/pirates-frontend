import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SlotViewer from "../../Components/SlotViewer/SlotViewer";
import {useNavigate} from "react-router-dom";
import "./MySlots.css";

export default function MySlots(){
    const navigate = useNavigate();

    var tokenString = localStorage.getItem("pirates-token");
    if(tokenString == null){
        navigate("/");
    }
    var token = JSON.parse(tokenString);
    var getDayRoute = "/slotDays/"+token.id; 
    var getSlotsRoute = "/slots/"+token.id+"/"; 

    return(
        <div className="slot-viewer">
            <Header/>
            <SlotViewer getDayRoute={getDayRoute} getSlotsRoute={getSlotsRoute}/>
            <Footer/>
        </div>
    );
}