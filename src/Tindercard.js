import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './Tindercard.css';
function Tindercard() {

    const [people, setPeople] = useState([
        {
            name: 'Deep',
            url: 'https://avatars2.githubusercontent.com/u/47965259?s=400&u=b302cb87c973148e2410a4e7454f3b14cfcec8ab&v=4'
        },
        {
            name: 'Kuldeep',
            url: 'https://avatars2.githubusercontent.com/u/47965259?s=400&u=b302cb87c973148e2410a4e7454f3b14cfcec8ab&v=4'
        }
    ]);

    return (
        <div className="container">
            {people.map((person) => (
            <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}
            
            >
                <div  style={{ backgroundImage: `url(${person.url})` }}
                className="card"
                >
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
            ))}
        </div>
    )
}

export default Tindercard
