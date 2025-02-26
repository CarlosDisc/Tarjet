import React, {useState} from "react";
import Cookies from "js-cookie";
import createAccount from "../images/createAccount.jpg";
import ButtonCustom from "./Buttons/ButtonCustom";
import ButtonGoogle from "./Buttons/ButtonGoogle";
import BackButton from "./Buttons/BackButton";
import ButtonLogo from "./Buttons/ButtonLogo";
import PhoneNumberInput from "./PhoneNumberInput";
import { useNavigate } from "react-router-dom";
import { Cookie } from "lucide-react";

const CreateAccount = () => {

    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showWarning, setShowWarning] = useState(false);

    const validatePhoneLength = (value) => {
        const cleanedValue = value.replace(/\D/g, "");
        setPhoneNumber(value);
        if (cleanedValue.length < 4 || cleanedValue.length > 10) {
            setShowWarning(true);
        } else {
            setShowWarning(false);
        }
    };

    const handleRegister =() => {
        const fakeToken = "fake-token-123456"; //simulacion del token
        Cookies.set("token", fakeToken, { expires: 1 }); //expiracin 1 dia 
        navigate("/login"); //redirigir login
    };

    const handleRedirect = () => {
        navigate('/login');
      };

    return (
        <div className="flex w-screen h-screen overflow-hidden ">
            <div className="bg-white p-8  w-[30%] min-w-[300px] overflow-y-auto">
                <BackButton />
                <ButtonLogo/>
                <div>
                    <h2 className="text-xl text-center font-semibold mb-4 text-gray-700">Inicia sesión</h2>
                </div>
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2 text-gray-600" htmlFor="email">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border border-gray-400 shadow-lg shadow-gray-400/40 rounded-lg text-gray-700"
                                    placeholder="Ingresa tu correo electrónico"
                                />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2 text-gray-600 " >Número</label>
                            <div className="flex items-center justify-center space-x-4 w-full ">
                                <PhoneNumberInput/>
                                    <input
                                        type="tel"
                                        id="phone"
                                        pattern="[0-9]{4,15}"
                                        minlength="4"
                                        maxlength="15"
                                        value={phoneNumber}
                                        onChange={(e) => validatePhoneLength(e.target.value)}
                                        className="border-gray-400 shadow-lg shadow-gray-400/40 w-full px-4 py-2 border rounded-lg text-gray-700 
                                        appearance-none [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 
                                        [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 
                                        [&::-webkit-inner-spin-button]:appearance-none"
                                        placeholder="Ingresa tu numero"
                                    />
                                        {showWarning && (
                                            <div className="absolute text-sm text-red-600 mt-3 w-30">
                                                El número debe tener entre 4 y 10 digitos
                                            </div>)}
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2 text-gray-600" htmlFor="password">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-3 py-2 border rounded-lg text-gray-700 border-gray-400"
                                    placeholder="Ingresa tu contraseña"
                                />
                        </div>
                            <div className="flex justify-center">
                                <a href="#" className="relative text-[#63C3D1] text-sm-center font-medium">
                                He olvidado mi contraseña</a>
                            </div>
                                <ButtonCustom text="Registrarse" onClick={handleRegister} />
                    </form>

                        <div className="flex items-center my-4">
                        <div className="flex-1 border-b border-gray-300"></div>
                        <span className="px-3 text-gray-500">o</span>
                        <div className="flex-1 border-b border-gray-300"></div>
                        </div>

                            <div className="mt-6">
                            <ButtonGoogle />
                            </div>

                                <p className="mt-6 text-sm text-center text-gray-400">
                                Al completar tu registro, confirmas que aceptas los <br />
                                <a href="#" className="text-gray-700 hover:underline">Términos de Uso</a> y la{' '}
                                <a href="#" className="text-gray-700 hover:underline">Política de Privacidad</a> de este año.
                                </p>

                                <p className="mt-4 text-sm text-center text-gray-600">
                                ¿Ya tienes una cuenta?{' '}
                                <a href="" className="relative text-[#63C3D1] text-sm-center font-medium"
                                onClick={handleRedirect}>
                                    Inicia Sesión</a>
                                </p>
            </div>

            <div className="relative p-4 w-[70%] h-full ">
                <div className="absolute top-0 left-0 w-full h-[10%] bg-white"></div>
                    <div className="absolute top-[10%] left-0 w-full h-[90%] bg-[#63C3D1] rounded-tl-lg rounded-tr-lg"></div>
                        <img
                            src={createAccount}
                            alt="Login"
                            className="absolute top-0 right-0 w-full h-full object-cover rounded-bl-lg rounded-br-lg pl-4 pb-4"
                            />
            </div>
        </div>
    );
};
export default CreateAccount;