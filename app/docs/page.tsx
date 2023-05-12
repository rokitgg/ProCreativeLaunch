export const metadata = {
  title: 'Knowledge Base',
  description: 'Helpful articles and guides to help you get the most out of your ProCreative Launch experience',
}

import Link from 'next/link'
import AuthLogo from '../(auth)/auth-logo'
import LanguageSelector from '@/components/language-selector'


export default function Documentation() {
  return (
    <>
      <label htmlFor="navigation" className="fixed bottom-0 left-0 z-50 flex items-center justify-center w-12 h-12 mb-4 ml-4 bg-white border rounded-full shadow-lg cursor-pointer text-slate-600 border-slate-300 lg:hidden transition duration-200 ease-in-out active:scale-95">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
        </svg>
      </label>

      <input type="checkbox" name="navigation" id="navigation" className="hidden peer" />
      <div className="sticky top-[3.5rem] h-screen shadow-xl px-4 left-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[50vw bg-gradient-to-r from-slate-900 to-slate-800 lg:bg-slate-800"></div>

        { /* Navigation  */ }
        <nav className="sticky top-[4.5rem] w-64 pr-8 text-base lg:text-sm xl:w-72 xl:pr-16">
          { /* Language Selector */ }
          
          <ul role="list" className="-ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-8">
            <li>
              <a href="#introduction">
                <h3 className="font-extralight text-lg tracking-tight text-white">
                  Introduction
                </h3>
              </a>

              <ul role="list" className="pl-3 mt-3 space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-slate-800">
                    Our bussiness
                  </a>
                </li>

                <li>
                  <a href="#" className="text-slate-400 hover:text-slate-800">
                    Corporative Values
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h3 className="font-extralight text-lg tracking-tight text-slate-200 opacity-80">
                Section 2
              </h3>

              <ul role="list" className="pl-3 mt-3 space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-slate-800">
                    What are content types?
                  </a>
                </li>

                <li>
                  <a href="#" className="text-slate-400 hover:text-slate-800">
                    Create and edit content types
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h3 className="font-extralight text-lg tracking-tight text-slate-200 opacity-80">
                Section 3
              </h3>

              <ul role="list" className="pl-3 mt-3 space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-slate-800">
                    What are content types?
                  </a>
                </li>

                <li>
                  <a href="#" className="text-slate-400 hover:text-slate-800">
                    Create and edit content types
                  </a>
                </li>

                <li>
                  <a href="#" className="text-slate-400 hover:text-slate-800">
                    Create and edit content types
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

      </div>
      <div className="flex-auto max-w-2xl min-w-0 px-4 py-10 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
      <article className="">
        <div className="flex w-full justify-end mb-2">
          <LanguageSelector />
        </div>
        { /* Header */}
          <header className="">
            <h1 className="text-3xl font-bold tracking-tight text-slate-200">
            Welcome to the <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">ProCreativeLaunch</span> Documentation.
            </h1>
          </header>
          { /* Sub-title */}
          <p className="mt-2 text-slate-600">
            Need to get started quickly with our brand? You will learn all the basics in just a few minutes.
          </p>

        { /* Introduction Section*/}
        <section className="mt-8">
          <p className="mb-2 text-2xl leading-6 font-semibold text-sky-500 dark:text-sky-400">
              Introduction
          </p>
          <p className="mt-4 text-lg text-slate-400">
            <span className='font-bold text-slate-200'>
              Our company</span> is a forward-thinking Limited Liability Company (LLC) that specializes
              in delivering exceptional <span className=' font-light text-slate-300'>Web Marketing Services</span>, <span className=' font-light text-slate-300'>Corporate Branding</span>,
              and acting as a <span className='font-medium text-slate-200'>Website Launchpad</span> to <span className='font-semibold text-slate-200'>rocket-launch your local businesses.
            </span> 
          </p>

        </section>

        { /* Section 1 
        <a href="#" className="flex flex-col w-full mt-4 overflow-hidden rounded-lg shadow-xl md:flex-row md:w-4/5">
          <div className="flex items-center justify-center w-full px-4 py-16 text-sm font-normal md:w-1/3 text-slate-900/20 bg-gradient-to-br from-indigo-200 via-sky-100 to-indigo-100">
            [Screenshot Image]
          </div>

          <div className="w-full px-6 py-4 border-t border-b border-r md:w-2/3 border-slate-200">
            <h3 className="text-xl font-semibold tracking-tight text-slate-200">
              Video walkthrough
            </h3>

            <p className="mt-1 text-lg text-slate-600">
              Watch this 5 minutes video-walkthrough of Spinal. You quickly learn how to set up your dashboard, invite team members, set permissions and how to schedule and publish content.
            </p>
          </div>
        </a>
        */}

        <h3 className="mt-16 text-base font-bold tracking-tight text-slate-900">
          Get set up quickly
        </h3>

        <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <li>
            <a href="#" className="block px-6 py-4 border rounded bg-slate-900 border-slate-700 hover:bg-slate-800/20">
              <h4 className="font-bold tracking-tight text-slate-200">
                Connect your GitHub account
              </h4>

              <p className="text-slate-600 text-sm">
                What you need to know before connecting your GitHub account.
              </p>
            </a>
          </li>

          <li>
            <a href="#" className="block px-6 py-4 border rounded bg-slate-900 border-sky-700 hover:bg-slate-800/20">
                <h4 className="font-bold tracking-tight text-slate-200">
                  Add your first content type
                </h4>

                <p className="text-slate-600 text-sm">
                  Learn what content types are in Spinal
                </p>
            </a>
          </li>
          
          <li className="w-full rounded-md bg-gradient-to-r from-sky-900 via-sky-700 to-sky-900 p-0.5">
            <a href='#' className="flex h-full w-full items-center justify-center bg-slate-900 back">
              <h1 className="text-sm font-light text-slate-500">TailwindCSS card template w/ border gradient</h1>
            </a>
          </li>

          <li className="">
            <a href="#" className="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white">
              <h4 className="font-bold tracking-tight text-slate-900">
                Invite your first team member
              </h4>

              <p className="text-slate-600">
                You write your best marketing content with your team
              </p>
            </a>
          </li>

        </ul>

        <h3 className="mt-8 text-base font-bold tracking-tight text-slate-200">
          Have questions?
        </h3>

        <p className="text-slate-200">
          Still have questions? <a href="mailto:support@spinalcms.com" className="underline hover:no-underline">Talk to support</a>.
        </p>
      </article>

      <dl className="flex pt-6 mt-6 border-t border-slate-200">
         <div className="mr-auto text-left"> 
           <dt className="text-sm font-normal tracking-tight text-slate-600"> 
             Previous 
           </dt> 

           <dd className="mt-1"> 
             <a href="#" className="text-base font-semibold text-slate-900 hover:underline"> 
               Blah 
             </a> 
           </dd> 
         </div> 

        <div className="ml-auto text-right">
          <dt className="text-sm font-normal tracking-tight text-slate-600">
            Next
          </dt>

          <dd className="mt-1">
            <a href="#" className="text-base font-semibold text-slate-900 hover:underline">
              How does Spinal work?
            </a>
          </dd>
        </div>
      </dl>
    </div>

    </>
  )
}
