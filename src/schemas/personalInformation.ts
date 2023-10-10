import { object, string } from "yup";

export const personalInformationSchema = object({
  fullName: string().required("Please fill in this field!"),
  email: string()
    .email("Must be a valid email!")
    .required("Please fill in this field!"),
  phoneNumber: string(),
  portfolioUrl: string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Please enter a valid url!"
  ),
});
