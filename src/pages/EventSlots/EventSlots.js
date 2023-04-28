import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SlotViewer from "../../Components/SlotViewer/SlotViewer";
import "./EventSlots.css";

export default function MySlots(){
    var pathname = window.location.pathname
    var eventID = pathname.split("/")[2];
    var getDayRoute = "/event/slotDays/"+eventID; 
    var getSlotsRoute = "/event/slots/"+eventID+"/"; 

    return(
        <div className="slot-viewer">
            <Header/>
            <SlotViewer getDayRoute={getDayRoute} getSlotsRoute={getSlotsRoute} user/>
            <Footer/>
        </div>
    );
}