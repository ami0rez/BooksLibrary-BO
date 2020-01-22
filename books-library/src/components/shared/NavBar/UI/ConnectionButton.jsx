import React from 'react'
import globalStrings from '../../../../strings/globalStrings';
import { Button } from 'react-bootstrap';
const ConnectionButton = ({ onClick }) => {
    return (
        <Button variant="danger" onClick={() => onClick()}> {globalStrings.Actions.CONNECT}</Button >
    )
}

export default ConnectionButton;