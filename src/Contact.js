
import React, { useState } from "react"; 
const Contact = ( ) => {
    const [data, setData] = useState({

      fullname: "",
        phone:"",
        email:"",
        message:"",
        
        });

const InputEvent = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {

        return{
            ...preVal,
            [name] : value,
        };
    });
};



const   FormSubmit=(e)=>{
    e.preventDefault();
    alert(`My name is ${data.fullname}. My mobile number is ${data.phone}. My email address is ${data.email}. I want to say that ${data.message}` );
};

    return (
<>
<div id="form">
<div>


 <h1 className="text-center" > Contact Us  </h1>
<div className="container-fluid contact_div">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
        
        <form onSubmit= {FormSubmit}>
        
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Full name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    name="fullname"
    value={data.fullname }
    onChange={InputEvent}
    
     placeholder="Enter your name"/>
    <div id="emailHelp" class="form-text"></div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone</label>
    <input type="Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     name="phone"
    value={data.phone }
    onChange={InputEvent}
    
     placeholder="Mobile number"/>
    <div id="emailHelp" class="form-text"></div>
  </div>

 


  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     name="email"
    value={data.email }
    onChange={InputEvent}
    
     placeholder="Enter your Email address"/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
    <textarea type="text" class="form-control" 
     name="message"
    value={ data.message}
    onChange={InputEvent}
     id="exampleForControlTextarea1" rows="3"></textarea>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        
        
         </div>
    </div>
</div>

</div>
</div>
</>

    );
}
export default Contact;