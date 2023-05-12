export const metadata = {
  title: 'Documentación',
  description: 'Page description',
}

import Link from 'next/link'
import AuthLogo from '../../(auth)/auth-logo'
import LanguageSelector from '@/components/language-selector'


export default function DocumentationES() {
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
                  Introducción
                </h3>
              </a>

              <ul role="list" className="pl-3 mt-3 space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-slate-800">
                    Nuestra filosofía
                  </a>
                </li>

                <li>
                  <a href="#" className="text-slate-400 hover:text-slate-800">
                    Valores corporativos
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
        <div className="flex w-full justify-end mb-4">
          <div className="relative">
              <div className="bg-slate-800 p-2 rounded-md justify-center flex items-center space-x-2 w-32">
                  <span className="fi fi-es"></span>
                  <span>España</span>
              </div>
          </div>
        </div>
        { /* Header */}
          <header className="">
            <h1 className="text-3xl font-bold tracking-tight text-slate-200">
            Bienvenido a nuestra <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">documentación</span> oficial.
            </h1>
          </header>
          { /* Sub-title */}
          <p className="mt-2 text-slate-600">
           Aquí aprenderás todo lo necesario para comenzar a usar nuestros servicios en minutos.
          </p>

        { /* Introduction Section*/}
        <section className="mt-8">
          <p className="mb-2 text-2xl leading-6 font-semibold text-sky-500 dark:text-sky-400">
              Introducción
          </p>
          { /* Introduction Text*/}
          <p className="mt-4 text-lg text-slate-400">
            <span className='font-bold text-slate-200'>Nuestra compañía</span> es una empresa de tipo LLC que se especializa en brindar los mejores servicios de <span className=' font-light text-slate-300'>Marketing Web</span> y
            <span className=' font-light text-slate-300'> Branding Corporativo</span> además de actuar como una <span className='font-medium text-slate-200'>plataforma de lanzamiento</span> para <span className='font-semibold text-slate-200'>impulsar tu negocio local.</span> 
          </p>

          <div className='flex justify-center items-center bg-slate-800 rounded-lg p-4 mt-4 bg-opacity-40'>
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 text-emerald-500" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
            <p className="text-base text-slate-400">
              Si buscas dar un paso hacia delante y <span className='text-slate-200'>posicionar tu negocio en los portales de búsqueda</span> , estás en el lugar correcto.
            </p>
            <div className="divider lg:divider-horizontal"></div> 
          </div>
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
            <a href="#" className="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white">
              <h4 className="font-bold tracking-tight text-slate-900">
                Connect your GitHub account
              </h4>

              <p className="text-slate-600">
                What you need to know before connecting your GitHub account
              </p>
            </a>
          </li>

          <li>
            <a href="#" className="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white">
              <h4 className="font-bold tracking-tight text-slate-900">
                Add your first content type
              </h4>

              <p className="text-slate-600">
                Learn what content types are in Spinal
              </p>
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

          <li className="">
            <a href="#" className="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white">
              <h4 className="font-bold tracking-tight text-slate-900">
                Publish your content
              </h4>

              <p className="text-slate-600">
                Publishing with Spinal is really just one click of a button
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
