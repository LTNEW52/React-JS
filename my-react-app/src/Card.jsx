import profilePic from "./assets/Image/Labib.jpg";

function Card () {

    return(
        <div className = "card">
            <img className="card-img" src={profilePic} alt="Profile Picture of Labib"></img>
            <h2 className="card-title">Labib Tahmid</h2>
            <p className="card-desc">I am a student and currently trying to learn React JS</p>
        </div>
    );
}

export default Card