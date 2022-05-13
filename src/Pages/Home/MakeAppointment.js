import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    
    return (
        <section className='flex justify-center items-center' style={{ background: `url(${appointment})` }}>

            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="doctor"/>
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-secondary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae blanditiis numquam possimus dolore a aut. Nulla mollitia non illo sequi rem, reprehenderit blanditiis delectus dolorem, tenetur molestiae excepturi voluptatem iusto sit fugit distinctio ab ex ipsa inventore quae voluptatibus corporis?</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;