import "./Home.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer"
import home from "../../assets/home.png";

export default function Home(){
    return (
        <div class="home-page">
            <Header />
            <div className="home">
                <div className="home-landing">
                    <div className="home-hero">
                        <div className="home-hero-text">pirates</div>
                        <div className="home-hero-sub">Innovate To Lead</div>
                        <div className="home-hero-description">To build a unique leader able to do a positive change in society and able to influence people to do better. We spend our time, money, and effort to discover the hidden treasures inside people. </div><br/>
                        <button className="home-hero-cta">Check out Our Event</button>
                    </div>
                    <img className="home-hero-img" src={home} />
                </div>
            </div>
            <Footer />
        </div>
    );
}