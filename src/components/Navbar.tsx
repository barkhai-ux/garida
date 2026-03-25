export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="glass-nav max-w-6xl mx-auto px-6 py-3 rounded-2xl flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex gap-[3px] items-end">
            <div className="w-[3px] h-3 bg-gray-800 rounded-full" />
            <div className="w-[3px] h-5 bg-gray-800 rounded-full" />
            <div className="w-[3px] h-4 bg-gray-800 rounded-full" />
            <div className="w-[3px] h-6 bg-gray-800 rounded-full" />
            <div className="w-[3px] h-3 bg-gray-800 rounded-full" />
          </div>
          <span className="text-lg font-semibold text-gray-800 tracking-tight">
            Duu Sonsy
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium">
            Home
          </a>
          <a href="#features" className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium">
            About
          </a>
          <a href="#pricing" className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium">
            Pricing
          </a>
        </div>

      </div>
    </nav>
  );
}
