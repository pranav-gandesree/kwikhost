'use client'

import { Button } from "@/components/ui/button"
import { FileText, ImageIcon, FileIcon, Upload, Globe, Share2 } from "lucide-react"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import files from "../../public/files.svg"
import Image from "next/image"

export default function LandingPage() {
  const {data:session} = useSession();
  const router = useRouter();

  if(session){
    router.push('/manage');
  }
  
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"></div>
        <div className="absolute top-[40%] right-[10%] w-80 h-80 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl"></div>
        <div className="absolute bottom-[15%] left-[25%] w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transform rotate-45"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Upload className="w-4 h-4 text-white" />
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight">kwikhost</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Features
          </Link>
          {/* <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Pricing
          </Link> */}
          
        </div> 
        <div className="flex items-center gap-4">

              <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300"
              >
                <Link href="/login">
                  Sign in with Google
                </Link>
              </div>
            


        </div>
      </nav>

      {/* Hero Section - Asymmetrical Design */}
      <section className="relative z-10 pt-16 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-12">
            <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full">
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Introducing kwikhost
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Host your files with{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">style</span>
            </h1>
            <p className="text-zinc-400 text-lg mb-8 max-w-xl">
              Upload, share, and manage your files with custom domains. Get your own personal corner of the web in
              seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 h-12 px-8 rounded-xl">
                Start for free
              </Button>
              {/* <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 h-12 px-8 rounded-xl">
                See how it works
              </Button> */}
            </div>

            {/* <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-[#0A0A0F] flex items-center justify-center text-xs font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-zinc-400">
                <span className="font-medium text-white">2,500+</span> creators trust kwikhost
              </p>
            </div> */}

          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl transform -rotate-3"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-3xl p-6 transform rotate-3 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="px-3 py-1 bg-zinc-800 rounded-full text-xs">your-site.kwikhost.xyz</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-zinc-800/50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">annual-report.pdf</div>
                    <div className="text-xs text-zinc-400">2.4 MB • 5 min ago</div>
                  </div>
                  <div className="ml-auto">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-zinc-800/50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">product-mockup.png</div>
                    <div className="text-xs text-zinc-400">4.8 MB • 2 hours ago</div>
                  </div>
                  <div className="ml-auto">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-zinc-800/50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                    <FileIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">presentation.pptx</div>
                    <div className="text-xs text-zinc-400">8.2 MB • 1 day ago</div>
                  </div>
                  <div className="ml-auto">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div className="text-xs text-zinc-400">3 files • 15.4 MB used</div>
                <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 h-8">
                  <Upload className="h-3 w-3 mr-2" /> Upload
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Diagonal Layout */}
      <section className="relative z-10 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10 transform -skew-y-6"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">share</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Simple, fast, and secure file hosting with powerful features to make sharing easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Cards with Hover Effects */}
            <div className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:bg-zinc-800/50 hover:border-purple-500/50 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Drag & Drop Upload</h3>
                <p className="text-zinc-400">
                  Simply drag your files into the browser. We support PDFs, images, presentations, and more.
                </p>
              </div>
            </div>

            <div className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:bg-zinc-800/50 hover:border-pink-500/50 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Domains</h3>
                <p className="text-zinc-400">
                  Get your own subdomain or connect your custom domain for a professional look.
                </p>
              </div>
            </div>

            <div className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:bg-zinc-800/50 hover:border-blue-500/50 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Instant Sharing</h3>
                <p className="text-zinc-400">
                  Get shareable links instantly after uploading. Share with anyone, anywhere, anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* File Types Section - Creative Grid */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Host{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  any file
                </span>{" "}
                you need
              </h2>
              <p className="text-zinc-400 mb-8">
              kwikhost supports all the file types you need to share with the world. From documents to images, we&apos;ve got you covered.  
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">PDF Files</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <ImageIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">Images</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                    <FileIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">Presentations</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <FileIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">Documents</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div> */}
              <div className="relative">
                <Image
                  src={files}
                  width={500}
                  height={400}
                  alt="File types showcase"
                  className="rounded-3xl border border-zinc-800 shadow-2xl"
                />
                {/* <div className="absolute -bottom-6 -right-6 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                      ∞
                    </div>
                    <div>
                      <div className="text-sm font-medium">Unlimited file types</div>
                      <div className="text-xs text-zinc-400">Host anything you need</div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Pricing Section - Creative Cards */}
      {/* <PricingCards/> */}

      {/* Footer */}
      {/* <Footer/> */}
    </div>
  )
}

