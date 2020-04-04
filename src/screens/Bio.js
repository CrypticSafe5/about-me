import React from 'react';
import bioPic from '../resources/bioPic.png';

export default function Bio() {
    return (
        <div>
            <img
                src={bioPic}
                alt={'Bio Pic'}
                style={{
                    marginRight: '16px',
                    float: 'left'
                }}
            />
            <div
                id={'bioBody'}
                style={{
                    fontSize: '18px'
                }}
            >
                <p>
                    Hello all, my name is Wes and I'm a full stack web developer. I'm a firm believer in the K.I.S.S. principle for everything. I've architected from an event driven system that grooms it's dataset of over 250,000 devices within Walmart across the United States, down to a self service portal to report issues via mobile device or web browser with 200+ concurrent users across 5,000 unique locations.
                </p>
                <p>
                    I think that all human beings should try and help one another out, and I strive to do my best at doing so. I believe in handing down knowledge to the next generation so that they can rise and surpass those who came before. Mentoring others is a very strong passion that I partake in on a daily basis, because without them, how can we hope to have a future?!
                </p>
                <p>
                    I've had the pleasure of encountering and learning from so many people from so many different walks of life that I owe it to them to share their wisdom with others. Without guidance, especially in the software engineering space, people get down, discouraged, and simply quit. One should foster, and grow that potential into something that will amount to something spectacular.
                </p>
            </div>
        </div>
    );
}
