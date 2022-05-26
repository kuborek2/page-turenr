import './pageing.css';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton'

export const Pageing = () => {
    return (
        <div class="pageing-container">
            <IconButton color="primary" aria-label="upload picture" component="span">
                <ArrowBackIcon/>
            </IconButton>
            <IconButton color="primary" aria-label="upload picture" component="span">
                <ArrowForwardIcon/>
            </IconButton>
        </div>
    );
}