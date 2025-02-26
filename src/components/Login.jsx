import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import inicioSesion from '../images/inicioSesion.jpg';
import ButtonCustom from './Buttons/ButtonCustom';
import ButtonGoogle from './Buttons/ButtonGoogle';
import logo from '../images/logo.jpg';
import BackButton from './Buttons/BackButton';
import { useNavigate } from 'react-router-dom';
import ButtonLogo from './Buttons/ButtonLogo';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  //verificar si ya hay un token en cookies
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      navigate('/homepage'); //si ya hay token, lo redirige al home
    }
  },[navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    //simulacion de respuesta de backend con token falso
    const fakeToken = '123456789abcdef';
    Cookies.set('token', fakeToken,{ expires: 1/24}); //expira en una hora

    alert('Inicio de sesión exitoso');
    navigate('/homepage'); //redirigir a la pagina principal
  };

  const handleRedirectCreateAccount = () => {
    navigate('/create-account');
  };

  return (
    <div className="flex  w-screen h-screen overflow-hidden ">
      {/* seccion izquierda Formulario*/}
      <div className="bg-white p-8 h-screen w-[30%] min-w-[300px] overflow-y-auto">
        <BackButton />
        <ButtonLogo/>
        <div>
          <h2 className="text-xl text-center font-semibold mb-4 text-gray-700">Inicia sesión</h2>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-600" htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-gray-700"
              placeholder="Ingresa tu correo electrónico"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-600" htmlFor="password">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-gray-700"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <div className="flex justify-center">
            <a href="#" className="relative text-[#63C3D1] text-sm-center font-medium">
              He olvidado mi contraseña</a>
          </div>
          <ButtonCustom text="Inicia sesión"/>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-1 border-b border-gray-300"></div>
          <span className="px-3 text-gray-500">o</span>
          <div className="flex-1 border-b border-gray-300"></div>
        </div>
          <ButtonGoogle />
        <p className="mt-6 text-sm text-center text-gray-400">
          Al completar tu registro, confirmas que aceptas los <br />
          <a href="#" className="text-gray-700 hover:underline">Términos de Uso</a> y la{' '}
          <a href="#" className="text-gray-700 hover:underline">Política de Privacidad</a> de este año.
        </p>

        <p className="mt-4 text-sm text-center text-gray-600">
          ¿Todavía no tienes una cuenta?{' '}
          <a href="" className="relative text-[#63C3D1] text-sm-center font-medium"
            onClick={handleRedirectCreateAccount}>
            Regístrate
          </a>
        </p>
      </div>

      {/*seccion derecha imagen*/}
      <div className="relative p-4 w-[70%] h-full ">
        <div className="absolute top-0 left-0 w-full h-[10%] bg-white"></div>
          <div className="absolute top-[10%] left-0 w-full h-[90%] bg-[#63C3D1] rounded-tl-lg rounded-tr-lg"></div>
            <img
              src={inicioSesion}
              alt="Login"
              className="absolute top-0 right-0 w-full h-full object-cover rounded-bl-lg rounded-br-lg pl-4 pb-4"
            />
      </div>
    </div>
  );
};
  
export default Login;