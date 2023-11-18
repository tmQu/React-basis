import { useState } from 'react';

function Card(props)
{
    // I try to handle hover style in React
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    var cardStyle = {
        border: '1px solid black',
        padding: '5px',
        height: '300px',
        transform: isHover ? 'translateY(-10px)': '',
        backgroundColor: isHover ? 'grey': ''
    }


    return (
        <div className="card" 
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <h2>
                {props.h2}
            </h2>
            <h3>
                {props.h3}
            </h3>
        </div>
    )
}

export default Card