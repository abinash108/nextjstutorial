import Image from 'next/image'
import React from 'react';

function Check({ children }){
    return(
        <div className="flex space-x-2 items-center">
            <input type="checkbox"  disabled defaultChecked className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            <p className="antialiased"> {children}</p>
        </div>
    );
}
function Info_text(){
    return (
        <div className="h-full md:mt-10 md:ml-20  md:w-1/3 p-4 bg-emerald-200">
            <div className="font-black text-xl antialiased mb-4">
                <p>ABOUT US</p>
            </div>
            <div className="text-lg antialiased mb-8">
                <p>IEDC CUSAT is a government-funded organization that
                    aims to promote enterpreneurship among students
                    and young professionals in india. The organization
                    was established with the goal of fostering a culture of
                    innovation and enterprenurship among the student
                    community and to provide the necesssary</p>
            </div>
            <div className="font-black text-xl antialiased mb-4">
                <p>What We Offer</p>
            </div>
            <div>
                <Check>Provides various training and resources for future enterpreneurs</Check>
                <Check>Enterprenurship-related workshops , seminars , and competitions.</Check>
                <Check> Provides incubation facilities for start-ups in CITTIC, CUSAT</Check>
                <Check>Provide opportunities for enterprenurs to connect with other like-minded individuals</Check>
            </div>
        </div>
    )
}
export default function Page(){
    return (
        <div className="flex  flex-col md:flex-row bg-emerald-200 min-h-screen ">

                <Info_text/>

            <div className="">
                <Image
                    width={1536}
                    height={1536}
                    src="/iedc-ai.jpeg"
                    alt="Hey babes"
                    className="md:mt-20  md:h-2/3 md:w-2/3 md:ml-80  border-dotted border-emerald-200 rounded-lg"
                />
            </div>

        </div>

    )
}