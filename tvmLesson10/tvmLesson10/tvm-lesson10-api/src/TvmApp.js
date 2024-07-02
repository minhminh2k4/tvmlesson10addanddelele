import { useEffect, useState } from 'react';
import './App.css';
import axios from './api/TvmApi'
import TvmListUsers from './components/TvmListUsers';
import TvmFormAddorEdit from './components/TvmFormAddorEdit';
function TvmApp() {
  const [tvmListUsers,setTvmListUsers] = useState([])
  // doc du lieu tu api
  const tvmGetAllUsers = async ()=>{
    const tvmResponse = await axios.get("tvmUsers");
    console.log("api data:" ,tvmResponse.data)
    setTvmListUsers(tvmResponse.data)
  }
  
  useEffect(()=>{
    tvmGetAllUsers();
  },[])
  const [TvmAddOrEdit, setTvmAddOrEdit] = useState(false);
  const tvmInnitUser = {
      UserName: "Trần Văn Minh",
      Password: "20/06/2004",
      Email: "tranvanminh20640@gmail.com",
      Phone: "0366421013",
      id: "2210900112"
  }
  const [tvmUsers, setTvmUser] = useState(tvmInnitUser)
  //Hàm xử lí nút thêm mới
  const tvmHandleAddNew = ()=>{
    setTvmAddOrEdit(true);
  }
  const tvmHandleClose=(pram)=>{
    setTvmAddOrEdit(true);
  }
  const tvmHandleSubmit = (pram)=>{
    tvmGetAllUser();
    setTvmAddOrEdit(param);
  }
  let tvmElenmentForm = TvmAddOrEdit===true?
  <TvmFormAddorEdit renderUser={tvmUsers}
                  onTvmClose={tvmHandleClose}/>:"";
  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApi</h1>
      <hr/>
      <TvmListUsers renderTvmListUsers={tvmListUsers} onTvmDelete={tvmHandleDelete}/>
      <button className='btn btn primary'name='btn btnTvmThemMoi' onClick={tvmHandleAddNew}>Thêm mới</button>
      <hr/>
      {tvmElenmentForm}
    </div>
  );
}

export default TvmApp;
