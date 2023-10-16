import React from 'react';
import Nh from './Nh.jpg';
import Sh from './Sh.jpg';

const HemisphereDisplay = (props) => {
    const hemisphere = props.latitude > 0 ? 'Northern Hemisphere' : 'Southern Hemisphere';
    const picture= props.latitude > 0 ? Nh : Sh;
    
    return(
        <div>
            <img className="ui medium bordered image" src={picture} alt="pp" />
        {hemisphere}
         </div>
    )
   

}
export default HemisphereDisplay;