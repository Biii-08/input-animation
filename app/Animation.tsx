"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FieldProps } from "formik";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./CustomTheme";

const ContactUs= () => {
  const initialValues = {
    fullName: "",
    email: "",
    phone:'',
    license:'',
    age:'',
    select:'',
    message:'',
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
      phone: Yup.string().required("phone is required"),
      license: Yup.string().required("license is required"),
      age: Yup.string().required("age is required"),
      select: Yup.string().required("select is required"),
      message: Yup.string().required("message is required"),
  });

  const onSubmit = (values: any, { setSubmitting }: any) => {
    console.log(values);
    setSubmitting(false);
  };
  const styles = {
    textField: {
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
    },
  };

  return (
    <div className="flex flex-col  justify-center items-center h-screen bg-blue-100">
      <h1 className="head font-dangrek">hello this is my form </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Box component="div" sx={{ "& > :not(style)": { width: "35ch", marginBottom: '40px' } }}>
            <ThemeProvider theme={customTheme}>
              <div className="flex gap-12 justify-center w-full">
                <div className="flex flex-col">
                  <Field name="fullName">
                    {(field: FieldProps) => (
                      <TextField
                        {...field.field}
                        id="outlined-basic-1"
                        label="Full Name"
                        variant="outlined"
                        className="w-[300px]"
                        sx={{
                          ...styles.textField,
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: field.field.value
                              ? "transparent"
                              : "white",
                            "& input": {
                              color: field.field.value ? "white" : "white",
                            },
                          },
                        }}
                        required
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="error-text"
                  />
                </div>
                <div className="flex flex-col">
                  <Field name="email">
                    {(field: FieldProps) => (
                      <TextField
                        {...field.field}
                        id="outlined-basic-2"
                        label="Email Id"
                        variant="outlined"
                        className="w-[350px]"
                        sx={{
                          ...styles.textField,
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: field.field.value
                              ? "transparent"
                              : "white",
                            "& input": {
                              color: field.field.value ? "white" : "white",
                            },
                          },
                        }}
                        required
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-text"
                  />
                </div>
              </div>
              <div className="flex gap-16 justify-center w-full">
                <div className="flex flex-col">
                <Field name="phone">
                  {(field: FieldProps) => (
                    <TextField
                      {...field.field}
                      id="outlined-basic-1"
                      label="Phone Number"
                      variant="outlined"
                      className="w-[300px]"
                      sx={{
                        ...styles.textField,
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: field.field.value
                            ? "transparent"
                            : "white",
                          "& input": {
                            color: field.field.value ? "white" : "white",
                          },
                        },
                      }}
                      required
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="error-text"
                />
                </div>
                <div className=" flex flex-col">
                <Field name="license">
                  {(field: FieldProps) => (
                    <TextField
                      {...field.field}
                      id="outlined-basic-1"
                      label="Drivers License "
                      variant="outlined"
                      className="w-[300px]"
                      sx={{
                        ...styles.textField,
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: field.field.value
                            ? "transparent"
                            : "white",
                          "& input": {
                            color: field.field.value ? "white" : "white",
                          },
                        },
                      }}
                      required
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="license"
                  component="div"
                  className="error-text"
                />
                </div>
              </div>
              <div className="flex gap-16 justify-center w-full">
                <div className="flex flex-col">
                <Field name="age">
                  {(field: FieldProps) => (
                    <TextField
                      {...field.field}
                      id="outlined-basic-1"
                      label="Age"
                      variant="outlined"
                      className="w-[300px]"
                      sx={{
                        ...styles.textField,
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: field.field.value
                            ? "transparent"
                            : "white",
                          "& input": {
                            color: field.field.value ? "white" : "white",
                          },
                        },
                      }}
                      required
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="age"
                  component="div"
                  className="error-text"
                />
                </div>
              <div className="flex flex-col">
              <Field name="select">
                {(field: FieldProps) => (
                  <TextField
                    {...field.field}
                    id="outlined-basic-1"
                    label="Choose your game"
                    variant="outlined"
                    className="w-[300px]"
                    sx={{
                      ...styles.textField,
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: field.field.value
                          ? "transparent"
                          : "white",
                        "& input": {
                          color: field.field.value ? "white" : "white",
                        },
                      },
                    }}
                    required
                  />
                )}
              </Field>
              <ErrorMessage
                name="select"
                component="div"
                className="error-text"
              />
              </div>
              </div>
              <Field name="message">
                {(field: FieldProps) => (
                  <TextField
                    {...field.field}
                    id="outlined-basic-1"
                    label="Message"
                    variant="outlined"
                    className="w-[300px]"
                    sx={{
                      ...styles.textField,
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: field.field.value
                          ? "transparent"
                          : "white",
                        "& input": {
                          color: field.field.value ? "white" : "white",
                        },
                      },
                    }}
                    required
                  />
                )}
              </Field>
              <ErrorMessage
                name="message"
                component="div"
                className="error-text"
              />
            </ThemeProvider>
          </Box>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactUs;
