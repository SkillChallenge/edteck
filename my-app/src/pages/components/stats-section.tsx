export function StatsSection() {
    return (
<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#3B82F6] rounded-xl py-16 mb-5 ml">
  {/* Background Decorative Elements */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-[#5493F7] rounded-full opacity-30 translate-x-1/2 -translate-y-1/2" />
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5493F7] rounded-full opacity-30 -translate-x-1/2 translate-y-1/2" />

  {/* Stats Container */}
  <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {/* Year Stat */}
      <div className="space-y-2">
        <p className="text-white text-4xl md:text-5xl font-bold">1</p>
        <p className="text-white/90 text-sm md:text-base">Year</p>
      </div>

      {/* Challenges Stat */}
      <div className="space-y-2">
        <p className="text-white text-4xl md:text-5xl font-bold">500 +</p>
        <p className="text-white/90 text-sm md:text-base">Challenges Completed</p>
      </div>

      {/* Users Stat */}
      <div className="space-y-2">
        <p className="text-white text-4xl md:text-5xl font-bold">10K+</p>
        <p className="text-white/90 text-sm md:text-base">users</p>
      </div>

      {/* Countries Stat */}
      <div className="space-y-2">
        <p className="text-white text-4xl md:text-5xl font-bold">6+</p>
        <p className="text-white/90 text-sm md:text-base">Countries</p>
      </div>
    </div>
  </div>
</section>


    )
  }
  
  