import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
export default function Reg(){
    const submit = async(event) =>{
        event.preventDefault();
        var forminfo = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};
        var f=document.getElementById('firstname').value;
        var l=document.getElementById('lastname').value;
        var e=document.getElementById('email').value;
        var n=document.getElementById('number').value;
        var p=document.getElementById('password').value;
        var correctpno = /^[0-9]{10}$/;
        var validpassword = /^[A-Za-z0-9]{4,8}$/;
        if(f === '' || f === null){
            alert('enter firstname');
        }
        else if(l === '' || l === null){
            alert('enter lastname');
        }
        else if(e === '' || e === null){
            alert('enter email');
        }
        else if(!correctpno.test(n)){
            alert('enter valid number');
            document.getElementById('number').value = '';
        }
        else if(!validpassword.test(p)){
            alert('enter a password with 8 characters');
        }
    else{
        await axios.post('http://localhost:3302/reg',forminfo,config)
        .then(function(r){
          if(r.data.status === 'error'){
              alert('error');
              window.location.reload();
          }
          else if(r.data.status === 'Success'){
              alert('added');
              window.location.reload();
          }
        })
        .catch(function(err){
          alert(err);
          window.location.reload();
        }) 



    }
    }
    return(
       <>
        <div className="container-fluid">
            <form onSubmit={submit} >
                <div className="row mt-3">
                    <div className="col-lg-12 text-center">
                        <h4 className="text-primary">REGISTER FORM</h4>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-4">&nbsp;</div>
                    <div className="col-lg-2">
                        <label>FIRST NAME :</label>
                    </div>
                    <div className="col-lg-2">
                        <input type={'text'} className="firstname" id="firstname"/>
                    </div>
                    <div className="col-lg-4">&nbsp;</div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">&nbsp;</div>
                    <div className="col-lg-2">
                        <label>LAST NAME :</label>
                    </div>
                    <div className="col-lg-2">
                        <input type={'text'} className="lastname" id="lastname"/>
                    </div>
                    <div className="col-lg-4">&nbsp;</div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">&nbsp;</div>
                    <div className="col-lg-2">
                        <label>EMAIL :</label>
                    </div>
                    <div className="col-lg-2">
                        <input type={'email'} className="email" id="email"/>
                    </div>
                    <div className="col-lg-4">&nbsp;</div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">&nbsp;</div>
                    <div className="col-lg-2">
                        <label>PHONE NUMBER :</label>
                    </div>
                    <div className="col-lg-2">
                        <input type={'text'} className="number" id="number"/>
                    </div>
                    <div className="col-lg-4">&nbsp;</div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">&nbsp;</div>
                    <div className="col-lg-2">
                        <label>PASSWORD :</label>
                    </div>
                    <div className="col-lg-2">
                        <input type={'password'} className="password" id="password"/>
                    </div>
                    <div className="col-lg-4">&nbsp;</div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-5">&nbsp;</div>
                       <div className="col-lg-2">
                          <button type="submit" className="btn btn-success ml-4">SUBMIT</button>
                       </div>
                    <div className="col-lg-5">&nbsp;</div>
                </div>

            </form>
        </div>
       </>
    );
}
