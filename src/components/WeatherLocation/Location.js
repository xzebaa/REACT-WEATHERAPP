import React from 'react';
import PropTypes from 'prop-types';
const Location = (props)=>{

    console.log(props);
    debugger;

    //destrusturing

    const {city} = props;

    return (
        <div>
            <h1>
                {city}
            </h1>
        </div>
    );

}

Location.PropTypes={
    city:PropTypes.string.isRequired,
}
export default Location;