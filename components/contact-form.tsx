'use client';
import React, { useEffect } from 'react';


import { Toaster, toast } from 'sonner';
import Particles from './particles';
import {
  showToast,
  applyBorderStyling,
  applyErrorStyling,
  handleValidationErrors,
} from '../helpers/contact';


interface ContactFormProps {
  handleSubmit: (e: React.FormEvent) => void;
}

// Function to handle form submission
async function handleSubmit(e: React.FormEvent) {
  // Prevent the default form submission behavior
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const data = {
    name: form.name.valueOf,
    email: form.email.value,
    message: form.message.value,
  };

  // Try catch block to handle errors
  try {
    const response = await fetch('http://localhost:8000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Token': '0c463dfa-5796-425c-a324-267445e435f4',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success('Your message has been sent!');
    } else if (response.status === 422) {
      const jsonResponse = await response.json();
      handleValidationErrors(jsonResponse.errors);
    } else {
      showToast('An error occurred. Please try again.', 'error');
    }
  } catch (error) {
    // console.error('Error:', error);
    toast.error('An error occurred on our side. Please try again.');
  }
}
const ContactForm: React.FC = () => {
  useEffect(() => {
    toast.success('Welcome to our Contact Page!');
  }, []);
  return (
      <section>
        {/* ... */}
        { /* Contact Form */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative px-8 py-3 md:py-6 rounded-[3rem] overflow-hidden">
            
            { /* Content */}
            <div className="max-w-3xl mx-auto">
                { /* Contact Form Inputs Grid */}
                <form onSubmit={handleSubmit} autoComplete="off">
                    { /* Your Name */}
                    <label className="block text-sm text-slate-300 font-extralight mb-1 text-left" htmlFor="name">
                          <span className="font-semibold">Name</span> or <span className="font-semibold">Bussiness Name</span>
                          <span className="text-rose-500 pl-1">*</span>
                        </label>
                        <div className="relative mb-4">
                            <input type="text" id="name" className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5  dark:bg-gray-700 border-slate-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                        </div>
                    { /* Email */}
                        <label className="block text-sm text-slate-300 font-semibold mb-1 text-left" htmlFor="email">
                          Email Address 
                          <span className="text-rose-500 pl-1">*</span>
                        </label>                        
                        <div className="relative mb-4">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input type="text" id="email" className="border text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700 border-slate-800 placeholder-gray-400 placeholder-opacity-70 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="example@yourmail.com" />
                        </div>
                    { /* Message */}
                        <label htmlFor="message" className="block mb-2 text-sm font-extralight text-gray-900 dark:text-white text-left">Leave us a <span className="font-medium">message</span> </label>
                        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-slate-800 dark:placeholder-slate-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Explain your case in a few lines...">

                        </textarea>

                        <div className="relative mt-6">
                            <button type="submit" className="btn text-base text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group w-full">Submit</button>
                        </div>
                </form>
            </div>
          </div>
        </div>
      </section>
    )
  }

export default ContactForm;
