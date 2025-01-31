// noinspection
import {useState, useEffect} from "react";
import {FaMoon, FaSun} from "react-icons/fa";
import "./App.css";
import Form from "./form/LoginForm.jsx";
import Inputs from "./form/Inputs.jsx";

// noinspection t
const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // بارگذاری وضعیت دارک مود از localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode) {
            setIsDarkMode(JSON.parse(savedMode));
        }
    }, []);

    // تغییر حالت دارک مود
    const toggleDarkMode = () => {
        setIsDarkMode((prev) => {
            const newMode = !prev;
            localStorage.setItem("darkMode", JSON.stringify(newMode)); // ذخیره وضعیت دارک مود
            return newMode;
        });
    };


    return (
        <div className={`form-wrapper ${isDarkMode ? "dark-mode" : ""}`}>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {isDarkMode ? <FaSun/> : <FaMoon/>}
            </button>
            <Form>
                <div className="form-body">
                    <Inputs
                        controls="input"
                        type="text"
                        name="user_name"
                        placeholder="نام کاربری خود را وارد نمایید"
                        label="نام کاربری"
                    />
                    <Inputs
                        controls="password"
                    />
                    <Inputs
                        controls="input"
                        type="email"
                        name="email"
                        placeholder="لطفا ایمیل خود را وارد نمایید"
                        label={"ایمیل"}
                    />
                </div>
            </Form>
        </div>
    );
};

export default App;
