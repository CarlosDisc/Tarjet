export default function ButtonCustom({ text, onClick }) {
    return (
      <button 
        onClick={onClick} 
        className=" relative w-full px-6 text-white font-semibold py-2 
                    rounded-lg overflow-hidden bg-primary transition-all 
                    duration-300 ease-in-out group"
      >
        <span className="absolute left-0 top-0 h-full w-1/8 bg-[#56B0BE] transition-all 
                         duration-300 ease-in-out group-hover:w-full"></span>
        <span className="relative z-10">{text}</span>
      </button>
    );
  }
  