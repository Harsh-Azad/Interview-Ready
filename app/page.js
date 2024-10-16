import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { AtomIcon, Edit, Share2 } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Image src={'/grid.svg'} className="absolute z-[-10] w-full" 
      width={1200} height={300} />
      <Header/>
     <section className=" z-50">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Your Personal AI Interview Coach</h1>
        <p className="mb-16 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Double your chances of landing that job offer with our AI-powered interview prep</p>
        <div className="flex flex-col lg:mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get Started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="https://www.youtube.com/watch?v=DClXF-Cp9MQ" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Watch video
            </a>  
        </div>
    </div>
</section>
<section className=" bg-white z-50 px-4 mx-auto max-w-screen-xl text-center  lg:px-12">
<h2 className="font-bold text-3xl">How it Works?</h2>
<h2 className="text-md text-gray-500">Give mock interview in just 3 simple-easy steps</h2>

<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="block rounded-xl border bg-secondary
         border-gray-200 p-8 shadow-xl transition
         hover:border-pink-500/10 hover:shadow-pink-500/10"
        
      >
       <AtomIcon className='h-8 w-8'/>

        <h2 className="mt-4 text-xl font-bold text-black">Write promot for Interview</h2>

        <p className="mt-1 text-md text-gray-600">
          Provide the Job role you want to interviewed for. It's Job description and years of exp. in the field.
        </p>
      </a>

      <a
        className="block rounded-xl border bg-secondary border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        
      >
      <Edit className='h-8 w-8'/>

        <h2 className="mt-4 text-xl font-bold text-black">Click On Start Interview</h2>

        <p className="mt-1 text-md text-gray-600">
          Wait for GeminiAI to prepare interview questions based on you subscribed plan. And answer the questions displayed on screen.
        </p>
      </a>

      <a
        className="block rounded-xl border bg-secondary border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
     
      >
      <Share2 className='h-8 w-8' />

        <h2 className="mt-4 text-xl font-bold text-black">Get Detailed feedback</h2>

        <p className="mt-1 text-md text-gray-600">
          After Successfull completion of interview, you will get detailed feedback of your interview based on GeminiAI. Go through each answer and see the expected answer.
        </p>
      </a>

    
    </div>

    <div className="mt-12 text-center">
      {/* <a
        href="/sign-in"
        className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Get Started Today
      </a> */}
    </div>
    </section>
  </div>
  );
}
