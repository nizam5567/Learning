import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BottomLinks = () => {
    return (
        <div className="bottomSection">
            <div className="mobile-app-icon-bar">                
                <Link to={"/"}><FontAwesomeIcon icon={faHome} /></Link>
                <Link to={"/favorite"}><FontAwesomeIcon icon={faBookmark} /></Link>                
                <Link to={"/dashboard"}><FontAwesomeIcon icon={faUser} /></Link>
            </div>
        </div>
    );
}

export default BottomLinks;