import { Modal, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = ({ isModalOpen, setIsModalOpen }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const { signIn, createUser, loading, updateUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    const email = e.target["email"].value;
    const password = e.target["password"].value;
    if (isLogin) {
      console.log(email, password);
      signIn(email, password)
        .then((result) => {
          console.log(result);
          setIsModalOpen(false);
        })
        .catch((err) => {
          setErrorMsg(err.message);
        });
    } else {
      const name = e.target["fullName"].value;
      const confirmPassword = e.target["confirmPassword"].value;
      if (password === confirmPassword) {
        console.log(name, email, password, confirmPassword);
        createUser(email, password)
          .then((result) => {
            console.log(result);
            updateUserName(name);
          })
          .catch((err) => {
            setErrorMsg(err.message);
          });
      } else {
        setErrorMsg("Password and confirm password doesn't match!");
      }
    }
  };

  const updateUserName = (name) => {
    updateUser({ displayName: name });
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
      <Modal
        show={isModalOpen}
        size="md"
        popup={true}
        onClose={() => setIsModalOpen((p) => !p)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <img
              className="w-[200px] mx-auto"
              src="https://i.annihil.us/u/prod/marvel/images/mu/web/2021/three-logo-lockup.png"
              alt=""
            />
            <h3 className="uppercase text-[16px] text-center font-medium text-red-600 dark:text-white ">
              {isLogin ? "Sign in" : "Create your account"}
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {isLogin ? <LoginInput /> : <SignUpInput />}
            </form>
            {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}
            {isLogin ? (
              <div onClick={() => setIsLogin((p) => !p)} className="w-full">
                <button className="py-2 text-center w-full border-2 border-gray-800 text-gray-800">
                  Create and account
                </button>
              </div>
            ) : (
              <p className="text-center">
                Already have an account?{" "}
                <span
                  onClick={() => setIsLogin((p) => !p)}
                  className="underline text-red-500 cursor-pointer"
                >
                  Sign In
                </span>
              </p>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Login;

const LoginInput = () => {
  return (
    <>
      <div>
        <TextInput
          name="email"
          placeholder="Username or Email Address"
          required={true}
        />
      </div>
      <div>
        <TextInput
          placeholder="password"
          name="password"
          type="password"
          required={true}
        />
      </div>
      <div className="w-full">
        <button className="py-2 text-center w-full bg-red-600 text-white">
          Sign in
        </button>
      </div>
      <p className="text-right text-red-600 underline cursor-pointer">
        Need help signing in?
      </p>
      <div className="pb-5 border-b w-full"></div>
    </>
  );
};

const SignUpInput = () => {
  return (
    <>
      <div>
        <TextInput
          name="fullName"
          type={"text"}
          placeholder="Full Name"
          required={true}
        />
      </div>
      <div>
        <TextInput
          name="email"
          type={"email"}
          placeholder="Email Address"
          required={true}
        />
      </div>
      <div>
        <TextInput
          name="password"
          type={"password"}
          placeholder="Password"
          required={true}
        />
      </div>
      <div>
        <TextInput
          name="confirmPassword"
          placeholder="Confirm password"
          type="password"
          required={true}
        />
      </div>
      <div className="w-full">
        <button className="py-2 text-center w-full bg-red-600 text-white">
          Create Account
        </button>
      </div>
    </>
  );
};
