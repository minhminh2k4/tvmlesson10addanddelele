import axios from './api/TvmApi'
import React, { useEffect, useState } from 'react'

export default function TvmFormAddorEdit() {

    console.log(renderUsers);
    const [tvmId, setTvmId] = useState(0);
    const [tvmUserName, setTvmUserName] = useState("");
    const [tvmPassword, setTvmPassword] = useState("");
    const [tvmEmail, setTvmEmail] = useState("");
    const [tvmPhone, setTvmPhone] = useState("");

    useEffect(()=>{
        setTvmId(renderUser.id)
        setTvmUserName(renderUser.UserName)
        setTvmPassword(renderUser.Password)
        setTvmEmail(renderUser.Email)
        setTvmPhone(renderUser.Phone)
    },[renderUser])


    const tvmHandleClose = ()=>{
        onTvmclose(false);
    }

    const tvmHandleSubmit=async (event)=>{
        event.prevenDefaut();
        console.log(tvmId, tvmUserName, tvmPassword , tvmPhone ,tvmEmail)
        //post -> api
        let tvc0bjUser = {
        UserName: tvmUserName,
        Password:  tvmPassword,
        Email: tvmEmail,
        Phone: tvmPhone,
        id: tvmId
        }
        const tvmRes = await axios
    }
  return (
    <div className='border'>
    <from>
    <div className="input-group mb-3">
        <span class="input-group-text" id="id">Id</span>
        <input type="text" class="form-control"
            name='id' value={tvmId}  onChange={(ev)=> setTvmId(ev.target.value)}
             placeholder="id" aria-label="id" aria-describedby="id"/>
    </div>

    <div className="input-group mb-3">
        <span class="input-group-text" id="UserName">Id</span>
        <input type="text" class="form-control"
            name='UserName' value={tvmUserName} onChange={(ev)=> setTvmUserName(ev.target.value)}
             placeholder="UserName" aria-label="UserName" aria-describedby="UserName"/>
            </div>

    <div className="input-group mb-3">
        <span class="input-group-text" id="Password">Password</span>
        <input type="Password" class="form-control"
            name='Password' value={tvmPassword} onChange={(ev)=> setTvmPassword(ev.target.value)}
             placeholder="Password" aria-label="Password" aria-describedby="Password"/>
            </div>

            <div className="input-group mb-3">
        <span class="input-group-text" id="Email">Email</span>
        <input type="email" class="form-control"
            name='Email' value={tvmEmail} onChange={(ev)=> setTvmEmail(ev.target.value)}
             placeholder="Email" aria-label="Email" aria-describedby="Email"/>
            </div>
            
            <div className="input-group mb-3">
        <span class="input-group-text" id="Phone">Phone</span>
        <input type="number" class="form-control"
            name='Phone' value={tvmPhone} onChange={(ev)=> setTvmPhone(ev.target.value)}
             placeholder="Phone" aria-label="Phone" aria-describedby="Phone"/>
            </div>
        <button className='btn btn-primary' name='btnTvmSave'onClick={(ev)=>tvmHandleSubmit(ev)}>Ghi lại</button>
        <button className='btn btn-danger' onClick={tvmHandleClose}>Đóng</button>
        </from>
    </div>
    
  )
}
