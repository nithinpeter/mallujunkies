import React from "react";
import CircularProgress from 'material-ui/lib/circular-progress';

const Loading = ({size = 1}) => {
    return <div style={style.prgressContainer}>
        <CircularProgress size={size}/>
    </div>
}

const style = {
    prgressContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh" 
    }
}

export default Loading;