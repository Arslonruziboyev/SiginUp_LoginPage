import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast } from "react-toastify";
;

const Register = () => {
  const [idx, idchange] = useState("");
  const [namex, namechange] = useState("");
  const [passwordx, passwordchange] = useState("");
  const [emailx, emailchange] = useState("");
  const [phonex, phonechange] = useState("");
  const [countryx, countrychange] = useState("");
  const [addressx, addresschange] = useState("");
  const [genderx, genderchange] = useState("femail");

  const navigate = useNavigate();
  const isValidate= ()=>{
    let isproceed = true;
    const regex = "([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i";
    let errormessage = 'Please enter value in '
    if(idx==null || idx==''){
      isproceed=false;
      errormessage+= 'Username'
    }
    if(passwordx==null || passwordx==''){
      isproceed=false;
      errormessage+= 'Password'
    }
    if(namex==null || namex==''){
      isproceed=false;
      errormessage+= 'Full Name'
    }
    if(emailx==null || emailx==''){
      isproceed=false;
      errormessage+= 'Email'
    }
    if(phonex==null || phonex=='' || regex){
      isproceed=false;
      errormessage+= 'Phone Number'
    }

    if(!isproceed){
      toast.warning(errormessage)
    }


    return isproceed
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let regobj = {
      idx,
      namex,
      passwordx,
      emailx,
      phonex,
      countryx,
      addressx,
      genderx,
    };
    // console.log(regobj);
  if(isValidate()){
    fetch("http://localhost:4000/user", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(regobj),
    }).then((res) => {
        toast.success("Registred Successfully");
        navigate('/login')
      }).catch((err) => {
        toast.error("Failed:" + err.message);
      });
  }
  };
  return (
    <div className="mt-5">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1>User Registration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      User Name <span className="errmsg">*</span>
                    </label>
                    <input
                    
                      value={idx}
                      onChange={(e) => idchange(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password <span className="errmsg">*</span>
                    </label>
                    <input
                      value={passwordx}
                      onChange={(e) => passwordchange(e.target.value)}
                      type="password"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Full Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={namex}
                      onChange={(e) => namechange(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      value={emailx}
                      onChange={(e) => emailchange(e.target.value)}
                      type="email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Phone Number <span className="errmsg">*</span>
                    </label>
                    <input
                      value={phonex}
                      onChange={(e) => phonechange(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Country <span className="errmsg">*</span>
                    </label>
                    <select
                      value={countryx}
                      onChange={(e) => countrychange(e.target.value)}
                      className="form-control"
                    >
                      <option value="india">India</option>
                      <option value="uzbek">Uzbek</option>
                      <option value="korea">Korea</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>
                      Address <span className="errmsg">*</span>
                    </label>
                    <textarea
                      value={addressx}
                      onChange={(e) => addresschange(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <br></br>
                    <input
                      checked={genderx === "male"}
                      onChange={(e) => genderchange(e.target.value)}
                      type="radio"
                      name="gender"
                      value="male"
                      className="app-check "
                    />
                    <label>Male</label>
                    <input
                      checked={genderx === "femail"}
                      onChange={(e) => genderchange(e.target.value)}
                      type="radio"
                      name="gender"
                      value="femail"
                      className="app-check"
                    />
                    <label>Femail</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <a href="htttp./" className="btn btn-danger">Back</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
