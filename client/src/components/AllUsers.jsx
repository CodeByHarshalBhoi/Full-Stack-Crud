import {Table, TableCell, TableBody, TableHead, TableRow,Button} from '@mui/material';
import { getUser, deleteUser } from '../service/api';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import user from '../../../server/routes/model/user-schema';

function AllUsers(){
    useEffect(()=>{
        getAllUser();
    },[]);

    const [users, setUsers ]=useState([])

    const getAllUser=async()=>{
      let response =   await getUser();
        setUsers(response.data)
    }
    const deleteUserDetails=async(id)=>{
        await deleteUser(id);
        getAllUser();
    }
    return(
        <>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody key={user._id}>
                {
                    users.map(user=>{
                        <TableRow>
                                <TableCell>{user._id} </TableCell>
                                <TableCell>{user.name} </TableCell>
                                <TableCell>{user.userName} </TableCell>
                                <TableCell>{user.email} </TableCell>
                                <TableCell>{user.phone} </TableCell>
                                <TableCell>
                                    <Button component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                    <Button onClick={()=>deleteUserDetails(user._id)}>Delete</Button>
                                </TableCell>
                        </TableRow>
                    })
                }
            </TableBody>
        </Table>
        </>
    )
}
export default AllUsers;