import './index.css';
import pngwing from './img/pngwing.png';
import logo2 from './img/Vector.svg';
import logo3 from './img/Vector (1).svg';
import logo4 from './img/Vector (2).svg';


function AboutME(props) {
    
    return (
        <div>
            <div className="avatarOrganizer"><img src={pngwing} /></div>
            <div className="subTitle">{props.name}</div>
            <div className="descriptionAboutme">
                <p>{props.text}</p>
            </div>
            <div className="socialIcons">
                <div><a href="#"><img src={logo2} /></a></div>
                <div><a href="#"><img src={logo3} /></a></div>
                <div><a href="#"><img src={logo4} /></a></div>
            </div>
        </div>
    );
}
export default AboutME;