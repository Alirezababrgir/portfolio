import * as Yup from "yup";
export  const userSchema =Yup.object().shape({
    fullname: Yup.string().required("نام و نام خانوادگی الزامیست"),
    email: Yup.string().email("آدرس ایمیل معتبر نیست").required("آدرس ایمیل الزامیست"),
    subject: Yup.string().required("نوشتن عنوان الزامیست"),
    message: Yup.string().required("نوشتن پیام الزامیست"),
    recaptcha: Yup.string().required("کپچا الزامیست"),
});