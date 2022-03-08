import React, { useState } from 'react';
import Card from './Card/Card'
import { PublicationItems } from './PublicationItems';
import './Publications.css'


function Publications() {
    const [noscroll, setNoscroll] = useState('PublicationItems')
    return(
        <>
            <h1>Publications</h1>
            <div className={noscroll}>
                {PublicationItems.map((item, index) => {
                    return (
                        <Card key={index}
                        {...item}
                        noscroll={noscroll}
                        setNoscroll={setNoscroll}/>
                    )
                })}
            </div>
        </>
    )
}

export default Publications