export default function ButtonCustomWhite({ text, onClick }) {
    return (
      <button 
        onClick={onClick} 
        className=" relative w-full  text-black font-semibold py-2 
                    rounded-lg overflow-hidden bg-white transition-all 
                    duration-300 ease-in-out group"
      >
        <span className="absolute left-0 top-0 h-full w-1/8 bg-[#E8E8E8] transition-all 
                         duration-300 ease-in-out group-hover:w-full"></span>
        <span className="relative z-10">{text}</span>
      </button>
    );
  }
  