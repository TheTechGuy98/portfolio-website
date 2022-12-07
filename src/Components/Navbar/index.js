import './index.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';

function Navbar(){
    return (
        <div className='nav-bar'>
            <LinkedInIcon fontSize='large' className='linkedin-icon' />
            <GitHubIcon fontSize='large' className='github-icon' />
            <Button variant="contained">Resume</Button>
        </div>
    );

}


export default Navbar;