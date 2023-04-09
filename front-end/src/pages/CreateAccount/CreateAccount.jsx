import './CreateAccount.css';
import { useNavigate } from 'react-router-dom';

function CreateAccount(){
  const Redirect = useNavigate();
  return (
    <div className='CreateAccount'>
      <header className="Header">
        <h1 className="H1">
          Create Account
        </h1>
      </header>
      <div className='FullName'>
        Full Name: 
        &nbsp;
        <input type="text" id="myText" placeholder='Full Name'></input>
      </div>
      <div className='Username'>
        Username:
        &nbsp;
        <input type="text" id="myText" placeholder='Email Address'></input>
      </div>
      <div className='Password'>
        Password:
        &nbsp;
        <input type="text" id="myText" placeholder='Password'></input>
      </div>
      <div className='EmailAddress'>
        Email Address:
        &nbsp;
        <input type="text" id="myText" placeholder='Email Address'></input>
      </div>
      <div className='ProfilePhoto'>
        Profile Photo:
      </div>
      <form method='POST' action='/upload' encType='multipart/form-data'>
          <input type='file' id = 'myFile' name='image' className='UploadPP'></input>
          <button className='UploadButton'> upload </button>
        </form>
      <div className='Location'>
        Location:
      </div>
      <div className='Country'>
        Country:
        &nbsp;
        <input type="text" id="myText" className='CountryInput' placeholder='Country'></input>
      </div>
      <div className='State'>
        State:
        &nbsp;
        <input type="text" id="myText" className='StateInput' placeholder='State'></input>
      </div>
      <div className='City'>
        City:
        &nbsp;
        <input type="text" id="myText" className='CityInput' placeholder='City'></input>
      </div>
      <div className='Address'>
        Address:
        &nbsp;
        <input type="text" id="myText" className='AddressInput' placeholder='Address'></input>
      </div>
      <button className='CreateButton' onClick={()=>Redirect("/discover")}>
        Create
      </button>
    </div>
  );
}

export default CreateAccount; 