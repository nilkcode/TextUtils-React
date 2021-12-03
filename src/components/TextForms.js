import React ,{ useState }  from 'react'


export default function Textforms(props) {

    const handleUpClick = () => {
       
        console.log("Handle upper case click here" + text);
        let newText = text.toLocaleUpperCase();
        console.log(newText);
        setText(newText);
    }

    const handleLowerClick = () => {
        let newLowerText = text.toLocaleLowerCase();
        setText(newLowerText);
    }

    const handleClearTextClick = () => {
        setText("");
    }

    const handleOnCapitliseFirst = () => {

       let capetiliseFirstletter =  text.charAt(0).toUpperCase() + text.slice();
       console.log(text.slice(1));
       setText(capetiliseFirstletter);
    }

    const handleOnCapitlisWordOfString = () => {

        const inputStr = text;

        // split the above string into array of a string;
        // whenever  a blank space is encounter

        let arrofinput = inputStr.split(' ');
        console.log(arrofinput);
        console.log(arrofinput.length);

        // loop through each element of the array and capitliza the first letter;

        for (var i = 0; i < arrofinput.length; i++) {
            arrofinput[i] = arrofinput[i].charAt(0).toUpperCase() + arrofinput[i].slice(1);
        
        }

        const str2 = arrofinput.join(" ");
        setText(str2);


    }


    // copy text 

    const handleCopy  = () => {
       
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);


    }

    // removed extra space

    const handleRemoveExtraSpace = () => {

        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));

    }

    const handleFocus = (e) => {
        setText(e.target.onFocus = "");
    }

    

    const handleOnChange = (event) => {
       
        console.log("Handle On change" ); 
        setText(event.target.value)

    }
   
    
    const [ text,setText] = useState("Please Enter text here");

    return (
         <>
         <div className="container">
            <h2 className={`my-2 text-${props.mode === 'light'?'dark':'light'}  text-${props.colormode === 'green' ? 'success' : 'danger'}`} >{props.heading}</h2>
            <div className="mb-3">
                <textarea    className="form-control" id="myBox" value={text} onChange ={handleOnChange} onFocus={handleFocus} rows="10" style={{backgroundColor:props.mode ==='light' ? '#f8f9fa' : '#212529',color:props.mode ==='light' ? '#000' : '#fff' ,border:props.mode ==='light' ? '#000' : '#fff'}}></textarea>           
            </div>
            <button className="btn btn-primary " onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-info mx-1" onClick={handleLowerClick}>Convert to lowercase</button>
            <button className="btn btn-danger mx-1" onClick={handleClearTextClick}>Clear text</button>
            <button className="btn btn-success mx-1" onClick={handleOnCapitlisWordOfString}>Capital First Word</button>
            <button className="btn btn-success mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-success mx-1" onClick={handleRemoveExtraSpace }>Removed Extra Space</button>

         </div>

         <div className={`container my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
             <h1>Text summery </h1>
             <p>{ text.split(/[ ]+/).length - 1} words and {text.length} charecter</p>
             <p>{0.008 * text.split(" ").length  } read to one word</p>
            
             <h2>Preview Text ::</h2>
             <p>
                 {text.length>0?text:"Your text is empty please write somthing in above box"}
             </p>
         </div>
        
         </>
    )
}

