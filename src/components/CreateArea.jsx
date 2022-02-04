import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props){
        

    function preD(e){
        e.preventDefault();
    }
//const [title, setTitle] = useState("");
//const [content, setContent] = useState("");
            
            const [note, setNote]=useState({ 
                titile: "", 
                content: ""
            });


        
         function changeHandler(event){
             
        //     if (event.target.name==="title"){
        //     setContent((prev) => {
        //         return prev})

        //      setTitle(event.target.value)
                
        // } else if (event.target.name==="content"){
            
        //     setTitle((prev) => {
        //         return prev})
        //     setContent(event.target.value)
        // }
        console.log(event.target);
        const{ name, value} = event.target
        setNote(prev => {return {
            ...prev, 
        [name]: value
    };
    });
    }

    const [isClicked, setIsClicked] = useState(false)
    function isClickedF(){
            setIsClicked(true)
    }


    return(<div>
    <form onSubmit={preD} className="create-note">
        
        {(isClicked) ? <input 
        onChange={changeHandler} 
        value={note.title} 
        name="title" 
        placeholder="Title" 

        /> : null}
        
        <textarea 
        onChange={changeHandler} 
        onClick={isClickedF} 
        value={note.content} 
        name="content" 
        placeholder="Take a note..." 
        rows={(isClicked) ? "3" : "1"}

        />
        
        <Zoom in={isClicked ? true: false} timeout={700}>
            <Fab onClick={() =>{
             var newNote = {title: note.title, content: note.content}
             props.adNote(newNote)
             setNote({ 
                title: "", 
                content: ""
            });
            setIsClicked(false);
            }
            }><AddIcon /></Fab>
        </Zoom>
    </form>
    
    </div>
    )
}


export default CreateArea