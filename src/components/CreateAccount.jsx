import React, {useState} from "react";
import Cookies from "js-cookie";
import createAccount from "../images/createAccount.jpg";
import ButtonCustom from "./Buttons/ButtonCustom";
import ButtonGoogle from "./Buttons/ButtonGoogle";
import BackButton from "./Buttons/BackButton";
import ButtonLogo from "./Buttons/ButtonLogo";
import PhoneNumberInput from "./PhoneNumberInput";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {

    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showWarning, setShowWarning] = useState(false);

    const validatePhoneLength = (value) => {
        const cleanedValue = value.replace(/\D/g, ""); // Elimina caracteres no numéricos
        setPhoneNumber(value);
    
        if (cleanedValue.length === 0) {
            setShowWarning(false); // Si está vacío, ocultar aviso
        } else if (cleanedValue.length < 4 || cleanedValue.length > 10) {
            setShowWarning(true); // Si está fuera del rango, mostrar aviso
        } else {
            setShowWarning(false); // Si está dentro del rango, ocultar aviso
        }
    };

    const handleRegister =() => {
        const fakeToken = "fake-token-123456"; //simulacion del token
        Cookies.set("token", fakeToken, { expires: 1 }); //expiracin 1 dia 
        navigate("/homepage"); //redirigir login
    };

    const handleRedirect = () => {
        navigate("/login");
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
                            <label 
                                className="block text-sm font-medium mb-2 text-gray-600" 
                                htmlFor="email">Correo Electrónico
                            </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="border-gray-400 shadow-lg w-full px-3 py-2 shadow-gray-400/40 rounded-lg text-gray-700 bg-[#F1F1F1]"
                                        placeholder="Ingresa tu correo electrónico"
                                    />
                        </div>
                        <div className="mb-6">
                            <label 
                                className="block text-sm font-medium mb-2 text-gray-600" 
                                htmlFor="phone">Número
                            </label>
                            <div className="flex items-center gap-2 w-full">
                                <PhoneNumberInput />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        pattern="[0-9]{4,10}"
                                        minLength="4"
                                        maxLength="10"
                                        required
                                        className="border-gray-400 shadow-lg w-full px-3 py-2 shadow-gray-400/40 rounded-lg text-gray-700 bg-[#F1F1F1]"
                                        placeholder="Ingresa tu número"
                                    />
                            </div>
                        </div>


                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2 text-gray-600" htmlFor="password">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="border-gray-400 shadow-lg w-full px-3 py-2 shadow-gray-400/40 rounded-lg text-gray-700 bg-[#F1F1F1]"
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