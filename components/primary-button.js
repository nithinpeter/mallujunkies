import React from "react";
import RaisedButton from 'material-ui/lib/raised-button';

const PrimaryButton = ({disabled = false, label, onClick}) => {
    return <RaisedButton label={label} disabled={disabled} onMouseUp={onClick}/>;
}

export default PrimaryButton;