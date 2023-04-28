import "./SlotViewer.css";
import Dropdown from "react-dropdown";
import {useState, useEffect} from "react";
import {get, getToken} from "../../connection";
import {useNavigate} from "react-router-dom";

function Slot(props){
    const navigate = useNavigate();

    const token = getToken();
    if(token == false) navigate("/login");

    function takeSlot(slotID){
        get({
            route: "/takeSlot/"+props.slot.SlotID+"/"+token.id,
            callback:(response)=>{
                if(response.data.took){
                    alert("Successfuly Took Spot, refresh page to check");
                }else{
                    alert("Sadly Someone just took this spot. Please choose another");
                }
            }
        });
    }
    return (
		<div className="slot">
			<div className="slot-time">
				<div className="start-time">
                    {props.slot.StartTime.split(":")[0] + ":" +props.slot.StartTime.split(":")[1]}
				</div>
				<div className="end-time">
                    {props.slot.EndTime.split(":")[0] + ":" +props.slot.EndTime.split(":")[1]}
				</div>
			</div>
            {props.user ? 
			<div className={props.slot.StudentEmail ? "slot-content--red" : "slot-content--green"}>
				<div className="slot-info">
                    {props.slot.StudentEmail ? <></> : "Available"}
                    {props.slot.StudentEmail == token.email ? "Your Spot" : <></>}
                    {props.slot.StudentEmail != token.email && props.slot.StudentEmail != null? "Taken" :<></>}
				</div>
				{props.slot.StudentEmail == null && !props.isRegistered? <button onClick={takeSlot} class="slot-btn">
					Take Slot
				</button> : <></>}
			</div>
            :
			<div className={props.slot.StudentEmail ? "slot-content--green" : "slot-content--red"}>
				<div className="slot-info">
                    {props.slot.StudentEmail ? props.slot.StudentEmail : "Not Yet Taken"}
				</div>
			</div>
            }
		</div>
    );
}

export default function SlotViewer(props){
    const [isRegistered, setIsRegistered] = useState(false);
    const [days, setDays] = useState([]);
    const [choosenDay, setChoosenDay] = useState("");
    const [slots, setSlots] = useState([]);

    useEffect(function(){
        get({
            route: props.getDayRoute,
            callback:function (response){
                const daysData = response.data.map((day) => day["Date"]);
                setDays(daysData);
                setChoosenDay(daysData[0]);
            }
        });

        const token = getToken();
        const dayRouteSplit = props.getDayRoute.split("");
        const eventID = dayRouteSplit[dayRouteSplit.length - 1];
        get({
            route:"/hasInterview/"+eventID+"/"+token.id,
            callback:(response) => {
                setIsRegistered(response.data.has);
            },
        });

    }, []);

    useEffect(function(){
        if(choosenDay == "") return;
        get({
            route: props.getSlotsRoute + choosenDay,
            callback:function (response){
                setSlots(response.data);
                console.log(response.data);
            }
        });
    },[choosenDay]);

    return(
		<div className="interview-calendar">
			<div className="day-column">
                <Dropdown controlClassName="day-column-title" onChange={(data)=>{setChoosenDay(data.value)}} options={days}  value={days[0]} placeholder="Select an option" />
                {slots.map(function(slot){
                    return <Slot 
                        slot={slot}
                        isRegistered={isRegistered}
                        user={props.user}
                    />;
                })}
            </div>
        </div>
    );
}