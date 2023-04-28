import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Interviews.css";

export default function Interviews(){
    return(
        <div className="interviews-page">
            <Header />
            <div className="interview-calendar">
                <div className="day-column">
				    <div class="slot">
				    	<div class="slot-time">
				    		<div class="start-time">
				    			8:30
				    		</div>
				    		<div class="end-time">
				    			9:00
				    		</div>
				    	</div>
				    	<div class="slot-content green">
				    		<div class="slot-info">
				    			Available
				    		</div>
				    		<div class="slot-btn">
				    			Take Slot
				    		</div>
				    	</div>
                    </div>
                </div>
           </div>
            <Footer />
        </div>
    );
}