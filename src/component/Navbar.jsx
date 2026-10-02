import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Skills', link: '#skills' },
        { name: 'Projects', link: '#projects' },
        { name: 'Experience', link: '#experience' },
        { name: 'Contact', link: '#contact' }
    ];

    // Auto update active section berdasarkan posisi scroll halaman
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => item.name.toLowerCase());
            const scrollPosition = window.scrollY + 200; // Offset posisi pandang

            for (let i = sections.length - 1; i >= 0; i--) {
                const sectionEl = document.getElementById(sections[i]);
                if (sectionEl) {
                    const top = sectionEl.offsetTop;
                    if (scrollPosition >= top) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Jalankan sekali saat pertama dimuat

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const lightColors = {
        navBg: 'bg-gradient-to-br from-pink-100/90 via-rose-50/90 to-white/90 border border-pink-200/50',
        textPrimary: 'text-stone-900',
        textSecondary: 'text-stone-600',
        textHover: 'hover:text-pink-600',
        textActive: 'text-pink-600 font-semibold',
        indicator: 'from-pink-500 to-rose-500',
        button: 'from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600',
        dot: 'text-pink-500',
    };

    const darkColors = {
        navBg: 'bg-gradient-to-br from-[#1E1B21]/90 via-[#1E1B21]/80 to-[#17151A]/90 border border-[#312C31]',
        textPrimary: 'text-[#F3EEEC]',
        textSecondary: 'text-[#B0A8AC]',
        textHover: 'hover:text-[#FF7C99]',
        textActive: 'text-[#FF7C99] font-semibold',
        indicator: 'from-[#FF7C99] to-[#FFB0C1]',
        button: 'from-[#FF7C99] to-rose-500 hover:from-pink-400 hover:to-rose-600',
        dot: 'text-[#FF7C99]',
    };

    const colors = darkMode ? darkColors : lightColors;

    const handleNavClick = (itemName) => {
        setActiveSection(itemName.toLowerCase());
        setIsMenuOpen(false);
    };

    return (
        <div className="flex justify-center w-full fixed z-50 mt-4 px-4">
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center justify-between w-full max-w-5xl ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2.5 shadow-xl`}
            >
                <motion.a
                    href="#home"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2"
                >
                    <span className={`text-xl font-bold font-serif ${colors.textPrimary}`}>
                        Grace<span className={colors.dot}>.</span>
                    </span>
                </motion.a>

    
                <div className="hidden lg:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            onClick={() => handleNavClick(item.name)}
                            className="relative py-1"
                        >
                            <motion.span
                                className={`font-medium text-sm transition-colors duration-300 ${
                                    activeSection === item.name.toLowerCase()
                                        ? colors.textActive
                                        : `${colors.textSecondary}${colors.textHover}`
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                            </motion.span>
                            {activeSection === item.name.toLowerCase() && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r rounded-full ${colors.indicator}`}
                                />
                            )}
                        </a>
                    ))}
                </div>

                <div className="flex items-center space-x-3">
                 
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full border ${
                            darkMode 
                                ? 'bg-[#1E1B21] border-[#312C31] text-amber-300' 
                                : 'bg-pink-50 border-pink-200 text-stone-700'
                        } transition-colors shadow-sm cursor-pointer`}
                        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {darkMode ? (
                            <Sun className="w-4 h-4 text-amber-300" />
                        ) : (
                            <Moon className="w-4 h-4 text-stone-700" />
                        )}
                    </motion.button>

          
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`hidden lg:block px-5 py-2 text-xs font-semibold rounded-full bg-gradient-to-r ${colors.button} text-white shadow-md hover:shadow-rose-500/25 transition-all`}
                    >
                        Hire Me
                    </motion.a>

                    <div className="flex lg:hidden items-center">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-lg border ${
                                darkMode 
                                    ? 'bg-[#1E1B21] border-[#312C31] text-[#F3EEEC]' 
                                    : 'bg-pink-50 border-pink-200 text-stone-800'
                            }`}
                        >
                            {isMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </motion.button>
                    </div>
                </div>

                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute top-full left-0 right-0 mt-3 lg:hidden ${
                            darkMode ? 'bg-[#1E1B21]/95 border-[#312C31]' : 'bg-white/95 border-pink-100'
                        } backdrop-blur-xl rounded-2xl shadow-2xl border p-4 overflow-hidden`}
                    >
                        <div className="space-y-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.link}
                                    onClick={() => handleNavClick(item.name)}
                                    className="block"
                                >
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className={`py-2.5 px-4 rounded-xl text-center transition-colors ${
                                            activeSection === item.name.toLowerCase()
                                                ? darkMode ? 'bg-[#3A222B] text-[#FF7C99]' : 'bg-pink-100/70 text-pink-600'
                                                : colors.textSecondary
                                        }`}
                                    >
                                        <span className="font-medium text-sm">
                                            {item.name}
                                        </span>
                                    </motion.div>
                                </a>
                            ))}
                            <motion.a
                                href="#contact"
                                onClick={() => setIsMenuOpen(false)}
                                whileTap={{ scale: 0.95 }}
                                className={`block py-3 px-4 text-center text-xs font-semibold rounded-xl bg-gradient-to-r ${colors.button} text-white shadow-md mt-3`}
                            >
                                Hire Me
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </motion.nav>
        </div>
    );
};

export default Navbar;