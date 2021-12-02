import React,{useState} from 'react'

export default function TextConverter() {
  
    const [text, settext] = useState("Pleae enter any text..");
    

    const onUpCharecter = () => {
       
        let newText = text.toLocaleUpperCase();
        console.log(newText);
        settext(newText)
    }

    const onLowerCharecter = () => {
        let newTextLower  = text.toLocaleLowerCase();
        console.log(newTextLower);
        settext(newTextLower);
    }

    const clearText  = ()  => {
        settext("");
    }

    const onCapitalizaFirst = () => {
       
       const newString = text.split(" ");
      

       for (var i = 0; i < newString.length; i++) {
           
        newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
         
       }

       const arrNew = newString.join(" ");
       console.log(arrNew);
      
       settext(arrNew);
        

    }

    const onCopyText = ()  => {
       
        const newCopyText = document.getElementById("textbox");
        newCopyText.select();
        navigator.clipboard.writeText(newCopyText.value);

    }

    const onRemovedExtraSpace = () => {
        const newExText = text.split(/[]+/);
        newExText.join(" ");
        settext(newExText);
    }

    const OntextChnage = (event) => {
        settext(event.target.value)

    }

   const handleFocus = (e) => {
       settext(e.target.onFocus = "");
   }



    return (
        <>
          <h3 className="my-4">Please Enter Text to Convert as per Requirment :</h3>
          <div className="container">
              <textarea className="form-control"  type="textarea" value={text} onChange={OntextChnage} onFocus={handleFocus} id="textbox"  rows="10" />
          </div>

          <div className="container my-3">
              <button className="btn btn-primary mx-1" onClick={onUpCharecter}>UpeerCaseText</button>
              <button className="btn btn-info mx-1" onClick={onLowerCharecter}>LowerCaseText</button>
              <button className="btn btn-danger mx-1" onClick={clearText}>ClearInputText</button>
              <button className="btn btn-success mx-1" onClick={onCapitalizaFirst}>CapitalizaFirst</button>
              <button className="btn btn-success mx-1" onClick={onCopyText}>OnCopyText</button>
              <button className="btn btn-dark mx-1" onClick={onRemovedExtraSpace}>On removed Extr space</button>

          </div>

          <div className="container">
               {text}
          </div>
        </>
    )
}
