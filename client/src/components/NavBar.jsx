import {Toolbar, AppBar, styled} from '@mui/material';
import {NavLink} from 'react-router-dom'
const Headers = styled(AppBar)`
background:#111111
`;
const PTab = styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    color:inherit;
    text-decoration:none
`
function NavBar(){
    return(
       <Headers position='static'>
            <Toolbar>
                <PTab to='/'>Crud App</PTab>
                <PTab to='all'>All Users</PTab>
                <PTab to='add'>Add user</PTab>
            </Toolbar>
       </Headers>
    )
}
export default NavBar;