import React, { useState } from "react";
import { Form, Input, Button, Link } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function UserLogin() {
  const [action, setAction] = React.useState(null);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
     
      if (email==="vikash@gmail.com" && password==="hello121testing") {
          toast.success("Login Successfully!");
          setEmail('');
          setPassword('');
          navigate("/todoList");
      } else {
          toast.error("Login failed!", 'error');
      }
    } catch (err) {
        toast.error(err.response?.data?.message || err.message || 'Login failed!', 'error');
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-screen-sm md:max-w-xl">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Todo User Login
        </h2>
        <Form
          className="w-full flex flex-col gap-6"
          validationBehavior="native"
          onSubmit={handleLogin}
          onReset={() => setAction("signup reset")}
        >

          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
            className="rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />

           <Input
            isRequired
            errorMessage="Please enter a valid password"
            label="Password"
            labelPlacement="outside"
            name="password"
            placeholder="Enter your password"
            type="password"
            className="rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex gap-4">
            <Button color="primary" type="submit" className="w-full">
              Submit
            </Button>
            <Button type="reset" variant="flat" className="w-full">
              Reset
            </Button>
          </div>
          {action && (
            <div className="mt-4 text-sm text-gray-500">
              Action: <code>{action}</code>
            </div>
          )}
        </Form>
        <p className="text-base font-bold text-left text-gray-600 mt-6">
          Don't have an account? <Link href="/signup" className="text-blue-700 underline" > Signup</Link>
        </p>

        <p className="text-base text-left text-gray-600 mt-6">
        Testing: <b>Email: </b>vikash@gmail.com   <b>Password: </b>hello121testing
      </p>
      </div>

    </div>
  );
}