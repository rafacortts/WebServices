import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdError } from "react-icons/md";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState(null); // Estado para armazenar mensagens de erro
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const defaultEmail = "usuario@exemplo.com";
    const defaultPassword = "senha123";

    if (email === defaultEmail && password === defaultPassword) {
      navigate("/Dashboard");// Substitua '/next-page' pelo caminho da próxima página
    } else {
      setError("Usuário ou senha incorretos.");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Implementar lógica de cadastro aqui
    try {
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Phone Number:", phoneNumber);
      // Simulação de erro
      throw new Error("Sistema de Cadastro Indisponível tente novamente mais tarde.");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = () => {
    // Implementar lógica de login com o Google aqui
    console.log("Login with Google");
  };

  const closeErrorPopup = () => {
    setError(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-md w-full space-y-8 p-8 rounded-lg border border-slate-200 bg-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-primaryColor to-secondColor mb-4">
          WebServices
        </h1>
        <div>
          <h2 className="mt-6 text-center text-2xl text-gray-900">
            {isLogin ? "Acesse sua conta" : "Nova Conta"}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setIsLogin(true)}
            className={`${
              isLogin ? "bg-primaryColor text-white" : " hover:bg-indigo-100"
            } py-2 px-4 rounded-md`}
          >
            Entrar
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`${
              !isLogin ? "bg-secondColor text-white" : " hover:bg-indigo-100"
            } py-2 px-4 rounded-md `}
          >
            Nova Conta
          </button>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={isLogin ? handleLogin : handleSignUp}
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm space-y-3">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primaryColor focus:border-primaryColor focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primaryColor focus:border-primaryColor focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            {!isLogin && (
              <div>
                <label htmlFor="phone-number" className="sr-only">
                  Phone number
                </label>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primaryColor focus:border-primaryColor focus:z-10 sm:text-sm"
                  placeholder="Phone number"
                />
              </div>
            )}
            {/* Checkbox para aceitar os termos */}
            <div className="flex items-center">
              <input
                id="accept-terms"
                name="accept-terms"
                type="checkbox"
                checked={acceptTerms}
                onChange={() => setAcceptTerms(!acceptTerms)}
                className="h-4 w-4 text-primaryColor focus:ring-primaryColor border-gray-300 rounded"
              />
              <label
                htmlFor="accept-terms"
                className="ml-2 block text-sm text-gray-900"
              >
                Eu li e aceito os <a href="/Privacidade" className="text-primaryColor underline">termos de uso</a>, <a href="/Privacidade" className="text-primaryColor underline">termos de licença de uso de software</a>, da WebServices.
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={!acceptTerms} // Desabilita o botão se os termos não forem aceitos
              className={`group relative w-full flex justify-center py-2 px-4 primary-btn text-white ${!acceptTerms ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLogin ? "Entrar" : "Criar conta Grátis"}
            </button>
          </div>
        </form>
      </motion.div>

      {/* Popup de Erro */}
      {error && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <button
              onClick={closeErrorPopup}
              className="absolute top-2 right-3 text-gray-400 hover:text-black"
            >
              &times;
            </button>
            <div className="flex items-center mb-4">
              <MdError className="text-customRed mr-2" size={24} />
              <h2 className="text-xl font-semibold">Ops! Algo deu errado.</h2>
            </div>
            <p>{error}</p>
            <div className="flex justify-center">
              <Link to={"/"}
                onClick={closeErrorPopup} 
                className="mt-4 primary-btn text-white "
              >
                Fechar
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Login;
