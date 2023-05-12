import Image from 'next/image'
import Illustration from '@/public/images/auth-illustration.svg'
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function DocsLayout({

  children,
}: {
  children: React.ReactNode
}) {  
  return (

    <> 
      <section id='introduction'>
        <header className="sticky top-0 z-50 flex items-center justify-between px-3 py-2 border-b shadow-lg bg-slate-900 backdrop-blur-sm border-slate-600/40">
          { /* Header Text */ }
          <div className="items-center hidden md:flex">
            <a href="" className="text-lg font-semibold tracking-tight text-slate-200">
              Knowledge Base
            </a>
          </div>

          { /* Search */ }
          <form action="https://duckduckgo.com/" className="md:w-80 lg:w-96">
            <span className="relative flex items-center group">
              <svg aria-hidden="true" viewBox="0 0 20 20" className="absolute w-4 h-4 ml-3 fill-slate-400 group-hover:fill-slate-500 group-focus:fill-slate-500"><path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z"></path></svg>
              <input type="text" name="q" placeholder="Search docs…" className="w-full py-2 pl-10 pr-2 border rounded bg-slate-800 placeholder-slate-400 text-slate-200 border-slate-600 outline outline-offset-2 outline-2 outline-transparent hover:border-slate-400 focus:border-slate-200" />
            </span>
            <input type="hidden" name="sites" value="spinalcms.com" />
            <input type="submit" value="Search" className="sr-only" />
          </form>

          { /* Go Back Button */ }
          <div className="items-center justify-end flex">
            <a href='/' className="btn text-sm text-white border-2 border-purple-600  bg-transparent bg-purple-500 hover:bg-purple-600  shadow-sm group transition-all ease-in-out duration-500">
                &larr; Go Back
            </a>
          </div>
        </header>
      </section>

      <main className="relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12">
          {children}
      </main>
    </>

  )
}
