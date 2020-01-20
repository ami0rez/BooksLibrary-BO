import React from 'react'
import { Card, CardTitle, CardText, Button } from 'reactstrap'

const SimpleCard = ({ imageUrl, title, url }) => {
    const handleClick = () => {
        var win = window.open(url, '_blank');
        win.focus();
    }
    return (
        <div>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle>{title}</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button onClick={handleClick}>GoTo</Button>
            </Card>
        </div>
    )
}

export default SimpleCard
