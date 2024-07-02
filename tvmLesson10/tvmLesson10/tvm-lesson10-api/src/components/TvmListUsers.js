import axios from 'axios'
import React from 'react'

export default function TvmListUsers({renderTvmListUsers}) {
    // hien thi du lieu
    let tvmElementUser = renderTvmListUsers.map((tvmUser,index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{tvmUser.id}</td>
                    <td>{tvmUser.UserName}</td>
                    <td>{tvmUser.Password}</td>
                    <td>{tvmUser.Email}</td>
                    <td>{tvmUser.Phone}</td>
                    <td>
                        <button className='btn btn-danger'onClick={tvmHandleDelete}>Delete</button>
                    </td>
                </tr>
            </>
        )
    })

    const tvmHandleDelete = async (param)=>{
        if(window.confirm('Bạn có muốn xóa thật không?')){
            const tvmRes = await axios.delete("tvmUsers/"+param.id);
        }
        onTvmDelete();
    }
  return (
    <div className='row'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {tvmElementUser}
            </tbody>
        </table>
    </div>
  )
}
