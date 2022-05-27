import './search-bar.css';
import { useNavigate, useParams } from "react-router-dom";

export const SearchBar = () => {

    let { pageNumber } = useParams(1);
    const navigate = useNavigate();

    const onInputChange = () => {
        let value = document.getElementById("item-id").value;
        console.log(value)
        if( (value === undefined || value === NaN || value === null || value === "") && ( pageNumber === undefined || pageNumber === NaN || pageNumber === null || parseInt(pageNumber) === 1))
            navigate("/"+1);
        else if ( value === undefined || value === NaN || value === null || value === "" )
            navigate("/"+pageNumber);
        else if( pageNumber === undefined || pageNumber === NaN || pageNumber === null || parseInt(pageNumber) === 1 )
            navigate("/"+1+"?id="+value);
        else
            navigate("/"+pageNumber+"?id="+value);
    }

    return (
        <div>
            <form>
                <input type="number" id="item-id" name="item-id" placeholder="Enter page number here!"/>
                <input type="button" value="Search" onClick={() => onInputChange()}/>
            </form>
        </div>
    );
}
