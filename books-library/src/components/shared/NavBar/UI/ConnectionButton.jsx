import React from 'react'
import globalStrings from '../../../../strings/globalStrings';
import { Button } from 'react-bootstrap';
const ConnectionButton = ({ onClick }) => {
    const handleClick = () => {
        window.location.href = "/login"
    }
    const handleSubscribeClick = () => {
        window.location.href = "/subscribe"
    }
    return (
        <>
            <Button variant="danger" onClick={() => handleClick()}> {globalStrings.Actions.CONNECT}</Button >
            <Button variant="info" onClick={() => handleSubscribeClick()}> {globalStrings.Actions.Subscribe}</Button >
        </>
    )
}

export default ConnectionButton;