export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex gap-[3px] items-end">
            <div className="w-[3px] h-3 bg-gray-600 rounded-full" />
            <div className="w-[3px] h-5 bg-gray-600 rounded-full" />
            <div className="w-[3px] h-4 bg-gray-600 rounded-full" />
            <div className="w-[3px] h-6 bg-gray-600 rounded-full" />
            <div className="w-[3px] h-3 bg-gray-600 rounded-full" />
          </div>
          <span className="text-lg font-semibold text-gray-700 tracking-tight">
            Duu Sonsy
          </span>
        </div>

<p className="text-sm text-gray-400">
          &copy; 2026 Duu Sonsy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
