import "./UserName.css"
import { FaRegUser } from "react-icons/fa";
import { useEffect, useState } from "react"; // for input

export default function UserName({handleEnterClick}) {
    const [name, setName] = useState("");
    const [closeSection, setCloseSection] = useState(false);
    const handleInputChange = (e) => setName(e.target.value);

    useEffect(() => {
        document.body.addEventListener("keyup", (e) => {
            if(e.key == "Enter" && name.length > 2) {
                handleEnterClick(name)
                setCloseSection(true)
            } 
        })
    }, [name])

    return (
        <div className="user-name" style={closeSection ? {display: "none"} : null}>
            <div className="overlay"></div>

            <div className="user-name__container">
                <h2 className="user-name__title">Your Name</h2>

                <div className="user-name__input-container">
                    <FaRegUser className="user-name__input-icon"/>
                    <input 
                        type="text" className="user-name__input" value={name}
                        placeholder="Enter your user name.." aria-label="enter you name"
                        onChange={(e) => {handleInputChange(e)}}
                    />
                </div>

                <button className={`button ${name.trim().length > 2 ? "" : "disabled"}`}
                    onClick={() => {
                        handleEnterClick(name)
                        setCloseSection(true)
                    }}>
                    Enter
                </button>
            </div>
        </div>
    )
}