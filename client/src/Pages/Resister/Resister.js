import React, { useState } from 'react'
import "./Resister.css"
import axios from 'axios'


function Resister() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [profile, setProfile] = useState("https://i.stack.imgur.com/dr5qp.jpg")
    const [password, setPassword] = useState("")
    const [pic, setPic] = useState({})

    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [pincode, setPincode] = useState("")


    const [checkImg, setCheckImg] = useState(false)

    function validateEmail(email) {
        let regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
        return (typeof (email) != "string" || regex.test(email)) ? true : false
    }

    function validPassword(password) {
        let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
        return regex.test(password);
    }

    function isValidMobile(phone) {
        let regex = /^[6-9][0-9]{9}$/
        return regex.test(phone)
    }


    const resisterUser = (e) => {
        e.preventDefault();

        if (!checkImg) { return alert("Profile file is mandatory !") }
        if (String(phone).length !== 10 || !isValidMobile(phone)) { return alert("Please enter valid phone number && start from 6-9 !") }
        if (String(pincode).length !== 6) { return alert("Please enter valid Pincode !") }
        if (!validateEmail(email)) { return alert("Please enter valid Email !") }
        if (!validPassword(password)) { return alert("Please enter valid Password && it must contain 8 char with upercase, lowercase, special char and number !") }


        const formData = new FormData();
        formData.append("file", pic)
        formData.append("fileName", pic.name)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            },
        };


        const options = {
            name: name,
            email: email,
            phone: phone,
            password: password,
            profile: pic,
            address: {
                street,
                city,
                pincode
            }
        }
        axios.post("http://localhost:3001/user", options, config).then((res) => {
            alert("Account has created succesfully")
            window.location.replace("/")
        }).catch((err) => alert(err.response.data.message))
    }

    const displayDP = (e) => {
        setCheckImg(true)
        e.preventDefault()
        setPic(e.target.files[0])
        let imgFile = e.target.files[0]
        var reader = new FileReader();
        var imgtag = document.getElementById("profilePicture");
        imgtag.title = imgFile.name;
        reader.onload = function (e) {
            setProfile(e.target.result);
        };
        reader.readAsDataURL(imgFile);
    }



    return (
        <div className='main-div1'>
            <div className="container h-100">
                
                <div className="d-flex justify-content-center h-100">
                
                    <div className="user_card1">
                       
                        <div className="d-flex justify-content-center">
                        <div className="brand_logo_container1">
								<img src="https://th.bing.com/th/id/OIP.GyWqMDYf4DCTJM4aOY5oIgHaHa?pid=ImgDet&rs=1" className="brand_logo1" alt="Logo" />
							</div>
                            <div className="d-flex justify-content-center form_container1">
                                <form onSubmit={resisterUser}>
                              
                                    <div id="imageBox" className="eachInputBox">
                                        <div id="DPBOX">
                                           
                                            <label htmlFor='addDP'> <img src='https://th.bing.com/th/id/OIP.ZJZJjEmvf94Oqv0_PJcvmAHaHa?pid=ImgDet&rs=1' alt='Error' />
                                          
                                            </label>
                                        </div>
                                        <input type="file" id='addDP' alt='erorr' style={{ display: "none" }} onChange={(e) => displayDP(e)} />
                                    </div>


                                    <div className="resister-form">

                                        <input type="text" className='inputs' placeholder='Name...' required value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="resister-form">

                                        <input type="email" className='inputs' placeholder='Email...' required value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="resister-form">

                                        <input type="number" className='inputs' placeholder='Phone No. ...' required value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </div>

                                    <div className="resister-form">

                                        <input className='inputs' type="text" placeholder='Street...' value={street} onChange={(e) => setStreet(e.target.value)} />
                                    </div>
                                    <div className="resister-form">

                                        <input className='inputs' type="text" placeholder='City...' value={city} onChange={(e) => setCity(e.target.value)} />
                                    </div>
                                    <div className="resister-form">

                                        <input className='inputs' type="number" placeholder='Pincode...' value={pincode} onChange={(e) => setPincode(e.target.value)} />
                                    </div>

                                    <div className="resister-form">

                                        <input type="password" className='inputs' placeholder='Password...' required value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>

                                   

                                    <button type="submit" id='btn' className="btn btn-primary">Create Account</button>
                                    <div className='d-flex justify-content-center links ele'>Already have an account?</div><a id='logins' href='/'>Login</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resister
