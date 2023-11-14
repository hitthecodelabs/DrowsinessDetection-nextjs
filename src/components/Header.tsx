// src/components/Header.tsx

const Header = () => {
    return (
        <nav className="bg-gray-100 border-b border-gray-200 py-4">
        <div className="container mx-auto flex justify-between items-center">
            <a className="text-lg font-semibold" href="#">IA Detector de Sueño</a>
            <ul className="flex space-x-4">
            <li><a className="text-blue-600 hover:text-blue-800" href="#">Home</a></li>
            {/* <li><a className="text-blue-600 hover:text-blue-800" href="#">About</a></li>
            <li><a className="text-blue-600 hover:text-blue-800" href="#">Contact</a></li>
            <li><a className="text-blue-600 hover:text-blue-800" href="#">Documentation</a></li> */}
            </ul>
        </div>
        </nav>
    );
};

export default Header;
