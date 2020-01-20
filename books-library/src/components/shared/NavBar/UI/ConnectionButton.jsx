import React from 'react'
import { Button } from 'reactstrap';
import globalStrings from '../../../../strings/globalStrings';
const ConnectionButton = ({ onClick }) => {
    return (
        <Button color="danger" onClick={() => onClick()}> {globalStrings.Actions.CONNECT}</Button >
    )
}

export default ConnectionButton;