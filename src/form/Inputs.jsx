import {ErrorMessage, FastField} from "formik";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {useState} from "react";

const Inputs = ({controls, label, type, name, placeholder}) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    switch (controls) {
        case 'input':
            return (
                <div className="form-group">
                    <label>{label}</label>
                    <FastField className="form-control" type={type} name={name} placeholder={placeholder}/>
                    <ErrorMessage name={name} component="span" className="error-message"/>
                </div>
            )
        case 'password':
            return (
                <div className="form-group password-group">
                    <label>رمز عبور</label>
                    <div className="password-wrapper">
                        <FastField
                            className="form-control password-input"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="رمز عبور خود را وارد نمایید"
                        />
                        <span className="toggle-password" onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash/> : <FaEye/>}
                  </span>
                    </div>
                    <ErrorMessage name="password" component="span" className="error-message"/>
                </div>
            )
    }
}
export default Inputs;