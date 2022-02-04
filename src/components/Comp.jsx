import React from "react";
import MyContext, {data} from "../context";

function Comp(){
    const {info} = React.useContext(MyContext)
    return (
        <div>
            {info}
        </div>
    )
}

export default Comp;