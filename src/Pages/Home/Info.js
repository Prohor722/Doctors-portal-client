import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    const gradientColors = {from:"secondary",to:"primary"};
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-14'>
            <InfoCard img={clock} clr={gradientColors} singleColor={false}/>
            <InfoCard img={marker} clr="accent" singleColor={true}/>
            <InfoCard img={phone} clr={gradientColors} singleColor={false}/>
        </div>
    );
};

export default Info;