import React from "react";
import { useState } from "react";
import { z } from "zod";

export default function LoginForm() {
  type FormDataType = {
    email: string;
    password: string;
  };

  type ErrorsType = {
    email?: string;
    password?: string;
  };

  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ErrorsType>({});

  const loginSchema = z.object({
    email: z.string().email("Invalid Email Format"),
    password: z.string().min(6, "Password must be atleast 6 characters"),
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const newErrorObj: ErrorsType = {};
      for (let i = 0; i < result.error.issues.length; i++) {
        const tempError = result.error.issues[i];
        const fieldname = tempError.path[0] as keyof FormDataType;
        newErrorObj[fieldname] = tempError.message;
      }
      setErrors(newErrorObj);
    } else {
      setErrors({});
      alert("Login Successfull");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter the email address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {errors.email && <p>{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Enter the password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {errors.password && <p>{errors.password}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
