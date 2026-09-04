import type { CSSProperties } from 'react'
import type { Locale } from '../../../brand.config'

/* ============================================================
   Aura「Sonic Architecture」—— DOM 逐字移植。
   class 名稱、巢狀結構、元素順序與模版相同（樣式在 src/app/sonic.css
   與 Tailwind utility）。只有文字與圖片換成 imasque。

   ⚠️ 模版原有 10 段，移除 2 段：
      段 5（App UI：EQ 曲線／韌體更新）—— imasque 沒有 App
      段 9（客戶推薦語＋社群人數）—— imasque 沒有客戶也沒有社群數字
      兩段都不能靠編造內容填滿。
   ⚠️ 段 2 的跑馬燈保留版位，內容從媒體 logo 換成「未來的夢」形狀 ——
      imasque 沒有任何媒體報導，不可放媒體背書。
   ============================================================ */

export function Sonic({ locale }: { locale: Locale }) {
  void locale
  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Abstract Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8 animate-fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Building in public · MVP 01
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[0.9]">
                  Dream
                  <br />
                  <span className="text-neutral-500">More.</span>
                </h1>
                <p className="text-lg text-neutral-400 max-w-md leading-relaxed font-light">
                  An eye mask brand built on comfort, healing and imagination — shaped, for now, like a pair of sunglasses.
                </p>

                <div className="flex items-center gap-6 pt-4">
                  <button className="h-12 px-8 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2">
                    See the first piece
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </button>
                  <button className="h-12 px-8 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/5 transition-colors">
                    Read the journal
                  </button>
                </div>
              </div>

              {/* Hero Image / Product Visualization */}
              <div className="relative h-[500px] w-full bg-neutral-900/30 rounded-3xl border border-white/5 overflow-hidden animate-fade-up delay-200 group">
                <div className="bg-center group-hover:scale-105 transition-transform duration-700 hover:grayscale-0 opacity-80 bg-[url(/images/sonic/90758097-5cc2-4a54-9e67-8f676afbd571_1600w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0 grayscale"></div>
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-2xl flex justify-between items-center">
                  <div>
                    <p className="text-white text-sm font-medium">The Sunglasses Mask</p>
                    <p className="text-neutral-400 text-xs">In the making</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* Custom Toggle UI */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-500">
                        Two-tone
                      </span>
                      <div className="w-8 h-4 bg-white/20 rounded-full relative cursor-pointer">
                        <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Marquee Section */}
    
      <section id="dreams" className="border-y border-white/5 bg-neutral-900/20 overflow-hidden py-8">
            <div className="flex whitespace-nowrap animate-scroll">
              <div className="flex gap-16 items-center px-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-xl font-medium tracking-tight">Sunglasses</span>
                <span className="text-xl font-medium tracking-tight">Flower</span>
                <span className="text-xl font-medium tracking-tight">Animal</span>
                <span className="text-xl font-medium tracking-tight">Cloud</span>
                <span className="text-xl font-medium tracking-tight">Fruit</span>
                <span className="text-xl font-medium tracking-tight">Moon</span>
              </div>
              {/* Duplicate for infinite scroll */}
              <div className="flex gap-16 items-center px-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-xl font-medium tracking-tight">Sunglasses</span>
                <span className="text-xl font-medium tracking-tight">Flower</span>
                <span className="text-xl font-medium tracking-tight">Animal</span>
                <span className="text-xl font-medium tracking-tight">Cloud</span>
                <span className="text-xl font-medium tracking-tight">Fruit</span>
                <span className="text-xl font-medium tracking-tight">Moon</span>
              </div>
              <div className="flex gap-16 items-center px-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-xl font-medium tracking-tight">Sunglasses</span>
                <span className="text-xl font-medium tracking-tight">Flower</span>
                <span className="text-xl font-medium tracking-tight">Animal</span>
                <span className="text-xl font-medium tracking-tight">Cloud</span>
                <span className="text-xl font-medium tracking-tight">Fruit</span>
                <span className="text-xl font-medium tracking-tight">Moon</span>
              </div>
            </div>
          </section>

          {/* Bento Grid Collection */}
    
      <section id="collections" className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative group/section">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity duration-1000"></div>

            <div className="flex justify-between items-end mb-12 relative z-10">
              <div>
                <h2 className="text-3xl font-medium tracking-tight text-white mb-2 relative inline-flex items-center gap-2">
                  Collections
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                  </span>
                </h2>
                <p className="text-neutral-500 text-sm">
                  We start with one shape. The rest are still dreams.
                </p>
              </div>
              <a href="#" className="group/link flex items-center gap-2 text-sm text-white transition-colors">
                <span className="border-b border-white/20 pb-0.5 group-hover/link:border-white transition-colors duration-300">
                  View All
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform duration-300 group-hover/link:translate-x-1 text-white/60 group-hover/link:text-white">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">
              {/* Large Item: The Sunglasses Mask */}
              <div className="md:col-span-2 md:row-span-2 group relative rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden hover:border-white/10 transition-colors duration-500">
                <div className="absolute inset-0 img-wrap overflow-hidden">
                  <img src="/images/sonic/c920d31f-46c8-4f39-957b-9a8d8e511a1a_1600w.webp" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1" alt="Speaker" style={{}} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                {/* Audio Visualizer (Animates on Hover) */}
                <div className="absolute top-8 right-8 flex gap-1 items-end h-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-1 bg-white rounded-full h-2 group-hover:animate-[wave_1s_ease-in-out_infinite]"></div>
                  <div className="w-1 bg-white rounded-full h-4 group-hover:animate-[wave_1.2s_ease-in-out_infinite_0.1s]"></div>
                  <div className="w-1 bg-white rounded-full h-3 group-hover:animate-[wave_0.8s_ease-in-out_infinite_0.2s]"></div>
                  <div className="w-1 bg-white rounded-full h-5 group-hover:animate-[wave_1.1s_ease-in-out_infinite_0.3s]"></div>
                  <div className="w-1 bg-white rounded-full h-2 group-hover:animate-[wave_0.9s_ease-in-out_infinite_0.4s]"></div>
                </div>

                <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                  <div className="flex justify-between items-end">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider mb-3 backdrop-blur-sm">
                        Now
                      </span>
                      <h3 className="text-3xl font-medium text-white mb-2 leading-tight">
                        The Sunglasses Mask
                      </h3>
                      <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                        <p className="text-neutral-400 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                        The silhouette of sunglasses, turned soft. A two-tone mask you wear to step out of the day.
                      </p>
                      </div>
                      <p className="text-neutral-400 text-sm group-hover:hidden transition-opacity duration-300">
                        Two-tone · MVP 01
                      </p>
                    </div>

                    <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275) hover:scale-110 hover:bg-blue-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-up-right" className="lucide lucide-arrow-up-right w-5 h-5"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Small Item 1: Flower */}
              <div className="group relative rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden hover:border-white/10 transition-colors duration-500">
                <div className="absolute inset-0 img-wrap overflow-hidden">
                  <img src="/images/sonic/2c5bff42-ed1d-4d52-ad1a-e5f1fe6e9e4e_800w.webp" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" alt="Earbuds" />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

                {/* Center Focus Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-medium tracking-wide">
                    View Details
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
                  <div className="transform transition-transform duration-300 group-hover:translate-y-1">
                    <h3 className="text-lg font-medium text-white">Flower</h3>
                    <p className="text-neutral-400 text-xs mt-1 font-mono group-hover:text-white transition-colors">
                      Dreaming
                    </p>
                  </div>
                </div>
              </div>

              {/* Small Item 2: Turntable */}
              <div className="group relative rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden p-6 flex flex-col justify-between hover:border-white/10 transition-colors duration-500">
                {/* Spinning Vinyl Background */}
                <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full overflow-hidden opacity-50 transition-opacity duration-500">
                  <div className="w-full h-full relative group-hover:animate-[spin_4s_linear_infinite]">
                    <img src="/images/sonic/917d6f93-fb36-439a-8c48-884b67b35381_1600w.webp" className="w-full h-full object-cover rounded-full" alt="Vinyl" style={{}} />
                    <div className="absolute inset-0 rounded-full border border-white/10"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-neutral-900 rounded-full border border-white/10 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex justify-end">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800/80 border border-white/10 text-white/50 hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="heart" className="lucide lucide-heart w-4 h-4"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
                  </button>
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg font-medium text-white group-hover:translate-x-1 transition-transform duration-300">
                    Cloud
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="h-px w-4 bg-neutral-600 group-hover:w-8 group-hover:bg-white transition-all duration-500"></span>
                    <p className="text-neutral-500 text-xs group-hover:text-neutral-300 transition-colors">
                      Dreaming
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specs / Feature Section */}
    
      <section id="rest" className="border-y bg-neutral-900/30 border-white/5 pt-24 pb-24 relative overflow-hidden">

            {/* Background decorative ambient glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
              {/* Left Column: Visual with Animations */}
              <div className="order-2 md:order-1 relative group perspective-normal">
                {/* Custom Circular Graphic */}
                <div className="relative w-full aspect-square max-w-md mx-auto transform transition-transform duration-700 hover:scale-105">
                  {/* Ripple Effects for Active Two-tone context */}
                  <div className="absolute inset-0 border border-white/5 rounded-full animate-ripple pointer-events-none"></div>
                  <div className="absolute inset-0 border border-white/5 rounded-full animate-ripple pointer-events-none" style={{animationDelay: '1s'}}></div>
                  <div className="absolute inset-0 border border-white/5 rounded-full animate-ripple pointer-events-none" style={{animationDelay: '2s'}}></div>

                  {/* Spinning Rings */}
                  <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                  {/* Center Image Container */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-neutral-900 shadow-2xl z-10 group-hover:border-neutral-800 transition-colors duration-500">
                      <img src="/images/sonic/8a9a6c6a-c589-44de-af63-bfb4346e04de_800w.webp" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt="Detail" />
                      {/* Scanning Light Effect */}
                      <div className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-scan pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Floating Stats Cards with Bobbing Animation */}
                  <div className="absolute -top-4 right-0 bg-neutral-950/90 border border-white/10 p-4 rounded-xl backdrop-blur-md animate-float shadow-lg shadow-black/50 hover:border-white/20 transition-colors z-20">
                    <div className="flex items-center gap-2 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-battery-charging w-4 h-4 text-green-400">
                        <path d="m11 7-3 5h4l-3 5" />
                        <path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935" />
                        <path d="M22 14v-4" />
                        <path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" />
                      </svg>
                      <span className="text-xs font-medium text-white">Battery</span>
                    </div>
                    <p className="text-xl font-semibold text-white">40h+</p>
                  </div>

                  <div className="absolute bottom-10 -left-8 bg-neutral-950/90 border border-white/10 p-4 rounded-xl backdrop-blur-md animate-float-delayed shadow-lg shadow-black/50 hover:border-white/20 transition-colors z-20">
                    <div className="flex items-center gap-2 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi w-4 h-4 text-blue-400">
                        <path d="M12 20h.01" />
                        <path d="M2 8.82a15 15 0 0 1 20 0" />
                        <path d="M5 12.859a10 10 0 0 1 14 0" />
                        <path d="M8.5 16.429a5 5 0 0 1 7 0" />
                      </svg>
                      <span className="text-xs font-medium text-white">Latency</span>
                    </div>
                    <p className="text-xl font-semibold text-white">2ms</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="order-1 md:order-2 space-y-8">
                <div>
                  <h2 className="text-4xl font-medium tracking-tight text-white mb-4">
                    Made for
                    <span className="relative inline-block text-white">
                      Rest.
                      {/* Underline accent */}
                      <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-500 to-transparent"></span>
                    </span>
                  </h2>
                  <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                    Our proprietary active noise cancellation algorithms adapt 48,000
                    times per second to your environment, creating a sanctuary of
                    silence wherever you go.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Animated Slider Metric 1 */}
                  <div className="space-y-2 group/slider">
                    <div className="flex justify-between text-xs font-medium text-neutral-400 group-hover/slider:text-white transition-colors">
                      <span>Noise Reduction</span>
                      <span className="text-white">98%</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full animate-grow shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{'--w': '98%', width: '0%'} as CSSProperties}></div>
                    </div>
                  </div>
                  {/* Animated Slider Metric 2 */}
                  <div className="space-y-2 group/slider">
                    <div className="flex justify-between text-xs font-medium text-neutral-400 group-hover/slider:text-white transition-colors">
                      <span>Colour Range</span>
                      <span className="text-white">CREAM · BLUSH</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full animate-grow shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{'--w': '92%', width: '0%', animationDelay: '0.3s'} as CSSProperties}></div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 pt-4">
                  <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="p-1 rounded-full bg-white/5 group-hover/item:bg-blue-500/20 group-hover/item:text-blue-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white group-hover/item:text-blue-400">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-sm text-neutral-400 group-hover/item:text-white transition-colors">
                      Titanium drivers for distortion-free sound
                    </span>
                  </li>
                  <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="p-1 rounded-full bg-white/5 group-hover/item:bg-blue-500/20 group-hover/item:text-blue-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white group-hover/item:text-blue-400">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-sm text-neutral-400 group-hover/item:text-white transition-colors">
                      Memory foam ear cushions for all-day comfort
                    </span>
                  </li>
                  <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="p-1 rounded-full bg-white/5 group-hover/item:bg-blue-500/20 group-hover/item:text-blue-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white group-hover/item:text-blue-400">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-sm text-neutral-400 group-hover/item:text-white transition-colors">
                      Seamless multi-device connectivity
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
    
      <section id="stories" className="bg-[color:var(--near-black)] border-t border-white/5 py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div className="max-w-2xl">
                  <h2 className="text-4xl font-medium tracking-tight text-white mb-4">
                    Colour Stories
                  </h2>
                  <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
                    Where each two-tone pairing comes from. Colours are chosen the way an 11-year-old chooses them — by how they feel, not by what matches.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="text-xs font-medium text-white border border-white/10 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
                    All
                  </button>
                  <button className="text-xs font-medium text-neutral-500 hover:text-white transition-colors px-4 py-2">
                    Process
                  </button>
                  <button className="text-xs font-medium text-neutral-500 hover:text-white transition-colors px-4 py-2">
                    Sketches
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-4">
                {/* Item 1: Large Feature (2x2) */}
                <div className="group relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden bg-neutral-900 border border-white/5">
                  <img src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80" alt="Abstract Architecture" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-2 py-1 mb-3 text-[10px] font-medium tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-md backdrop-blur-sm">
                      Architecture
                    </span>
                    <h3 className="text-2xl font-medium text-white mb-2">
                      Soft Geometry
                    </h3>
                    <p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xs">
                      A familiar outline, made gentle.
                    </p>
                  </div>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-up-right" className="lucide lucide-arrow-up-right w-5 h-5"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                    </div>
                  </div>
                </div>

                {/* Item 2: Tall (1x2) */}
                <div className="group relative md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden bg-neutral-900 border border-white/5">
                  <img src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80" alt="Dark Texture" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
                  <div className="absolute bottom-8 left-0 w-full px-6 text-center">
                    <p className="text-xs font-mono text-neutral-500 mb-2 group-hover:text-blue-400 transition-colors">
                      02 / TEXTURE
                    </p>
                    <h3 className="text-lg font-medium text-white">Two-tone</h3>
                    <div className="w-px h-8 bg-white/20 mx-auto mt-4 group-hover:h-12 group-hover:bg-blue-500 transition-all duration-500"></div>
                  </div>
                </div>

                {/* Item 3: Small (1x1) */}
                <div className="group relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden bg-neutral-900 border border-white/5">
                  <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" alt="Fluid" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="w-2 h-2 rounded-full bg-green-500 block"></span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-medium tracking-wide border-b border-white pb-0.5">
                      View Detail
                    </span>
                  </div>
                </div>

                {/* Item 4: Small (1x1) */}
                <div className="group relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden bg-neutral-900 border border-white/5">
                  <img src="https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2070&auto=format&fit=crop" alt="Abstract" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-xs text-white font-medium">Refraction</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus text-white">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </div>
                </div>

                {/* Item 5: Wide (2x1) */}
                <div className="group relative md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 flex items-center">
                  <img src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80" alt="Wide Light" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                  <div className="relative p-8 z-10 w-full flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">
                        Colour Pairing
                      </h3>
                      <p className="text-neutral-500 text-xs font-mono">
                        CREAM · BLUSH · INK
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black group-hover:border-transparent transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="play" className="lucide lucide-play w-4 h-4 fill-current"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" /></svg>
                    </div>
                  </div>
                </div>

                {/* Item 6: Small (1x1) */}
                <div className="group relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden bg-neutral-900 border border-white/5">
                  <div className="absolute inset-0 bg-neutral-800/50 group-hover:bg-blue-600/10 transition-colors duration-500"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                    <div className="w-full flex-1 border border-dashed border-white/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('/images/sonic/cubes.webp')] opacity-10" style={{}}></div>
                      <span className="text-4xl font-bold text-white/5 group-hover:text-white/20 transition-colors">
                        Aa
                      </span>
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider">
                        Typography
                      </span>
                      <span className="text-[10px] text-white">Inter</span>
                    </div>
                  </div>
                </div>

                {/* Item 7: Small (1x1) */}
                <div className="group relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden bg-neutral-900 border border-white/5">
                  <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop" alt="Light" className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center transform transition-transform duration-300 group-hover:scale-110">
                      <p className="text-3xl font-light text-white">24</p>
                      <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">
                        Collections
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
    
      <section id="spectrum" className="py-32 bg-black border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
              <div>
                <h2 className="text-4xl font-medium text-white tracking-tight">
                  Colour Spectrum
                </h2>
                <p className="text-neutral-500 mt-2 text-sm">
                  The three things every pairing has to hold.
                </p>
              </div>
              <div className="hidden md:block text-neutral-600 text-xs font-mono">
                THE CORE
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 h-[500px] flex flex-col md:flex-row gap-2">
              {/* Bass Panel */}
              <div className="group relative flex-1 hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-2xl overflow-hidden border border-white/5 bg-neutral-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614726365723-49cfae96c6b4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700" style={{}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl font-light text-white/20 group-hover:text-white transition-colors duration-500">
                      01
                    </span>
                    <div className="h-px flex-1 bg-white/20 group-hover:bg-white transition-colors"></div>
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2">Comfort</h3>
                  <p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md transform translate-y-4 group-hover:translate-y-0">
                    Soft on the skin, soft on the day. Rest that feels like a held breath.
                  </p>
                </div>
              </div>

              {/* Mids Panel */}
              <div className="group relative flex-1 hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-2xl overflow-hidden border border-white/5 bg-neutral-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1931&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700" style={{}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl font-light text-white/20 group-hover:text-white transition-colors duration-500">
                      02
                    </span>
                    <div className="h-px flex-1 bg-white/20 group-hover:bg-white transition-colors"></div>
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2">Healing</h3>
                  <p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md transform translate-y-4 group-hover:translate-y-0">
                    A pause you can put on. Quiet, not clinical.
                  </p>
                </div>
              </div>

              {/* Highs Panel */}
              <div className="group relative flex-1 hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-2xl overflow-hidden border border-white/5 bg-neutral-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700" style={{}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl font-light text-white/20 group-hover:text-white transition-colors duration-500">
                      03
                    </span>
                    <div className="h-px flex-1 bg-white/20 group-hover:bg-white transition-colors"></div>
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2">Imagination</h3>
                  <p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md transform translate-y-4 group-hover:translate-y-0">
                    An 11-year-old's idea of what a mask could be. Creative, never cute.
                  </p>
                </div>
              </div>
            </div>
          </section>

    
      <section id="workshop" className="py-32 bg-[color:var(--coal)] relative overflow-hidden group/blueprint">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--white)05_1px,transparent_1px),linear-gradient(to_bottom,var(--white)05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,var(--black)_70%,transparent_100%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20">
                <h2 className="text-4xl font-medium text-white tracking-tight">
                  From the
                  <span className="text-neutral-600">Workshop.</span>
                </h2>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-xs font-mono text-red-500 uppercase tracking-widest">
                    Building in public
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 [perspective:1000px]">
                {/* Card 1: Schematic */}
                <div className="relative h-96 group hover:z-20">
                  <div className="absolute inset-0 bg-[color:var(--soot)] border border-white/10 p-6 rounded-xl transform transition-all duration-500 group-hover:[transform:rotateY(5deg)_translateY(-10px)] group-hover:shadow-2xl shadow-blue-900/20">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-xs font-mono text-neutral-500">FIG 1.0</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu w-5 h-5 text-neutral-400">
                        <rect width="16" height="16" x="4" y="4" rx="2" />
                        <rect width="6" height="6" x="9" y="9" rx="1" />
                        <path d="M15 2v2" />
                        <path d="M15 20v2" />
                        <path d="M2 15h2" />
                        <path d="M2 9h2" />
                        <path d="M20 15h2" />
                        <path d="M20 9h2" />
                        <path d="M9 2v2" />
                        <path d="M9 20v2" />
                      </svg>
                    </div>
                    <div className="w-full h-40 bg-white/5 rounded-lg mb-6 flex items-center justify-center border border-dashed border-white/20 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50 mix-blend-screen" alt="Schematic" style={{}} />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      The First Shape
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Borrowed from sunglasses. The outline is familiar; the material is not.
                    </p>
                  </div>
                </div>

                {/* Card 2: Materials (Tilted opposite) */}
                <div className="relative h-96 group hover:z-20 md:mt-12">
                  <div className="absolute inset-0 bg-[color:var(--soot)] border border-white/10 p-6 rounded-xl transform transition-all duration-500 group-hover:[transform:rotateY(-5deg)_translateY(-10px)] group-hover:shadow-2xl shadow-purple-900/20">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-xs font-mono text-neutral-500">MAT-X</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers w-5 h-5 text-neutral-400">
                        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                      </svg>
                    </div>
                    <div className="w-full h-40 bg-white/5 rounded-lg mb-6 flex items-center justify-center border border-dashed border-white/20 overflow-hidden relative">
                      <div className="absolute inset-0 bg-[url('/images/sonic/carbon-fibre.webp')] opacity-30"></div>
                      <div className="w-16 h-16 rounded-full bg-neutral-800 border border-white/20 shadow-inner"></div>
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      Two Tones
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Every pairing starts as a colour CxY keeps coming back to.
                    </p>
                  </div>
                </div>

                {/* Card 3: Prototype */}
                <div className="relative h-96 group hover:z-20">
                  <div className="absolute inset-0 bg-[color:var(--soot)] border border-white/10 p-6 rounded-xl transform transition-all duration-500 group-hover:[transform:rotateY(5deg)_translateY(-10px)] group-hover:shadow-2xl shadow-green-900/20">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-xs font-mono text-neutral-500">PROTO_V4</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask-conical w-5 h-5 text-neutral-400">
                        <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
                        <path d="M8.5 2h7" />
                        <path d="M7 16h10" />
                      </svg>
                    </div>
                    <div className="w-full h-40 bg-white/5 rounded-lg mb-6 flex items-center justify-center border border-dashed border-white/20 overflow-hidden">
                      <img src="/images/sonic/917d6f93-fb36-439a-8c48-884b67b35381_1600w.webp" className="w-full h-full object-cover grayscale opacity-50" alt="Prototype" style={{}} />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      Still Open
                    </h3>
                    <p className="text-sm text-neutral-400">
                      No factory confirmed, no material qualified. Those fields stay empty until they are true.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
      <section id="dreamlist" className="py-24 px-6">
            <div className="max-w-5xl mx-auto bg-neutral-900 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/5">
              {/* Background Gradients */}
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"></div>

              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
                  Dream with us.
                </h2>
                <p className="text-neutral-400 text-sm max-w-lg mx-auto">
                  Leave your email. You'll hear first when the first mask is real — and you'll help shape what comes next.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                  <button className="h-12 px-8 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors">
                    Join the Dream List
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          {/* footer 由 ChromeFooter 提供 */}

    
  
    </>
  )
}
