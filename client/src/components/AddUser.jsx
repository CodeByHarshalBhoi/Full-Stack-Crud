import {
  styled,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 10px;
  }
`;

function AddUser() {
  const [user, setUser] = useState({
    firstName: "",
    userName: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const onHandleChange = (event) => {
    // console.log(event.target.name, event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };
  const addUserDetailes = async () => {
    await addUser(user);
    navigate('/all'); 
    // console.log("Hello");
  };
  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={onHandleChange} name="firstName" />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={onHandleChange} name="userName" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={onHandleChange} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={onHandleChange} name="phone" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={addUserDetailes}>
          Add User
        </Button>
      </FormControl>
    </Container>
  );
}
export default AddUser;
