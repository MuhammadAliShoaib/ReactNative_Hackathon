import * as Yup from "yup";

export const signupValidation = Yup.object({
    name: Yup.string().min(3).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your Email"),
    password: Yup.string().min(6).required()

})

export const loginValidation = Yup.object({
    email: Yup.string().email().required("Please enter your Email"),
    password: Yup.string().required("Please enter your password")
})

export const taskValidation = Yup.object({
    taskName: Yup.string().min(3).max(25).required("Please enter your Task Name"),
    date: Yup.date()
})