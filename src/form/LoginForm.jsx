import {Form, Formik} from "formik";
import {initialValues, onSubmit, validationSchema} from "./FormikValidation.jsx";

const LoginForm = ({children}) => {
    return (<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({isSubmitting, isValid}) => (<Form className="form-container">
                    <h2 className="form-header">فرم ورود</h2>
                    {children}
                    <button className="btn" type="submit" disabled={isSubmitting || !isValid}>
                        {isSubmitting ? <div className="spinner"></div> : "ارسال"}
                    </button>
                </Form>)}
        </Formik>)
}
export default LoginForm;