import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Login(){
  const todash = async(event) =>{
    event.preventDefault();
    var forminfo = new FormData(event.target);
    var config = {headers:{"enctype":"multipart/form-data"}};
    await axios.post("http://localhost:3002/reg",forminfo,config)
              .then(function(result){
                if(result.data.status === 'error'){
                    alert('error');
                    window.location.reload();
                }
                else if(result.data.status === 'Success'){
                  alert('success');
                  window.location.reload();
                 }
              
              })
              .catch(function(err){
                alert(err);
                window.location.reload(); 
              })

  }
    return(
      <>
       <div className="container-fluid">
        <form onSubmit={todash}>
         <div className="row mt-3">
            <div className="col-lg-12 text-center">
              <h4 className="text-primary">LOGIN FORM</h4>
            </div>
         </div>
         <div className="row mt-3">
           <div className="col-lg-4">&nbsp;</div>
           <div className="col-lg-2">
              <label>USER NAME :</label>
           </div>
           <div className="col-lg-2">
              <input type={'text'} className="username" placeholder="Enter your Phonenumber"/>
           </div>
           <div className="col-lg-4">&nbsp;</div>
         </div>
         <div className="row mt-3">
           <div className="col-lg-4">&nbsp;</div>
           <div className="col-lg-2">
              <label>PASSWORD :</label>
           </div>
           <div className="col-lg-2">
              <input type={'password'} className="password" placeholder="Enter your password"/>
           </div>
           <div className="col-lg-4">&nbsp;</div>
         </div>
         <div className="row mt-3">
            <div className="col-lg-4">&nbsp;</div>
            <div className="col-lg-2">
              <Link to={"/Reg/"}>
              <button type="button" name="reg_form" id="reg" className="btn btn-danger">REGISTER FORM</button>
              </Link>
            </div>
            <div className="col-lg-2">
              <button type="submit" name="signin" id="signin"  className="btn btn-success">SIGNIN TO DASH</button>
            </div>
            <div className="col-lg-4">&nbsp;</div>
         </div>
         </form>
       </div>
      </>


    );
}
