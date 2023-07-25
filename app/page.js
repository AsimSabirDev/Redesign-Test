import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div class="bg-gradient-to-br from-gray-600 to-slate-800 overflow-hidden">
      <div class="max-w-6xl mx-auto">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3 sm:py-48 lg:py-32">
            <Image 
              className="w-full"
              src="/image/img01.png" 
              width={530}
              height={718}
            />
          </div>
          <div class="sm:col-span-3 sm:py-48 lg:py-56">
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl -ms-48">Turn Your Website Into Your Best Sales Person</h1>
            <p class="mt-6 text-lg leading-8 text-white font-rubik">Triple your sales with a pixel-perfect website. At SmartSite Studio, we don’t just design and write code, we build a revenue-driving machine for your business.</p>
            <div class="mt-10 flex items-center gap-x-6">
              <a href="#" class="rounded-full bg-amber-500 px-7 py-3 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Talk to Us</a>
              <a href="#" class="rounded-full bg-transparent border border-blue-500 px-7 py-3 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">See Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
