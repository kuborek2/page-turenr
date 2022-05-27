import './pageing.css';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton'
import { useParams, useNavigate } from "react-router-dom";

export const Pageing = () => {

    let { pageNumber } = useParams(1);
    const navigate = useNavigate();

    const onPageBackChange = () => {
        if( pageNumber === undefined || isNaN(pageNumber) || pageNumber === null || parseInt(pageNumber) === 1 )
            navigate("/"+1);
        else
            navigate("/"+(parseInt(pageNumber)-1));
    }

    const onPageForwardChange = () => {
        if( pageNumber === undefined || isNaN(pageNumber) || pageNumber === null )
            navigate("/"+2);
        else
            navigate("/"+(parseInt(pageNumber)+1));
    }

    return (
        <div className='pageing-container'>
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => onPageBackChange()}>
                <ArrowBackIcon/>
            </IconButton>
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => onPageForwardChange()}>
                <ArrowForwardIcon/>
            </IconButton>
        </div>
    );
}