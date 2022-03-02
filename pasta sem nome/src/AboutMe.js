import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import pngwing from './img/pngwing.png';
import logo2 from './img/Vector.svg';
import logo3 from './img/Vector (1).svg';
import logo4 from './img/Vector (2).svg';

const description = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita beatae aperiam rerum voluptate temporibus optio esse est consectetur architecto, impedit voluptatem ratione quis id tempora deleniti at qui vel placeat?',
    name: 'Hi, I am Joana'
  };
function AboutME(props) {
    
    return (
        <div>
            <div className="avatarOrganizer"><img src={pngwing} /></div>
            <div className="subTitle">{props.name}</div>
            <div className="descriptionAboutme">
                <p>{props.text}</p>
            </div>
            <div className="socialIcons">
                
            </div>
        </div>
    );
}

export default AboutME;