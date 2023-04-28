import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./About.css";

export default function About(){
    return(
        <div className="about-page">
            <Header />
            <div className="about-content">
                <h1 className="about-page-title">About Us</h1>
                <div className="about-section">
                    <div className="about-title">Who are we?</div>
                    <div className="about-text">Pirates Egypt is a student activity founded in 2009 at the Faculty of Engineering Ain Shams University.</div>
                </div>
                <div className="about-section">
                    <div className="about-title">Why “PIRATES”?</div>
                    <div className="about-text">It is named after actual pirates due to the resemblance between their lifestyle and ours. We spend our time, money, and effort to discover the hidden treasures inside people. </div>
                </div>
                <div className="about-section">
                    <div className="about-title">Our Vision</div>
                    <div className="about-text">To build a unique leader able to do a positive change in society and able to influence people to do better </div>
                </div>
                <div className="about-section">
                    <div className="about-title">Our Mission</div>
                    <div className="about-text">To pass knowledge and experience of the president, heads, moderators and members to participants through our events</div>
                </div>
                <div className="about-section">
                    <div className="about-title">Core Values</div>
                    <ul className="about-text">
                        <li>We all must “pay it forward”</li>
                        <li>We work as a team</li>
                        <li>We lead by example</li>
                        <li>We are all leaders in our responsibility, with a deep commitment </li>
                        <li>Every team member contributes to our success</li>
                        <li>We all must behave in a way that supports our values </li>
                        <li>We respect difference among team members </li>
                        <li>We make decision correctly only when we take the team advices </li>
                        <li>We all respect the decisions of the highest positions </li>
                        <li>Any problem should be solved without effecting the committee work</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}