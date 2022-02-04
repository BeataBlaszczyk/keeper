import React from "react";
import DeleteIcon from '@mui/icons-material/Delete'; //"@material-ui/icons/Delete"; 


function Note({delNote, id, title, content}){

    return(
        <div className="note">
            <h1>
            {title}
            </h1>
            <p>
                {content}
            </p>
            <button onClick={() => {

            delNote(id)}
            }><DeleteIcon /></button>
        </div>
    );
}

export default Note;