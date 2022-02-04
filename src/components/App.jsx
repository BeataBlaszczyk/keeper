import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes";



//import MyContext, {data} from "../context";
import CreateArea from "./CreateArea";

function App(){
    const [myNotes, setMyNotes] = useState(notes);

function addNote(newNote){
    console.log(notes)
    console.log(newNote)
    
    setMyNotes ((prev) => {return([...prev, newNote])});

    


}



function deleteNote(id){
    console.log(id);
    console.log(myNotes);
    setMyNotes( myNotes.filter((note, index) => {
        return index !== id;
    }))
    
    
}

    return(
        <div>
        <Header />
        <CreateArea 
        adNote={addNote} />

        {/* <MyContext.Provider>
        <Comp />

        </MyContext.Provider> */}

 {myNotes.map((element, index) => {
    return(
            <Note  
            key={index}
            id={index}
            
            delNote={deleteNote}
            {...element}
            
        />
    )
}) }

        

        <Footer />

        </div>
        )
}

export default App;