import * as Yup from "yup";

export const initialValues = {user_name: "", password: "", email: ""};
export const validationSchema = Yup.object({
    user_name: Yup.string()
        .min(3, "نام کاربری باید حداقل 3 کاراکتر داشته باشد")
        .max(20, "نام کاربری باید حداکثر 20 کاراکتر داشته باشد")
        .required("نام کاربری الزامی است"),
    password: Yup.string()
        .min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد")
        .required("رمز عبور الزامی است"),
    email: Yup.string().email("ایمیل وارد شده معتبر نیست").required("ایمیل الزامی است"),
});

export const onSubmit = (values, {setSubmitting}) => {
    console.log(values);
    setTimeout(() => {
        setSubmitting(false);
        alert("فرم ارسال شد!");
    }, 2000);
};