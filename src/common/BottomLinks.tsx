import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { stringify } from "querystring";

const BottomLinks = () => {

    const links = [
        { id: 1, name: "home", to: "/", icon: faHome, },
        { id: 2, name: "favorite", to: "/favorite", icon: faBookmark },
        { id: 3, name: "dashboard", to: "/dashboard", icon: faUser },
    ];

    const location = useLocation();
    console.log(location.pathname);

    const path = location.pathname;

    const [active, setActive] = useState<number>();
    const handleActive = (id: number) => {
        setActive(id);
    };
    
    return (
        <div className="bottomSection" style={ (path).includes('/storyQuestions') ? {display: "none"}:{}}>
            <div className="mobile-app-icon-bar">
                {links.map((item) => {

                    return <Link to={item.to}
                        id={item.id.toString()}
                        //onClick={() => handleActive(item.id)}
                        className={path === item.to ? "activeBottomLink" : ""}>
                        <FontAwesomeIcon icon={item.icon} />
                    </Link>;
                })}
                {/* <Link to={"/"}><FontAwesomeIcon icon={faHome} /></Link>
                <Link to={"/favorite"}><FontAwesomeIcon icon={faBookmark} /></Link>                
                <Link to={"/dashboard"}><FontAwesomeIcon icon={faUser} /></Link> */}
            </div>
        </div>
    );
}

export default BottomLinks;