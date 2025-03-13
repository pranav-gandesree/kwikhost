
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText, ImageIcon, FileIcon, Upload, Globe, Share2 } from "lucide-react"
import GoogleSignInButton from "./GoogleSigninButton"

export default function LandingPage() {
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
        {/* <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Docs
          </Link>
          <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Blog
          </Link>
        </div> */}
        <div className="flex items-center gap-4">

            <GoogleSignInButton>
              <div className="w-full">
                  Sign in with Google
              </div>
            </GoogleSignInButton>


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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="File types showcase"
                  className="rounded-3xl border border-zinc-800 shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                      ∞
                    </div>
                    <div>
                      <div className="text-sm font-medium">Unlimited file types</div>
                      <div className="text-xs text-zinc-400">Host anything you need</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Timeline Style */}
      {/* <section className="relative z-10 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10 transform skew-y-6"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              How it{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">works</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Get started in minutes with our simple three-step process.
            </p>
          </div>

          <div className="relative">
            
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

            <div className="space-y-24 relative">
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold mb-4">Create your space</h3>
                  <p className="text-zinc-400">
                    Sign up and choose your custom subdomain (you.kwikhost.xyz) in just a few seconds.
                  </p>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold mb-8 md:mb-0">
                  1
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-4 shadow-xl">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      width={300}
                      height={200}
                      alt="Create account"
                      className="rounded-xl w-full"
                    />
                  </div>
                </div>
              </div>

              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-4 shadow-xl">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      width={300}
                      height={200}
                      alt="Upload files"
                      className="rounded-xl w-full"
                    />
                  </div>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold mb-8 md:mb-0 order-1 md:order-2">
                  2
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0 order-3">
                  <h3 className="text-2xl font-bold mb-4">Upload your files</h3>
                  <p className="text-zinc-400">
                    Drag and drop your files or use our file picker to upload your content.
                  </p>
                </div>
              </div>

             
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold mb-4">Share with the world</h3>
                  <p className="text-zinc-400">Get your shareable link instantly and share it with anyone you want.</p>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold mb-8 md:mb-0">
                  3
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-4 shadow-xl">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      width={300}
                      height={200}
                      alt="Share files"
                      className="rounded-xl w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Pricing Section - Creative Cards */}
      {/* <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Simple,{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                transparent
              </span>{" "}
              pricing
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto"> Choose the plan that&apos;s right for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 transition-all duration-300 group-hover:border-purple-500/50 group-hover:transform group-hover:-translate-y-1">
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-zinc-400">/month</span>
                </div>
                <p className="text-zinc-400 mb-6">Perfect for personal use</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>100MB storage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>Custom subdomain</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>Basic file types</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-zinc-700 hover:bg-zinc-800 hover:border-purple-500/50"
                >
                  Get Started
                </Button>
              </div>
            </div>

            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 transform translate-y-0 transition-all duration-300 group-hover:transform group-hover:-translate-y-1">
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-zinc-400">/month</span>
                </div>
                <p className="text-zinc-400 mb-6">For professionals</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>10GB storage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>Custom domain</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>All file types</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>Analytics</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-purple-600 hover:bg-zinc-100">Get Started</Button>
              </div>
            </div>

          
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 transition-all duration-300 group-hover:border-purple-500/50 group-hover:transform group-hover:-translate-y-1">
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
                <h3 className="text-2xl font-bold mb-2">Business</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-zinc-400">/month</span>
                </div>
                <p className="text-zinc-400 mb-6">For teams and businesses</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>100GB storage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>Multiple custom domains</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started with kwikhost?</h2>
              <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
                Join thousands of creators who trust kwikhost for their file hosting needs. Get your own corner of the
                web today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-purple-600 hover:bg-zinc-100 h-12 px-8 rounded-xl">
                  Start for free
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 h-12 px-8 rounded-xl">
                  Contact sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="relative z-10 border-t border-zinc-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transform rotate-45"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Upload className="w-4 h-4 text-white" />
                  </div>
                </div>
                <span className="font-bold text-xl tracking-tight">kwikhost</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Simple file hosting with custom domains. Upload, share, and manage your files with ease.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Custom Domains
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    File Types
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-zinc-400">© {new Date().getFullYear()} kwikhost. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2H2v10h10V2zM22 2h-10v10h10V2zM12 12H2v10h10V12zM22 12h-10v10h10V12z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  )
}

