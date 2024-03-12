import {
    styled,
    FormGroup,
    FormControl,
    InputLabel,
    Input,
    Typography,
    Button,
  } from "@mui/material";
  import { useState, useEffect } from "react";
  import { editUser, getUser } from "../service/api";
  import { useNavigate, useParams } from "react-router-dom";
  
  const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
      margin-top: 10px;
    }
  `;
  
  function EditUser() {
    const [user, setUser] = useState({
      firstName: "",
      userName: "",
      email: "",
      phone: "",
    });
    const navigate = useNavigate();
    const {id} =useParams();
    useEffect(()=>{
        loadUserDetaile()
    }, [])

const loadUserDetaile=async ()=>{
    const response = await getUser(id)
    setUser(response.data);
}


    const onHandleChange = (event) => {
      // console.log(event.target.name, event.target.value);
      setUser({ ...user, [event.target.name]: event.target.value });
      console.log(user);
    };
    const editUserDetailes = async () => {
      await editUser(user, id);
      navigate('/all'); 
      // console.log("Hello");
    };
    return (
      <Container>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={onHandleChange} name="firstName" value={user.firstName}/>
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={onHandleChange} name="userName" value={user.userName}/>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={onHandleChange} name="email" value={user.email}/>
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={onHandleChange} name="phone" value={user.phone}/>
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={editUserDetailes}>
            Edit User
          </Button>
        </FormControl>
      </Container>
    );
  }
  export default EditUser;
  