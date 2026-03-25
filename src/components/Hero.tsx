export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-teal-200/40 to-cyan-200/30 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-200/30 to-purple-200/20 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">
              Meet Duu Sonsy
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              Upgrade your
              <br />
              Spotify to
              <br />
              <span className="bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
                Premium
              </span>
            </h1>
          </div>

          {/* Right Content - Hero Image Area */}
          <div className="relative hidden lg:block">
            {/* Gradient circle behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-teal-200/50 via-cyan-100/40 to-green-100/30" />

            {/* Spotify-themed illustration */}
            <div className="relative z-10 flex items-center justify-center h-[500px]">
              <div className="relative">
                {/* Main circle with Spotify icon */}
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl shadow-green-500/30">
                  <svg className="w-32 h-32 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </div>

                {/* Sound wave rings */}
                <div className="absolute -inset-8 rounded-full border-2 border-green-300/30 animate-pulse" />
                <div className="absolute -inset-16 rounded-full border border-green-200/20" />
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute top-8 right-0 glass-card rounded-2xl px-5 py-3 animate-float">
              <p className="text-xs text-gray-500 font-medium">Upgrades</p>
              <p className="text-xl font-bold text-gray-800">120K +</p>
            </div>

            <div className="absolute bottom-32 -left-4 glass-card rounded-2xl px-5 py-3 animate-float-delayed">
              <p className="text-xs text-gray-500 font-medium">Countries</p>
              <p className="text-xl font-bold text-gray-800">85 +</p>
            </div>

            <div className="absolute top-1/2 -right-6 glass-card rounded-2xl px-5 py-3 animate-float-slow">
              <p className="text-xs text-gray-500 font-medium">Satisfaction</p>
              <p className="text-xl font-bold text-gray-800">99.2%</p>
            </div>

            <div className="absolute bottom-12 right-16 glass-card rounded-2xl px-5 py-3 animate-float">
              <p className="text-xs text-gray-500 font-medium">Active Users</p>
              <p className="text-xl font-bold text-gray-800">50K +</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
