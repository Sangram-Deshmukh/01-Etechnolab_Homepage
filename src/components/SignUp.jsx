import { useState } from "react";
export default function Signup() {
    const [enteredValues , setEnteredValues] = useState({
        Email : '',
        Password : '',
        ConfirmPass :'',
        Name :'',
        Number :'',
        Role :''
      });

    const [didEdit , setDidEdit] = useState({
        Email : false,
        Password : false,
        Name : false,
        Number : false,
        Role : false
    })

    const emailInvalid = didEdit.Email && !enteredValues.Email.includes('@');
    const passInvalid = didEdit.Password && (enteredValues.Password.length) <6;
    const passCheck =didEdit.ConfirmPass && !(enteredValues.Password === enteredValues.ConfirmPass);
    const invalidNumber = didEdit.Number && enteredValues.Number.length <10;

    function handleSubmit(event){
        event.preventDefault();

        console.log("Email : "+ enteredValues.Email);
        console.log("Password : " + enteredValues.Password);
        console.log("Name : " + enteredValues.Name);
        console.log("Phone Number : " + enteredValues.Number);
        
    }

    function handleInputChange(identifier , value){
        setEnteredValues((prevValues)=>({
            ...prevValues,
            [identifier]:value,
        }));
    }

    function handleInputBlur (identifier){
        setDidEdit((prevEdit)=>({
            ...prevEdit,
            [identifier]: true
        }));
    }
    return (
      <form onSubmit={handleSubmit}>
        <h2> About eTechnoLab : </h2>
        <p> eTechno Lab is a Software Services company, provides IT solutions to our clients with our core values Collaborative spirit, Integrity, and Serenity.
        Being a top-notch Custom software development company, our services are designed to take your business to the next level, reducing the gap between you and the heights of success you wish to achieve.
        </p>
        <h2>Welcome on board!</h2>
        <p>We just need a little bit of data from you to get you started 🚀</p>
  
        <div className="control">
          <label htmlFor="email">Email</label>
          <input onBlur={()=> handleInputBlur('Email')} onChange={(event)=>{handleInputChange('Email',event.target.value)}} id="email" type="email" name="email" />
          <div className="control-error">
                {emailInvalid && <p> Please enter valid Email id.</p>}
          </div>
        </div>
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="password">Password</label>
            <input onBlur={()=> handleInputBlur('Password')} onChange={(event)=>{handleInputChange('Password',event.target.value)}} id="password" type="password" name="password" />
            <div className="control-error">
                {passInvalid && <p>Password must contain atleast 6 characters</p>}
            </div>
          </div>
        
          <div className="control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={()=> handleInputBlur('ConfirmPass')}
              onChange={(event)=>{handleInputChange('ConfirmPass',event.target.value)}}
              id="confirm-password"
              type="password"
              name="confirm-password"
            />
            <div className="control-error">
                { passCheck && <p>Enter correct password</p>}
            </div>
          </div>
        </div>
  
        <hr />
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="Name">Full Name</label>
            <input onChange={(event)=>{handleInputChange('Name',event.target.value)}} type="text" id="Name" name="name" />
          </div>
  
          <div className="control">
            <label htmlFor="Number"> Phone Number </label>
            <input onBlur={()=> handleInputBlur('Number')} onChange={(event)=>{handleInputChange('Number',event.target.value)}} type="number" id="number" name="number" />
            <div className="control-error">
                {invalidNumber && <p>Enter valid 10 digit Number.</p>}
            </div>
          </div>
        </div>
  
        <div className="control">
          <label htmlFor="phone">What best describes your role?</label>
          <select id="role" name="role">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
          </select>
        </div>
  
        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms" />I
            agree to the terms and conditions
          </label>
        </div>
  
        <p className="form-actions">
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button type="submit" className="button">
            Sign up
          </button>
        </p>
      </form>
    );
  }