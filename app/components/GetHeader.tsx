const GetHeader = () => {
  return (
    <header className="bg-slate-600 w-full h-32 flex flex-row justify-around items-center text-white">
        <h1 className="text-3xl">Daan Reuvers</h1>
        <div className="px-6 flex flex-row justify-center items-center">
            <p className="mx-2 cursor-pointer hover:text-red-500 transition-all">Dropdown 1</p>
            <p className="mx-2 cursor-pointer hover:text-red-500 transition-all">Dropdown 2</p>
            <p className="mx-2 cursor-pointer hover:text-red-500 transition-all">Dropdown 3</p>
            <p className="mx-2 cursor-pointer hover:text-red-500 transition-all">Contact</p>
            {/* Hidded hamburger menu media query */}
        </div>
    </header>
  );
};

export default GetHeader;
