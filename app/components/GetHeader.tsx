import { FaCaretDown } from "react-icons/fa";

const GetHeader = () => {
  return (
    <header className="bg-slate-600 w-full h-32 flex flex-row justify-between items-center text-white">
        <h1 className="text-3xl mx-6">Daan Reuvers</h1>
        <div className="flex flex-row justify-center items-center mx-6">
            <p className="mx-2 cursor-pointer hover:text-red-500 transition-all flex justify-center items-center">Dropdown 1 <FaCaretDown /></p>
            <p className="mx-2 cursor-pointer hover:text-red-500 transition-all flex justify-center items-center">Dropdown 2 <FaCaretDown /></p>
            <p className="mx-2 cursor-pointer hover:text-red-500 transition-all flex justify-center items-center">Dropdown 3 <FaCaretDown /></p>
            <p className="mx-2 cursor-pointer hover:text-red-500 transition-all flex justify-center items-center">Contact</p>
            {/* Hidded hamburger menu media query */}
        </div>
    </header>
  );
};

export default GetHeader;
