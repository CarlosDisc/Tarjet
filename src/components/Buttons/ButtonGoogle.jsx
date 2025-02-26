import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "../../firebase";

export default function GoogleButton({ onClick }) {
  return (
    <button
      onClick={signInWithGoogle}
      className="w-full flex items-center justify-center p-3 rounded-lg shadow-md bg-white hover:bg-gray-100 transition"
    >
      <FcGoogle className="mr-2 text-xl" />
      Continuar con Google
    </button>
  );
}
