import React, {useState} from "react";

export default function About(props) {
  
    //  const [mystyle, setmystyle] = useState(  {
    //     color:'black',
    //     backgroundColor:"white"
    // })

    let mystyle = {
       color: props.mode == 'dark' ? '#fff' : '#000',
       backgroundColor: props.mode == 'light' ? '#f8f9fa' : '#2f4254'
    }
    let borderstyle = {
        borderWidth:'1px',
        borderColor: props.mode == 'light' ? '#f8f9fa' : '#404040'

      
    }

    
    // const[mystyletext, setmystyletext] = useState("Enbale Dark Mode")

    // const toogleStyle = () => {
       
    //    if(mystyle.color == 'black') {

    //      setmystyle({
    //         color:'white',
    //         backgroundColor:"black",
    //         border:"2px solid #fff",
    //      })
    //      setmystyletext("Enbale Light Mode")

    //    } else {
         
    //     setmystyle({
    //         color:'black',
    //         backgroundColor:"white"
    //      })
    //      setmystyletext("Enbale Derk Mode")
    //    }



    // }


  return (

    <>
    <h2 className={`mx-2 my-3 text-${props.mode === 'light'? 'dark' :'light'}`}>{props.heading}</h2>
     <div className="container mt-4" >
            <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={borderstyle}>
            <h2 className="accordion-header" id="headingOne">
            <button style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={borderstyle} >
            <h2 className="accordion-header" id="headingTwo">
            <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" style={mystyle} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={borderstyle} >
            <h2 className="accordion-header" id="headingThree">
            <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" style={mystyle} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        <div className="container my-3">
        {/* <button type="button" className="btn btn-primary my-3" onClick={toogleStyle}>{mystyletext}</button> */}

        </div>

     </div>

    </>
  );
}
