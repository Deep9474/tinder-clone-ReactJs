import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import database from './Firebase';
import './Tindercard.css';
function Tindercard() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
database.collection('people').onSnapshot(snapshot => (
    setPeople(snapshot.docs.map(doc => doc.data()))
))
    },[]);

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
