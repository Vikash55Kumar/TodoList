import React from "react";
import { Form, Input, Button, Link } from "@nextui-org/react";

export default function UserSignup() {
  const [action, setAction] = React.useState(null);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-screen-sm md:max-w-xl  mt-14 mb-14">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Todo User Regestration
        </h2>
        <Form
          className="w-full flex flex-col gap-6"
          validationBehavior="native"
          onReset={() => setAction("login reset")}
          onSubmit={(e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.currentTarget));
            setAction(`submit ${JSON.stringify(data)}`);
          }}
        >

          <Input isRequired errorMessage="Please enter fullname" label="Full Name" labelPlacement="outside" name="name" placeholder="Enter your full name" />
          <Input isRequired errorMessage="Please enter valid email" label="Email" labelPlacement="outside" name="email" type="email" placeholder="Enter your email" />
          <Input
            isRequired
            errorMessage="Please enter a valid password"
            label="Password"
            labelPlacement="outside"
            name="password"
            placeholder="Enter your password"
            type="password"
            className="rounded-lg"
          />

        <Input
            isRequired
            errorMessage="Please enter a valid conformPassword"
            label="ConformPassword"
            labelPlacement="outside"
            name="ConformPassword"
            placeholder="Enter your conformPassword"
            type="password"
            className="rounded-lg"
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
          Already have an account? <Link href="/" className="text-blue-700 underline" > Login</Link>
        </p>
      </div>
    </div>
  );
}